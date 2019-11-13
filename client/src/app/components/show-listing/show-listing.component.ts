import { Component, OnInit, Input } from '@angular/core';
import { ClinicService } from 'src/app/services/clinic.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-listing',
  templateUrl: './show-listing.component.html',
  styleUrls: ['./show-listing.component.css']
})
export class ShowListingComponent implements OnInit {  
  tableList: any;
  params: string[];
  title: string;
  jumboText: string;
  clinicAdminHeaders = ['Name','Surname','E-mail','Address','City','State','Phone Number'];
  constructor(private clinicService: ClinicService,
              private router: Router,
              private _route: ActivatedRoute) { 
  }

  ngOnInit() {
    
    this._route.queryParams.subscribe(record => {
      this.params=JSON.parse(record.params);
      this.title=record.title;
      this.jumboText=record.jumboText;
    });
    switch(this.title){
      case 'Clinic':{
        this.clinicService.getClinics().subscribe((data)=>{
          console.log(this.router.url);
          this.tableList=data;
        });
      }
      case 'Clinic administrators':{
        this.clinicService.getClinicAdmins().subscribe((data)=>{
          console.log(this.router.url);
          this.tableList=data;
        });
      }
    }

  }
  values(clinic: any): Array<string>{
    return Object.values(clinic);
  }

}
