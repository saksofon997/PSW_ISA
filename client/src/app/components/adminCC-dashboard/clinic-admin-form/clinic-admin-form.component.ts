import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClinicService } from 'src/app/services/clinic.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-clinic-admin-form',
  templateUrl: './clinic-admin-form.component.html',
  styleUrls: ['./clinic-admin-form.component.css']
})
export class ClinicAdminFormComponent implements OnInit {
  form: FormGroup;
  admin: any;
  clinicID: any;
  clinicName: any;
  constructor(private router: Router,
              private clinicService: ClinicService,
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
    this.activatedRoute.params.subscribe((params)=> {
      this.clinicID = params.id;
      this.clinicName=params.name
		});
  }
  public onSubmit(){
    this.submitted = true;
    var adminC = {
      id: null,
			email: this.form.controls.email.value,
      name: this.form.controls.name.value,
      surname: this.form.controls.surname.value,
      address: this.form.controls.address.value,
      city: this.form.controls.city.value,
      state: this.form.controls.state.value,
      phoneNumber: this.form.controls.phoneNumber.value,
      upin: this.form.controls.upin.value,
      clinic_id: this.clinicID
		}

    this.clinicService.addAdmin(adminC).subscribe(
      (data) => {this.router.navigate(['../clinicAdmins', { id: this.clinicID, name: this.clinicName }], { relativeTo: this.activatedRoute });},
      (error)=>{alert(error)}
    );
    
  }
}
