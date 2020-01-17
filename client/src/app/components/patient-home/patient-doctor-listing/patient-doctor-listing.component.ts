import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ClinicService } from 'src/app/services/clinic.service';
import { PatientService } from 'src/app/services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-patient-doctor-listing',
  templateUrl: './patient-doctor-listing.component.html',
  styleUrls: ['./patient-doctor-listing.component.css']
})
export class PatientDoctorListingComponent implements OnInit {

	doctors: any;
	doctorHeaders = ['Name', 'Surname', 'Rating'];
	typesOfExamination: any
	doctorsFiltered: any
	
	navigationSubscription: any;
	sortingOption: any;
	form: FormGroup;
	filterForm: FormGroup;
	submitted = false;
	private sub: any;

	@ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
	modalData: {
		doctorID: any;
		doctorName: any;
		action: string;
	};

	clinicsFiltered: any

  constructor(private formBuilder: FormBuilder,
		private userService: UserService,
		private clinicService: ClinicService,
		private patientService: PatientService,
		private activatedRoute: ActivatedRoute,
		private modal: NgbModal,) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
		let clinic_id_param = +params['clinic_id'];

		let date_param = +params['date'];
		this.createFormGroups();
		//this.loadData(clinic_id_param);
		this.onFilterChanges();
		});
  	}

  	//LOADING METHODS

	createFormGroup() {
		throw new Error("Method not implemented.");
	}

	createFormGroups() {
		let date;
		date = new Date();

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
	}

	// loadData(clinic_id) {
	// 	let promise = new Promise((resolve, reject) => {
	// 		this.loadClinics().then(() => {
	// 			this.loadTypesOfExamination().then(() => {
	// 				resolve();
	// 			}, () => reject());
	// 		}, () => reject());

	// 	});
	// 	return promise;
	// }

	// loadTypesOfExamination() {
	// 	let promise = new Promise((resolve, reject) => {
	// 		this.clinicalCenterService.getTypesOfExamination().subscribe(
	// 			(data) => { this.typesOfExamination = data; resolve(); },
	// 			(error) => { alert(error); reject(); }
	// 		);
	// 	});
	// 	return promise;
	// }

	loadClinics() {
		let promise = new Promise((resolve, reject) => {
			this.patientService.getClinics().subscribe(
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
		this.sortClinics();
	}
	sortSurname() {
		this.sortingOption = "address";
		this.sortClinics();
	}

	sortRating() {
		this.sortingOption = "rating";
		this.sortClinics();
	}

	sortClinics() {
		switch(this.sortingOption) {
			case "name": {
				this.doctorsFiltered.sort((a, b) => (a.name > b.name) ? 1 : -1)
				break;
			}
			case "address": {
				this.doctorsFiltered.sort((a, b) => (a.surname > b.surname) ? 1 : -1)
				break;
			}
			case "rating": { //TODO, doctor rating
				this.doctorsFiltered.sort((a, b) => (a.id > b.id) ? 1 : -1)
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
		})
	}

	filterDoctors(filters) {
		return this.doctors.filter(doctor =>
			doctor.name.toLowerCase().indexOf(filters.name.toLowerCase()) !== -1 &&
			doctor.surname.toLowerCase().indexOf(filters.surname.toLowerCase()) !== -1
			// && doctor.rating.indexOf(filters.rating) !== -1
		);
	}

  	//OTHER METHODS

  onSearch() {

		//TESTING
		return;
		//TESTING

		this.submitted = true;

		if (this.form.invalid) {
			return;
		}

		var criteria = {
			name: this.form.controls.name.value ? this.form.controls.name.value : "",
			surname: this.form.controls.surname.value ? this.form.controls.surname.value : "",
			rating: this.form.controls.rating.value ? this.form.controls.rating.value : "",
			typeOfExamination: {id: this.form.controls.typeOfExamination.value},
			date: this.form.controls.date.value.getTime() / 1000
		}

		//SEND SEARCH REQUEST
		//fill doctors
		//fill doctorsFiltered
	}

	showDoctorInfo(doctor) {
		let action = "Opened";
		let doctorID = doctor.id;
		let doctorName = doctor.name + " " + doctor.surname;
		this.modalData = { doctorID, doctorName, action };
		this.modal.open(this.modalContent, { size: 'xl' });
	}

  close() {
		this.modal.dismissAll();
	}

	ngOnDestroy() {
		if (this.navigationSubscription) {
			this.navigationSubscription.unsubscribe();
		}
	}

}
