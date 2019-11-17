import { ClinicService } from '../../services/clinic.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  clinics: any;
  clinicHeaders = ['Name','Address','City','State','Description'];
  constructor() { }

  ngOnInit() {
  }
  loadClinics(){
    
  }
}

