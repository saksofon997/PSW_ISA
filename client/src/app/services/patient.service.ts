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
}
