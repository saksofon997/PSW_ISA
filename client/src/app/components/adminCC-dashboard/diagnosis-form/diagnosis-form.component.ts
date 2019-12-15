import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClinicalCenterService } from 'src/app/services/clinical-center.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
	selector: 'app-diagnosis-form',
	templateUrl: './diagnosis-form.component.html',
	styleUrls: ['./diagnosis-form.component.css']
})
export class DiagnosisFormComponent implements OnInit {
	form: FormGroup;
	diagnosis_id: any;
	change: string;
	submitted = false;

	constructor(private formBuilder: FormBuilder,
		private clinicalCenterService: ClinicalCenterService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private confirmationDialogService: DialogService) { }

	ngOnInit() {
		var diagnosis = history.state.data;
		var code = "";
		var description = "";
		this.change = 'Add';

		if (diagnosis) {
			this.diagnosis_id = diagnosis.id;
			code = diagnosis.code;
			description = diagnosis.description;
			this.change = 'Change';
		}

		this.form = this.formBuilder.group({
			code: [code, [Validators.required]],
			description: [description, [Validators.required]]
		});
	}

	onSubmit() {
	let message = this.diagnosis_id ? 'edit' : 'add';
	this.confirmationDialogService.confirm('Please confirm', 'Are you sure you want to ' + message + ' diagnosis with code: ' + this.form.controls.code.value + ' ?', false)
		.then((confirmed) => {
			if (confirmed.submited) {
				this.submitOrEdit();
			}
		});
	}
	submitOrEdit() {
		if (this.form.invalid) {
			return;
		}

		var diagnosis = {
			id: this.diagnosis_id,
			code: this.form.controls.code.value,
			description: this.form.controls.description.value
		}

		if (this.diagnosis_id) {
			this.clinicalCenterService.editDiagnosis(diagnosis).subscribe(
				(data) => { this.router.navigate(['../diagnoses'], { relativeTo: this.activatedRoute }); },
				(error) => { alert(error); return; }
			);
		} else {
			this.clinicalCenterService.addDiagnosis(diagnosis).subscribe(
				(data) => { this.router.navigate(['../diagnoses'], { relativeTo: this.activatedRoute }); },
				(error) => { alert(error); return; }
			);
		}
	}

}