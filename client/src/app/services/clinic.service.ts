import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  constructor(private cookieService: CookieService,
		private http: HttpClient,
		private router: Router) { }

    addClinic(name: string, address: string, city : string, state:string, description: string){
      var clinic = {
        name: String,
        address: String,
        city: String,
        state: String,
        description: String,
        submitted: String
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
}
