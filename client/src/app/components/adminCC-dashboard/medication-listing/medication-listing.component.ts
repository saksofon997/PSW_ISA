import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { ClinicalCenterService } from 'src/app/services/clinical-center.service';
import { DialogService } from 'src/app/services/dialog.service';

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
		private activatedRoute: ActivatedRoute,
		private confirmationDialogService: DialogService) {

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
		this.confirmationDialogService.confirm('Please confirm', 'Are you sure you want to delete medication with code: ' + medication.code + ' ?', false)
		.then((confirmed) => {
			if (confirmed.submited) {
				this.clinicalCenterService.deleteMedication(medication.id).subscribe(
					(data) => this.getMedications(),
					(error) => alert(error)
				);
			}
		});
	}

	ngOnDestroy() {
		if (this.navigationSubscription) {
			this.navigationSubscription.unsubscribe();
		}
	}
}
