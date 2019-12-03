import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
import { NurseService } from 'src/app/services/nurse.service';

@Component({
  selector: 'app-nurse-personal-profile',
  templateUrl: './nurse-personal-profile.component.html',
  styleUrls: ['./nurse-personal-profile.component.css']
})
export class NursePersonalProfileComponent implements OnInit {

  nurse: any;
  form: FormGroup;
  change: boolean;
  upinChange: boolean = true;
  submitted: boolean;
  constructor(private nurseService: NurseService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getNurseInfo();
  }
  getNurseInfo(){
    this.nurseService.getNurse().subscribe(
      (data) => {
        this.nurse=data;
        this.form = this.formBuilder.group({
          name: [this.nurse.name, [Validators.required, ]],
          surname: [this.nurse.surname, [Validators.required]],
          email:  [this.nurse.email,[Validators.required, Validators.email]],
          address:  [this.nurse.address,[Validators.required]],
          city:  [this.nurse.city,[Validators.required]],
          state:  [this.nurse.state,[Validators.required]],
          phoneNumber:  [this.nurse.phoneNumber,[Validators.required]],
          upin:  [this.nurse.upin,[Validators.required,Validators.minLength(13),Validators.maxLength(13)]]
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

  onSubmit(){
    this.submitted = true;
		if (this.form.invalid) {
			return;
		}
		
		var nurse = {
      id: this.nurse.id,
			email: this.form.controls.email.value,
      name: this.form.controls.name.value,
      surname: this.form.controls.surname.value,
      address: this.form.controls.address.value,
      city: this.form.controls.city.value,
      state: this.form.controls.state.value,
      phoneNumber: this.form.controls.phoneNumber.value,
      upin: this.form.controls.upin.value
		}

    this.nurseService.changeNurse(nurse).subscribe(
      (data) => {this.change=!this.change; return;},
      (error) => { alert(error);}
    );

  }
}
