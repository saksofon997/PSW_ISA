import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nurse-patient-listing',
  templateUrl: './nurse-patient-listing.component.html',
  styleUrls: ['./nurse-patient-listing.component.css']
})
export class NursePatientListingComponent implements OnInit {
  sortingOption: any;
  patientsHeaders = ['Name', 'Surname', 'Phone Number', 'E-mail', 'City'];
  patients: any;
  navigationSubscription: any;
  
  searchForm: FormGroup;
  submitted = false;
  
  constructor(private patientService: PatientService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private userService: UserService,
		private formBuilder: FormBuilder) { }

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
  
  onSearch(){
		this.submitted = true;

		var patient = {
			name: this.searchForm.controls.name.value ? this.searchForm.controls.name.value: "",
			surname: this.searchForm.controls.surname.value ? this.searchForm.controls.surname.value: ""
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
  
  ShowMedicalRecord(){
    //TODO
  }
  sortName() {
    this.sortingOption = "name";
    this.sortPatients();
  }
  sortUpin() {
    this.sortingOption = "upin";
    this.sortPatients();
  }
  sortAddress() {
    this.sortingOption = "address";
    this.sortPatients();
  }
  sortCity() {
    this.sortingOption = "city";
    this.sortPatients();
  }
  sortState() {
    this.sortingOption = "state";
    this.sortPatients();
  }

  sortPatients() {
		switch(this.sortingOption) {
			case "name": {
				this.patients.sort((a, b) => (a.name > b.name) ? 1 : -1)
				break;
			}
			case "address": {
				this.patients.sort((a, b) => (a.address > b.address) ? 1 : -1)
				break;
			}
			case "city": {
				this.patients.sort((a, b) => (a.city > b.city) ? 1 : -1)
				break;
			}
			case "state": {
				this.patients.sort((a, b) => (a.state > b.state) ? 1 : -1)
				break;
			}
			case "upin": {
				this.patients.sort((a, b) => (a.upin > b.upin) ? 1 : -1)
				break;
			}
			default: {
				this.patients.sort((a, b) => (a.id > b.id) ? 1 : -1)
				break;
			}
		}
	}
  ngOnDestroy() {
		if (this.navigationSubscription) {
			this.navigationSubscription.unsubscribe();
		}
	}

}
