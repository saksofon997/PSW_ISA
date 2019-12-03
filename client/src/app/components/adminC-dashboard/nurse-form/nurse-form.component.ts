import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nurse-form',
  templateUrl: './nurse-form.component.html',
  styleUrls: ['./nurse-form.component.css']
})
export class NurseFormComponent implements OnInit {

  loginForm: FormGroup;

  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private clinicService: ClinicService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    var nurse = history.state.data;

    var email = "";
    var name = "";
    var surname = "";
    var address = "";
    var city = "";
    var state = "";
    var phoneNr = "";
    var shiftStart = "";
    var shiftEnd = "";
    var upin = "";


    this.loginForm = this.formBuilder.group({
      email: [email, [Validators.required, Validators.email]],
      name: [name, [Validators.required]],
      surname: [surname, [Validators.required]],
      address: [address, [Validators.required]],
      city: [city, [Validators.required]],
      state: [state, [Validators.required]],
      phoneNr: [phoneNr, [Validators.required]],
      shiftStart: [shiftStart, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      shiftEnd: [shiftEnd, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      upin: [upin, [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    var nurse = {
      email: this.loginForm.controls.email.value,
      name: this.loginForm.controls.name.value,
      surname: this.loginForm.controls.surname.value,
      address: this.loginForm.controls.address.value,
      city: this.loginForm.controls.city.value,
      state: this.loginForm.controls.state.value,
      phoneNr: this.loginForm.controls.phoneNr.value,
      shiftStart: this.loginForm.controls.shiftStart.value,
      shiftEnd: this.loginForm.controls.shiftEnd.value,
      upin: this.loginForm.controls.upin.value,
      clinic_id: this.userService.getUser().clinic_id
    }


    this.clinicService.addNurse(nurse).subscribe(
      (data) => { this.router.navigate(['../nurse_listing'], { relativeTo: this.activatedRoute }); },
      (error) => { alert(error); return; }
    );


  }

}
