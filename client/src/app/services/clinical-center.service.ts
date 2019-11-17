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
export class ClinicalCenterService {

	constructor(private cookieService: CookieService,
		private http: HttpClient,
		private router: Router) { }


	getMedications(){
		return this.http.get('http://localhost:8080/api/medication', { observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
                catchError((response) => {
                    return throwError(response.error);
                })
			);
	}

	addMedication(medication){
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
		return this.http.post('http://localhost:8080/api/medication', medication, { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
                catchError((response) => {
                    return throwError(response.error);
                })
			);
	}

	editMedication(id, changedMedication) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
		return this.http.put(`http://localhost:8080/api/medication/change/${id}`, changedMedication, { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
                catchError((response) => {
                    return throwError(response.error);
                })
			);
	}

	delete(id) {
		return this.http.delete(`http://localhost:8080/api/medication/delete/${id}`, { observe: 'response' })
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
