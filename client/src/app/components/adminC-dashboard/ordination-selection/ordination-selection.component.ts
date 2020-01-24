import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-ordination-selection',
	templateUrl: './ordination-selection.component.html',
	styleUrls: ['./ordination-selection.component.css']
})
export class OrdinationSelectionComponent implements OnInit {
	@ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
	modalData: any;
	selectedTimeslots = [];

	appointment: any;
	ordinationsHeaders = ['Name', 'Number', 'Status'];
	timeslotsHeaders = ['From', 'To'];
	ordinations: any;
	filteredOrdinations: any;
	navigationSubscription: any;
	clinicID: any;
	clinicName: any;

	searchForm: FormGroup;
	filterForm: FormGroup;
	submitted = false;

	constructor(private clinicService: ClinicService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private userService: UserService,
		private formBuilder: FormBuilder,
		private modal: NgbModal
	) {
		this.navigationSubscription = this.router.events.subscribe((e: any) => {
			if (e instanceof NavigationEnd) {
				this.clinicID = this.userService.getUser().clinic_id;
				//this.getOrdinations();
				this.appointment = history.state.data;
				let startTime = new Date(this.appointment.startingDateAndTime * 1000);
				this.appointment.startTimeString = ("0" + startTime.getHours()).slice(-2) + ":" + ("0" + startTime.getMinutes()).slice(-2);
				if (this.appointment.endingDateAndTime) {
					let endTime = new Date(this.appointment.endingDateAndTime * 1000);
					this.appointment.endTimeString = ("0" + endTime.getHours()).slice(-2) + ":" + ("0" + endTime.getMinutes()).slice(-2);
				}
				// this.activatedRoute.params.subscribe((params) => {
				// 	this.clinicID = params.id;
				// 	this.clinicName = params.name;
				// });
		
				let date: any = "";
				if (this.appointment) {
					date = new Date(this.appointment.startingDateAndTime * 1000);
					date.setHours(0, 0, 0, 0);
				}
		
				this.searchForm = this.formBuilder.group({
					name: [""],
					number: [""],
					date: [date, [Validators.required]]
				});
				this.filterForm = this.formBuilder.group({
					name: [""],
					number: [""]
				});
				this.onFilterChanges();
		
				if (this.appointment) {
					this.onSearch();
				}
			}
		});
	}

	ngOnInit() {
		
	}

	getOrdinations() {
		this.clinicID = this.userService.getUser().clinic_id;
		this.clinicService.getOrdinations(this.clinicID).subscribe(
			(data) => {
				this.ordinations = data;
				this.filteredOrdinations = data;
			},
			(error) => {
				alert(error);
			}
		)
	}

	onSearch() {
		this.submitted = true;

		if (this.searchForm.invalid) {
			return;
		}

		var ordination = {
			name: this.searchForm.controls.name.value ? this.searchForm.controls.name.value : "",
			number: this.searchForm.controls.number.value ? this.searchForm.controls.number.value : "",
			date: this.searchForm.controls.date.value ? this.searchForm.controls.date.value.getTime() / 1000 : "",
			clinic_id: this.userService.getUser().clinic_id
		}

		this.clinicService.searchOrdinationsWithDate(ordination).subscribe(
			(data) => {
				this.ordinations = data;
				for (let i = 0; i < this.ordinations.length; i++) {
					let ordination = this.ordinations[i];
					for (let j = 0; j < ordination.availablePeriods.length; j++) {

						let startTime = new Date(ordination.availablePeriods[j].split(':')[0] * 1000);
						let endTime = new Date(ordination.availablePeriods[j].split(':')[1] * 1000);

						this.ordinations[i].availablePeriods[j] = ("0" + startTime.getHours()).slice(-2) + ":" + ("0" + startTime.getMinutes()).slice(-2) + " - " + ("0" + endTime.getHours()).slice(-2) + ":" + ("0" + endTime.getMinutes()).slice(-2);
					}
					if (!ordination.available) {
						this.ordinations[i].firstAvailableDate = this.timeConverter(ordination.firstAvailableDateTimestamp);
					}
				}
				this.ordinations.sort((x, y) => (x === y) ? 0 : x ? -1 : 1);
				this.filteredOrdinations = this.ordinations;

			},
			(error) => {
				alert(error);
			}
		)
	}

	onFilterChanges() {
		this.filterForm.valueChanges.subscribe(filters => {
			this.filteredOrdinations = this.filterOrdinations(filters);
		})
	}

	filterOrdinations(filters) {
		return this.ordinations.filter(ordination =>
			ordination.name.toLowerCase().indexOf(filters.name.toLowerCase()) !== -1 &&
			ordination.number.toString().indexOf(filters.number.toLowerCase()) !== -1
		);
	}

