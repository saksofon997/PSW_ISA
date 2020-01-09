import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { PatientService } from 'src/app/services/patient.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-patient-listing',
	templateUrl: './patient-listing.component.html',
	styleUrls: ['./patient-listing.component.css']
})
export class PatientListingComponent implements OnInit {
	@ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
	patientsHeaders = ['Name', 'Surname', 'UPIN', 'E-mail', 'City'];
	patients: any;
	filteredPatients: any;
	navigationSubscription: any;

	modalData: {
		patientID: any;
		patientName: any;
		action: string;
	};
	searchForm: FormGroup;
	filterForm: FormGroup;
	submitted = false;

	constructor(private patientService: PatientService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private userService: UserService,
		private formBuilder: FormBuilder,
		private modal: NgbModal) { }

	ngOnInit() {

		this.searchForm = this.formBuilder.group({
			name: [""],
			surname: [""],
			upin: [""]
		});
		this.filterForm = this.formBuilder.group({
			name: [""],
			surname: [""],
			upin: [""]
		});
		this.getPatients();
		this.onFilterChanges();
	}

	getPatients() {
		this.patientService.getClinicPatients().subscribe(
			(data) => {
				this.patients = data;
				this.filteredPatients = data;
			},
			(error) => {
				alert(error);
			}
		)
	}

	onSearch() {
		this.submitted = true;

		var patient = {
			name: this.searchForm.controls.name.value ? this.searchForm.controls.name.value : "",
			surname: this.searchForm.controls.surname.value ? this.searchForm.controls.surname.value : "",
			upin: this.searchForm.controls.upin.value ? this.searchForm.controls.upin.value : ""
		}

		this.patientService.searchPatients(patient).subscribe(
			(data) => {
				this.patients = data;
				this.filteredPatients = data;
			},
			(error) => {
				alert(error);
			}
		)
	}

	onFilterChanges() {
		this.filterForm.valueChanges.subscribe(filters => {
			this.filteredPatients = this.filterPatients(filters);
		})
	}

	filterPatients(filters) {
		return this.patients.filter(patient =>
			patient.name.toLowerCase().indexOf(filters.name.toLowerCase()) !== -1 &&
			patient.surname.toLowerCase().indexOf(filters.surname.toLowerCase()) !== -1 &&
			patient.upin.indexOf(filters.upin) !== -1
		);
	}

	ShowMedicalRecord(patient) {
		this.patientService.checkAuthorityToViewMedicalRecord(patient.id).subscribe(
			(data) => {
				let action = "Opened";
				let patientID = patient.id;
				let patientName = patient.name + " " + patient.surname;
				this.modalData = { patientID, patientName, action };
				this.modal.open(this.modalContent, { size: 'xl' });
			},
			(error) => {
				alert(error);
			}
		);
	}
	close() {
		this.modal.dismissAll();
	}
	startAppointment(patient_id) {
		this.router.navigate([`../new_appointment/${patient_id}`], { queryParams: { time: 'now' }, relativeTo: this.activatedRoute });
	}

	ngOnDestroy() {
		if (this.navigationSubscription) {
			this.navigationSubscription.unsubscribe();
		}
	}

}
