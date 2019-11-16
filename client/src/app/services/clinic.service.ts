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

	addClinic(name: string, address: string, city: string, state: string, description: string) {
		var clinic = {
			name,
			address,
			city,
			state,
			description,
		}
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
		return this.http.post('http://localhost:8080/admin/addClinic', JSON.stringify(clinic), { headers: headers }).subscribe(
			(data) => {

			}
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
	showError() {
		console.log('greska')
	}
}
