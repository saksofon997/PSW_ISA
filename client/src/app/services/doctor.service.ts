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
    return this.http.get(`http://localhost:8080/api/doctor/appointments/${id}`, { headers: headers, observe: 'response' })
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
