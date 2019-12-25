import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ClinicService } from 'src/app/services/clinic.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-patient-doctor-listing',
  templateUrl: './patient-doctor-listing.component.html',
  styleUrls: ['./patient-doctor-listing.component.css']
})
export class PatientDoctorListingComponent implements OnInit {

  doctors: any;
  typesOfExamination: any;
  doctorHeaders = ['Name', 'Surname', 'Address', 'City', 'State', 'Phone Number'];
  navigationSubscription: any;
  clinicID: any;

  showAppts: boolean;
  appointmentHeaders = ['Clinic', 'Ordination name', 'Ord. number', 'Type', 'Date and time', 'Duration (minutes)'];
  appointments: any;
  sortingOption: any;
  doctor: any;

	form: FormGroup;
  submitted: boolean;
  
	constructor(private formBuilder: FormBuilder,
		private userService: UserService,
		private clinicService: ClinicService,
    private doctorService: DoctorService,
    private router: Router,
		private activatedRoute: ActivatedRoute) {
     }

  ngOnInit() {
    this.showAppts = false;
    this.getDoctors();
  }

  getDoctors() {
    this.clinicID = history.state.data;

    if(this.clinicID) {
      this.clinicService.getDoctors(this.clinicID).subscribe((data) => {
        this.doctors = data;
        this.doctors.sort((a, b) => (a.id > b.id) ? 1 : -1)
      });
    } else {
      alert("Error getting clinic ID!");
    }
  }

  showAvailibleAppointments(doctor: any) {
    this.doctor = doctor;
    this.doctorService.getAppointments(doctor.id).subscribe(
			(data) => {
        this.appointments = data;
			for (const [i, value] of this.appointments.entries()) {
				this.appointments[i].formatedDateAndTime = this.timeConverter(this.appointments[i].startingDateAndTime);
			}
      this.appointments.sort((a, b) => (a.id > b.id) ? 1 : -1)
      this.showAppts = true;
		},
			(error) => {
				alert(error);
			});
  }

  sortName() {
    this.sortingOption = "name";
    this.sortDoctors();
  }
  sortSurname() {
    this.sortingOption = "surname";
    this.sortDoctors();
  }
  sortAddress() {
    this.sortingOption = "address";
    this.sortDoctors();
  }
  sortCity() {
    this.sortingOption = "city";
    this.sortDoctors();
  }
  sortState() {
    this.sortingOption = "state";
    this.sortDoctors();
  }

  timeConverter(UNIX_timestamp) {
		var a = new Date(UNIX_timestamp * 1000);
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var hour = a.getHours();
		var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
		var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
		var time = date + '. ' + month + ' ' + year + '. ' + hour + ':' + min + ':' + sec;
		return time;
	}

  sortDoctors() {
		switch(this.sortingOption) {
			case "name": {
				this.doctors.sort((a, b) => (a.name > b.name) ? 1 : -1)
				break;
      }
      case "surname": {
				this.doctors.sort((a, b) => (a.surname > b.surname) ? 1 : -1)
				break;
			}
			case "address": {
				this.doctors.sort((a, b) => (a.address > b.address) ? 1 : -1)
				break;
			}
			case "city": {
				this.doctors.sort((a, b) => (a.city > b.city) ? 1 : -1)
				break;
			}
			case "state": {
				this.doctors.sort((a, b) => (a.state > b.state) ? 1 : -1)
				break;
			}
			default: {
				this.doctors.sort((a, b) => (a.id > b.id) ? 1 : -1)
				break;
			}
		}
	}

}
