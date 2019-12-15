import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ClinicalCenterService } from 'src/app/services/clinical-center.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-diagnosis-listing',
  templateUrl: './diagnosis-listing.component.html',
  styleUrls: ['./diagnosis-listing.component.css']
})
export class DiagnosisListingComponent implements OnInit {
	diagnoses: any;
	diagnosisHeaders = ['Code', 'Description'];

	navigationSubscription: any;

	constructor(private clinicalCenterService: ClinicalCenterService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private confirmationDialogService: DialogService) {

		this.navigationSubscription = this.router.events.subscribe((e: any) => {
			if (e instanceof NavigationEnd) {
				this.getDiagnosis();
			}
		});
	}

	ngOnInit() {
	}

	getDiagnosis() {
		this.clinicalCenterService.getDiagnosis().subscribe(
			(data) => {
				this.diagnoses = data;
			}
		);
	}

	openDiagnosisForm(diagnosis: any) {
		this.router.navigate(['../diagnosis_info'], { relativeTo: this.activatedRoute, state: {data: diagnosis}});
	}

	deleteDiagnosis(diagnosis: any) {
		this.confirmationDialogService.confirm('Please confirm', 'Are you sure you want to delete diagnosis with code: ' + diagnosis.code + ' ?', false)
		.then((confirmed) => {
			if (confirmed.submited) {
				this.clinicalCenterService.deleteDiagnosis(diagnosis.id).subscribe(
					(data) => this.getDiagnosis(),
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
