import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ClinicService } from 'src/app/services/clinic.service';

@Component({
  selector: 'app-clinic-business',
  templateUrl: './clinic-business.component.html',
  styleUrls: ['./clinic-business.component.css']
})
export class ClinicBusinessComponent implements OnInit {

  data: any;

  form: FormGroup;

  earningsMonth = 0;

  legendStrings = ['Day', 'Week', 'Month'];

  view: any[] = [700, 300];

  // options for charts
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Time';
  yAxisLabel: string = 'Appointments';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private clinicService: ClinicService,
              private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
			span: [, [Validators.required,]]
    });

    this.earningsMonth = 0;

    this.loadData().then(() => {

      for (let i = 0; i < this.data.length; i++) {
        let period = this.data[i].series;
        for (let j = 0; j < period.length; j++) {

          this.earningsMonth += parseFloat(period[j].value);
        }
      }

		}, () => alert("Error loading data"))
  }

  setSpan() {
		let val = this.form.controls.span.value;
		this.xAxisLabel = this.legendStrings[val];
  }

  loadData() {
    let promise = new Promise((resolve, reject) => {
			this.clinicService.getClinicBusiness().subscribe(
				(data) => { this.data = data; console.log(data); resolve(); },
				(error) => { alert(error); reject(); }
			);
		});
		return promise;
  }

}
