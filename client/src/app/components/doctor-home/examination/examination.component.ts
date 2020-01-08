import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material';
import { FormControl } from '@angular/forms';
import { take, takeUntil } from 'rxjs/operators';
import { ClinicalCenterService } from 'src/app/services/clinical-center.service';

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
  prescriptions: any;
  diagnoses: any;
  config = {
    displayKey:"code", //if objects array passed which key to be displayed defaults to description
    search:true, //true/false for the search functionlity defaults to false,
    height: 'auto', //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder:'Select', // text to be displayed when no item is selected defaults to Select,
    customComparator: ()=>{},// a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    limitTo: 10, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
    searchPlaceholder:'Medications', // label thats displayed in search input,
    searchOnKey: 'code', // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
    clearOnSelection: false, // clears search criteria when an option is selected if set to true, default is false
  }
  /** control for the selected bank for multi-selection */

  constructor(private patientService: PatientService,
              private clinicalCenterService: ClinicalCenterService,
              private activatedRoute: ActivatedRoute) { }


  @ViewChild('singleSelect', { read: ElementRef, static: true }) singleSelect: MatSelect;
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let patientID = params['patient'];
      this.doctor = params['doctor'];
      this.type = params['type'];
      this.datetime = params['datetime'];
      this.loadPatientInfo(patientID)
      this.loadPrescriptions();
      this.loadDiagnoses();
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
  loadPrescriptions() {
		this.clinicalCenterService.getMedications().subscribe(
			(data) => {
          this.prescriptions=data;
			}
		);
  }
  loadDiagnoses() {
    this.clinicalCenterService.getDiagnosis().subscribe(
      (data) => {
          this.diagnoses=data;
      }
    );
  }
  timeConverter(a) {
    a = new Date(a * 1000)
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
    var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
    var time = date + '. ' + month + ' ' + year + '. ' + hour + ':' + min;
    return time;
  }
  selectionChanged(event){

  }
}
