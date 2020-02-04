import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { ClinicCenterAdminService } from 'src/app/services/clinic-center-admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-clinic-center-admins-listing',
  templateUrl: './clinic-center-admins-listing.component.html',
  styleUrls: ['./clinic-center-admins-listing.component.css']
})
export class ClinicCenterAdminsListingComponent implements OnInit {

	admins: any;
	currentUser:any;
	clinicAdminHeaders = ['Name','Surname','E-mail','Address','City','State','Phone Number'];

  constructor(private clinicService: ClinicService,
	private clinicCenterAdminService: ClinicCenterAdminService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
    private confirmationDialogService: DialogService,
    private cookieService: CookieService) {}

	ngOnInit() {
      this.getClinicAdministrators();
      this.currentUser = JSON.parse(this.cookieService.get('user'));
	}

	getClinicAdministrators() {
		this.clinicCenterAdminService.getAdminsKc().subscribe((data) => {
			this.admins = data;
		});
	}
	deleteAdmin(admin){
		this.confirmationDialogService.confirm('Please confirm', 'Are you sure you want to delete clinic center administrator: ' + admin.name +' '+admin.surname + ' ?', false)
		.then((confirmed) => {
			if (confirmed.submited) {
				this.clinicCenterAdminService.deleteClinicCenterAdmin(admin).subscribe(
					(data) => {
						this.getClinicAdministrators();
						alert("Administrator succesfully deleted!");
					}, // Dodati feedback za uspesno brisanje
					(error)=> {alert(error);}
				)
			}
		});
	}
	addAdministrator(){
		this.router.navigate(['../addClinicCenterAdmin'], { relativeTo: this.activatedRoute });
	}
}
