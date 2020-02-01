import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ClinicService } from 'src/app/services/clinic.service';
import { PatientService } from 'src/app/services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DoctorService } from 'src/app/services/doctor.service';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-patient-doctor-listing',
  templateUrl: './patient-doctor-listing.component.html',
  styleUrls: ['./patient-doctor-listing.component.css']
})
export class PatientDoctorListingComponent implements OnInit {

	doctors: any;
	doctorHeaders = ['Name', 'Surname', 'Rating'];

	availibleApptHeaders = ['From'];
	availability: any;

	typesOfExamination: any;
	doctorsFiltered: any;

	clinic_id_param: any;
	TOE_param: number;
	date_param: any;
	
	navigationSubscription: any;
	sortingOption: any;
	form: FormGroup;
	filterForm: FormGroup;
	submitted = false;
	private sub: any;

	starRatingFilter = 0;
	starRatingSearch = 0;
	notSearched = true;

	@ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
	modalData: {
		clinicID: any;
		doctorID: any;
		doctorName: any;
		doctorSurname: any;
		doctorEmail: any;
		doctorPhone: any;
		doctorShiftStart: any;
		doctorShiftEnd: any;
		availableTimes: any;
		available: any;
		rating: any;
		action: string;
	};

	clinicsFiltered: any

  constructor(private formBuilder: FormBuilder,
		private userService: UserService,
		private clinicService: ClinicService,
		private doctorService: DoctorService,
		private activatedRoute: ActivatedRoute,
		private modal: NgbModal,) { }

  ngOnInit() {
		this.sub = this.activatedRoute.params.subscribe(params => {
			this.clinic_id_param = +params['clinic_id'];
			});

		this.activatedRoute.queryParams.subscribe(params => {
			this.TOE_param = +params['TOE'];
			this.date_param = +params['date'];
		});

		if(!this.clinic_id_param)
			alert("ERROR, NO CLINIC ID!");

		this.loadData(this.clinic_id_param).then(() => {

		this.createFormGroups();

		this.onFilterChanges();

		if(this.TOE_param) {
			this.onSearch();
		}
		}, () => alert("Error loading data"))
  	}

  	//LOADING METHODS

	createFormGroups() {
		let date = new Date();

		if(this.date_param) {
			date = new Date(this.date_param);
		}

		this.form = this.formBuilder.group({
			date: [date, [Validators.required,]],
			name: [""],
			typeOfExamination: [, [Validators.required,]],
			surname: [""],
			rating: [""],
		});
		this.filterForm = this.formBuilder.group({
			name: [""],
			surname: [""],
			rating: [""],
		});

		if(this.TOE_param) {
			this.form.controls['typeOfExamination'].setValue(this.TOE_param);
		}
	}

	loadData(clinic_id) {
		let promise = new Promise((resolve, reject) => {
			this.loadDoctors().then(() => {
				this.loadTypesOfExamination().then(() => {
					resolve();
				}, () => reject());
			}, () => reject());

		});
		return promise;
	}

	loadTypesOfExamination() {
		let promise = new Promise((resolve, reject) => {
		let clinic_id = this.clinic_id_param;
			this.clinicService.getTypesOfExamination(clinic_id).subscribe(
				(data) => { this.typesOfExamination = data; resolve(); },
				(error) => { alert(error); reject(); }
			);
		});
		return promise;
	}

	loadDoctors() {
		let promise = new Promise((resolve, reject) => {
			let clinic_id = this.clinic_id_param;
			this.clinicService.getDoctors(clinic_id).subscribe(
				(data) => { this.doctors = data;
							this.doctorsFiltered = data;
							this.doctorsFiltered.sort((a, b) => (a.id > b.id) ? 1 : -1); resolve(); },
				(error) => { alert(error); reject(); }
			);
		});
		return promise;
	}

	//LISTING METHODS

	sortName() {
		this.sortingOption = "name";
		this.sortDoctors();
	}
	sortSurname() {
		this.sortingOption = "address";
		this.sortDoctors();
	}

	sortRating() {
		this.sortingOption = "rating";
		this.sortDoctors();
	}

