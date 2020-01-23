import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ClinicService } from 'src/app/services/clinic.service';
import { PatientService } from 'src/app/services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-patient-doctor-listing',
  templateUrl: './patient-doctor-listing.component.html',
  styleUrls: ['./patient-doctor-listing.component.css']
})
export class PatientDoctorListingComponent implements OnInit {

	doctors: any;
	doctorHeaders = ['Name', 'Surname', 'Rating'];
	availibleApptHeaders = ['From', 'To'];
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
	notSearched = true;

	@ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
	modalData: {
		doctorID: any;
		doctorName: any;
		doctorSurname: any;
		doctorEmail: any;
		doctorPhone: any;
		doctorShiftStart: any;
		doctorShiftEnd: any;
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

		this.loadData(this.clinic_id_param);

		this.createFormGroups();

		this.onFilterChanges();
  	}

  	//LOADING METHODS

	createFormGroups() {
		let date = new Date();

		if(this.date_param)
			date = new Date(this.date_param);

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
			this.onSearch();
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
			&& (Math.ceil(doctor.numberOfStars/doctor.numberOfReviews)).toString().indexOf(filters.rating) !== -1
		);
	}

  	//OTHER METHODS

    onSearch() {

		this.submitted = true;

		if (this.form.invalid) {
			return;
		}

		var criteria = {
			clinic_id: this.clinic_id_param,
			name: this.form.controls.name.value ? this.form.controls.name.value : "",
			surname: this.form.controls.surname.value ? this.form.controls.surname.value : "",
			rating: this.form.controls.rating.value ? this.form.controls.rating.value : "",
			typeOfExamination: this.form.controls.typeOfExamination.value,
			date: this.form.controls.date.value.getTime()
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
		let doctorID = Math.floor(doctor.numberOfStars/doctor.numberOfReviews);
		let doctorName = doctor.name;
		let doctorSurname = doctor.surname
		let doctorEmail = doctor.email;
		let doctorPhone = doctor.phoneNumber;
		let doctorShiftStart = doctor.shiftStart;
		let doctorShiftEnd = doctor.shiftEnd;
		this.modalData = { doctorID, doctorName, doctorSurname, doctorEmail, doctorPhone, doctorShiftStart, doctorShiftEnd, action };
		this.modal.open(this.modalContent, { size: 'xl' });

		//show availible appointments
	}

  close() {
		this.modal.dismissAll();
	}

	ngOnDestroy() {
	}

}
