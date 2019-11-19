import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { map, catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ClinicService {
	
	constructor(private cookieService: CookieService,
		private http: HttpClient,
		private router: Router) { }

	addClinic(clinic: any) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
		return this.http.post('http://localhost:8080/admin/addClinic', JSON.stringify(clinic), { headers: headers, observe: 'response' })
		.pipe(
			map(response => {
				return response.body;
			}),
			catchError((response) => {
				return throwError(response.error);
			})
		);
	}
	getClinics() {
		return this.http.get('http://localhost:8080/admin/getClinics', { observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
                catchError((response) => {
                    return throwError(response.error);
                })
			);
	}
	getClinic(id: any) {
		return this.http.get(`http://localhost:8080/admin/getClinic/${id}`, { observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
                catchError((response) => {
                    return throwError(response.error);
                })
			);
	}
	
	changeClinicInfo(changedClinic: any) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
		return this.http.put(`http://localhost:8080/admin/editClinic`, changedClinic, { headers: headers, observe: 'response' })
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
		return this.http.get(`http://localhost:8080/admin/getClinicAdmins/${id}`, { observe: 'response' })
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
			'Content-Type': 'application/json'
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
			'Content-Type': 'application/json'
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
		return this.http.delete(`http://localhost:8080/admin/deleteClinic/${clinic.id}`, { observe: 'response' }).pipe(
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
