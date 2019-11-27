import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-type-of-examination-listing',
  templateUrl: './type-of-examination-listing.component.html',
  styleUrls: ['./type-of-examination-listing.component.css']
})
export class TypeOfExaminationListingComponent implements OnInit {
  typeOfExaminationHeaders = ['Name', 'Price'];
  typesOfExamination: any;
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
        this.getTypesOfExamination();
      }
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.clinicID = params.id;
      this.clinicName = params.name;
    });
  }
  getTypesOfExamination() {
    this.clinicID = this.userService.getUser().clinic_id;
    this.clinicService.getTypesOfExamination(this.clinicID).subscribe(
      (data) => {
        this.typesOfExamination = data;
      },
      (error) => {
        alert(error);
      }
    )
  }
  changeTypeOfExamination(typeOfExamination) {
    this.router.navigate(['../type_of_examination_info'], { relativeTo: this.activatedRoute, state: { data: typeOfExamination } });
  }
  addNewTypeOfExamination() {
    this.router.navigate(['../type_of_examination_info'], { relativeTo: this.activatedRoute });
  }

  deleteTypeOfExamination(typeOfExamination) {
    this.clinicService.deleteTypeOfExamination(typeOfExamination.id).subscribe(
      (data) => {
        this.getTypesOfExamination();
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
