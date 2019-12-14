import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ClinicAdminService } from 'src/app/services/clinic-admin.service';

@Component({
  selector: 'app-adminC-personal-profile',
  templateUrl: './adminC-personal-profile.component.html',
  styleUrls: ['./adminC-personal-profile.component.css']
})
export class AdminCPersonalProfileComponent implements OnInit {
  admin: any;
  form: FormGroup;
  change: boolean;
  submitted: boolean;
  constructor(private clinicAdminService: ClinicAdminService,
              private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private cookieService: CookieService,
              private userService: UserService) { }

  ngOnInit() {
      this.getAdminInfo();
  }
  getAdminInfo(){
    this.clinicAdminService.getAdminC().subscribe(
      (data) => {
        this.admin=data;
        this.form = this.formBuilder.group({
          name: [this.admin.name, [Validators.required, ]],
          surname: [this.admin.surname, [Validators.required]],
          email:  [this.admin.email,[Validators.required, Validators.email]],
          address:  [this.admin.address,[Validators.required]],
          city:  [this.admin.city,[Validators.required]],
          state:  [this.admin.state,[Validators.required]],
          phoneNumber:  [this.admin.phoneNumber,[Validators.required]],
          upin:  [this.admin.upin,[Validators.required,Validators.minLength(13),Validators.maxLength(13)]]
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
    this.getAdminInfo();
  }
  showChangePasswordForm(){
    this.router.navigate(['../change-password']);
  }
  onSubmit(){
    this.submitted = true;
		if (this.form.invalid) {
			return;
		}
		
		var adminC = {
      id: this.admin.id,
			email: this.form.controls.email.value,
      name: this.form.controls.name.value,
      surname: this.form.controls.surname.value,
      address: this.form.controls.address.value,
      city: this.form.controls.city.value,
      state: this.form.controls.state.value,
      phoneNumber: this.form.controls.phoneNumber.value,
      upin: this.form.controls.upin.value,
      clinic_id: this.admin.clinic_id
		}

    this.clinicAdminService.changeAdminC(adminC).subscribe(
      (data) => {this.change=!this.change; return;},
      (error) => { alert(error);}
    );

  }
}

