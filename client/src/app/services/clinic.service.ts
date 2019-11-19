import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { map, catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
	providedIn: 'root'
})
export class ClinicService {



	constructor(private cookieService: CookieService,
		private userService: UserService,
		private http: HttpClient,
		private router: Router) { }

	addClinic(name: string, address: string, city: string, state: string, description: string) {
		var clinic = {
			name,
			address,
			city,
			state,
			description,
		}
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.post('http://localhost:8080/admin/addClinic', JSON.stringify(clinic), { headers: headers }).subscribe(
			(data) => {

			}
		);
	}
	getClinics() {
		let headers = new HttpHeaders({
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.get('http://localhost:8080/admin/getClinics', { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
                catchError((response) => {
                    return throwError(response.error);
                })
			);
	}
	getClinicAdmins(id: any) {
		let headers = new HttpHeaders({
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.get(`http://localhost:8080/admin/getClinicAdmins/${id}`, { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
                catchError((response) => {
                    return throwError(response.error);
                })
			);
	}
	addDoctor(doctor) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.post('http://localhost:8080/api/doctor', JSON.stringify(doctor), { headers: headers, observe: 'response' }).pipe(
			map(response => {
				return response.body;
			}),
			catchError((response) => {
				return throwError(response.error);
			})
		);
  	}

	addAdmin(admin){
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.post('http://localhost:8080/api/clinicAdmin/add', JSON.stringify(admin), { headers: headers, observe: 'response' }).pipe(
			map(response => {
				return response.body;
			}),
			catchError((response) => {
				return throwError(response.error);
			})
		);
	}
	deleteClinic(clinic){
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.delete(`http://localhost:8080/admin/deleteClinic/${clinic.id}`, { headers:headers, observe: 'response' }).pipe(
			map(response => {
				return response.body;
			}),
			catchError((response) => {
				return throwError(response.error);
			})
		);
	}

	showError(desc) {
		// Izmeniti ubuduce
		console.log(desc)
	}
}
