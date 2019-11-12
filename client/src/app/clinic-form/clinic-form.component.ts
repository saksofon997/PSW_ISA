import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ClinicService} from '../services/clinic.service'
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

  constructor(private router: Router, 
    private clinicService: ClinicService) { }
  
  ngOnInit() {
  }
  public onSubmit(){
    this.clinicService.addClinic(this.name,this.address,this.city,this.state,this.description);
    
  }

}
