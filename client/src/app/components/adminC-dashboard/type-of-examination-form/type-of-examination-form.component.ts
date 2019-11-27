import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClinicalCenterService } from 'src/app/services/clinical-center.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ClinicService } from 'src/app/services/clinic.service';
import { UserService } from 'src/app/services/user.service';


@Component({
	selector: 'app-type-of-examination-form',
	templateUrl: './type-of-examination-form.component.html',
	styleUrls: ['./type-of-examination-form.component.css']
})
export class TypeOfExaminationFormComponent implements OnInit {
	form: FormGroup;
	typeOfExamination_id: any;
	change: string;
	submitted = false;

	constructor(private formBuilder: FormBuilder,
		private clinicService: ClinicService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private userService: UserService) { }

	ngOnInit() {
		var typeOfExamination = history.state.data;
		var name = "";
		var price = 0;
		this.change = 'Add';

		if (typeOfExamination) {
			this.typeOfExamination_id = typeOfExamination.id;
			name = typeOfExamination.name;
			price = typeOfExamination.price;
			this.change = 'Change';
		}

		this.form = this.formBuilder.group({
			name: [name, [Validators.required]],
			price: [price, [Validators.required]]
		});
	}

	onSubmit() {
		this.submitted = true;

		if (this.form.invalid) {
			return;
		}

		var typeOfExamination = {
			id: this.typeOfExamination_id,
			name: this.form.controls.name.value,
			price: this.form.controls.price.value,
			clinic_id: this.userService.getUser().clinic_id
		}

		if (this.change === 'Change') {
			this.clinicService.editTypeOfExamination(typeOfExamination).subscribe(
				(data) => { this.router.navigate(['../types_of_examination'], { relativeTo: this.activatedRoute }); },
				(error) => { alert(error); return; }
			);
		} else {
			this.clinicService.addTypeOfExamination(typeOfExamination, typeOfExamination.clinic_id).subscribe(
				(data) => { this.router.navigate(['../types_of_examination'], { relativeTo: this.activatedRoute }); },
				(error) => { alert(error); return; }
			);
		}
	}

}