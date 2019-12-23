import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class VacationService {
  

  constructor(private userService: UserService,
	private cookieService: CookieService,
    private http: HttpClient) { }

  sendRequest(vacation: any) {
	let headers = new HttpHeaders({
		'Authorization': `Bearer ${this.userService.getToken()}`
	});
	return this.http.post(`http://localhost:8080/api/vacations/request`, vacation, { headers: headers, observe: 'response' })
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
