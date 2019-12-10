import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-personal-profile',
  templateUrl: './patient-personal-profile.component.html',
  styleUrls: ['./patient-personal-profile.component.css']
})
export class PatientPersonalProfileComponent implements OnInit {
  patient: any;
  form: FormGroup;
  change: boolean;
  submitted: boolean;
  constructor(private patientService: PatientService,
              private formBuilder: FormBuilder, 
              private router: Router) { }

  ngOnInit() {
    this.getPatientInfo();
  }
  getPatientInfo(){
    this.patientService.getPatient().subscribe(
      (data) => {
        this.patient=data;
        this.form = this.formBuilder.group({
          name: [this.patient.name, [Validators.required, ]],
          surname: [this.patient.surname, [Validators.required]],
          email:  [this.patient.email,[Validators.required, Validators.email]],
          address:  [this.patient.address,[Validators.required]],
          city:  [this.patient.city,[Validators.required]],
          state:  [this.patient.state,[Validators.required]],
          phoneNumber:  [this.patient.phoneNumber,[Validators.required]],
          upin:  [this.patient.upin,[Validators.required,Validators.minLength(13),Validators.maxLength(13)]]
        });
        this.change=true;
      },
      (error) => {
        alert(error);
      }
    );
  }

  enableChangeInfo(){
    this.change=!this.change;
  }

  cancelChanges(){
    this.change=!this.change;
    this.getPatientInfo();
  }

  showChangePasswordForm(){
    this.router.navigate(['../change-password']);
  }

  onSubmit(){
    this.submitted = true;
		if (this.form.invalid) {
			return;
		}
		
		var patient = {
      id: this.patient.id,
			email: this.form.controls.email.value,
      name: this.form.controls.name.value,
      surname: this.form.controls.surname.value,
      address: this.form.controls.address.value,
      city: this.form.controls.city.value,
      state: this.form.controls.state.value,
      phoneNumber: this.form.controls.phoneNumber.value,
      upin: this.form.controls.upin.value
		}

    this.patientService.changePatient(patient).subscribe(
      (data) => {this.change=!this.change; return;},
      (error) => { alert(error);}
    );

  }
}
