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
    this.clinicService.addClinic(this.name, this.address, this.city, this.state, this.description);

    this.router.navigate(['../clinics'], { relativeTo: this.activatedRoute });
  }

}
