import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './user.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private cookieService: CookieService,
    private userService: UserService,
    private http: HttpClient) { }

  getPatient() {
    let user = JSON.parse(this.cookieService.get('user'));
    let id = user["id"];
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.getToken()}`
    });
    return this.http.get(`http://localhost:8080/api/patient/${id}`, { headers: headers, observe: 'response' })
      .pipe(
        map(response => {
          return response.body;
        }),
        catchError((response) => {
          return throwError(response.error);
        })
      );
  }
  getPatientById(patient_id) {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.getToken()}`
    });
    return this.http.get(`http://localhost:8080/api/patient/${patient_id}`, { headers: headers, observe: 'response' })
      .pipe(
        map(response => {
          return response.body;
        }),
        catchError((response) => {
          return throwError(response.error);
        })
      );
  }
  changePatient(patient) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userService.getToken()}`
    });
    return this.http.put(`http://localhost:8080/api/patient/change`, JSON.stringify(patient), { headers: headers, observe: 'response' })
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
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userService.getToken()}`
    });
    return this.http.get(`http://localhost:8080/api/admin/getClinics`, { headers: headers, observe: 'response' })
      .pipe(
        map(response => {
          return response.body;
        }),
        catchError((response) => {
          return throwError(response.error);
        })
      );
  }

  getClinic(clinic_id: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userService.getToken()}`
    });
    return this.http.get(`http://localhost:8080/api/admin/getClinic/${clinic_id}`, { headers: headers, observe: 'response' })
      .pipe(
        map(response => {
          return response.body;
        }),
        catchError((response) => {
          return throwError(response.error);
        })
      );
  }

  getPendingAppointments(){
    let user = JSON.parse(this.cookieService.get('user'));
    let id = user["id"];
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userService.getToken()}`
    });
    return this.http.get(`http://localhost:8080/api/patient/getPendingAppointments/${id}`, { headers: headers, observe: 'response' })
      .pipe(
        map(response => {
          return response.body;
        }),
        catchError((response) => {
          return throwError(response.error);
        })
      );
  }
  getClinicPatients(){
    let user = JSON.parse(this.cookieService.get('user'));
    let id = user["clinic_id"];
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.getToken()}`
    });
    return this.http.get(`http://localhost:8080/api/patient/getClinicPatients/${id}`, { headers: headers, observe: 'response' })
      .pipe(
        map(response => {
          return response.body;
        }),
        catchError((response) => {
          return throwError(response.error);
        })
      );
  }
  getMedicalRecord(id){
    if(!id){
      let user = JSON.parse(this.cookieService.get('user'));
      id = user.id;
    }
    
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.getToken()}`
    });
    return this.http.get(`http://localhost:8080/api/patient/getMedicalRecord/${id}`, { headers: headers, observe: 'response' })
      .pipe(
        map(response => {
          return response.body;
        }),
        catchError((response) => {
          return throwError(response.error);
        })
      );
  }
  searchPatients(patient: any){
    let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		var searchParamsString = "";
		searchParamsString += `name=${patient.name}&surname=${patient.surname}&upin=${patient.upin}`
		return this.http.get(`http://localhost:8080/api/patient/search_patients?${searchParamsString}`,
							{ headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
				catchError((response) => {
					return throwError(response.error);
				})
			);
  }

  checkAuthorityToViewMedicalRecord(patient_id){
    let user = JSON.parse(this.cookieService.get('user'));
    let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
    });
    return this.http.get(`http://localhost:8080/api/doctor/canViewMedicalRecord/${patient_id}/${user.id}`,
							{ headers: headers, observe: 'response' })
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
