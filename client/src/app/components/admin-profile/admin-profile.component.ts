import { ClinicService } from '../../services/clinic.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  clinics: any;
  constructor(private clinicService: ClinicService) { }

  ngOnInit() {
  }
  loadClinics(){
    this.clinicService.getClinics().subscribe((data)=>{
      this.clinics=data;
    });
  }
}

