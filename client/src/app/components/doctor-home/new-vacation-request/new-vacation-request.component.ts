import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ClinicService } from 'src/app/services/clinic.service';
import { PatientService } from 'src/app/services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VacationService } from 'src/app/services/vacation.service';

@Component({
  selector: 'app-new-vacation-request',
  templateUrl: './new-vacation-request.component.html',
  styleUrls: ['./new-vacation-request.component.css']
})
export class NewVacationRequestComponent implements OnInit {

  doctor: any;

  form: FormGroup;
	submitted: boolean;
	private sub: any;
	constructor(private formBuilder: FormBuilder,
		private userService: UserService,
    private router: Router,
		private activatedRoute: ActivatedRoute,
		private vacationService: VacationService) { }

  ngOnInit() {
    this.createFormGroup();
  }

  createFormGroup() {
		this.form = this.formBuilder.group({
			startingDateAndTime: [, [Validators.required,]],
			endingDateAndTime: [, [Validators.required,]],
		});

  }
  
  onSubmit() {
		this.submitted = true;

		if (this.form.invalid) {
			return;
		}

		let staff = this.userService.getUser();
		if (!staff) {
			alert("Invalid user");
			return;
    	}

		let vacation = {
			startDate: this.form.controls.startingDateAndTime.value.getTime() / 1000,
			endDate: this.form.controls.endingDateAndTime.value.getTime() / 1000,
			staffId: this.userService.getUser().id
		}
		
		alert(vacation.startDate);
    
    this.vacationService.sendRequest(vacation).subscribe(
      (data) => { this.router.navigate(['../profile'], { relativeTo: this.activatedRoute }); },
      (error) => { alert(error); }
    );
  }
  
	cancelChanges(){

  }

}
