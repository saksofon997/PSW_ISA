import { Component, OnInit, Input } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { StarRatingComponent } from 'ng-starrating';
import { ClinicService } from 'src/app/services/clinic.service';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.css']
})
export class MedicalRecordComponent implements OnInit {
 @Input() patientID: string;
 @Input() patientName: string;
  medicalRecord: any;
  constructor(private patientService: PatientService,
		private clinicService: ClinicService,
		private doctorService: DoctorService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private userService: UserService,) { }

  ngOnInit() {
    this.getMedicalRecord();
  }
  getMedicalRecord(){
    this.patientService.getMedicalRecord(this.patientID).subscribe(
			(data) => {
				this.medicalRecord = data;
			},
			(error) => {
				alert(error);
			}
		)
  }
  timeConverter(a){
    a=new Date(a*1000)
		var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var hour = a.getHours();
		var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes(); 
		var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
		var time = date + '. ' + month + ' ' + year + '. ' + hour + ':' + min;
		return time;
	}
	
	onRateClinic($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}, clinic_id) {
		let user = this.userService.getUser();
    	let user_id = user["id"];
		this.clinicService.rateClinic(clinic_id, user_id, $event.newValue).subscribe(
			(data) => {
				alert("Clinic successfully rated!");
			},
			(error) => { 
				alert(error);
				this.getMedicalRecord();
			}
		)
	  }
	onRateDoctor($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}, doctor_id) {
		let user = this.userService.getUser();
    	let user_id = user["id"];
		this.doctorService.rateDoctor(doctor_id, user_id, $event.newValue).subscribe(
			(data) => {
				alert("Doctor successfully rated!");
			},
			(error) => { 
				alert(error);
				this.getMedicalRecord();
			}
		)
	  }
}
