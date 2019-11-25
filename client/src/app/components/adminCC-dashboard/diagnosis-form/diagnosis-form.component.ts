import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClinicalCenterService } from 'src/app/services/clinical-center.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-diagnosis-form',
  templateUrl: './diagnosis-form.component.html',
  styleUrls: ['./diagnosis-form.component.css']
})
export class DiagnosisFormComponent implements OnInit {
	form: FormGroup;
	//diagnosis_id: any;
	change: string;
	submitted = false;

	constructor(private formBuilder: FormBuilder,
		private clinicalCenterService: ClinicalCenterService,
		private router: Router,
		private activatedRoute: ActivatedRoute ) { }

	ngOnInit() {
		var diagnosis = history.state.data;
		var code = "";
		var description = "";
		this.change='Add';
		
		if (diagnosis){
			//this.diagnosis_id = medication.id;
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
		this.submitted = true;

		if (this.form.invalid) {
			return;
		}
		
		var diagnosis = {
			//id: this.diagnosis_id,
			code: this.form.controls.code.value,
			description: this.form.controls.description.value
    }

		if (this.change === 'Change'){
			this.clinicalCenterService.editDiagnosis(diagnosis).subscribe(
				(data) => {this.router.navigate(['../diagnoses'], { relativeTo: this.activatedRoute });},
				(error) => { alert(error); return;}
			);
		} else {
			this.clinicalCenterService.addDiagnosis(diagnosis).subscribe(
				(data) => {this.router.navigate(['../diagnoses'], { relativeTo: this.activatedRoute });},
				(error) => { alert(error); return;}
			);
		}
	}

}