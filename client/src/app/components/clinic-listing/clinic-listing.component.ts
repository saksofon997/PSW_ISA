import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-clinic-listing',
	templateUrl: './clinic-listing.component.html',
	styleUrls: ['./clinic-listing.component.css']
})
export class ClinicListingComponent implements OnInit {
	clinics: any;
	clinicHeaders = ['Name', 'Address', 'City', 'State', 'Description'];

	constructor(private clinicService: ClinicService,
		private router: Router,
		private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.getClinics();
	}

	getClinics() {
		this.clinicService.getClinics().subscribe((data) => {
			this.clinics = data;
		});
	}

	showClinicAdmins(clinic) {
		this.router.navigate(['../clinicAdmins', { id: clinic.id, name:clinic.name }], { relativeTo: this.activatedRoute });
	}

	showNewClinicForm(){
		this.router.navigate(['../addClinic'], { relativeTo: this.activatedRoute });
	}

}
