import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PatientService } from 'src/app/services/patient.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClinicalCenterService } from 'src/app/services/clinical-center.service';

@Component({
  selector: 'app-patient-clinic-listing',
  templateUrl: './patient-clinic-listing.component.html',
  styleUrls: ['./patient-clinic-listing.component.css']
})
export class PatientClinicListingComponent implements OnInit {

	clinics: any;
	clinicHeaders = ['Name', 'Address'];
	typesOfExamination: any
	
	navigationSubscription: any;
	sortingOption: any;
	form: FormGroup;
	filterForm: FormGroup;
	submitted = false;

	clinicsFiltered: any

	clinicsSearched: any;
	clinicsSearchedHeaders = ['Name', 'Address', 'Price'];

	notSearched = true;

	constructor(
			private patientService: PatientService,
			private router: Router,
			private activatedRoute: ActivatedRoute,
			private formBuilder: FormBuilder,
			private clinicalCenterService: ClinicalCenterService,
			private clinicService: ClinicService,
		) {   }

	ngOnInit() {
		this.createFormGroups();
		this.loadData();
	}

	//LOAD METHODS

	createFormGroups() {
		let date;
		date = new Date();

		this.form = this.formBuilder.group({
			date: [date, [Validators.required,]],
			name: [""],
			typeOfExamination: [, [Validators.required,]],
			address: [""],
		});
		this.filterForm = this.formBuilder.group({
			name: [""],
			address: [""],
			price: [""],
		});
	}

	loadData() {
		let promise = new Promise((resolve, reject) => {
			this.loadClinics().then(() => {
				this.loadTypesOfExamination().then(() => {
					resolve();
				}, () => reject());
			}, () => reject());

		});
		return promise;
	}

	loadTypesOfExamination() {
		let promise = new Promise((resolve, reject) => {
			this.clinicalCenterService.getTypesOfExamination().subscribe(
				(data) => { this.typesOfExamination = data; resolve(); },
				(error) => { alert(error); reject(); }
			);
		});
		return promise;
	}

	loadClinics() {
		let promise = new Promise((resolve, reject) => {
			this.patientService.getClinics().subscribe(
				(data) => { this.clinics = data;
							this.clinicsFiltered = data;
							this.clinicsFiltered.sort((a, b) => (a.id > b.id) ? 1 : -1); resolve(); },
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
	sortAddress() {
		this.sortingOption = "address";
		this.sortClinics();
	}

	sortPrice() {
		this.sortingOption = "price";
		this.sortClinics();
	}

	sortClinics() {
		switch(this.sortingOption) {
			case "name": {
				this.clinicsFiltered.sort((a, b) => (a.name > b.name) ? 1 : -1)
				break;
			}
			case "address": {
				this.clinicsFiltered.sort((a, b) => (a.address > b.address) ? 1 : -1)
				break;
			}
			case "price": {
				this.clinicsFiltered.sort((a, b) => (a.type.price > b.type.price) ? 1 : -1)
				break;
			}
			default: {
				this.clinicsFiltered.sort((a, b) => (a.id > b.id) ? 1 : -1)
				break;
			}
		}
	}

	onFilterChanges() {
		this.filterForm.valueChanges.subscribe(filters => {
			this.clinicsFiltered = this.filterClinics(filters);
		})
	}

	filterClinics(filters) {
		return this.clinics.filter(clinic =>
			clinic.name.toLowerCase().indexOf(filters.name.toLowerCase()) !== -1 &&
			clinic.address.toLowerCase().indexOf(filters.address.toLowerCase()) !== -1 &&
			clinic.price.indexOf(filters.price) !== -1
		);
	}

	onSearch() {
		this.submitted = true;

		if (this.form.invalid) {
			return;
		}

		var criteria = {
			name: this.form.controls.name.value ? this.form.controls.name.value : "",
			address: this.form.controls.address.value ? this.form.controls.address.value : "",
			typeOfExamination: {id: this.form.controls.typeOfExamination.value},
			date: this.form.controls.date.value.getTime() / 1000
		}

		//SEND SEARCH REQUEST
		//fill clinicsSearched with new DTO
		//fill clinicsFiltered
	}

	ngOnDestroy() {
		if (this.navigationSubscription) {
			this.navigationSubscription.unsubscribe();
		}
	}
}
