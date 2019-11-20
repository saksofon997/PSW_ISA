import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-doctor-listing',
  templateUrl: './doctor-listing.component.html',
  styleUrls: ['./doctor-listing.component.css']
})
export class DoctorListingComponent implements OnInit {
  doctorsHeaders = ['Name', 'Surname', 'Phone Number', 'Shift starts', 'Shift ends', 'Stars', 'Reviews'];
  doctors: any;
  navigationSubscription: any;
  clinicID: any;
  clinicName: any;
  constructor(private clinicService: ClinicService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.clinicID = this.userService.getUser().clinic_id;
        this.getDoctors();
      }
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.clinicID = params.id;
      this.clinicName = params.name;
    });
  }
  getDoctors() {
    this.clinicID = this.userService.getUser().clinic_id;
    this.clinicService.getDoctors(this.clinicID).subscribe(
      (data) => {
        this.doctors = data;
      },
      (error) => {
        alert(error);
      }
    )
  }
  showDoctor() {

  }
  addNewDoctor() {
      this.router.navigate(['../doctor'], { relativeTo: this.activatedRoute });
  }

  deleteDoctor(doctor) {
    this.clinicService.deleteDoctor(doctor.id).subscribe(
      (data) => {
        this.getDoctors();
      },
      (error) => {
        alert(error);
      }
    )
  }
  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