	sortDoctors() {
		switch(this.sortingOption) {
			case "name": {
				this.doctorsFiltered.sort((a, b) => (a.name > b.name) ? 1 : -1)
				break;
			}
			case "address": {
				this.doctorsFiltered.sort((a, b) => (a.surname > b.surname) ? 1 : -1)
				break;
			}
			case "rating": {
				this.doctorsFiltered.sort((a, b) => ((a.numberOfStars/a.numberOfReviews) > (b.numberOfStars/b.numberOfReviews)) ? 1 : -1)
				break;
			}
			default: {
				this.doctorsFiltered.sort((a, b) => (a.id > b.id) ? 1 : -1)
				break;
			}
		}
	}
	  
	onFilterChanges() {
		this.filterForm.valueChanges.subscribe(filters => {
			this.doctorsFiltered = this.filterDoctors(filters);
		});
	}

	filterDoctors(filters) {
		return this.doctors.filter(doctor =>
			doctor.name.toLowerCase().indexOf(filters.name.toLowerCase()) !== -1 &&
			doctor.surname.toLowerCase().indexOf(filters.surname.toLowerCase()) !== -1
			&& (doctor.numberOfStars/doctor.numberOfReviews) >= this.starRatingFilter
		);
	}

	//OTHER METHODS
	  
	onRateSearch($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
		this.starRatingSearch = $event.newValue;
	}

	onRateFilter($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
		this.starRatingFilter = $event.newValue;
		this.filterForm.controls.rating.setValue(this.starRatingFilter); 
	}

    onSearch() {

		this.submitted = true;

		if (this.form.invalid) {
			return;
		}

		var criteria = {
			clinic_id: this.clinic_id_param,
			name: this.form.controls.name.value ? this.form.controls.name.value : "",
			surname: this.form.controls.surname.value ? this.form.controls.surname.value : "",
			rating: this.starRatingSearch ? this.starRatingSearch : -1,
			typeOfExamination: this.form.controls.typeOfExamination.value ? this.form.controls.typeOfExamination.value : -1,
			date: this.form.controls.date.value.getTime().toString().substr(0, 10)
		}

		this.searchDoctors(criteria).then(() => {
			this.notSearched = false;
		}, () => alert("Error searching doctors"))
	}

	searchDoctors(criteria: any) {
		let promise = new Promise((resolve, reject) => {
			this.doctorService.searchDoctors(criteria).subscribe(
				(data) => {
					this.doctors = data;
					this.doctorsFiltered = data;
					resolve();
				},
				(error) => {
					alert(error);
					reject();
				}
			);
		});
		return promise;
	}

	showDoctorInfo(doctor) {

		let action = "Opened";
		let clinicID = this.clinic_id_param;
		let doctorID = doctor.id;
		let doctorName = doctor.name;
		let doctorSurname = doctor.surname
		let doctorEmail = doctor.email;
		let doctorPhone = doctor.phoneNumber;
		let doctorShiftStart = doctor.shiftStart;
		let doctorShiftEnd = doctor.shiftEnd;
		let rating = doctor.numberOfStars / doctor.numberOfReviews;
		let availableTimes: string[];
		availableTimes = ["0","0"];
		let available = false;

		let date_param = this.form.controls.date.value.getTime().toString().substr(0, 10);

		this.getAvailableTimes(doctor.id, date_param).then(() => {
			
			if(this.availability.available) {
				for (let i = 0; i < this.availability.availableTimes.length; i++) {
					availableTimes[i] = this.timeConverter(this.availability.availableTimes[i]);
				}
				available = true;
			}

			this.modalData = { clinicID, doctorID, doctorName, doctorSurname, doctorEmail, doctorPhone, doctorShiftStart, doctorShiftEnd, availableTimes, available, rating, action };
			this.modal.open(this.modalContent, { size: 'xl' });

		}, () => alert("Error getting availability"))
	}

	getAvailableTimes(id: any, date: any) {
		let promise = new Promise((resolve, reject) => {
			this.doctorService.getAvailability(id, date).subscribe(
				(data) => {
					this.availability = data;
					resolve();
				},
				(error) => {
					console.log(error);
					reject();
				}
			);
		});
		return promise;
	}

	timeConverter(a) {
		a = new Date(a * 1000)
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var hour = a.getHours();
		var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
		var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
		var time = hour + ':' + min;
		return time;
	}

  close() {
		this.modal.dismissAll();
	}

	ngOnDestroy() {
	}

}
