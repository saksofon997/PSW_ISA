import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { map, catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
	providedIn: 'root'
})
export class ClinicService {

	constructor(private cookieService: CookieService,
		private userService: UserService,
		private http: HttpClient,
		private router: Router) { }


	addOrdination(ordination: any, clinic_id: any) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.post(`http://localhost:8080/api/ordinations/${clinic_id}`, ordination, { headers: headers, observe: 'response' }).pipe(
			map(response => {
				return response.body;
			}),
			catchError((response) => {
				return throwError(response.error);
			})
		);
	}

	editOrdination(ordination: any) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.put(`http://localhost:8080/api/ordinations/change`, ordination, { headers: headers, observe: 'response' }).pipe(
			map(response => {
				return response.body;
			}),
			catchError((response) => {
				return throwError(response.error);
			})
		);
	}
	deleteOrdination(id: any) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.delete(`http://localhost:8080/api/ordinations/delete/${id}`, { headers: headers, observe: 'response' }).pipe(
			map(response => {
				return response.body;
			}),
			catchError((response) => {
				return throwError(response.error);
			})
		);
	}
	getOrdinations(clinicID: any) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.get(`http://localhost:8080/api/ordinations/${clinicID}`, { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
				catchError((response) => {
					return throwError(response.error);
				})
			);
	}
	searchOrdinations(ordination: any) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		var searchParamsString = "";
		searchParamsString += `name=${ordination.name}&number=${ordination.number}&clinic_id=${ordination.clinic_id}`
		return this.http.get(`http://localhost:8080/api/ordinations/search_ordinations?${searchParamsString}`,
							{ headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
				catchError((response) => {
					return throwError(response.error);
				})
			);
	}

	addClinic(clinic: any) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.post('http://localhost:8080/api/admin/addClinic', JSON.stringify(clinic), { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
				catchError((response) => {
					return throwError(response.error);
				})
			);
	}
	getClinics() {
		let headers = new HttpHeaders({
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.get('http://localhost:8080/api/admin/getClinics', { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
				catchError((response) => {
					return throwError(response.error);
				})
			);
	}
	getClinic(id: any) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.get(`http://localhost:8080/api/admin/getClinic/${id}`, { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
				catchError((response) => {
					return throwError(response.error);
				})
			);
	}

	changeClinicInfo(changedClinic: any) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.put(`http://localhost:8080/api/admin/editClinic`, changedClinic, { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
				catchError((response) => {
					return throwError(response.error);
				})
			);
	}

	getClinicAdmins(id: any) {
		let headers = new HttpHeaders({
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.get(`http://localhost:8080/api/admin/getClinicAdmins/${id}`, { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
				catchError((response) => {
					return throwError(response.error);
				})
			);
	}
	addDoctor(doctor) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.post('http://localhost:8080/api/doctor', JSON.stringify(doctor), { headers: headers, observe: 'response' }).pipe(
			map(response => {
				return response.body;
			}),
			catchError((response) => {
				return throwError(response.error);
			})
		);
	}

	addNurse(nurse) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.post('http://localhost:8080/api/nurse', JSON.stringify(nurse), { headers: headers, observe: 'response' }).pipe(
			map(response => {
				return response.body;
			}),
			catchError((response) => {
				return throwError(response.error);
			})
		);
	}

	deleteNurse(id) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.delete(`http://localhost:8080/api/nurse/delete/${id}`, { headers: headers, observe: 'response' }).pipe(
			map(response => {
				return response.body;
			}),
			catchError((response) => {
				return throwError(response.error);
			})
		);
	}

	deleteDoctor(id) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.delete(`http://localhost:8080/api/doctor/delete/${id}`, { headers: headers, observe: 'response' }).pipe(
			map(response => {
				return response.body;
			}),
			catchError((response) => {
				return throwError(response.error);
			})
		);
	}

	addAdmin(admin) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.post('http://localhost:8080/api/clinicAdmin/add', JSON.stringify(admin), { headers: headers, observe: 'response' }).pipe(
			map(response => {
				return response.body;
			}),
			catchError((response) => {
				return throwError(response.error);
			})
		);
	}
	deleteClinic(clinic) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.delete(`http://localhost:8080/api/admin/deleteClinic/${clinic.id}`, { headers: headers, observe: 'response' }).pipe(
			map(response => {
				return response.body;
			}),
			catchError((response) => {
				return throwError(response.error);
			})
		);
	}

	getDoctors(clinic_id) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.get(`http://localhost:8080/api/doctor/getClinicDoctors/${clinic_id}`, { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
				catchError((response) => {
					return throwError(response.error);
				})
			);
	}

	getNurses(clinic_id) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.get(`http://localhost:8080/api/nurse/getClinicNurses/${clinic_id}`, { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
				catchError((response) => {
					return throwError(response.error);
				})
			);
	}

	searchDoctors(doctor: any) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		var searchParamsString = "";
		searchParamsString += `name=${doctor.name}&surname=${doctor.surname}&clinic_id=${doctor.clinic_id}`
		return this.http.get(`http://localhost:8080/api/doctor/search_doctors?${searchParamsString}`,
							{ headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
				catchError((response) => {
					return throwError(response.error);
				})
			);
	}

	searchNurses(nurse: any) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		var searchParamsString = "";
		searchParamsString += `name=${nurse.name}&surname=${nurse.surname}&clinic_id=${nurse.clinic_id}`
		return this.http.get(`http://localhost:8080/api/nurse/search_nurse?${searchParamsString}`,
							{ headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
				catchError((response) => {
					return throwError(response.error);
				})
			);
	}

	getTypesOfExamination(clinic_id) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.get(`http://localhost:8080/api/examinationTypes/${clinic_id}`, { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
				catchError((response) => {
					return throwError(response.error);
				})
			);
	}

	searchTypesOfExamination(type: any) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		var searchParamsString = "";
		searchParamsString += `name=${type.name}&clinic_id=${type.clinic_id}`
		if (type.minPrice !== ""){
			searchParamsString += `&min_price=${type.minPrice}`
		}
		if (type.maxPrice !== ""){
			searchParamsString += `&max_price=${type.maxPrice}`
		}
		return this.http.get(`http://localhost:8080/api/examinationTypes/search_types?${searchParamsString}`,
							{ headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
				catchError((response) => {
					return throwError(response.error);
				})
			);
	}

	deleteTypeOfExamination(typeOfExamination_id) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.delete(`http://localhost:8080/api/examinationTypes/delete/${typeOfExamination_id}`, { headers: headers, observe: 'response' }).pipe(
			map(response => {
				return response.body;
			}),
			catchError((response) => {
				return throwError(response.error);
			})
		);
	}

	editTypeOfExamination(typeOfExamination) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.put(`http://localhost:8080/api/examinationTypes/change`, typeOfExamination, { headers: headers, observe: 'response' }).pipe(
			map(response => {
				return response.body;
			}),
			catchError((response) => {
				return throwError(response.error);
			})
		);
	}

	addTypeOfExamination(typeOfExamination, clinic_id) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.post(`http://localhost:8080/api/examinationTypes/${clinic_id}`, typeOfExamination, { headers: headers, observe: 'response' }).pipe(
			map(response => {
				return response.body;
			}),
			catchError((response) => {
				return throwError(response.error);
			})
		);
	}
}
