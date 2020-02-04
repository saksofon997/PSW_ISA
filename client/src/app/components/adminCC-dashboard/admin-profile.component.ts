import { ClinicService } from '../../services/clinic.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  clinics: any;
  clinicHeaders = ['Name','Address','City','State','Description'];
  currentUser:any;
  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(this.cookieService.get('user'));
  }
  loadClinics(){
    
  }
}

