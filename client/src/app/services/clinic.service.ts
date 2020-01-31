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
		return this.http.post(`/api/ordinations/${clinic_id}`, ordination, { headers: headers, observe: 'response' }).pipe(
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
		return this.http.put(`/api/ordinations/change`, ordination, { headers: headers, observe: 'response' }).pipe(
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
		return this.http.delete(`/api/ordinations/delete/${id}`, { headers: headers, observe: 'response' }).pipe(
			map(response => {
				return response.body;
			}),
			catchError((response) => {
				return throwError(response.error);
			})
		);
	}
	approvePrescription(prescription: any) {
		let user = JSON.parse(this.cookieService.get('user'));
    	let id = user["id"];
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.put(`/api/prescriptions/approve/${id}`, JSON.stringify(prescription), { headers: headers, observe: 'response' }).pipe(
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
		return this.http.get(`/api/ordinations/${clinicID}`, { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
				catchError((response) => {
					return throwError(response.error);
				})
			);
	}
	getPrescriptions(clinicID: any) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.get(`/api/prescriptions/${clinicID}`, { headers: headers, observe: 'response' })
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
		return this.http.get(`/api/ordinations/search_ordinations?${searchParamsString}`,
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

	searchOrdinationsWithDate(ordination: any) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		var searchParamsString = "";
		searchParamsString += `name=${ordination.name}&number=${ordination.number}&date=${ordination.date}&clinic_id=${ordination.clinic_id}`
		return this.http.get(`/api/ordinations/search_ordinations_with_date?${searchParamsString}`,
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

	searchPrescriptions(prescription: any) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		var searchParamsString = "";
		searchParamsString += `name=${prescription.name}&surname=${prescription.surname}&medication=${prescription.medication}&clinic_id=${prescription.clinic_id}`
		return this.http.get(`/api/prescriptions/search_prescriptions?${searchParamsString}`,
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

	searchClinics(criteria: { name: any; address: any; typeOfExamination: any; date: number; }) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		var searchParamsString = "";
		searchParamsString += `name=${criteria.name}&address=${criteria.address}&typeOfExamination=${criteria.typeOfExamination}&date=${criteria.date}`
		return this.http.get(`/api/clinic/searchClinics?${searchParamsString}`,
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
		return this.http.post('/api/admin/addClinic', JSON.stringify(clinic), { headers: headers, observe: 'response' })
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
		return this.http.get('/api/admin/getClinics', { headers: headers, observe: 'response' })
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
		return this.http.get(`/api/admin/getClinic/${id}`, { headers: headers, observe: 'response' })
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
		return this.http.put(`/api/admin/editClinic`, changedClinic, { headers: headers, observe: 'response' })
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
		return this.http.get(`/api/admin/getClinicAdmins/${id}`, { headers: headers, observe: 'response' })
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
		return this.http.post('/api/doctor', JSON.stringify(doctor), { headers: headers, observe: 'response' }).pipe(
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
		return this.http.post('/api/nurse', JSON.stringify(nurse), { headers: headers, observe: 'response' }).pipe(
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
		return this.http.delete(`/api/nurse/delete/${id}`, { headers: headers, observe: 'response' }).pipe(
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
		return this.http.delete(`/api/doctor/delete/${id}`, { headers: headers, observe: 'response' }).pipe(
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
		return this.http.post('/api/clinicAdmin/add', JSON.stringify(admin), { headers: headers, observe: 'response' }).pipe(
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
		return this.http.delete(`/api/admin/deleteClinic/${clinic.id}`, { headers: headers, observe: 'response' }).pipe(
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
		return this.http.get(`/api/doctor/getClinicDoctors/${clinic_id}`, { headers: headers, observe: 'response' })
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
		return this.http.get(`/api/nurse/getClinicNurses/${clinic_id}`, { headers: headers, observe: 'response' })
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
		return this.http.get(`/api/doctor/search_doctors?${searchParamsString}`,
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
		return this.http.get(`/api/nurse/search_nurse?${searchParamsString}`,
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
		return this.http.get(`/api/examinationTypes/${clinic_id}`, { headers: headers, observe: 'response' })
			.pipe(
				map(response => {
					return response.body;
				}),
				catchError((response) => {
					return throwError(response.error);
				})
			);
	}

	getClinicLocation(address: string, city: string, state: string) {
		address = address.replace(/ /g, '+');
		address = encodeURIComponent(address);
		city = city.replace(/ /g, '+');
		city = encodeURIComponent(city);
		state = state.replace(/ /g, '+');
		state = encodeURIComponent(state);

		return this.http.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=396fefe7-95c2-486a-ae3e-c8f062813962&geocode=${address},${city},${state}&lang=en_US`, { observe: 'response' })
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
		return this.http.get(`/api/examinationTypes/search_types?${searchParamsString}`,
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
		let user = JSON.parse(this.cookieService.get('user'));
    	let clinic_id = user["clinic_id"];
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		return this.http.delete(`/api/examinationTypes/delete/${clinic_id}/${typeOfExamination_id}`, { headers: headers, observe: 'response' }).pipe(
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
		return this.http.put(`/api/examinationTypes/change`, typeOfExamination, { headers: headers, observe: 'response' }).pipe(
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
		return this.http.post(`/api/examinationTypes/${clinic_id}`, typeOfExamination, { headers: headers, observe: 'response' }).pipe(
			map(response => {
				return response.body;
			}),
			catchError((response) => {
				return throwError(response.error);
			})
		);
	}

	rateClinic(clinic_id, patient_id, stars){
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.userService.getToken()}`
		});
		var rateParamsString = "";
		rateParamsString += `clinic_id=${clinic_id}&patient_id=${patient_id}&stars=${stars}`
		return this.http.put(`/api/admin/rateClinic?${rateParamsString}`, {}, { headers: headers, observe: 'response' }).pipe(
			map(response => {
				return response.body;
			}),
			catchError((response) => {
				return throwError(response.error);
			})
		);
	}
}
