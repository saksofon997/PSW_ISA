import { Component, OnInit } from '@angular/core';
import { ClinicAdminService } from 'src/app/services/clinic-admin.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
	selector: 'app-vacation-requests',
	templateUrl: './vacation-requests.component.html',
	styleUrls: ['./vacation-requests.component.css']
})
export class VacationRequestsComponent implements OnInit {
	requestsHeaders = ['Applicant', 'Name', 'Surname', 'Start', 'End'];
	navigationSubscription: any;
	requests: any;

	constructor(private clinicAdminService: ClinicAdminService,
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
		this.clinicAdminService.getVacationRequests().subscribe((data) => {
			this.requests = data;
			for (let i = 0; i < this.requests.length; i++) {
				this.requests[i].startDate = this.timeConverter(this.requests[i].startDate);
				this.requests[i].endDate = this.timeConverter(this.requests[i].endDate);
			  }
			this.requests.sort((a, b) => (a.id > b.id) ? 1 : -1)
		});
	}

	approveRequest(request) {
		this.confirmationDialogService.confirm('Please confirm', 'Are you sure you want to approve vacation request for ' + request.roles[0] + ': ' + request.staffName + ' ?', false)
			.then((confirmed) => {
				if (confirmed.submited) {
					this.clinicAdminService.approveVacationRequest(request).subscribe(
						(data) => {
							this.router.navigate(['../vacation_requests'], { relativeTo: this.activatedRoute });
						},
						(error) => {
							alert(error);
						}
					);
				}
			})
			.catch(() => this.router.navigate(['../vacation_requests'], { relativeTo: this.activatedRoute }))
	}

	rejectRequest(request) {
		this.confirmationDialogService.confirm('Please confirm', 'Please provide a reason for deleting request for ' + request.roles[0] + ': ' + request.staffName + ' ?', true)
			.then((confirmed) => {
				if (confirmed.submited) {
					this.clinicAdminService.rejectVacationRequest(request, confirmed.explanation).subscribe(
						(data) => {
							this.router.navigate(['../vacation_requests'], { relativeTo: this.activatedRoute });
						},
						(error) => {
							alert(error);
						}
					);
				}
			})
			.catch(() => this.router.navigate(['../vacation_requests'], { relativeTo: this.activatedRoute }))
	}

	timeConverter(a) {
		a = new Date(a * 1000)
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var hour = a.getHours();
		var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
		var time = date + '. ' + month + ' ' + year + '. ' + hour + ':' + min;
		return time;
	}

	ngOnDestroy() {
		if (this.navigationSubscription) {
			this.navigationSubscription.unsubscribe();
		}
	}
}
