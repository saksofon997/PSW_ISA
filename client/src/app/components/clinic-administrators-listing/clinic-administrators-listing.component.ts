import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clinic-administrators-listing',
  templateUrl: './clinic-administrators-listing.component.html',
  styleUrls: ['./clinic-administrators-listing.component.css']
})
export class ClinicAdministratorsListingComponent implements OnInit {
	clinicID: any;
	clinicName: any;
	admins: any;
	
	clinicAdminHeaders = ['Name','Surname','E-mail','Address','City','State','Phone Number'];

  constructor(private clinicService: ClinicService,
		private router: Router,
		private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe((params)=> {
			this.clinicID = params.id;
			this.clinicName = params.name;

			this.getClinicAdministrators();
		});
		
	}

	getClinicAdministrators() {
		this.clinicService.getClinicAdmins(this.clinicID).subscribe((data) => {
			this.admins = data;
		});
	}
}