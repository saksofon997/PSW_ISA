import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DialogService } from 'src/app/services/dialog.service';

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

	searchForm: FormGroup;
	submitted = false;

	constructor(private clinicService: ClinicService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private userService: UserService,
		private formBuilder: FormBuilder,
		private confirmationDialogService: DialogService) {
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

		this.searchForm = this.formBuilder.group({
			name: [""],
			surname: [""]
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

	addNewDoctor() {
		this.router.navigate(['../doctor'], { relativeTo: this.activatedRoute });
	}

	deleteDoctor(doctor) {
		this.confirmationDialogService.confirm('Please confirm', 'Are you sure you want to delete doctor: ' + doctor.name+' '+doctor.surname + ' ?', false)
		.then((confirmed) => {
			if (confirmed.submited) {
				this.clinicService.deleteDoctor(doctor.id).subscribe(
					(data) => {
						this.getDoctors();
					},
					(error) => {
						alert(error);
					}
				)
			}
		});
	}

	onSearch(){
		this.submitted = true;

		var doctor = {
			name: this.searchForm.controls.name.value ? this.searchForm.controls.name.value: "",
			surname: this.searchForm.controls.surname.value ? this.searchForm.controls.surname.value: "",
			clinic_id: this.userService.getUser().clinic_id
		}

		this.clinicService.searchDoctors(doctor).subscribe(
			(data) => {
			  this.doctors = data;
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
