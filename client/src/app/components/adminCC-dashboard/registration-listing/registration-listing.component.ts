import { ClinicCenterAdminService } from './../../../services/clinic-center-admin.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-registration-listing',
  templateUrl: './registration-listing.component.html',
  styleUrls: ['./registration-listing.component.css']
})
export class RegistrationListingComponent implements OnInit {
  requestsHeaders = ['Name', 'Surname', 'City', 'State', 'Phone Number'];
  navigationSubscription: any;
  requests: any;

  constructor(private clinicCenterAdminService: ClinicCenterAdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private confirmationDialogService: DialogService) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.getRequests();
      }
    });
  }


  ngOnInit() {
  }
  getRequests() {
    this.clinicCenterAdminService.getRegistrationRequests().subscribe((data) => {
      this.requests = data;
      this.requests.sort((a, b) => (a.id > b.id) ? 1 : -1)
    });
  }
  approveRequest(request) {
    this.confirmationDialogService.confirm('Please confirm', 'Are you sure you want to approve reqistration request for user: ' + request.name + ' ?', false)
      .then((confirmed) => {
        if (confirmed.submited) {
          this.clinicCenterAdminService.approveRequest(request).subscribe(
            (data) => {
              this.router.navigate(['../registrationRequests'], { relativeTo: this.activatedRoute });
            },
            (error) => {
              alert(error);
            }
          );
        }
      })
      .catch(() => this.router.navigate(['../registrationRequests'], { relativeTo: this.activatedRoute }))
  }
  deleteRequest(request) {
    this.confirmationDialogService.confirm('Please confirm', 'Please provide a reason for deleting request for user: ' + request.name + ' ?', true)
      .then((confirmed) => {
        if (confirmed.submited) {
          this.clinicCenterAdminService.deleteRequest(request, confirmed.explanation).subscribe(
            (data) => {
              this.router.navigate(['../registrationRequests'], { relativeTo: this.activatedRoute });
            },
            (error) => {
              alert(error);
            }
          );
        }
      })
      .catch(() => this.router.navigate(['../registrationRequests'], { relativeTo: this.activatedRoute }))
  }
  showRequestInfo() {
    //to do 
  }
}
