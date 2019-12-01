import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-ordination-form',
  templateUrl: './ordination-form.component.html',
  styleUrls: ['./ordination-form.component.css']
})
export class OrdinationFormComponent implements OnInit {
  form: FormGroup;
	ordination_id: any;
	change: string;
	submitted = false;

  constructor(
    private formBuilder: FormBuilder,
		private clinicService: ClinicService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private userService: UserService
  ) { }

  ngOnInit() {
    var ordination = history.state.data;
		var name = "";
		var number = 0;
		this.change = 'Add';

		if (ordination) {
			this.ordination_id = ordination.id;
			name = ordination.name;
			number = ordination.number;
			this.change = 'Change';
		}

		this.form = this.formBuilder.group({
			name: [name, [Validators.required]],
			number: [number, [Validators.required]]
		});
  }

  onSubmit() {
		this.submitted = true;

		if (this.form.invalid) {
			return;
		}

		var ordination = {
			id: this.ordination_id,
			name: this.form.controls.name.value,
			number: this.form.controls.number.value,
			clinic_id: this.userService.getUser().clinic_id
		}

		if (this.change === 'Change') {
			this.clinicService.editOrdination(ordination).subscribe(
				(data) => { this.router.navigate(['../ordinations'], { relativeTo: this.activatedRoute }); },
				(error) => { alert(error); return; }
			);
		} else {
			this.clinicService.addOrdination(ordination, ordination.clinic_id).subscribe(
				(data) => { this.router.navigate(['../ordinations'], { relativeTo: this.activatedRoute }); },
				(error) => { alert(error); return; }
			);
		}
	}

}
