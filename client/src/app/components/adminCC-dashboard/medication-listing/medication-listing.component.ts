import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { ClinicalCenterService } from 'src/app/services/clinical-center.service';

@Component({
	selector: 'app-medication-listing',
	templateUrl: './medication-listing.component.html',
	styleUrls: ['./medication-listing.component.css']
})
export class MedicationListingComponent implements OnInit {
	medications: any;
	medicationHeaders = ['Code', 'Name'];

	navigationSubscription: any;

	constructor(private clinicalCenterService: ClinicalCenterService,
		private router: Router,
		private activatedRoute: ActivatedRoute) {

		this.navigationSubscription = this.router.events.subscribe((e: any) => {
			if (e instanceof NavigationEnd) {
				this.getMedications();
			}
		});
	}

	ngOnInit() {
	}

	getMedications() {
		this.clinicalCenterService.getMedications().subscribe(
			(data) => {
				this.medications = data;
			}
		);
	}

	openMedicationForm(medication: any) {
		this.router.navigate(['../medication_info'], { relativeTo: this.activatedRoute, state: {data: medication}});
	}

	deleteMedication(medication: any) {
		this.clinicalCenterService.deleteMedication(medication.id).subscribe(
			(data) => this.getMedications(),
			(error) => alert(error)
		);
	}

	ngOnDestroy() {
		if (this.navigationSubscription) {
			this.navigationSubscription.unsubscribe();
		}
	}
}
