import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ClinicalCenterService } from 'src/app/services/clinical-center.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
	selector: 'app-medication-form',
	templateUrl: './medication-form.component.html',
	styleUrls: ['./medication-form.component.css']
})
export class MedicationFormComponent implements OnInit {
	form: FormGroup;
	medication_id: any;
	change: string;
	submitted = false;

	constructor(private formBuilder: FormBuilder,
		private clinicalCenterService: ClinicalCenterService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private confirmationDialogService: DialogService ) { }

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

		this.form = this.formBuilder.group({
			code: [code, [Validators.required]],
			name: [name, [Validators.required]]
		});
	}

	onSubmit() {
		let message = this.medication_id ? 'edit' : 'add';
		this.confirmationDialogService.confirm('Please confirm', 'Are you sure you want to ' + message + ' medication with code: ' + this.form.controls.code.value + ' ?', false)
			.then((confirmed) => {
				if (confirmed.submited) {
					this.submitOrEdit();
				}
			});
		
	}
	submitOrEdit(){
		this.submitted = true;

		if (this.form.invalid) {
			return;
		}
		
		var medication = {
			id: this.medication_id,
			code: this.form.controls.code.value,
			name: this.form.controls.name.value
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
