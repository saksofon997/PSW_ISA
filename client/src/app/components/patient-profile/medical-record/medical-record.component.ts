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

	basicInfoForm: FormGroup;
	editBasicInfo: boolean;
	medicalRecord: any;
	allergies: any;
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
	}

	ngOnInit() {
		this.getMedicalRecord();

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
		this.basicInfoForm.controls.bloodType.disable();
		this.basicInfoForm.controls.diopter.disable();
		this.basicInfoForm.controls.height.disable();
		this.basicInfoForm.controls.weight.disable();
	}
	submitBasicInfo() {
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
				this.router.navigate([`../patients`], { relativeTo: this.activatedRoute });
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
}
