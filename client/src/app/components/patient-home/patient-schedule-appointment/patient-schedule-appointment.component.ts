import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
	selector: 'app-patient-schedule-appointment',
	templateUrl: './patient-schedule-appointment.component.html',
	styleUrls: ['./patient-schedule-appointment.component.css']
})
export class PatientScheduleAppointmentComponent implements OnInit {

	typeOfExamination: any;
	clinicID: any;
	doctorID: any;
	date: any;
	time: any;
	form: FormGroup;
	submitted: any;

	clinic: any;
	doctor: any;
	ExaminationTypes: any;
	price: any;

	constructor(private formBuilder: FormBuilder,
		private userService: UserService,
		private router: Router,
		private clinicService: ClinicService,
		private doctorService: DoctorService,
		private activatedRoute: ActivatedRoute,
		private appointmentService: AppointmentService, ) { }

	ngOnInit() {

		this.activatedRoute.queryParams.subscribe(params => {
			this.clinicID = +params['clinic'];
			this.doctorID = +params['doctor'];
			this.date = +params['date'];
			this.time = params['time'];
			this.typeOfExamination = +params['toe'];
		});

		if (!this.clinicID)
			alert("Error loading clinicID");
		if (!this.doctorID)
			alert("Error loading doctorID");

		this.loadData().then(() => {

			this.createFormGroup();

		}, () => alert("Error loading data"))
	}

	timeConverter(a) {
		a = new Date(a);
		var year = a.getFullYear();
		var month = (a.getMonth() + 1) < 10 ? '0' + (a.getMonth() + 1) : (a.getMonth() + 1);
		var date = a.getDate() < 10 ? '0' + a.getDate() : a.getDate();
		var time = year + "-" + month + "-" + date;
		return time;
	}

	createFormGroup() {
		let date = new Date();
		if (this.date) {
			let res = this.time.split(':');
			let timeFormat = this.timeConverter(this.date);
			date = new Date(timeFormat);
			date.setHours(res[0]);
			date.setMinutes(res[1]);
		}

		this.form = this.formBuilder.group({
			dateAndTime: [date, [Validators.required,]],
			duration: [, []],
			typeOfExamination: [, [Validators.required,]],
		});

		if (this.typeOfExamination != -1) {
			this.form.controls['typeOfExamination'].setValue(this.typeOfExamination);
			this.setPriceFromTypeOfExamination()
		}
	}

	loadData() {
		let promise = new Promise((resolve, reject) => {
			this.loadClinicInfo().then(() => {
				this.loadDoctorInfo().then(() => {
					this.loadTypesOfExamination().then(() => {
						resolve();
					}, () => reject());
				}, () => reject());
			}, () => reject());

		});
		return promise;
	}

	loadClinicInfo() {
		let promise = new Promise((resolve, reject) => {
			this.clinicService.getClinic(this.clinicID).subscribe(
				(data) => { this.clinic = data; resolve(); },
				(error) => { alert(error); reject(); }
			);
		});
		return promise;
	}

	loadDoctorInfo() {
		let promise = new Promise((resolve, reject) => {
			let clinic_id = this.userService.getUser().clinic_id;
			this.doctorService.getDoctorWithId(this.doctorID).subscribe(
				(data) => { this.doctor = data; resolve(); },
				(error) => { alert(error); reject(); }
			);
		});
		return promise;
	}

	loadTypesOfExamination() {
		let promise = new Promise((resolve, reject) => {
			this.clinicService.getTypesOfExamination(this.clinicID).subscribe(
				(data) => { this.ExaminationTypes = data; resolve(); },
				(error) => { alert(error); reject(); }
			);
		});
		return promise;
	}

	setPriceFromTypeOfExamination() {
		let type = this.ExaminationTypes.find(element => element.id == this.form.controls.typeOfExamination.value);
		this.price = type.price;
	}

	onSubmit() {
		this.submitted = true;

		if (this.form.invalid) {
			return;
		}

		let appointment = {
			id: null,
			startingDateAndTime: this.form.controls.dateAndTime.value.getTime().toString().substr(0, 10),
			endingDateAndTime: 0,
			duration: 0, //this.form.controls.duration.value * 60 * 1000,
			typeOfExamination: { id: this.form.controls.typeOfExamination.value },
			ordination: null,
			price: this.price,
			clinic: { id: this.clinicID },
			patient: { id: this.userService.getUser().id },
			doctors: [{ id: this.doctorID }]
		}

		this.appointmentService.scheduleNewAppointment(appointment, 'patient').subscribe(
			(data: any) => {
				alert("Appointment request sent");
				this.router.navigate([`../pending_appointments`], { relativeTo: this.activatedRoute });
			},
			(error) => { alert(error); }
		)
	}

	cancelChanges() {
	}

	ngOnDestroy() {
	}

}
