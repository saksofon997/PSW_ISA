import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ClinicService} from '../../../services/clinic.service'

@Component({
  selector: 'app-clinic-form',
  templateUrl: './clinic-form.component.html',
  styleUrls: ['./clinic-form.component.css']
})
export class ClinicFormComponent implements OnInit {
  name: string;
  address: string;
  city: string;
  state: string;
  description: string;
  submitted: string;
  test: boolean;
  constructor(private router: Router,
              private clinicService: ClinicService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.test=true;
  }
  public onSubmit(){
    var clinic = {
      name : this.name,
      address : this.address,
      city : this.city,
      state : this.state,
      description : this.description
    }
    this.clinicService.addClinic(clinic);

    this.router.navigate(['../clinics'], { relativeTo: this.activatedRoute });
  }

}
