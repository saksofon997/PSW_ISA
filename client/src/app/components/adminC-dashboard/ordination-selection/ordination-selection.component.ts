import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { element } from 'protractor';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
	selector: 'app-ordination-selection',
	templateUrl: './ordination-selection.component.html',
	styleUrls: ['./ordination-selection.component.css']
})
export class OrdinationSelectionComponent implements OnInit {
	@ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
	modalData: any;
	selectedTimeslots = [];
	date: any;

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

	clinicDoctors: any;
	optionsDoctors: any;
	selectedDoctor: any;
	optionsAttendingDoctors: any;
	selectedAttendingDoctors: any;
	tempDoctors:any;
	config2 = {
		displayKey:"fullname", //if objects array passed which key to be displayed defaults to description
		search:true, //true/false for the search functionlity defaults to false,
		height: '8em', //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
		placeholder:'Doctor not selected', // text to be displayed when no item is selected defaults to Select,
		customComparator: ()=>{},// a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
		limitTo: 10, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
		moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
		noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
		searchPlaceholder:'Search doctors', // label thats displayed in search input,
		searchOnKey: '', // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
		clearOnSelection: false, // clears search criteria when an option is selected if set to true, default is false
		}

	constructor(private clinicService: ClinicService,
		private router: Router,
		private appointmentService: AppointmentService,
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

				this.clinicService.getDoctors(this.clinicID).subscribe(
					(data) => {
						this.clinicDoctors = data;
						this.optionsDoctors = data;
						for (let doc of this.optionsDoctors){
							doc.fullname = doc.name + " " + doc.surname;
						}
						this.optionsAttendingDoctors = data;
						for (let doc of this.optionsAttendingDoctors){
							doc.fullname = doc.name + " " + doc.surname;
						}
						this.optionsAttendingDoctors = this.optionsAttendingDoctors.filter(obj => obj.id !== this.appointment.doctors[0].id);
					},
					(error) => {
						alert(error);
					}
				);
		
				this.date = "";
				this.date = new Date(this.appointment.startingDateAndTime * 1000);
				this.date.setHours(0, 0, 0, 0);
				
		
				this.searchForm = this.formBuilder.group({
					name: [""],
					number: [""],
					date: [this.date, [Validators.required]]
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

		this.setFilteredTimeslots(ordinationData, appointment);

		this.selectedDoctor = appointment.doctors[0];
		this.selectedDoctor.fullname = this.selectedDoctor.name + " " + this.selectedDoctor.surname;
		this.selectedAttendingDoctors = [];
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
		} else {
			this.selectedTimeslots.push({ period, index: i });
		}
		this.modalData.appointment.startTimeString = this.selectedTimeslots[0].period.split(' - ')[0];
		this.modalData.appointment.endTimeString = this.selectedTimeslots[this.selectedTimeslots.length - 1].period.split(' - ')[1];
	}

	deselectTimeslot(index) {
		if (this.selectedTimeslots[0].index === index) {
			this.selectedTimeslots.splice(0, 1);
		} else if (this.selectedTimeslots[this.selectedTimeslots.length - 1].index === index) {
			this.selectedTimeslots.splice(this.selectedTimeslots.length - 1, 1);
		}
		if (this.selectedTimeslots.length !== 0){
			this.modalData.appointment.startTimeString = this.selectedTimeslots[0].period.split(' - ')[0];
			this.modalData.appointment.endTimeString = this.selectedTimeslots[this.selectedTimeslots.length - 1].period.split(' - ')[1];
		} else {
			this.modalData.appointment.startTimeString = '';
			this.modalData.appointment.endTimeString = '';
		}
		
	}

	getAlreadySelected(index) {
		return this.selectedTimeslots.filter(slot => (slot.index === index)).length !== 0;
	}

	removeDoctor(doctor){
		this.modalData.appointment.doctors = this.modalData.appointment.doctors.filter(obj => obj.id !== doctor.id);
		this.optionsDoctors = this.clinicDoctors;
		this.modalData.appointment.doctors.forEach(element => {
			this.optionsDoctors = this.optionsDoctors.filter(obj => obj.id !== element.id);
		});
	}

	selectionChangedDoctor(event){
		if (event.value){
			this.modalData.appointment.doctors[0] = event.value;
			this.optionsDoctors = this.optionsDoctors.filter(obj => obj.id !== this.modalData.appointment.doctors[0].id);
			this.optionsAttendingDoctors = this.clinicDoctors.filter(obj => obj.id !== this.modalData.appointment.doctors[0].id);
			this.selectedAttendingDoctors.splice(0, this.selectedAttendingDoctors.length);
		} else {
			this.modalData.appointment.doctors[0] = "";
			this.optionsDoctors = this.clinicDoctors;
			this.selectedAttendingDoctors.splice(0, this.selectedAttendingDoctors.length);
		}

		this.setFilteredTimeslots(this.modalData.ordinationData, this.modalData.appointment);
	}

	setFilteredTimeslots(ordinationData, appointment){
		ordinationData.filteredPeriods = [];
		this.selectedTimeslots = [];
		let doctor = appointment.doctors[0];
		if (doctor){
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
			for (let period of ordinationData.availablePeriods) {
				if (this.periodIsInsideDoctorShift(period, doctor.shiftStart, doctor.shiftEnd)) {
					ordinationData.filteredPeriods.push(period);
					if (this.appointment.endTimeString && this.isPeriodInsideChosenTime(period))
						this.selectedTimeslots.push({ period, index: i });
					i++
				}
			}
		}
	}

	selectionChangedAttendingDoctor(event){
		this.modalData.appointment.doctors.splice(1, this.modalData.appointment.doctors.length-1);
		this.modalData.appointment.doctors.push(...this.selectedAttendingDoctors);
	}

	createAppointment(){
		if (!this.modalData) {
			alert("Invalid data");
			return;
		}
		let appointment = this.modalData.appointment;

		if (appointment.startTimeString === '' || appointment.endTimeString === ''){
			alert("Please choose time of appointment");
			return;
		}
		if (appointment.doctors.length === 0){
			alert("Please choose a doctor");
			return;
		}
		if (!this.modalData.ordinationData){
			alert("Please choose ordination");
			return;
		}

		let midnightTimestamp = this.searchForm.controls.date.value.getTime() / 1000;

		appointment.startingDateAndTime = midnightTimestamp + appointment.startTimeString.split(":")[0] * 60 * 60 + appointment.startTimeString.split(":")[1] * 60;
		appointment.endingDateAndTime = midnightTimestamp + appointment.endTimeString.split(":")[0] * 60 * 60 + appointment.endTimeString.split(":")[1] * 60;
		appointment.duration = (appointment.endingDateAndTime - appointment.startingDateAndTime) * 1000;
		appointment.ordination = { id: this.modalData.ordinationData.id};

		this.appointmentService.approveAppointmentRequest(appointment).subscribe(
			(data) => {
				alert("Appointment succesfully created");
				this.modal.dismissAll();
				this.router.navigate([`../appointment_requests`], {  relativeTo: this.activatedRoute });
			},
			(error) => {
				alert(error);
			}
		)
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
