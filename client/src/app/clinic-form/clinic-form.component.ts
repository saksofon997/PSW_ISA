import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clinic-form',
  templateUrl: './clinic-form.component.html',
  styleUrls: ['./clinic-form.component.css']
})
export class ClinicFormComponent implements OnInit {
  name: String;
  address: String;
  city: String;
  state: String;
  description: String;
  submitted: String;

  constructor(private router: Router) { }
  
  ngOnInit() {
  }
  OnSubmit(){
    
  }

}
