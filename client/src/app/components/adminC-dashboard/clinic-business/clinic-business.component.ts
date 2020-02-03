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

	incomeForm: FormGroup;
	incomeFormSubmitted: any = false;
	incomeDataArrived: any = false;
	earnings: any = 0;

	chartForm: FormGroup;
	chartShowSubmitted: any = false;

	view: any = "";

	// options
	showXAxis = true;
	showYAxis = true;
	gradient = false;
	showLegend = false;
	showXAxisLabel = true;
	xAxisLabel = 'Time';
	showYAxisLabel = true;
	yAxisLabel = 'Appointments';

	colorScheme = {
		domain: ['#428bca']
	};

	constructor(private formBuilder: FormBuilder,
		private router: Router,
		private clinicService: ClinicService,
		private activatedRoute: ActivatedRoute, ) { }

	ngOnInit() {
		this.incomeForm = this.formBuilder.group({
			periodStart: [, [Validators.required]],
			periodEnd: [, [Validators.required]]
		});

		this.chartForm = this.formBuilder.group({
			mode: [, [Validators.required]],
			day: [, [Validators.required]]
		});

		this.earnings = 0;
	}

	onSubmitEearningsPeriod() {
		this.incomeFormSubmitted = true;

		if (this.incomeForm.invalid) {
			return;
		}

		let periodStart = this.incomeForm.controls.periodStart.value;
		periodStart.setHours(0, 0, 0, 0);
		periodStart = periodStart.getTime() / 1000;

		let periodEnd = this.incomeForm.controls.periodEnd.value;
		periodEnd.setHours(23, 0, 0, 0);
		periodEnd = periodEnd.getTime() / 1000;

		this.clinicService.getClinicEarnings(periodStart, periodEnd).subscribe(
			(data) => { this.earnings = data; this.incomeDataArrived = true; },
			(error) => { alert(error); }
		);
	}

	onShowChart() {
		this.chartShowSubmitted = true;

		if (this.chartForm.invalid) {
			return;
		}

		let mode = this.chartForm.controls.mode.value;
		let day = this.chartForm.controls.day.value;
		let periodStart;
		let periodEnd;

		if (mode === 'DAY') {
			day.setHours(0, 0, 0, 0);
			day = day.getTime() / 1000;
			periodStart = day;
			periodEnd = day + 24 * 60 * 60;
		} else if (mode === 'WEEK') {
			day = this.getMonday(day);
			day = day.getTime() / 1000;
			periodStart = day;
			periodEnd = day + 7 * 24 * 60 * 60;
		} else if (mode === 'MONTH') {
			day = new Date(day);
			let firstDay = new Date(day.getFullYear(), day.getMonth(), 1);
			let lastDay = new Date(day.getFullYear(), day.getMonth() + 1, 0);
			periodStart = firstDay.getTime() / 1000;
			periodEnd = lastDay.getTime() / 1000;
		} else {
			return;
		}

		this.clinicService.getChartData(mode, periodStart, periodEnd).subscribe(
			(data) => {
				this.data = data;
				if (mode === 'MONTH' || mode === 'WEEK') {
					for (let i = 0; i < this.data.length; i++) {
						this.data[i].name = this.convertToDate(this.data[i].name);
					}
				} else if (mode === 'DAY') {
					for (let i = 0; i < this.data.length - 1; i++) {
						this.data[i].name = this.convertToTime(this.data[i].name) + ' - ' + this.convertToTime(this.data[i + 1].name);
					}
					this.data[this.data.length - 1].name = this.convertToTime(this.data[this.data.length - 1].name) + ' - 00:00';
				}

			},
			(error) => { alert(error); }
		);
	}

	getMonday(d) {
		d = new Date(d);
		var day = d.getDay(),
			diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
		return new Date(d.setDate(diff));
	}

	timeConverter(UNIX_timestamp) {
		var a = new Date(UNIX_timestamp * 1000)
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var time = date + '. ' + month + ' ' + year + '.';
		return time;
	}

	convertToDate(UNIX_timestamp) {
		var a = new Date(UNIX_timestamp * 1000)
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var month = months[a.getMonth()];
		var date = a.getDate();
		var time = date + '. ' + month;
		return time;
	}

	convertToTime(UNIX_timestamp) {
		var a = new Date(UNIX_timestamp * 1000);
		var hour = a.getHours();
		var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
		var time = hour + ':' + min;
		return time;
	}

	onSelect() {

	}
}
