import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { map, catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class UserService {
	user: any;
	//token: any;

	constructor(private cookieService: CookieService,
		private http: HttpClient,
		private router: Router) { }

	/*
	*  Check if there is a logged in user
	*/
	checkLoggedIn() {
		if (this.cookieService.get('user')) {
			this.user = JSON.parse(this.cookieService.get('user'));
			//this.token = JSON.parse(this.cookieService.get('token'));
		}
		return this.user;
	}

	/*
	*  Stores user in memory and cookieservice
	*/
	setUser(user: any) {
		this.user = user;
		this.cookieService.set('user', JSON.stringify(user));
	}

	/*
	*  Removes user from memory and cookieservice
	*/
	removeUser() {
        this.user = null;
        this.cookieService.delete('user');
	}
	
	/* 
	*  Sends http request to server
	*  Calls setUser to store it in memory and cookieservice
	*  Prints error to console 
	*/
	login(email: string, password: string){
		var user = {
			email,
			password
		}
		return this.http.post('http://localhost:8080/api/login', user, {observe: 'response'})
			.pipe(
				map((response) => {
					const user = response.body;
					this.setUser(user);
                    return user;
                }),
                catchError((response) => {
                    return throwError(JSON.parse(response.body));
                })
			);
	}

	/* 
	*  Sends http request to server
	*  Calls removeUser to remove it in memory and cookieservice
	*  Prints error to console 
	*/
	logout(){
        return this.http.delete('http://localhost:8080/api/logout')
			.subscribe(
				(data: any) => {
					this.removeUser();
					this.router.navigate(['/login']);
				},
				(error) => alert(error)
			);
	}
}
