import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { take, takeUntil } from 'rxjs/operators';
import { ClinicalCenterService } from 'src/app/services/clinical-center.service';
import { CookieService } from 'ngx-cookie-service';
import { DoctorService } from 'src/app/services/doctor.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.css']
})
export class ExaminationComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  @ViewChild('newAppointmentModal', { static: true }) newAppointmentModal: TemplateRef<any>;

  examinationForm: FormGroup;
  patient: any;
  doctor: any;
  type: any;
  typeID: any;
  datetime: number;
  prescriptions: any;
  diagnoses: any;
  reportDescription: any;
  submitted: boolean;
  appointment: any;
  canExitFlag: boolean = false;
  modalData: {
		patientID: any;
		patientName: any;
		action: string;
	  };
  config = {
    displayKey:"code", //if objects array passed which key to be displayed defaults to description
    search:true, //true/false for the search functionlity defaults to false,
    height: 'auto', //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder:'Select', // text to be displayed when no item is selected defaults to Select,
    customComparator: ()=>{},// a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    limitTo: 10, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
    searchPlaceholder:'Search medications', // label thats displayed in search input,
    searchOnKey: 'code', // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
    clearOnSelection: false, // clears search criteria when an option is selected if set to true, default is false
  }
  config2 = {
		displayKey:"code", //if objects array passed which key to be displayed defaults to description
		search:true, //true/false for the search functionlity defaults to false,
		height: 'auto', //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
		placeholder:'Select', // text to be displayed when no item is selected defaults to Select,
		customComparator: ()=>{},// a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
		limitTo: 10, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
		moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
		noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
		searchPlaceholder:'Search diagnoses', // label thats displayed in search input,
		searchOnKey: 'code', // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
		clearOnSelection: false, // clears search criteria when an option is selected if set to true, default is false
	  }
  /** control for the selected bank for multi-selection */

  constructor(private patientService: PatientService,
              private clinicalCenterService: ClinicalCenterService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private cookieService: CookieService,
              private router: Router,
              private doctorService: DoctorService,
              private modal: NgbModal,
              private confirmationDialogService: DialogService) { }


  @ViewChild('singleSelect', { read: ElementRef, static: true }) singleSelect: MatSelect;
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let patientID = params['patient'];
      this.doctor = params['doctor'];
      this.type = params['type'];
      this.typeID = params['typeID'];
      this.appointment = params['appointment'];
      this.datetime = Number.parseFloat(params['datetime']);
      this.loadPatientInfo(patientID)
      this.loadPrescriptions();
      this.loadDiagnoses();
    });
    this.examinationForm = this.formBuilder.group({
      reportDescription: [this.reportDescription,[Validators.required]],
      dateAndTime: new FormControl({value:this.timeConverter(this.datetime),disabled:true}),
      doctor: new FormControl({value:this.doctor,disabled: true}),
      diagnoses: [],
      prescriptions:  [],
      typeOfExamination: new FormControl({value:this.type,disabled:true})
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
  submit(){
    this.submitted = true;
		if (this.examinationForm.invalid) {
			return;
    }
    let doctor = JSON.parse(this.cookieService.get('user'));
    
    var report = {
      performs: doctor,
			clinic:{id: doctor.clinic_id},
      reportDescription: this.examinationForm.controls.reportDescription.value,
      dateAndTime: this.datetime,
      diagnosis: this.examinationForm.controls.diagnoses.value,
      medications:  this.examinationForm.controls.prescriptions.value,
      typeOfExamination: {
        id: this.typeID,
        name: this.type
      }
    }
    let patientID = this.patient.id;
    this.doctorService.submitReport(report,patientID,this.appointment).subscribe(
      (data) => {
        this.canExitFlag = true;
        this.router.navigate([`../patients`], {relativeTo: this.activatedRoute });
      },
      (error) => { alert(error);}
    );
  }
  ShowMedicalRecord(patient){
		//TODO
		let action = "Opened";
		let patientID = patient.id;
		let patientName = patient.name + " " + patient.surname;
		this.modalData = {patientID,patientName, action };
		this.modal.open(this.modalContent, { size: 'xl' });
	
  }
  scheduleNewAppointment(patient){
    let action = "Opened";
		this.modal.open(this.newAppointmentModal, { size: 'lg' });
  }
  close(){
    
  }
  canExit(nextState): boolean {
		if (this.canExitFlag){
			return true;
		} else {
			this.confirmationDialogService.confirm('Warning', 'You are leaving this page without finishing an appointment. Proceed?', false)
			.then((confirmed) => {
				if (confirmed.submited) {
          this.canExitFlag = true;
          this.router.navigate([nextState.url], {relativeTo: this.activatedRoute });
				 	return true;
				} else {
          return false;
        }
			})
			.catch(() => {return false;})
		}
	}
}
