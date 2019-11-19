import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

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
		private router: Router,
		private activatedRoute: ActivatedRoute) {
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
		});
	}

	showClinicAdmins(clinic: any) {
		this.router.navigate(['../clinicAdmins', { id: clinic.id, name: clinic.name }], { relativeTo: this.activatedRoute });
	}

	showNewClinicForm() {
		this.router.navigate(['../addClinic'], { relativeTo: this.activatedRoute });
	}
	deleteClinic(clinic){
		this.clinicService.deleteClinic(clinic).subscribe(
			(data) => {
				this.router.navigate(['../clinics'], { relativeTo: this.activatedRoute });
			},
			(error)=>{
				alert(error);
			}
		);
	}
	ngOnDestroy() {
		if (this.navigationSubscription) {
			this.navigationSubscription.unsubscribe();
		}
	}

}
