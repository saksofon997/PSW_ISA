import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DialogService } from 'src/app/services/dialog.service';


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

  searchForm: FormGroup;
  submitted = false;

  constructor(private clinicService: ClinicService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private confirmationDialogService: DialogService
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

    this.searchForm = this.formBuilder.group({
      name: [""],
      minPrice: [""],
      maxPrice: [""],
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
    this.confirmationDialogService.confirm('Please confirm', 'Are you sure you want to delete type of examination: ' + typeOfExamination.name + ' ?', false)
      .then((confirmed) => {
        if (confirmed.submited) {
          this.clinicService.deleteTypeOfExamination(typeOfExamination.id).subscribe(
            (data) => {
              this.getTypesOfExamination();
            },
            (error) => {
              alert(error);
            }
          )
        }
      });
  }

  onSearch() {
    this.submitted = true;

    var type = {
      name: this.searchForm.controls.name.value ? this.searchForm.controls.name.value : "",
      minPrice: this.searchForm.controls.minPrice.value ? this.searchForm.controls.minPrice.value : "",
      maxPrice: this.searchForm.controls.maxPrice.value ? this.searchForm.controls.maxPrice.value : "",
      clinic_id: this.userService.getUser().clinic_id
    }

    this.clinicService.searchTypesOfExamination(type).subscribe(
      (data) => {
        this.typesOfExamination = data;
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
