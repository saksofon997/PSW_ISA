import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ClinicalCenterService } from 'src/app/services/clinical-center.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-medication-form',
	templateUrl: './medication-form.component.html',
	styleUrls: ['./medication-form.component.css']
})
export class MedicationFormComponent implements OnInit {
	loginForm: FormGroup;
	medication_id: any;
	change: string;
	submitted = false;

	constructor(private formBuilder: FormBuilder,
		private clinicalCenterService: ClinicalCenterService,
		private router: Router,
		private activatedRoute: ActivatedRoute ) { }

	ngOnInit() {
		var medication = history.state.data;
		var code = "";
		var name = "";
		this.change='Add';
		
		if (medication){
			this.medication_id = medication.id;
			code = medication.code;
			name = medication.name;
			this.change = 'Change';
		}

		this.loginForm = this.formBuilder.group({
			code: [code, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
			name: [name, [Validators.required]]
		});
	}

	onSubmit() {
		this.submitted = true;

		if (this.loginForm.invalid) {
			return;
		}
		
		var medication = {
			id: this.medication_id,
			code: this.loginForm.controls.code.value,
			name: this.loginForm.controls.name.value
		}

		if (this.medication_id){
			this.clinicalCenterService.editMedication(medication).subscribe(
				(data) => {this.router.navigate(['../medications'], { relativeTo: this.activatedRoute });},
				(error) => { alert(error); return;}
			);
		} else {
			this.clinicalCenterService.addMedication(medication).subscribe(
				(data) => {this.router.navigate(['../medications'], { relativeTo: this.activatedRoute });},
				(error) => { alert(error); return;}
			);
		}
	}

}
