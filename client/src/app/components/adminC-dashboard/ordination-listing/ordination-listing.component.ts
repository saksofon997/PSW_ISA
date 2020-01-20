import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-ordination-listing',
	templateUrl: './ordination-listing.component.html',
	styleUrls: ['./ordination-listing.component.css']
})
export class OrdinationListingComponent implements OnInit {
	ordinationsHeaders = ['Name', 'Number'];
	ordinations: any;
	filteredOrdinations: any;
	navigationSubscription: any;
	clinicID: any;
	clinicName: any;

	searchForm: FormGroup;
	filterForm: FormGroup;
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
				this.getOrdinations();
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
			number: [""],
			date: [""]
		});
		this.filterForm = this.formBuilder.group({
			name: [""],
			number: [""]
		});
		this.onFilterChanges();
	}
	
	getOrdinations() {
		this.clinicID = this.userService.getUser().clinic_id;
		this.clinicService.getOrdinations(this.clinicID).subscribe(
			(data) => {
			  this.ordinations = data;
			  this.filteredOrdinations = data;
			},
			(error) => {
			  alert(error);
			}
		  )
	}

	changeOrdination(ordination) {
		this.router.navigate(['../ordination_form'], { relativeTo: this.activatedRoute, state: { data: ordination } });
	}

	addNewOrdination() {
		this.router.navigate(['../ordination_form'], { relativeTo: this.activatedRoute });
	}

	deleteOrdination(ordination) {
		this.clinicService.deleteOrdination(ordination.id).subscribe(
			(data) => {
			  this.getOrdinations();
			},
			(error) => {
			  alert(error);
			}
		  )
	}

	onSearch(){
		this.submitted = true;

		var ordination = {
			name: this.searchForm.controls.name.value ? this.searchForm.controls.name.value: "",
			number: this.searchForm.controls.number.value ? this.searchForm.controls.number.value: "",
			clinic_id: this.userService.getUser().clinic_id
		}

		this.clinicService.searchOrdinations(ordination).subscribe(
			(data) => {
			  this.ordinations = data;
			  this.filteredOrdinations = data;
			},
			(error) => {
			  alert(error);
			}
		  )
	}

	onFilterChanges() {
		this.filterForm.valueChanges.subscribe(filters => {
			this.filteredOrdinations = this.filterOrdinations(filters);
		})
	}

	filterOrdinations(filters) {
		return this.ordinations.filter(ordination =>
			ordination.name.toLowerCase().indexOf(filters.name.toLowerCase()) !== -1 &&
			ordination.number.toString().indexOf(filters.number.toLowerCase()) !== -1
		);
	}

	ngOnDestroy() {
		if (this.navigationSubscription) {
			this.navigationSubscription.unsubscribe();
		}
	}
}
