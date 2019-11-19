import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-change-password',
	templateUrl: './change-password.component.html',
	styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

	form: FormGroup;
	submitted = false;

	constructor(
		private userService: UserService,
		private router: Router,
		private formBuilder: FormBuilder
	) {
	}

	ngOnInit() {

		this.form = this.formBuilder.group({
			oldPassword: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(24)])],
			newPassword: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(24)])]
		});

	}

	onSubmit() {
		this.submitted = true;

		if (this.form.invalid) {
			return;
		}

		this.userService.changePassowrd(this.form.value)
			.subscribe(() => {
				this.userService.logout()
				this.router.navigate(['/login', { msgType: 'success', msgBody: 'Success! Please sign in with your new password.' }]);
			}, error => {
				this.submitted = false;
				alert('Invalid old password.');
			});

	}

	canExit(): boolean {
		const passwordChanged = this.userService.passwordChanged;

		if (passwordChanged){
			return true;
		} else {
			alert("You need to change your password on first login!")
			return false;
		}
	}

}