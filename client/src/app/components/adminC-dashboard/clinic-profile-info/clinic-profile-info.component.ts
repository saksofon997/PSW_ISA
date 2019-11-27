import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-clinic-profile-info',
  templateUrl: './clinic-profile-info.component.html',
  styleUrls: ['./clinic-profile-info.component.css']
})
export class ClinicProfileInfoComponent implements OnInit {

  clinicID: any;
  clinic: any;
  clinicForm: FormGroup;
  formDisabled: boolean;
  submitted: boolean;

  constructor(private clinicService: ClinicService,
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.clinic = history.state.data;

      var name = "";
      var address = "";
      var city = "";
      var state = "";
      var description = "";
      
      if (this.clinic) {
        this.clinicID = this.clinic.id;
        name = this.clinic.name;
        address = this.clinic.address;
        city = this.clinic.city;
        state = this.clinic.state;
        description = this.clinic.description;
      }

    this.clinicForm = this.formBuilder.group({
      name: [name, [Validators.required]],
      address: [address, [Validators.required]],
      city:  [city,[Validators.required]],
      state:  [state,[Validators.required]],
      description:  [description]
    });

    this.formDisabled=true;
  }

  enableChangeInfo(){
    this.formDisabled = !this.formDisabled;
  }

  onSubmit(){
    this.submitted = true;

		if (this.clinicForm.invalid) {
			return;
		}
		
		var clinic = {
      id: null,
			name: this.clinicForm.controls.name.value,
      address: this.clinicForm.controls.address.value,
      city: this.clinicForm.controls.city.value,
      state: this.clinicForm.controls.state.value,
      description: this.clinicForm.controls.description.value,
		}

    if (this.clinicID){
      clinic.id = this.clinicID
			this.clinicService.changeClinicInfo(clinic).subscribe(
				(data) => { this.enableChangeInfo(); /* this.router.navigate(['../clinics'], { relativeTo: this.activatedRoute }); */},
				(error) => { alert(error); return;}
			);
		} else {
			this.clinicService.addClinic(clinic).subscribe(
				(data) => {this.router.navigate(['../clinics'], { relativeTo: this.activatedRoute });},
				(error) => { alert(error); return;}
			);
		}

  }

}
