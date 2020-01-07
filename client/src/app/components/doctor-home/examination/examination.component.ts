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
  constructor(private patientService: PatientService,
		private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let patientID = params['patient'];
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
}
