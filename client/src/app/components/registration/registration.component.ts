import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from './must-match.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  loginForm: FormGroup;
	loading = false;
	submitted = false;
	returnUrl: string = '';

  constructor(
    private formBuilder: FormBuilder,
		private route: ActivatedRoute,
		private router: Router,
		private userService: UserService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required, ]],
      surname: ['', [Validators.required]],
      email:  ['',[Validators.required, Validators.email]],
      address:  ['',[Validators.required]],
      city:  ['',[Validators.required]],
      state:  ['',[Validators.required]],
      phoneNumber:  ['',[Validators.required]],
      upin:  ['',[Validators.required,Validators.minLength(13),Validators.maxLength(13)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(24)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    var registerRequest = {
			email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value,
      name: this.loginForm.controls.name.value,
      surname: this.loginForm.controls.surname.value,
      address: this.loginForm.controls.address.value,
      city: this.loginForm.controls.city.value,
      state: this.loginForm.controls.state.value,
      phoneNumber: this.loginForm.controls.phoneNumber.value,
      upin: this.loginForm.controls.upin.value
		}

    this.loading = true;
    this.userService.register(registerRequest)
      .pipe()
      .subscribe(
        data => {
          //this.router.navigate([this.returnUrl]);
        },
        error => {
          this.loading = false;
          alert(error);
        });
  }

}
