import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
	selector: 'app-patient-available-appointments',
	templateUrl: './patient-available-appointments.component.html',
	styleUrls: ['./patient-available-appointments.component.css']
})
export class PatientAvailableAppointmentsComponent implements OnInit {
	appointmentHeaders = ['Doctor', 'Ordination name and number', 'Type', 'Date and time', 'Duration (minutes)', 'Price', 'Discount'];
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
				this.activatedRoute.params.subscribe((params) => {
					this.clinicID = +params['clinic_id'];
					this.getAppointments();
				});

			}
		});
	}

	ngOnInit() {
		this.activatedRoute.params.subscribe((params) => {
			this.clinicID = +params['clinic_id'];
		});
	}
	getAppointments() {
		this.appointmentService.getClinicAvailableAppointments(this.clinicID).subscribe(
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

	chooseAvailableAppointment(appointment) {
		let patient_id = this.userService.getUser().id;
		this.appointmentService.choseAvailableAppointment(appointment.id, patient_id).subscribe(
			(data) => {
				alert("Successfully selected an appointment");
				this.getAppointments();
			},
			(error) => {
				alert(error);
			}
		);
	}

	timeConverter(UNIX_timestamp) {
		var a = new Date(UNIX_timestamp * 1000);
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var hour = a.getHours();
		var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
		var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
		var time = date + '. ' + month + ' ' + year + '. ' + hour + ':' + min + ':' + sec;
		return time;
	}

	ngOnDestroy() {
		if (this.navigationSubscription) {
			this.navigationSubscription.unsubscribe();
		}
	}
}