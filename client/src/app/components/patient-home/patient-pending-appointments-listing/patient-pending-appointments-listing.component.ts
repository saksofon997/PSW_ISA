import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-patient-pending-appointments-listing',
	templateUrl: './patient-pending-appointments-listing.component.html',
	styleUrls: ['./patient-pending-appointments-listing.component.css']
})
export class PatientPendingAppointmentsListingComponent implements OnInit {

	appointments: any;
	appointmentHeaders = ['Clinic', 'Ordination name', 'Ord. number', 'Type', 'Date and time', 'Duration (minutes)'];
	navigationSubscription: any;
	sortingOption: any;

	constructor(
		private patientService: PatientService,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {
		this.navigationSubscription = this.router.events.subscribe((e: any) => {
			if (e instanceof NavigationEnd) {
				this.getPendingAppointments();
			}
		});
	}

	ngOnInit() {
	}

	getPendingAppointments() {
		this.patientService.getPendingAppointments().subscribe((data) => {
			this.appointments = data;
			for (const [i, value] of this.appointments.entries()) {
				this.appointments[i].formatedDateAndTime = this.timeConverter(this.appointments[i].startingDateAndTime);
			}
			this.appointments.sort((a, b) => (a.id > b.id) ? 1 : -1)
		});
	}

	sortName() {
		this.sortingOption = "name";
		this.sortPendingAppointments();
	}
	sortAddress() {
		this.sortingOption = "address";
		this.sortPendingAppointments();
	}
	sortCity() {
		this.sortingOption = "city";
		this.sortPendingAppointments();
	}
	sortState() {
		this.sortingOption = "state";
		this.sortPendingAppointments();
	}

	sortPendingAppointments() {
		switch (this.sortingOption) {
			case "name": {
				this.appointments.sort((a, b) => (a.name > b.name) ? 1 : -1)
				break;
			}
			case "address": {
				this.appointments.sort((a, b) => (a.address > b.address) ? 1 : -1)
				break;
			}
			case "city": {
				this.appointments.sort((a, b) => (a.city > b.city) ? 1 : -1)
				break;
			}
			case "state": {
				this.appointments.sort((a, b) => (a.state > b.state) ? 1 : -1)
				break;
			}
			default: {
				this.appointments.sort((a, b) => (a.id > b.id) ? 1 : -1)
				break;
			}
		}
	}

	timeConverter(UNIX_timestamp){
		var a = new Date(UNIX_timestamp * 1000);
		var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var hour = a.getHours();
		var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes(); 
		var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
		var time = date + '. ' + month + ' ' + year + '. ' + hour + ':' + min + ':' + sec ;
		return time;
	  }

	ngOnDestroy() {
		if (this.navigationSubscription) {
			this.navigationSubscription.unsubscribe();
		}
	}
}
