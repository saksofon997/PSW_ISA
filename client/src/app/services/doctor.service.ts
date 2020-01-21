import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './user.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

constructor(private cookieService: CookieService,
            private userService: UserService,
            private http: HttpClient) { }

getAppointments(){
    let user = JSON.parse(this.cookieService.get('user'));
    let id = user["id"];
    let headers = new HttpHeaders({
      'Accept': 'application/json',
			'Authorization': `Bearer ${JSON.parse(this.cookieService.get('token')).accessToken}`
    });
    return this.http.get(`/api/doctor/appointments/${id}`, { headers: headers, observe: 'response' })
      .pipe(
        map(response => {
          return response.body;
        }),
        catchError((response) => {
          return throwError(response.error);
        })
      );
}
getOneAppointment(appID){
  let user = JSON.parse(this.cookieService.get('user'));
    let id = user["id"];
    let headers = new HttpHeaders({
      'Accept': 'application/json',
			'Authorization': `Bearer ${JSON.parse(this.cookieService.get('token')).accessToken}`
    });
    return this.http.get(`/api/doctor/oneAppointment/${id}/${appID}`, { headers: headers, observe: 'response' })
      .pipe(
        map(response => {
          return response.body;
          console.log(response.body);
        }),
        catchError((response) => {
          return throwError(response.error);
        })
      );
}

getVacations(){
  let user = JSON.parse(this.cookieService.get('user'));
    let id = user["id"];
    let headers = new HttpHeaders({
      'Accept': 'application/json',
			'Authorization': `Bearer ${JSON.parse(this.cookieService.get('token')).accessToken}`
    });
    return this.http.get(`/api/vacations/${id}`, { headers: headers, observe: 'response' })
      .pipe(
        map(response => {
          return response.body;
        }),
        catchError((response) => {
          return throwError(response.error);
        })
      );
}

getDoctor() {
  let user = JSON.parse(this.cookieService.get('user'));
  let id = user["id"];
  let headers = new HttpHeaders({
    'Authorization': `Bearer ${this.userService.getToken()}`
  });
  return this.http.get(`/api/doctor/getDoctor/${id}`, { headers: headers, observe: 'response' })
    .pipe(
      map(response => {
        return response.body;
      }),
      catchError((response) => {
        return throwError(response.error);
      })
    );
}
changeDoctor(doctor){
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.userService.getToken()}`
  });
  return this.http.put(`/api/doctor/change`, JSON.stringify(doctor), { headers: headers, observe: 'response' })
    .pipe(
      map(response => {
        return response.body;
      }),
      catchError((response) => {
        return throwError(response.error);
      })
    );
}
submitReport(report,patientID, appointmentID){
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.userService.getToken()}`
  });
  return this.http.post(`http://localhost:8080/api/examination/submitReport/${patientID}/${appointmentID}`, JSON.stringify(report), { headers: headers, observe: 'response' })
    .pipe(
      map(response => {
        return response.body;
      }),
      catchError((response) => {
        return throwError(response.error);
      })
    );
}
submitChangedReport(report,patientID){
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.userService.getToken()}`
  });
  return this.http.post(`http://localhost:8080/api/examination/submitChangedReport/${patientID}/`, JSON.stringify(report), { headers: headers, observe: 'response' })
    .pipe(
      map(response => {
        return response.body;
      }),
      catchError((response) => {
        return throwError(response.error);
      })
    );
}
submitBasicInfo(basicInfo,patientID){
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.userService.getToken()}`
  });
  return this.http.post(`http://localhost:8080/api/examination/submitBasicInfo/${patientID}/`, JSON.stringify(basicInfo), { headers: headers, observe: 'response' })
    .pipe(
      map(response => {
        return response.body;
      }),
      catchError((response) => {
        return throwError(response.error);
      })
    );
}
  rateDoctor(doctor_id, patient_id, stars){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userService.getToken()}`
    });
    var rateParamsString = "";
    rateParamsString += `doctor_id=${doctor_id}&patient_id=${patient_id}&stars=${stars}`
    return this.http.put(`http://localhost:8080/api/doctor/rateDoctor?${rateParamsString}`, {}, { headers: headers, observe: 'response' }).pipe(
      map(response => {
        return response.body;
      }),
      catchError((response) => {
        return throwError(response.error);
      })
    );
  }
}
