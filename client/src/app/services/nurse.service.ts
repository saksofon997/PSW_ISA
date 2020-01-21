import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './user.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NurseService {

  constructor(private cookieService: CookieService,
    private userService: UserService,
    private http: HttpClient) { }

getNurse() {
  let user = JSON.parse(this.cookieService.get('user'));
  let id = user["id"];
  let headers = new HttpHeaders({
    'Authorization': `Bearer ${this.userService.getToken()}`
  });
  return this.http.get(`/api/nurse/${id}`, { headers: headers, observe: 'response' })
    .pipe(
      map(response => {
        return response.body;
      }),
      catchError((response) => {
        return throwError(response.error);
      })
    );
}

changeNurse(nurse) {
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.userService.getToken()}`
  });
  return this.http.put(`/api/nurse/change`, JSON.stringify(nurse), { headers: headers, observe: 'response' })
    .pipe(
      map(response => {
        return response.body;
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

}
