import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  doctor: any;
  loginForm: FormGroup;
  change: boolean;
  submitted: boolean;
  constructor(private doctorService: DoctorService,
              private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private cookieService: CookieService) { }

  ngOnInit() {
    this.getDoctorInfo();
  }

  getDoctorInfo(){
    this.doctorService.getDoctor().subscribe((data) => {
      this.doctor = data;
      this.loginForm = this.formBuilder.group({
        name: [this.doctor.name, [Validators.required, ]],
        surname: [this.doctor.surname, [Validators.required]],
        email:  [this.doctor.email,[Validators.required, Validators.email]],
        address:  [this.doctor.address,[Validators.required]],
        city:  [this.doctor.city,[Validators.required]],
        state:  [this.doctor.state,[Validators.required]],
        phoneNumber:  [this.doctor.phoneNumber,[Validators.required]],
        upin:  [this.doctor.upin,[Validators.required,Validators.minLength(13),Validators.maxLength(13)]]
      });
      this.change=true;
    });
  }
  showChangePasswordForm(){
    this.router.navigate(['../change-password']);
  }
  enableChangeInfo(){
    this.change=!this.change;
  }
  cancelChanges(){
    this.change=!this.change;
    this.getDoctorInfo();
  }
  onSubmit(){
    this.submitted = true;
		if (this.loginForm.invalid) {
			return;
		}
		
		var doctor = {
      id: JSON.parse(this.cookieService.get('user'))['id'],
			email: this.loginForm.controls.email.value,
      name: this.loginForm.controls.name.value,
      surname: this.loginForm.controls.surname.value,
      address: this.loginForm.controls.address.value,
      city: this.loginForm.controls.city.value,
      state: this.loginForm.controls.state.value,
      phoneNumber: this.loginForm.controls.phoneNumber.value,
      upin: this.loginForm.controls.upin.value
		}

    this.doctorService.changeDoctor(doctor).subscribe(
      (data) => {this.change=!this.change; return;},
      (error) => { alert(error);}
    );

  }
}
