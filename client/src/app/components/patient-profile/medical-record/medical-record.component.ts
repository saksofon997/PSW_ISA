import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.css']
})
export class MedicalRecordComponent implements OnInit {
  medicalRecord: any;
  constructor(private patientService: PatientService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private userService: UserService,) { }

  ngOnInit() {
    this.getMedicalRecord();
  }
  getMedicalRecord(){
    this.patientService.getMedicalRecord().subscribe(
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
}
