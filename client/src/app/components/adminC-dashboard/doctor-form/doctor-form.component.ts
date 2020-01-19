import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ClinicService } from 'src/app/services/clinic.service';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})
export class DoctorFormComponent implements OnInit {

  doctorForm: FormGroup;
  typesOfExamination: any;

  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private clinicService: ClinicService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    this.loadTypesOfExamination();

    var doctor = history.state.data;

    var email = "";
    var name = "";
    var surname = "";
    var address = "";
    var city = "";
    var state = "";
    var phoneNumber = "";
    var shiftStart = "";
    var shiftEnd = "";
    var upin = "";
    var specialization = 0;

    this.doctorForm = this.formBuilder.group({
      email: [email, [Validators.required, Validators.email]],
      name: [name, [Validators.required]],
      surname: [surname, [Validators.required]],
      address: [address, [Validators.required]],
      city: [city, [Validators.required]],
      state: [state, [Validators.required]],
      phoneNumber: [phoneNumber, [Validators.required]],
      shiftStart: [shiftStart, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      shiftEnd: [shiftEnd, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      upin: [upin, [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      specialization: [specialization]
    });
  }

  loadTypesOfExamination() {
			let clinic_id = this.userService.getUser().clinic_id;
			this.clinicService.getTypesOfExamination(clinic_id).subscribe(
				(data) => { this.typesOfExamination = data; },
				(error) => { alert(error); }
			);
	}

  onSubmit() {
    this.submitted = true;

    if (this.doctorForm.invalid) {
      return;
    }

    var doctor = {
      email: this.doctorForm.controls.email.value,
      name: this.doctorForm.controls.name.value,
      surname: this.doctorForm.controls.surname.value,
      address: this.doctorForm.controls.address.value,
      city: this.doctorForm.controls.city.value,
      state: this.doctorForm.controls.state.value,
      phoneNumber: this.doctorForm.controls.phoneNumber.value,
      shiftStart: this.doctorForm.controls.shiftStart.value,
      shiftEnd: this.doctorForm.controls.shiftEnd.value,
      upin: this.doctorForm.controls.upin.value,
      clinic_id: this.userService.getUser().clinic_id,
      specialization: {
        id: this.doctorForm.controls.specialization.value
      }
    }


    this.clinicService.addDoctor(doctor).subscribe(
      (data) => { this.router.navigate(['../doctors'], { relativeTo: this.activatedRoute }); },
      (error) => { alert(error); return; }
    );


  }

}