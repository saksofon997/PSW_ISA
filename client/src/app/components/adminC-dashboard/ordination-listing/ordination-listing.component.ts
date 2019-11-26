import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-ordination-listing',
	templateUrl: './ordination-listing.component.html',
	styleUrls: ['./ordination-listing.component.css']
})
export class OrdinationListingComponent implements OnInit {
	ordinationsHeaders = ['Name', 'Number'];
	ordinations: any;
	navigationSubscription: any;
	clinicID: any;
	clinicName: any;
	constructor(private clinicService: ClinicService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private userService: UserService
	) {
		this.navigationSubscription = this.router.events.subscribe((e: any) => {
			if (e instanceof NavigationEnd) {
				this.clinicID = this.userService.getUser().clinic_id;
				this.getOrdinations();
			}
		});
	}

	ngOnInit() {
		this.activatedRoute.params.subscribe((params) => {
			this.clinicID = params.id;
			this.clinicName = params.name;
		});
	}
	getOrdinations() {
		this.clinicID = this.userService.getUser().clinic_id;
		// service call
	}
	changeOrdination(ordination) {

	}
	addNewOrdination() {
		//this.router.navigate(['../ordination_form'], { relativeTo: this.activatedRoute });
	}

	deleteOrdination(ordination) {
		// service call
	}
	ngOnDestroy() {
		if (this.navigationSubscription) {
			this.navigationSubscription.unsubscribe();
		}
	}
}
