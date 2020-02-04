import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
	selector: 'app-appointment-requests',
	templateUrl: './appointment-requests.component.html',
	styleUrls: ['./appointment-requests.component.css']
})
export class AppointmentRequestsComponent implements OnInit {
	appointmentHeaders = ['Doctor', 'Patient', 'Type', 'Date and time', 'Duration (minutes)'];
	appointments: any;
	navigationSubscription: any;
	clinicID: any;
	clinicName: any;
	constructor(private router: Router,
		private activatedRoute: ActivatedRoute,
		private userService: UserService,
		private appointmentService: AppointmentService,
		private confirmationDialogService: DialogService
	) {
		this.navigationSubscription = this.router.events.subscribe((e: any) => {
			if (e instanceof NavigationEnd) {
				this.clinicID = this.userService.getUser().clinic_id;
				this.getAppointmentRequests();
			}
		});
	}

	ngOnInit() {
		// this.activatedRoute.params.subscribe((params) => {
		// 	this.clinicID = params.id;
		// 	this.clinicName = params.name;
		// });
	}

	getAppointmentRequests() {
		this.clinicID = this.userService.getUser().clinic_id;
		this.appointmentService.getClinicAppointmentRequests(this.clinicID).subscribe(
			(data) => {
				this.appointments = data;
				for (const [i, value] of this.appointments.entries()) {
					this.appointments[i].formatedDateAndTime = this.timeConverter(this.appointments[i].startingDateAndTime);
				}
				this.appointments.sort((a, b) => (a.id > b.id) ? 1 : -1)
			},
			(error) => {
				alert(error);
			}
		);
	}

	selectOrdination(appointment){
		if (this.router.url.indexOf('appointment_requests') === -1){
			this.router.navigate(['ordination_selection'], { relativeTo: this.activatedRoute, state: {data: appointment}});
		} else {
			this.router.navigate(['../ordination_selection'], { relativeTo: this.activatedRoute, state: {data: appointment}});
		}
	}

	rejectRequest(appointment) {
		this.confirmationDialogService.confirm('Please confirm', 'Are you sure you want to reject this appointment request?', true)
			.then((confirmed) => {
				if (confirmed.submited) {
					this.appointmentService.rejectAppointmentRequest(appointment.id, confirmed.explanation).subscribe(
						(data) => {
							this.getAppointmentRequests();
						},
						(error) => {
							alert(error);
						}
					)
				}
			});
	}

	timeConverter(UNIX_timestamp) {
		var a = new Date(UNIX_timestamp * 1000);
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var hour = a.getHours();
		var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
		var time = date + '. ' + month + ' ' + year + '. ' + hour + ':' + min;
		return time;
	}

	ngOnDestroy() {
		if (this.navigationSubscription) {
			this.navigationSubscription.unsubscribe();
		}
	}
}
