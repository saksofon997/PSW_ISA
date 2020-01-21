import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinicAdminService {

  constructor(private cookieService: CookieService,
    private userService: UserService,
    private http: HttpClient,
    private router: Router) { }

  getAdminC() {
    let user = JSON.parse(this.cookieService.get('user'));
    let id = user["id"];
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.getToken()}`
    });
    return this.http.get(`/api/clinicAdmin/getAdminC/${id}`, { headers: headers, observe: 'response' })
      .pipe(
        map(response => {
          return response.body;
        }),
        catchError((response) => {
          return throwError(response.error);
        })
      );
  }
  changeAdminC(adminC){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userService.getToken()}`
    });
    return this.http.put(`/api/clinicAdmin/change`, JSON.stringify(adminC), { headers: headers, observe: 'response' })
      .pipe(
        map(response => {
          return response.body;
        }),
        catchError((response) => {
          return throwError(response.error);
        })
      );
  }
  getClinic(clinicID){
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.getToken()}`
    });
    return this.http.get(`/api/admin/getClinic/${clinicID}`, { headers: headers, observe: 'response' })
      .pipe(
        map(response => {
          return response.body;
        }),
        catchError((response) => {
          return throwError(response.error);
        })
      );
  }

  getVacationRequests(){
    let user = this.userService.getUser();
    let clinic_id = user["clinic_id"];
    let headers = new HttpHeaders({
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
    return this.http.get(`/api/vacations/requests/${clinic_id}`, { headers: headers, observe: 'response' })
      .pipe(
        map(response => {
          return response.body;
        }),
        catchError((response) => {
          return throwError(response.error);
        })
      );
  }

  approveVacationRequest(request){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userService.getToken()}`
    });
    return this.http.put(`/api/vacations/approve/${request.id}`, JSON.stringify(request), { headers: headers, observe: 'response' })
      .pipe(
        map(response => {
          return response.body;
        }),
        catchError((response) => {
          return throwError(response.error);
        })
      );
  }

  rejectVacationRequest(request,message){
    let headers = new HttpHeaders({
			'Authorization': `Bearer ${this.userService.getToken()}`
    });
    return this.http.put(`/api/vacations/deny/${request.id}`,JSON.stringify(message), { headers: headers, observe: 'response' })
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
