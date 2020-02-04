import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ClinicService } from 'src/app/services/clinic.service';
import { CookieService } from 'ngx-cookie-service';
import { ClinicCenterAdminService } from 'src/app/services/clinic-center-admin.service';

@Component({
  selector: 'app-clinic-center-admins',
  templateUrl: './clinic-center-admins.component.html',
  styleUrls: ['./clinic-center-admins.component.css']
})
export class ClinicCenterAdminsComponent implements OnInit {
  form: FormGroup;
  admin: any;
  constructor(private router: Router,
              private clinicCenterAdminService: ClinicCenterAdminService,
              private activatedRoute: ActivatedRoute, 
              private formBuilder: FormBuilder,
              private cookieService: CookieService) { }
  submitted: boolean;
  ngOnInit() {
    
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, ]],
      surname: ['', [Validators.required]],
      email:  ['',[Validators.required, Validators.email]],
      address:  ['',[Validators.required]],
      city:  ['',[Validators.required]],
      state:  ['',[Validators.required]],
      phoneNumber:  ['',[Validators.required]],
      upin:  ['',[Validators.required,Validators.minLength(13),Validators.maxLength(13)]]
    });
  }
  public onSubmit(){
    this.submitted = true;
    var adminCC = {
      id: null,
			email: this.form.controls.email.value,
      name: this.form.controls.name.value,
      surname: this.form.controls.surname.value,
      address: this.form.controls.address.value,
      city: this.form.controls.city.value,
      state: this.form.controls.state.value,
      phoneNumber: this.form.controls.phoneNumber.value,
      upin: this.form.controls.upin.value,
		}

    this.clinicCenterAdminService.addAdmin(adminCC).subscribe(
      (data) => {this.router.navigate(['../clinicCenterAdmins', ], { relativeTo: this.activatedRoute });},
      (error)=>{alert(error)}
    );
    
  }
}
