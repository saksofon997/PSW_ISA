import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ClinicCenterAdminService } from 'src/app/services/clinic-center-admin.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-personal-profile',
  templateUrl: './admin-personal-profile.component.html',
  styleUrls: ['./admin-personal-profile.component.css']
})
export class AdminPersonalProfileComponent implements OnInit {
  admin: any;
  loginForm: FormGroup;
  change: boolean;
  submitted: boolean;
  constructor(private clinicCenterAdminService: ClinicCenterAdminService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cookieService: CookieService) { }

  ngOnInit() {
    this.getAdminInfo();
  }

  getAdminInfo() {
    this.clinicCenterAdminService.getAdminKc().subscribe((data) => {
      this.admin = data;
      this.loginForm = this.formBuilder.group({
        name: [this.admin.name, [Validators.required,]],
        surname: [this.admin.surname, [Validators.required]],
        email: [this.admin.email, [Validators.required, Validators.email]],
        address: [this.admin.address, [Validators.required]],
        city: [this.admin.city, [Validators.required]],
        state: [this.admin.state, [Validators.required]],
        phoneNumber: [this.admin.phoneNumber, [Validators.required]],
        upin: [this.admin.upin, [Validators.required, Validators.minLength(13), Validators.maxLength(13)]]
      });
      this.change = true;
    });;
  }
  enableChangeInfo() {
    this.change = !this.change;
  }
  cancelChanges() {
    this.change = !this.change;
    this.getAdminInfo();
  }
  showChangePasswordForm() {
    this.router.navigate(['../change-password']);
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    var adminKc = {
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

    this.clinicCenterAdminService.changeAdminKc(adminKc).subscribe(
      (data) => { this.change = !this.change; return; },
      (error) => { alert(error); }
    );

  }
}
