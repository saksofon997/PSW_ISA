import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-ordination-selection',
	templateUrl: './ordination-selection.component.html',
	styleUrls: ['./ordination-selection.component.css']
})
export class OrdinationSelectionComponent implements OnInit {
	ordinationsHeaders = ['Name', 'Number', 'Status'];
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
			date: ["", [Validators.required]]
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

	onSearch() {
		this.submitted = true;

		if (this.searchForm.invalid) {
			return;
		}

		console.log(this.searchForm.controls.date.value.getTime() / 1000);

		var ordination = {
			name: this.searchForm.controls.name.value ? this.searchForm.controls.name.value : "",
			number: this.searchForm.controls.number.value ? this.searchForm.controls.number.value : "",
			date: this.searchForm.controls.date.value ? this.searchForm.controls.date.value.getTime() / 1000 : "",
			clinic_id: this.userService.getUser().clinic_id
		}

		this.clinicService.searchOrdinationsWithDate(ordination).subscribe(
			(data) => {
				this.ordinations = data;
				for (let i = 0; i < this.ordinations.length; i++) {
					let ordination = this.ordinations[i];
					for (let j = 0; j < ordination.availablePeriods.length; j++) {

						let startTime = new Date(ordination.availablePeriods[j].split(':')[0] * 1000);
						let endTime = new Date(ordination.availablePeriods[j].split(':')[1] * 1000);

						this.ordinations[i].availablePeriods[j] = ("0" + startTime.getHours()).slice(-2) + ":" + ("0" + startTime.getMinutes()).slice(-2) + " - " + ("0" + endTime.getHours()).slice(-2) + ":" + ("0" + endTime.getMinutes()).slice(-2);
					}
					if (!ordination.available) {
						this.ordinations[i].firstAvailableDate = this.timeConverter(ordination.firstAvailableDateTimestamp);
					}
				}
				this.ordinations.sort((x, y) => (x === y)? 0 : x? -1 : 1);
				this.filteredOrdinations = this.ordinations; 

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

	timeConverter(a) {
		a = new Date(a * 1000)
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var time = date + '. ' + month + ' ' + year + '.';
		return time;
	}

	ngOnDestroy() {
		if (this.navigationSubscription) {
			this.navigationSubscription.unsubscribe();
		}
	}
}
