import { element } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DoctorService } from 'src/app/services/doctor.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
	selector: 'app-medical-record',
	templateUrl: './medical-record.component.html',
	styleUrls: ['./medical-record.component.css']
})
export class MedicalRecordComponent implements OnInit {
	@Input() patientID: string;
	@Input() patientName: string;
	@Input() editable: boolean;
	@Input() diagnoses: any;
	@Input() prescriptions: any;
	basicInfoForm: FormGroup;
	reportForm: FormGroup;
	editBasicInfo: boolean;
	changeReport: boolean;
	medicalRecord: any;
	allergies: any;
	tempDiagnosis:any;
	optionsDiagnosis:any;
	config1 = {
		displayKey:"code", //if objects array passed which key to be displayed defaults to description
		search:true, //true/false for the search functionlity defaults to false,
		height: '8em', //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
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
	height: '8em', //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
	placeholder:'Select', // text to be displayed when no item is selected defaults to Select,
	customComparator: ()=>{},// a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
	limitTo: 10, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
	moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
	noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
	searchPlaceholder:'Search diagnoses', // label thats displayed in search input,
	searchOnKey: 'code', // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
	clearOnSelection: false, // clears search criteria when an option is selected if set to true, default is false
	}
	constructor(private patientService: PatientService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private userService: UserService,
		private formBuilder: FormBuilder,
		private doctorService: DoctorService,
		private cookieService: CookieService) {
		this.basicInfoForm = new FormGroup({
			bloodType: new FormControl({ value: "", validator: Validators.required, disabled: true }),
			diopter: new FormControl({ value: "", disabled: true, validator: Validators.required, }),
			height: new FormControl({ value: "", validator: Validators.required, disabled: true }),
			weight: new FormControl({ value: "", validator: Validators.required, disabled: true })
		});
		this.reportForm = new FormGroup({
			bloodType: new FormControl({ value: "", validator: Validators.required, disabled: true }),
			diopter: new FormControl({ value: "", disabled: true, validator: Validators.required, }),
			height: new FormControl({ value: "", validator: Validators.required, disabled: true }),
			weight: new FormControl({ value: "", validator: Validators.required, disabled: true })
		});
	}

	ngOnInit() {
		this.getMedicalRecord();
		this.changeReport = true;

		this.basicInfoForm.controls.bloodType.disable();
		this.basicInfoForm.controls.diopter.disable();
		this.basicInfoForm.controls.height.disable();
		this.basicInfoForm.controls.weight.disable();
	}
	getMedicalRecord() {
		this.patientService.getMedicalRecord(this.patientID).subscribe(
			(data) => {
				this.medicalRecord = data;
				this.allergies = this.medicalRecord.alergies;
				this.basicInfoForm.setValue({
					bloodType: this.medicalRecord.bloodType,
					diopter: this.medicalRecord.diopter,
					height: this.medicalRecord.height,
					weight: this.medicalRecord.weight
				});
			},
			(error) => {
				alert(error);
			}
		)
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
	enableInfoEdit() {
		this.editable = false;
		this.editBasicInfo = true;
		this.basicInfoForm.controls.bloodType.enable();
		this.basicInfoForm.controls.diopter.enable();
		this.basicInfoForm.controls.height.enable();
		this.basicInfoForm.controls.weight.enable();
	}
	cancelInfoEdit() {
		this.editable = true;
		this.editBasicInfo = false;
		this.ngOnInit();
	}
	submitBasicInfo() {
		this.editable = true;
		this.editBasicInfo = false;
		if (this.basicInfoForm.invalid) {
			return;
		}
		let doctor = JSON.parse(this.cookieService.get('user'));

		var basicInfo = {
			bloodType: this.basicInfoForm.controls.bloodType.value,
			diopter: this.basicInfoForm.controls.diopter.value,
			height: this.basicInfoForm.controls.height.value,
			weight: this.basicInfoForm.controls.weight.value,
			alergies: this.allergies
		}
		let patientID = this.patientID;
		this.doctorService.submitBasicInfo(basicInfo, patientID).subscribe(
			(data) => {
				this.ngOnInit();
			},
			(error) => { alert(error); }
		);
	}
	enableReportEdit(reportToChange) {
		this.editable = false;
		this.changeReport = false;
		this.tempDiagnosis = [];
		this.optionsDiagnosis = this.diagnoses;
		reportToChange.diagnosis.forEach(element => {
			this.optionsDiagnosis = this.optionsDiagnosis.filter(obj => obj.id !== element.id);
		});
		
	}
	cancelReportEdit(dateTime) {
		this.editable = true;
		this.changeReport = true;
		this.ngOnInit();
	}
	submitReportEdit(examination) {
		this.editable = true;
		this.changeReport = true;
		let patientID = this.patientID;
		this.doctorService.submitChangedReport(examination, patientID).subscribe(
			(data) => {
				this.ngOnInit();
			},
			(error) => { alert(error); }
		);
	}
	onHovering(e) {
		if (this.editBasicInfo) {
			e.srcElement.lastElementChild.hidden = false;
		}
	}
	onUnovering(e) {
		if (this.editBasicInfo) {
			e.srcElement.lastElementChild.hidden = true;
		}

	}
	deleteAllergie(allergie) {
		let temp = this.allergies;
		this.allergies = this.allergies.replace(allergie+",", '');
		if (temp === this.allergies){
			this.allergies = this.allergies.replace(","+allergie, '');
		}
		console.log(this.allergies);
		if (temp === this.allergies){
			this.allergies = this.allergies.replace(allergie, '');
		}
	}
	addAllergie(allergie){
		if ('' === this.allergies){
			this.allergies = this.allergies.concat(allergie);
		}else{
			this.allergies = this.allergies.concat(", "+allergie);
		}
	}

	selectionChangedDiag(event,examination){
		for (let diagnosis of this.tempDiagnosis){
			examination.diagnosis = examination.diagnosis.filter(obj => obj.id !== diagnosis.id);
		}
		event.value.forEach(element => {
			examination.diagnosis.push(element);
			this.tempDiagnosis.push(element);
		});
	}
	changedReportDesc(event, examination){
		examination.reportDescription = event.srcElement.value;
	}
	panelClosed(){
		if(this.editable==false && this.changeReport==false){
			this.editable = true;
			this.changeReport = true;
			this.ngOnInit();
		}
		
	}
	deleteDiagnosis(diagnosis, examination){
		examination.diagnosis = examination.diagnosis.filter(obj => obj.id !== diagnosis.id);
		this.optionsDiagnosis = this.diagnoses;
		examination.diagnosis.forEach(element => {
			this.optionsDiagnosis = this.optionsDiagnosis.filter(obj => obj.id !== element.id);
		});
	}
}
