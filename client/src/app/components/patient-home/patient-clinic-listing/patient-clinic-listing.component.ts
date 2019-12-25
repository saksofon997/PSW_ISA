import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-clinic-listing',
  templateUrl: './patient-clinic-listing.component.html',
  styleUrls: ['./patient-clinic-listing.component.css']
})
export class PatientClinicListingComponent implements OnInit {

  clinics: any;
  clinicHeaders = ['Name', 'Address', 'City', 'State', 'Description'];
  navigationSubscription: any;
  sortingOption: any;

  constructor(
    private patientService: PatientService,
		private router: Router,
		private activatedRoute: ActivatedRoute
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
			if (e instanceof NavigationEnd) {
				this.getClinics();
			}
		});
   }

  ngOnInit() {
  }

  getClinics() {
		this.patientService.getClinics().subscribe((data) => {
      this.clinics = data;
			this.clinics.sort((a, b) => (a.id > b.id) ? 1 : -1)
		});
  }

  showClinicDoctors(clinic: any) {
	  let clinicID = clinic.id;
		this.router.navigate(['../doctor_listing'], { relativeTo: this.activatedRoute, state: {data: clinicID}} );
	}

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
  sortState() {
    this.sortingOption = "state";
    this.sortClinics();
  }

  sortClinics() {
		switch(this.sortingOption) {
			case "name": {
				this.clinics.sort((a, b) => (a.name > b.name) ? 1 : -1)
				break;
			}
			case "address": {
				this.clinics.sort((a, b) => (a.address > b.address) ? 1 : -1)
				break;
			}
			case "city": {
				this.clinics.sort((a, b) => (a.city > b.city) ? 1 : -1)
				break;
			}
			case "state": {
				this.clinics.sort((a, b) => (a.state > b.state) ? 1 : -1)
				break;
			}
			default: {
				this.clinics.sort((a, b) => (a.id > b.id) ? 1 : -1)
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