	showAvailableTimeslots(ordination) {
		let action = "Opened";
		let appointment = this.appointment;
		let ordinationData = ordination;

		ordinationData.filteredPeriods = [];
		let doctor = appointment.doctors[0];
		if (doctor.shiftStart.split(':')[0] > doctor.shiftEnd.split(':')[0]) {
			doctor.shiftStart = '00:00';
		}
		if (doctor.shiftEnd.split(':')[0] < doctor.shiftStart.split(':')[0]) {
			doctor.shiftEnd = '24:00';
		}
		let lastPeriod = ordinationData.availablePeriods[ordinationData.availablePeriods.length-1];
		if (lastPeriod.split(' - ')[1].split(':')[0] === '00'){
			ordinationData.availablePeriods[ordinationData.availablePeriods.length-1] = lastPeriod.split(' - ')[0] + " - 24:00";
		}

		let i = 0;
		for (let period of ordination.availablePeriods) {
			if (this.periodIsInsideDoctorShift(period, doctor.shiftStart, doctor.shiftEnd)) {
				ordinationData.filteredPeriods.push(period);
				if (this.appointment.endTimeString && this.isPeriodInsideChosenTime(period))
					this.selectedTimeslots.push({ period, index: i });
				i++
			}
		}

		this.modalData = { appointment, ordinationData, action };
		this.modal.open(this.modalContent, { size: 'lg' });
	}
 
	periodIsInsideDoctorShift(period, shiftStart, shiftEnd) {
		let shiftStartHour = shiftStart.split(':')[0];
		let shiftStartMinute = shiftStart.split(':')[1];

		let shiftEndHour = shiftEnd.split(':')[0];
		let shiftEndMinute = shiftEnd.split(':')[1];

		let periodStart = period.split(' - ')[0];
		let periodStartHour = periodStart.split(':')[0];
		let periodStartMinute = periodStart.split(':')[1];

		let periodEnd = period.split(' - ')[1];
		let periodEndHour = periodEnd.split(':')[0];
		let periodEndMinute = periodEnd.split(':')[1];

		if (periodStartHour >= shiftStartHour && periodStartHour <= shiftEndHour
			&& periodEndHour >= shiftStartHour && periodEndHour <= shiftEndHour) {
			if (periodStartHour == shiftStartHour && periodStartMinute < shiftStartMinute) {
				return false;
			}
			if (periodEndHour == shiftEndHour && periodEndMinute > shiftEndMinute) {
				return false;
			}
			return true;
		} else {
			return false;
		}
	}

	isPeriodInsideChosenTime(period){
		let selectedStartHour = this.appointment.startTimeString.split(':')[0];
		let selectedStartMinute = this.appointment.startTimeString.split(':')[1];

		let selectedEndHour = this.appointment.endTimeString.split(':')[0];
		let selectedEndMinute = this.appointment.endTimeString.split(':')[1];

		let periodStart = period.split(' - ')[0];
		let periodStartHour = periodStart.split(':')[0];
		let periodStartMinute = periodStart.split(':')[1];

		let periodEnd = period.split(' - ')[1];
		let periodEndHour = periodEnd.split(':')[0];
		let periodEndMinute = periodEnd.split(':')[1];

		if (periodStartHour >= selectedStartHour && periodStartHour <= selectedEndHour
			&& periodEndHour >= selectedStartHour && periodEndHour <= selectedEndHour) {
			if (periodStartHour == selectedStartHour && periodStartMinute < selectedStartMinute) {
				return false;
			}
			if (periodEndHour == selectedEndHour && periodEndMinute > selectedEndMinute) {
				return false;
			}
			return true;
		} else {
			return false;
		}
	}

	selectTimeslot(period, i) {
		if (this.selectedTimeslots.length !== 0) {
			if (this.selectedTimeslots[0].index === i + 1) {
				this.selectedTimeslots.unshift({ period, index: i });
			} else if (this.selectedTimeslots[this.selectedTimeslots.length - 1].index === i - 1) {
				this.selectedTimeslots.push({ period, index: i });
			}
			console.log(this.selectedTimeslots);
		} else {
			this.selectedTimeslots.push({ period, index: i });
			console.log(this.selectedTimeslots);

		}
	}

	deselectTimeslot(index) {
		if (this.selectedTimeslots[0].index === index) {
			this.selectedTimeslots.splice(0, 1);
		} else if (this.selectedTimeslots[this.selectedTimeslots.length - 1].index === index) {
			this.selectedTimeslots.splice(this.selectedTimeslots.length - 1, 1);
		}
	}

	getAlreadySelected(index) {
		return this.selectedTimeslots.filter(slot => (slot.index === index)).length !== 0;
	}

	timeConverter(a) {
		a = new Date(a * 1000)
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var time = date + '. ' + month + ' ' + year + '.';
		return time;
	}

	closeModal(){
		this.selectedTimeslots = [];
	}

	ngOnDestroy() {
		if (this.navigationSubscription) {
			this.navigationSubscription.unsubscribe();
		}
	}
}
