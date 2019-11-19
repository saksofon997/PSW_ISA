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
export class ClinicCenterAdminService {

  constructor(private cookieService: CookieService,
    private http: HttpClient,
    private router: Router) { }

  getAdminKc() {
    let user = JSON.parse(this.cookieService.get('user'));
    let id = user["id"];
    return this.http.get(`http://localhost:8080/admin/getAdminKc/${id}`, { observe: 'response' })
      .pipe(
        map(response => {
          return response.body;
        }),
        catchError((response) => {
          return throwError(response.error);
        })
      );
  }
  changeAdminKc(admin) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put(`http://localhost:8080/admin/change`, JSON.stringify(admin), { headers: headers, observe: 'response' })
      .pipe(
        map(response => {
          return response.body;
        }),
        catchError((response) => {
          return throwError(response.error);
        })
      );
  }

  deleteClinicAdmin(admin){
    return this.http.delete(`http://localhost:8080/api/clinicAdmin/delete/${admin.id}`, { observe: 'response' })
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

