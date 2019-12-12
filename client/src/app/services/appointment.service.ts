import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private userService: UserService,
    private http: HttpClient) { }

    startAppointment(appointment) {
      let headers = new HttpHeaders({
        'Authorization': `Bearer ${this.userService.getToken()}`
      });
      return this.http.post('http://localhost:8080/api/appointment/startAppointment', appointment , { headers: headers, observe: 'response' })
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
