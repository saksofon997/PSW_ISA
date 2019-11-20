import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ClinicAdminService } from 'src/app/services/clinic-admin.service';

@Component({
  selector: 'app-adminC-dashboard',
  templateUrl: './adminC-dashboard.component.html',
  styleUrls: ['./adminC-dashboard.component.css']
})
export class AdminCDashboardComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private cookieService: CookieService,
              private clinicAdminService: ClinicAdminService,
              private userService: UserService) { }

  ngOnInit() {
  }
  showClinicInfo(){
    let clinicID = this.userService.getUser().clinic_id;
    this.clinicAdminService.getAdminC().subscribe(
      
    );

    console.log(clinicID);
    this.clinicAdminService.getClinic(clinicID).subscribe(
      (data)=>{
        this.router.navigate(['clinic'], { relativeTo: this.activatedRoute, state: {data: data}});
      },
      (error) => {
        alert(error);
      }
    );
  }
}
