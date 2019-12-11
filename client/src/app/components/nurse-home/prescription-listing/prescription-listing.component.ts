import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-prescription-listing',
  templateUrl: './prescription-listing.component.html',
  styleUrls: ['./prescription-listing.component.css']
})
export class PrescriptionListingComponent implements OnInit {
  ordinationsHeaders = ['Doctor', 'Medication'];
	prescriptions: any;
	navigationSubscription: any;
	clinicID: any;
	clinicName: any;

	searchForm: FormGroup;
	submitted = false;

	constructor(private clinicService: ClinicService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private userService: UserService,
		private formBuilder: FormBuilder,
	) {
		this.navigationSubscription = this.router.events.subscribe((e: any) => {
			if (e instanceof NavigationEnd) {
				this.clinicID = this.userService.getUser().clinic_id;
				this.getPrescriptions();
			}
		});
	}

	ngOnInit() {
		this.activatedRoute.params.subscribe((params) => {
			this.clinicID = params.id;
			this.clinicName = params.name;
		});

		this.searchForm = this.formBuilder.group({
			name: [""],
			medication: [""]
		});
	}
	
	getPrescriptions() {
		this.clinicID = this.userService.getUser().clinic_id;
		this.clinicService.getPrescriptions(this.clinicID).subscribe(
			(data) => {
			  this.prescriptions = data;
			},
			(error) => {
			  alert(error);
			}
		  )
	}

	approvePrescription(prescription) {
		this.clinicService.approvePrescription(prescription).subscribe(
			(data) => {
			  this.getPrescriptions();
			},
			(error) => {
			  alert(error);
			}
		  )
	}

	onSearch(){
		this.submitted = true;

		var prescription = {
			name: this.searchForm.controls.name.value ? this.searchForm.controls.name.value: "",
			medication: this.searchForm.controls.medication.value ? this.searchForm.controls.medication.value: "",
			clinic_id: this.userService.getUser().clinic_id
		}

		this.clinicService.searchOrdinations(prescription).subscribe(
			(data) => {
			  this.prescriptions = data;
			},
			(error) => {
			  alert(error);
			}
		  )
	}

	ngOnDestroy() {
		if (this.navigationSubscription) {
			this.navigationSubscription.unsubscribe();
		}
	}
}
