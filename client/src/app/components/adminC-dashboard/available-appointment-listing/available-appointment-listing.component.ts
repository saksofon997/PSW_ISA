import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { ClinicService } from 'src/app/services/clinic.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-available-appointment-listing',
  templateUrl: './available-appointment-listing.component.html',
  styleUrls: ['./available-appointment-listing.component.css']
})
export class AvailableAppointmentListingComponent implements OnInit {
	appointmentHeaders = ['Date', 'Time', 'Type', 'Duration', 'Ordination', 'Doctor', 'Price'];
	appointments: any;
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
				this.getAppointments();
			}
		});
	}

	ngOnInit() {
		this.activatedRoute.params.subscribe((params) => {
			this.clinicID = params.id;
			this.clinicName = params.name;
		});
	}
	getAppointments() {
		this.clinicID = this.userService.getUser().clinic_id;
		// service call
	}

	addNewAppointment() {
		//this.router.navigate(['../available_appointment_form'], { relativeTo: this.activatedRoute });
	}

	deleteAppointment(ordination) {
		// service call
	}
	ngOnDestroy() {
		if (this.navigationSubscription) {
			this.navigationSubscription.unsubscribe();
		}
	}
}
