import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AppointmentService {

	constructor(private userService: UserService,
		private http: HttpClient) { }

	startAppointment(appointment) {
		let headers = new HttpHeaders({
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.post('/api/appointment/startAppointment', appointment, { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
				catchError((response) => {
					return throwError(response.error);
				})
			);
	}

	scheduleNewAppointment(appointment) {
		let headers = new HttpHeaders({
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.post('/api/appointment/scheduleNewAppointment', appointment, { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
				catchError((response) => {
					return throwError(response.error);
				})
			);
	}

	createAvailableAppointment(appointment) {
		let headers = new HttpHeaders({
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.post('/api/appointment/createAvailableAppointment', appointment, { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
				catchError((response) => {
					return throwError(response.error);
				})
			);
	}

	getClinicAvailableAppointments(clinic_id) {
		let headers = new HttpHeaders({
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.get(`/api/appointment/getClinicAvailableAppointments/${clinic_id}`, { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
				catchError((response) => {
					return throwError(response.error);
				})
			);
	}

	deleteAvailableAppointment(appointment_id) {
		let headers = new HttpHeaders({
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.delete(`/api/appointment/deleteAvailableAppointment/${appointment_id}`, { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
				catchError((response) => {
					return throwError(response.error);
				})
			);
	}

	getClinicAppointmentRequests(clinic_id) {
		let headers = new HttpHeaders({
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.get(`/api/appointment/getClinicAppointmentRequests/${clinic_id}`, { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
				catchError((response) => {
					return throwError(response.error);
				})
			);
	}

	choseAvailableAppointment(appointment_id, patient_id){
		return this.http.put(`/api/appointment/choseAvailableAppointment/${appointment_id}/${patient_id}`, {}, { observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
				catchError((response) => {
					return throwError(response.error);
				})
			);
	}
}
