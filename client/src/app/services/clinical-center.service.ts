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
export class ClinicalCenterService {
	constructor(private cookieService: CookieService,
		private userService: UserService,
		private http: HttpClient,
		private router: Router) { }


	getMedications(){
		let headers = new HttpHeaders({
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.get('http://localhost:8080/api/medication', { headers: headers, observe: 'response' })
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
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
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

	editMedication(changedMedication) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.put(`http://localhost:8080/api/medication/change`, changedMedication, { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
                catchError((response) => {
                    return throwError(response.error);
                })
			);
	}

	deleteMedication(id) {
		let headers = new HttpHeaders({
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.delete(`http://localhost:8080/api/medication/delete/${id}`, { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
                catchError((response) => {
                    return throwError(response.error);
                })
			);
	}

	getDiagnosis(){
		let headers = new HttpHeaders({
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.get('http://localhost:8080/api/diagnosis', { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
                catchError((response) => {
                    return throwError(response.error);
                })
			);
	}

	addDiagnosis(diagnosis){
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.post('http://localhost:8080/api/diagnosis', diagnosis, { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
                catchError((response) => {
                    return throwError(response.error);
                })
			);
	}

	editDiagnosis(changedDiagnosis) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.put(`http://localhost:8080/api/diagnosis/change`, changedDiagnosis, { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
                catchError((response) => {
                    return throwError(response.error);
                })
			);
	}

	deleteDiagnosis(id) {
		let headers = new HttpHeaders({
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.delete(`http://localhost:8080/api/diagnosis/delete/${id}`, { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
                catchError((response) => {
                    return throwError(response.error);
                })
			);
	}

	searchClinics(criteria: any) {
		//TODO
		throw new Error("Method not implemented.");
	}

	getTypesOfExamination() {
		let headers = new HttpHeaders({
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.get('http://localhost:8080/api/examinationTypes/getAll', { headers: headers, observe: 'response' })
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
