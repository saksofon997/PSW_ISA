import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ClinicService } from 'src/app/services/clinic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
	selector: 'app-new-available-appointment-page',
	templateUrl: './new-available-appointment-page.component.html',
	styleUrls: ['./new-available-appointment-page.component.css']
})
export class NewAvailableAppointmentPageComponent implements OnInit {
	doctors: any;
	patient: any;
	typesOfExamination: any;
	ordinations: any;

	form: FormGroup;
	submitted: boolean;
	constructor(private formBuilder: FormBuilder,
		private userService: UserService,
		private clinicService: ClinicService,
		private appointmentService: AppointmentService,
		private router: Router,
		private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.loadData().then(() => {
			this.createFormGroup();
		}, () => alert("Error loading data"));
	}

	loadData() {
		let promise = new Promise((resolve, reject) => {
			this.loadTypesOfExamination().then(() => {
				this.loadOrdinations().then(() => {
					this.loadClinicDoctors().then(() => {
						resolve();
					}, () => reject());
				}, () => reject());
			}, () => reject());

		});
		return promise;
	}

	loadClinicDoctors() {
		let promise = new Promise((resolve, reject) => {
			let clinic_id = this.userService.getUser().clinic_id;
			this.clinicService.getDoctors(clinic_id).subscribe(
				(data) => { this.doctors = data; resolve(); },
				(error) => { alert(error); reject(); }
			);
		});
		return promise;
	}

	loadTypesOfExamination() {
		let promise = new Promise((resolve, reject) => {
			let clinic_id = this.userService.getUser().clinic_id;
			this.clinicService.getTypesOfExamination(clinic_id).subscribe(
				(data) => { this.typesOfExamination = data; resolve(); },
				(error) => { alert(error); reject(); }
			);
		});
		return promise;
	}

	loadOrdinations() {
		let promise = new Promise((resolve, reject) => {
			let clinic_id = this.userService.getUser().clinic_id;
			this.clinicService.getOrdinations(clinic_id).subscribe(
				(data) => { this.ordinations = data; resolve(); },
				(error) => { alert(error); reject(); }
			);
		});
		return promise;
	}

	createFormGroup() {
		this.form = this.formBuilder.group({
			dateAndTime: [, [Validators.required,]],
			duration: [, [Validators.required,]],
			typeOfExamination: [, [Validators.required,]],
			ordination: [, [Validators.required,]],
			price: [, [Validators.required,]],
			discount: [0, []],
			doctor: [, [Validators.required,]]
		}, { validator: checkIfDiscountIsLargerThanPrice });

	}

	setPriceFromTypeOfExamination() {
		let type = this.typesOfExamination.find(element => element.id == this.form.controls.typeOfExamination.value);
		if (!type) {
			this.form.controls['price'].setValue("");
			return;
		}
		this.form.controls['price'].setValue(type.price);
	}

	discountValidator(control: FormControl) {
		if (this.form.controls['discount'].value > this.form.controls['price'].value) {
			return null
		}
	}

	onSubmit() {
		this.submitted = true;

		if (this.form.invalid) {
			return;
		}

		let admin = this.userService.getUser();
		if (!admin) {
			alert("Invalid user");
			return;
		}
		let clinic_id = admin.clinic_id;

		let appointment = {
			startingDateAndTime: this.form.controls.dateAndTime.value.getTime() / 1000,
			duration: this.form.controls.duration.value * 60 * 1000,
			typeOfExamination: { id: this.form.controls.typeOfExamination.value },
			ordination: { id: this.form.controls.ordination.value },
			price: this.form.controls.price.value,
			discount: this.form.controls.discount.value,
			clinic: { id: clinic_id },
			doctors: [{ id: this.form.controls.doctor.value }]
		}


		this.appointmentService.createAvailableAppointment(appointment).subscribe(
			(data) => { this.router.navigate(['../available_appointments'], { relativeTo: this.activatedRoute }); },
			(error) => { alert(error); }
		);

	}
	cancelChanges() {
		this.router.navigate(['../available_appointments'], { relativeTo: this.activatedRoute });
	}
}

function checkIfDiscountIsLargerThanPrice(c: AbstractControl) {
	if (c.get('discount').value <= c.get('price').value) {
		return null;
	} else {
		return { 'invalidDiscount': true };
	}
}