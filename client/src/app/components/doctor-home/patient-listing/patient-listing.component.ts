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
	patientsHeaders = ['Name', 'Surname', 'Phone Number', 'E-mail', 'City'];
	patients: any;
	navigationSubscription: any;

	modalData: {
		patientID: any;
		patientName: any;
		action: string;
	  };
	searchForm: FormGroup;
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
			surname: [""]
		});
		this.getPatients();
	}

	getPatients() {
		this.patientService.getClinicPatients().subscribe(
			(data) => {
				this.patients = data;
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
			surname: this.searchForm.controls.surname.value ? this.searchForm.controls.surname.value : ""
		}

		this.patientService.searchPatients(patient).subscribe(
			(data) => {
				this.patients = data;
			},
			(error) => {
				alert(error);
			}
		)
	}

	ShowMedicalRecord(patient){
		//TODO
		let action = "Opened";
		let patientID = patient.id;
		let patientName = patient.name + " " + patient.surname;
		this.modalData = {patientID,patientName, action };
		this.modal.open(this.modalContent, { size: 'xl' });
	
	}
	close(){
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
