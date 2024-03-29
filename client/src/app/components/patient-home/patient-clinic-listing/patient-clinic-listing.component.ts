import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PatientService } from 'src/app/services/patient.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClinicalCenterService } from 'src/app/services/clinical-center.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { resolve } from 'url';
import { StarRatingComponent } from 'ng-starrating';

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
	starRatingSearch = 0;
	min: any;

	@ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
	modalData: {
		clinicID: any;
		clinicName: any;
		clinicAddress: any;
		clinicCity: any;
		clinicState: any;
		clinicDescription: any;
		location: Number[];
		rating: any;
		action: string;
	};

	clinicsFiltered: any

	locationModal: any;

	clinicsSearched: any;
	clinicsSearchedHeaders = ['Name', 'Address', 'Rating', 'Price'];

	notSearched = true;

	constructor(
			private patientService: PatientService,
			private router: Router,
			private activatedRoute: ActivatedRoute,
			private formBuilder: FormBuilder,
			private clinicalCenterService: ClinicalCenterService,
			private clinicService: ClinicService,
			private modal: NgbModal,
		) {   }

	ngOnInit() {
		this.notSearched = true;
		this.min = new Date();
		this.min.setHours(0, 0, 0, 0);

		this.loadData();

		this.createFormGroups();

		this.onFilterChanges();
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
			rating: [""],
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
	sortCity() {
		this.sortingOption = "city";
		this.sortClinics();
	}
	sortPrice() {
		this.sortingOption = "price";
		this.sortClinics();
	}
	sortRating() {
		this.sortingOption = "rating";
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
			case "city": {
				this.clinicsFiltered.sort((a, b) => (a.city > b.city) ? 1 : -1)
				break;
			}
			case "price": {
				this.clinicsFiltered.sort((a, b) => (a.typeOfExamination.price > b.typeOfExamination.price) ? 1 : -1)
				break;
			}
			case "rating": {
				this.clinicsFiltered.sort((a, b) => ((a.numberOfStars / a.numberOfReviews) < (b.numberOfStars / b.numberOfReviews)) ? 1 : -1)
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
		return this.clinicsSearched.filter(clinic =>
			clinic.name.toLowerCase().indexOf(filters.name.toLowerCase()) !== -1 &&
			clinic.address.toLowerCase().indexOf(filters.address.toLowerCase()) !== -1
			&& clinic.typeOfExamination.price.toString().indexOf(filters.price) !== -1
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
			typeOfExamination: this.form.controls.typeOfExamination.value,
			rating: this.starRatingSearch ? this.starRatingSearch : -1,
			date: this.form.controls.date.value.getTime().toString().substr(0, 10)
		}

		this.searchClinics(criteria).then(() => {
			this.notSearched = false;
		}, () => alert("Error searching clinics"))

	}

	searchClinics(criteria: any) {
		let promise = new Promise((resolve, reject) => {
			this.clinicService.searchClinics(criteria).subscribe(
				(data) => {
					this.clinicsSearched = data;
					this.clinicsFiltered = data;
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

	//OTHER FUNCTIONS

	onRateSearch($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
		this.starRatingSearch = $event.newValue;
	}

	showClinicInfo(clinic) {
		let action = "Opened";
		let clinicID = clinic.id;
		let clinicName = clinic.name;
		let clinicAddress = clinic.address;
		let clinicCity = clinic.city;
		let clinicState = clinic.state;
		let clinicDescription = clinic.description;
		let rating = clinic.numberOfStars / clinic.numberOfReviews;

		this.loadClinicLocation(clinicAddress, clinicCity, clinicState).then(() => {
			let chars: string;
			chars = this.locationModal.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
			let res = chars.split(' ');
			let location : Number[];
			location = [0, 0];
			location[0] = Number(res[1]);
			location[1] = Number(res[0]);
			this.modalData = { clinicID, clinicName, clinicAddress, clinicCity, clinicState, clinicDescription, location, rating, action };
			this.modal.open(this.modalContent, { size: 'xl' });
		}, () => alert("Error loading data"))
	}

	loadClinicLocation(clinicAddress, clinicCity, clinicState){
		let promise = new Promise((resolve, reject) => {
			this.clinicService.getClinicLocation(clinicAddress, clinicCity, clinicState).subscribe(
				(data) => { this.locationModal = data; resolve();},
				(error) => { alert(error); reject(); }
			);
		});
		return promise;
	}

	showDoctors(clinic) {
		let clinic_id = clinic.id;
		let dateP = this.form.controls.date.value.getTime().toString().substr(0, 13);
		let TOEP = this.form.controls.typeOfExamination.value ? this.form.controls.typeOfExamination.value : -1;
		if (this.router.url.indexOf('clinics') === -1){
			this.router.navigate([`doctors/${clinic_id}`], { queryParams: { TOE: TOEP, date: dateP }, relativeTo: this.activatedRoute });
		} else {
			this.router.navigate([`../doctors/${clinic_id}`], { queryParams: { TOE: TOEP, date: dateP }, relativeTo: this.activatedRoute });
		}
	}

	showClinicsDoctors(clinic) {
		let clinic_id = clinic.id;

		if (this.router.url.indexOf('clinics') === -1){
			this.router.navigate([`doctors/${clinic_id}`], {  relativeTo: this.activatedRoute });
		} else {
			this.router.navigate([`../doctors/${clinic_id}`], {  relativeTo: this.activatedRoute });
		}
	}

	showAvailableAppointments(clinic_id) {
		if (this.router.url.indexOf('clinics') === -1){
			this.router.navigate([`available_appointments/${clinic_id}`], {  relativeTo: this.activatedRoute });
		} else {
			this.router.navigate([`../available_appointments/${clinic_id}`], {  relativeTo: this.activatedRoute });
		}
	}

	close() {
		this.modal.dismissAll();
	}

	ngOnDestroy() {
		this.modal.dismissAll();
	}
}
