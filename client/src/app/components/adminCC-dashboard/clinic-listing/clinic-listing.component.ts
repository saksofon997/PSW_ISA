import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
	selector: 'app-clinic-listing',
	templateUrl: './clinic-listing.component.html',
	styleUrls: ['./clinic-listing.component.css']
})
export class ClinicListingComponent implements OnInit {
	clinics: any;
	clinicHeaders = ['Name', 'Address', 'City', 'State', 'Description'];
	navigationSubscription: any;

	constructor(private clinicService: ClinicService,
		public router: Router,
		private activatedRoute: ActivatedRoute,
		private confirmationDialogService: DialogService) {
		this.navigationSubscription = this.router.events.subscribe((e: any) => {
			if (e instanceof NavigationEnd) {
				this.getClinics();
			}
		});
	}

	ngOnInit() {
	}

	getClinics() {
		this.clinicService.getClinics().subscribe((data) => {
			this.clinics = data;
			this.clinics.sort((a, b) => (a.id > b.id) ? 1 : -1)
		});
	}

	showClinicInfo(clinic: any) {
		this.router.navigate(['showClinicInfo'], { relativeTo: this.activatedRoute, state: {data: clinic}});
	}

	showClinicAdmins(clinic: any) {
		this.router.navigate(['clinicAdmins', { id: clinic.id, name: clinic.name }], { relativeTo: this.activatedRoute });
	}

	showNewClinicForm() {
		this.router.navigate(['addClinic'], { relativeTo: this.activatedRoute });
	}
	deleteClinic(clinic){
		this.confirmationDialogService.confirm('Please confirm', 'Are you sure you want to delete clinic: ' + clinic.name + ' ?', false)
		.then((confirmed) => {
			if (confirmed.submited) {
				this.clinicService.deleteClinic(clinic).subscribe(
					(data) => {
						this.router.navigate(['../adminCC'], { relativeTo: this.activatedRoute });
					},
					(error)=>{
						alert(error);
					}
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
