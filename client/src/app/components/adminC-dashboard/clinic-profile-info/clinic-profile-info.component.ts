import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clinic-profile-info',
  templateUrl: './clinic-profile-info.component.html',
  styleUrls: ['./clinic-profile-info.component.css']
})
export class ClinicProfileInfoComponent implements OnInit {

  clinicID: any;
  clinic: any;
  clinicBackup: any;
  clinicForm: FormGroup;
  formDisabled: boolean;
  submitted: boolean;

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
	modalData: {
		location: Number[];
		action: string;
  };
  locationModal: any;

  constructor(private clinicService: ClinicService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modal: NgbModal,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.clinic = history.state.data;
    this.clinicBackup = history.state.data;
    this.createFormGroup();
  }

  createFormGroup(){
    var name = "";
    var address = "";
    var city = "";
    var state = "";
    var description = "";

    if (this.clinic) {
      this.clinicID = this.clinic.id;
      name = this.clinic.name;
      address = this.clinic.address;
      city = this.clinic.city;
      state = this.clinic.state;
      description = this.clinic.description;
    }

    this.clinicForm = this.formBuilder.group({
      name: [name, [Validators.required]],
      address: [address, [Validators.required]],
      city: [city, [Validators.required]],
      state: [state, [Validators.required]],
      description: [description]
    });

    this.formDisabled = true;
  }

  showMapModal(clinic: any) {
    let action = "Opened";
    let clinicAddress = clinic.address;
		let clinicCity = clinic.city;
		let clinicState = clinic.state;
    this.loadClinicLocation(clinicAddress, clinicCity, clinicState).then(() => {
			let chars: string;
			chars = this.locationModal.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
			let res = chars.split(' ');
			let location : Number[];
			location = [0, 0];
			location[0] = Number(res[1]);
			location[1] = Number(res[0]);
			this.modalData = { location, action };
			this.modal.open(this.modalContent, { size: 'xl' });
		}, () => alert("Error loading data"))
  }

  loadClinicLocation(clinicAddress, clinicCity, clinicState){
		let promise = new Promise((resolve, reject) => {
			this.clinicService.getClinicLocation(clinicAddress, clinicCity, clinicState).subscribe(
				(data) => { this.locationModal = data; resolve();},
				(error) => { alert(error); reject(); }
			);
		});
		return promise;
	}

  enableChangeInfo() {
    this.formDisabled = !this.formDisabled;
  }

  cancelChanges() {
    this.formDisabled = !this.formDisabled;
    this.clinic = this.clinicBackup;
    this.createFormGroup();
  }

  onSubmit() {
    this.submitted = true;

    if (this.clinicForm.invalid) {
      return;
    }

    var clinic = {
      id: null,
      name: this.clinicForm.controls.name.value,
      address: this.clinicForm.controls.address.value,
      city: this.clinicForm.controls.city.value,
      state: this.clinicForm.controls.state.value,
      description: this.clinicForm.controls.description.value,
    }

    if (this.clinicID) {
      clinic.id = this.clinicID
      this.clinicService.changeClinicInfo(clinic).subscribe(
        (data) => { this.enableChangeInfo(); this.clinicBackup = data; /* this.router.navigate(['../clinics'], { relativeTo: this.activatedRoute }); */ },
        (error) => { alert(error); return; }
      );
    } else {
      this.clinicService.addClinic(clinic).subscribe(
        (data) => { this.router.navigate(['../clinics'], { relativeTo: this.activatedRoute }); },
        (error) => { alert(error); return; }
      );
    }

  }

}
