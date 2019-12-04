import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nurse-listing',
  templateUrl: './nurse-listing.component.html',
  styleUrls: ['./nurse-listing.component.css']
})
export class NurseListingComponent implements OnInit {

  nurseHeaders = ['Name', 'Surname', 'Phone Number', 'Shift starts', 'Shift ends'];
	nurses: any;
	navigationSubscription: any;
	clinicID: any;
	clinicName: any;

	searchForm: FormGroup;
	submitted = false;

	constructor(private clinicService: ClinicService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private userService: UserService,
		private formBuilder: FormBuilder
	) {
		this.navigationSubscription = this.router.events.subscribe((e: any) => {
			if (e instanceof NavigationEnd) {
				this.clinicID = this.userService.getUser().clinic_id;
				this.getNurses();
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

	getNurses() {
		this.clinicID = this.userService.getUser().clinic_id;
		this.clinicService.getNurses(this.clinicID).subscribe(
			(data) => {
				this.nurses = data;
			},
			(error) => {
				alert(error);
			}
		)
	}

	addNewNurse() {
		this.router.navigate(['../nurse_form'], { relativeTo: this.activatedRoute });
	}

	deleteNurse(nurse) {
		this.clinicService.deleteNurse(nurse.id).subscribe(
			(data) => {
				this.getNurses();
			},
			(error) => {
				alert(error);
			}
		)
	}

	onSearch(){
		this.submitted = true;

		var nurse = {
			name: this.searchForm.controls.name.value ? this.searchForm.controls.name.value: "",
			surname: this.searchForm.controls.surname.value ? this.searchForm.controls.surname.value: "",
			clinic_id: this.userService.getUser().clinic_id
		}

		this.clinicService.searchNurses(nurse).subscribe(
			(data) => {
			  this.nurses = data;
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
