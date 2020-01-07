import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.css']
})
export class ExaminationComponent implements OnInit {
  patient: any;
  doctor: any;
  type: any;
  datetime: any;
  constructor(private patientService: PatientService,
		private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let patientID = params['patient'];
      this.doctor = params['doctor'];
      this.type = params['type'];
      this.datetime = params['datetime'];
      this.loadPatientInfo(patientID)
		});
  }
	loadPatientInfo(patient_id) {
		let promise = new Promise((resolve, reject) => {
			this.patientService.getPatientById(patient_id).subscribe(
				(data) => { this.patient = data; resolve(); },
				(error) => { alert(error); reject(); }
			);
		});
		return promise;
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
