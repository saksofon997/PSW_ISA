(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n\r\n<div class=\"container\" style=\"padding-top: 4em;\">\r\n\t<router-outlet></router-outlet>\r\n</div>\r\n\r\n<ng-http-loader spinner=\"sk-spinner-pulse\"></ng-http-loader>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/admin-c-home/admin-c-home.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/admin-c-home/admin-c-home.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='row'>\r\n\t<ul class=\"nav nav-pills container\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n\t\t<li class=\"nav-item\">\r\n\t\t\t<a class=\"nav-link active\" data-toggle=\"pill\" [routerLink]=\"['./appointment_requests']\" href=\"#v-pills-calendar\" role=\"tab\"\r\n\t\t\t\taria-controls=\"v-pills-home\" aria-selected=\"true\">Appointment requests</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" data-toggle=\"pill\" [routerLink]=\"['./available_appointments']\" role=\"tab\" aria-controls=\"v-pills-home\"\r\n              aria-selected=\"true\">Available appointments</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" data-toggle=\"pill\" [routerLink]=\"['./vacation_requests']\" role=\"tab\" aria-controls=\"v-pills-home\"\r\n              aria-selected=\"true\">Vacation requests</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" data-toggle=\"pill\" [routerLink]=\"['./business']\" role=\"tab\" aria-controls=\"v-pills-home\"\r\n              aria-selected=\"true\">Clinic business</a>\r\n          </li>\r\n\t</ul>\r\n\r\n\t<div class=\"tab-content \" style='width: 100%;' id=\"v-pills-tabContent\">\r\n\t\t<router-outlet></router-outlet>\r\n\t</div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/adminC-dashboard.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/adminC-dashboard.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='row'>\r\n    <ul class=\"nav nav-pills\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" data-toggle=\"pill\" [routerLink]=\"['./profile']\" href=\"#v-pills-profile\" role=\"tab\"\r\n          aria-controls=\"v-pills-home\" aria-selected=\"true\">Profile</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" data-toggle=\"pill\" href=\"\" (click)=\"showClinicInfo()\" role=\"tab\" aria-controls=\"v-pills-home\"\r\n          aria-selected=\"true\">Clinic info</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" data-toggle=\"pill\" [routerLink]=\"['./doctors']\" role=\"tab\" aria-controls=\"v-pills-home\"\r\n          aria-selected=\"true\">Doctors</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" data-toggle=\"pill\" [routerLink]=\"['./nurse_listing']\" role=\"tab\" aria-controls=\"v-pills-home\"\r\n          aria-selected=\"true\">Nurses</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" data-toggle=\"pill\" [routerLink]=\"['./ordinations']\" role=\"tab\" aria-controls=\"v-pills-home\"\r\n          aria-selected=\"true\">Ordinations</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" data-toggle=\"pill\" [routerLink]=\"['./types_of_examination']\" role=\"tab\" aria-controls=\"v-pills-home\"\r\n          aria-selected=\"true\">Types of examination</a>\r\n      </li>\r\n      \r\n    </ul>\r\n\r\n    <div class=\"tab-content\" style='width: 100%;' id=\"v-pills-tabContent\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/adminC-personal-profile/adminC-personal-profile.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/adminC-personal-profile/adminC-personal-profile.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid col-lg-8 col-sm-8\"\r\n  style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n  <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n    <h3 class=\"display-8\">Personal page</h3>\r\n    <p class=\"lead\">Here you can see, or change your personal information.</p>\r\n  </div>\r\n</div>\r\n<form *ngIf='form' [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <fieldset [disabled]=\"change\">\r\n    <div class=\"form-group row\">\r\n      <label for=\"Name\" class=\"col-sm-2 col-form-label font-weight-bold\">Name</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.name.errors }\"\r\n          id=\"Name\" formControlName=\"name\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.name.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.name.errors.required\">Name is required</div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"Surname\" class=\"col-sm-2 col-form-label font-weight-bold\">Surname</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.surname.errors }\"\r\n          id=\"Surname\" formControlName=\"surname\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.surname.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.surname.errors.required\">Surname is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <fieldset [disabled]=\"true\">\r\n      <div class=\"form-group row\">\r\n        <label for=\"Email\" class=\"col-sm-2 col-form-label font-weight-bold\">E-mail</label>\r\n        <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n          <input type=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.email.errors }\"\r\n            id=\"Email\" formControlName=\"email\" style=\"border: 0;\" />\r\n          <div *ngIf=\"submitted && form.controls.email.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"form.controls.email.errors.required\">E-mail is required</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </fieldset>\r\n    <div class=\"form-group row\">\r\n      <label for=\"Address\" class=\"col-sm-2 col-form-label font-weight-bold\">Address</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.address.errors }\"\r\n          id=\"Address\" formControlName=\"address\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.address.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.address.errors.required\">Address is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"City\" class=\"col-sm-2 col-form-label font-weight-bold\">City</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.city.errors }\"\r\n          id=\"City\" formControlName=\"city\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.city.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.city.errors.required\">City is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"State\" class=\"col-sm-2 col-form-label font-weight-bold\">State</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.state.errors }\"\r\n          id=\"State\" formControlName=\"state\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.state.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.state.errors.required\">State is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"PhoneNumber\" class=\"col-sm-2 col-form-label font-weight-bold\">Phone number</label>\r\n      <div class=\"col-sm-10  col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && form.controls.phoneNumber.errors }\" id=\"PhoneNumber\"\r\n          formControlName=\"phoneNumber\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.phoneNumber.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.phoneNumber.errors.required\">Phone number is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <fieldset [disabled]=\"true\">\r\n      <div class=\"form-group row\">\r\n        <label for=\"JMBG\" class=\"col-sm-2 col-form-label font-weight-bold\">UPIN</label>\r\n        <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.upin.errors }\"\r\n            id=\"JMBG\" formControlName=\"upin\" style=\"border: 0;\" />\r\n          <div *ngIf=\"submitted && form.controls.upin.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"form.controls.upin.errors.required\">UPIN is required</div>\r\n            <div *ngIf=\"form.controls.upin.errors.minlength\">UPIN is exactly 13 characters long</div>\r\n            <div *ngIf=\"form.controls.upin.errors.maxlength\">UPIN is exactly 13 characters long</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </fieldset>\r\n    <!-- <div class=\"form-group row\">\r\n      <label for=\"inputPassword\" class=\"col-sm-2 col-form-label font-weight-bold\">Password</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">\r\n      </div>\r\n    </div> -->\r\n    <div class=\"col-lg-8 col-sm-10\">\r\n      <hr>\r\n    </div>\r\n  </fieldset>\r\n\r\n  <div>\r\n    <button type=\"submit\" class=\"btn btn-primary\" *ngIf='!change'>Submit changes</button>\r\n    <button type=\"button\" class=\"btn btn-outline-primary m-1\" *ngIf='!change'\r\n      (click)='cancelChanges()'>Cancel</button>\r\n  </div>\r\n\r\n</form>\r\n<div>\r\n  <button type=\"button\" class=\"btn btn-outline-primary\" *ngIf='change' (click)='enableChangeInfo()'>Change\r\n    information</button>\r\n  <button type=\"button\" class=\"btn btn-outline-primary m-1\" *ngIf='change' (click)='showChangePasswordForm()'>Change\r\n    password</button>\r\n</div>\r\n\r\n<br><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/appointment-requests/appointment-requests.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/appointment-requests/appointment-requests.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n    <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n        <h3 class=\"display-8\">Appointment requests</h3>\r\n        <p class=\"lead\">Here you can work with appointment requests.</p>\r\n    </div>\r\n</div>\r\n<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th scope=\"col\" *ngFor='let param of appointmentHeaders'>{{param}}</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor='let appointment of appointments'>\r\n            <td> {{appointment.doctors[0].name + \" \" + appointment.doctors[0].surname}} </td>\r\n            <td> {{appointment.patient.name + \" \" + appointment.patient.surname }} </td>\r\n            <td> {{appointment.typeOfExamination.name}} </td>\r\n            <td> {{appointment.formatedDateAndTime}} </td>\r\n            <td> {{appointment.duration ? appointment.duration / 1000 / 60 : \"Not specified\"}} </td>\r\n            <td>\r\n                <div class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"{{'dropdownMenuButton'+appointment.id}}\"\r\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Options\r\n                    </button>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                    <a class=\"dropdown-item\" style=\"cursor: pointer;\" id=\"{{'selectOrd'+appointment.id}}\"\r\n                            (click)=\"selectOrdination(appointment)\">Select ordination</a>\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\"\r\n                            (click)=\"rejectRequest(appointment)\">Reject request</a>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/available-appointment-listing/available-appointment-listing.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/available-appointment-listing/available-appointment-listing.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n    <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n        <h3 class=\"display-8\">Available appointments</h3>\r\n        <p class=\"lead\">Here you can see, add or delete available appointments.</p>\r\n    </div>\r\n</div>\r\n<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th scope=\"col\" *ngFor='let param of appointmentHeaders'>{{param}}</th>\r\n            <th scope=\"col\">\r\n                <button type=\"button\" class=\"btn btn-light\" (click)=\"addNewAppointment()\">Add</button>\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor='let appointment of appointments'>\r\n            <td> {{appointment.doctors[0].name + \" \" + appointment.doctors[0].surname}} </td>\r\n            <td> {{appointment.ordination.name + \" - \" + appointment.ordination.number}} </td>\r\n            <td> {{appointment.typeOfExamination.name}} </td>\r\n            <td> {{appointment.formatedDateAndTime}} </td>\r\n            <td> {{appointment.duration / 1000 / 60}} </td>\r\n            <td> {{appointment.price}} </td>\r\n            <td> {{appointment.discount}} </td>\r\n            <td>\r\n                <div class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Options\r\n                    </button>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\"\r\n                            (click)=\"deleteAppointment(appointment)\">Delete</a>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/clinic-business/clinic-business.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/clinic-business/clinic-business.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n\t<div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n\t\t<h3 class=\"display-8\">Clinics business</h3>\r\n\t\t<p class=\"lead\">Here you can see clinics statistics.</p>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"col-lg-8 col-sm-10\">\r\n\t<hr>\r\n</div>\r\n\r\n<mat-accordion>\r\n\t<mat-expansion-panel id=\"\">\r\n\t\t<mat-expansion-panel-header>\r\n\t\t\t<mat-panel-title>\r\n\t\t\t\t<p class=\"h3 \">Clinic earnings </p>\r\n\t\t\t</mat-panel-title>\r\n\t\t\t<mat-panel-description>\r\n\r\n\t\t\t</mat-panel-description>\r\n\t\t</mat-expansion-panel-header>\r\n\t\t<form [formGroup]=\"incomeForm\" (ngSubmit)=\"onSubmitEearningsPeriod()\">\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label for=\"periodStart\" class=\"col-sm-2 col-form-label font-weight-bold\">Period start: </label>\r\n\t\t\t\t<div class=\"row col-lg-6 col-sm-10 col-md-6 shadow-sm p-1 mb-1 ml-1 bg-white rounded col\">\r\n\t\t\t\t\t<div class=\"col-lg-10 col-sm-10 col-md-10\">\r\n\t\t\t\t\t\t<input type=\"datetime\" formControlName=\"periodStart\" [owlDateTime]=\"dt1\" class=\"form-control\"\r\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': incomeFormSubmitted && incomeForm.controls.periodStart.errors }\"\r\n\t\t\t\t\t\t\tid=\"periodStart\" style=\"border: 0;\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<span class=\"m-1 float-right col-lg-1 col-sm-2 col-md-2\" [owlDateTimeTrigger]=\"dt1\"> \r\n\t\t\t\t\t\t<ion-icon size=\"large\" name=\"calendar\" style=\"cursor: pointer;\"></ion-icon> </span>\r\n\t\t\t\t\t<owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label for=\"periodEnd\" class=\"col-sm-2 col-form-label font-weight-bold\">Period end: </label>\r\n\t\t\t\t<div class=\"row col-lg-6 col-sm-10 col-md-6 shadow-sm p-1 mb-1 ml-1 bg-white rounded col\">\r\n\t\t\t\t\t<div class=\"col-lg-10 col-sm-10 col-md-10\">\r\n\t\t\t\t\t\t<input type=\"datetime\" formControlName=\"periodEnd\" [owlDateTime]=\"dt2\" class=\"form-control\"\r\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': incomeFormSubmitted && incomeForm.controls.periodEnd.errors }\"\r\n\t\t\t\t\t\t\tid=\"periodEnd\" style=\"border: 0;\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<span class=\"m-1 float-right col-lg-1 col-sm-2 col-md-2\" [owlDateTimeTrigger]=\"dt2\"> \r\n\t\t\t\t\t\t<ion-icon size=\"large\" name=\"calendar\" style=\"cursor: pointer;\"></ion-icon> </span>\r\n\t\t\t\t\t<owl-date-time [pickerType]=\"'calendar'\" #dt2></owl-date-time>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<mat-action-row>\r\n\t\t\t\t<div style=\"float: left; width: 90%;\" *ngIf=\"incomeFormSubmitted && incomeDataArrived\">\r\n\t\t\t\t\t<p>Clinic earnings from <b>{{timeConverter(incomeForm.controls.periodStart.value/1000)}}</b> to\r\n\t\t\t\t\t\t<b>{{timeConverter(incomeForm.controls.periodEnd.value/1000)}}</b> : </p>\r\n\t\t\t\t\t<p> <b> {{earnings}} </b> </p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<button class=\"btn btn-primary\" type=\"submit\" mat-button>Show earnings</button>\r\n\t\t\t\t</div>\r\n\t\t\t</mat-action-row>\r\n\t\t</form>\r\n\t</mat-expansion-panel>\r\n</mat-accordion>\r\n<mat-accordion class=\"example-headers-align mt-2 pt-3\">\r\n\t<mat-expansion-panel style=\"margin-top: 0.5em;\">\r\n\t\t<mat-expansion-panel-header>\r\n\t\t\t<mat-panel-title>\r\n\t\t\t\t<p class=\"h3\">Completed appointments</p>\r\n\t\t\t</mat-panel-title>\r\n\t\t\t<mat-panel-description>\r\n\r\n\t\t\t</mat-panel-description>\r\n\t\t</mat-expansion-panel-header>\r\n\r\n\t\t<div class=\"col-12 p-0 m-0 mb-2 \">\r\n\r\n\t\t\t<form [formGroup]=\"chartForm\" (ngSubmit)=\"onShowChart()\">\r\n\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t<label for=\"mode\" class=\"col-sm-2 col-lg-3 col-form-label font-weight-bold\">Select chart view mode:\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"row col-lg-4 col-sm-8 col-md-6 shadow-sm p-1 mb-1 bg-white rounded col\">\r\n\t\t\t\t\t\t<select formControlName=\"mode\" class=\"m-1 form-control\"\r\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': chartShowSubmitted && chartForm.controls.mode.errors }\" id=\"mode\"\r\n\t\t\t\t\t\t\tstyle=\"border: 0; width: 100%;\">\r\n\t\t\t\t\t\t\t<option value=\"DAY\">Day</option>\r\n\t\t\t\t\t\t\t<option value=\"WEEK\">Week</option>\r\n\t\t\t\t\t\t\t<option value=\"MONTH\">Month</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t<div *ngIf=\"submitted && chartForm.controls.mode.errors\" class=\"invalid-feedback ml-3\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"chartForm.controls.mode.errors.required\">View mode is required</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group row\" *ngIf=\"chartForm.controls.mode.value\">\r\n\t\t\t\t\t<label for=\"day\" *ngIf=\"chartForm.controls.mode.value === 'DAY'\"\r\n\t\t\t\t\t\tclass=\"col-sm-2 col-lg-3 col-form-label font-weight-bold\">Select day: </label>\r\n\t\t\t\t\t<label for=\"day\" *ngIf=\"chartForm.controls.mode.value === 'WEEK'\"\r\n\t\t\t\t\t\tclass=\"col-sm-2 col-lg-3 col-form-label font-weight-bold\">Select day of desired week: </label>\r\n\t\t\t\t\t<label for=\"day\" *ngIf=\"chartForm.controls.mode.value === 'MONTH'\"\r\n\t\t\t\t\t\tclass=\"col-sm-2 col-lg-3 col-form-label font-weight-bold\">Select day of desired month: </label>\r\n\t\t\t\t\t<div class=\"row col-lg-4 col-sm-8 col-md-6 shadow-sm p-1 mb-1 bg-white rounded col\">\r\n\t\t\t\t\t\t<div class=\"col-lg-10 col-sm-10 col-md-10\">\r\n\t\t\t\t\t\t\t<input type=\"datetime\" formControlName=\"day\" [owlDateTime]=\"dt3\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': chartShowSubmitted && chartForm.controls.day.errors }\"\r\n\t\t\t\t\t\t\t\tid=\"day\" style=\"border: 0;\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<span class=\"m-1 float-right col-lg-1 col-sm-2 col-md-2\" [owlDateTimeTrigger]=\"dt3\"> \r\n\t\t\t\t\t\t\t<ion-icon size=\"large\" name=\"calendar\" style=\"cursor: pointer;\"></ion-icon> </span>\r\n\t\t\t\t\t\t<owl-date-time [pickerType]=\"'calendar'\" #dt3></owl-date-time>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<mat-action-row>\r\n\t\t\t\t\t<div class=\"col-lg-10 col-sm-10\">\r\n\t\t\t\t\t\t<div *ngIf=\"chartShowSubmitted\">\r\n\t\t\t\t\t\t\t<ngx-charts-bar-vertical [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"data\"\r\n\t\t\t\t\t\t\t\t[gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n\t\t\t\t\t\t\t\t[showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\"\r\n\t\t\t\t\t\t\t\t[xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" (select)=\"onSelect($event)\">\r\n\t\t\t\t\t\t\t</ngx-charts-bar-vertical>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-2 col-sm-2\">\r\n\t\t\t\t\t\t<button *ngIf=\"chartForm.controls.day.value\" class=\"btn btn-primary\" type=\"submit\"\r\n\t\t\t\t\t\t\tmat-button>Show chart</button>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</mat-action-row>\r\n\r\n\t\t\t</form>\r\n\r\n\t\t</div>\r\n\r\n\t</mat-expansion-panel>\r\n</mat-accordion>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/clinic-profile-info/clinic-profile-info.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/clinic-profile-info/clinic-profile-info.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid col-lg-8 col-sm-8\"\r\n  style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n  <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n    <h3 class=\"display-8\">Clinic info</h3>\r\n    <p class=\"lead\">Here you can see, or change clinic information.</p>\r\n  </div>\r\n</div>\r\n<form *ngIf='clinicForm' [formGroup]=\"clinicForm\" (ngSubmit)=\"onSubmit()\">\r\n  <fieldset [disabled]=\"formDisabled\">\r\n    <div class=\"form-group row\">\r\n      <label for=\"Name\" class=\"col-sm-2 col-form-label font-weight-bold\">Name</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && clinicForm.controls.name.errors }\" id=\"Name\" formControlName=\"name\"\r\n          style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && clinicForm.controls.name.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"clinicForm.controls.name.errors.required\">Name is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <label for=\"Address\" class=\"col-sm-2 col-form-label font-weight-bold\">Address</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && clinicForm.controls.address.errors }\" id=\"Address\"\r\n          formControlName=\"address\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && clinicForm.controls.address.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"clinicForm.controls.address.errors.required\">Address is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"City\" class=\"col-sm-2 col-form-label font-weight-bold\">City</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && clinicForm.controls.city.errors }\" id=\"City\" formControlName=\"city\"\r\n          style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && clinicForm.controls.city.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"clinicForm.controls.city.errors.required\">City is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"State\" class=\"col-sm-2 col-form-label font-weight-bold\">State</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && clinicForm.controls.state.errors }\" id=\"State\" formControlName=\"state\"\r\n          style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && clinicForm.controls.state.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"clinicForm.controls.state.errors.required\">State is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"Description\" class=\"col-sm-2 col-form-label font-weight-bold\">Description</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <textarea class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && clinicForm.controls.description.errors }\" id=\"Description\"\r\n          formControlName=\"description\" style=\"border: 0;\" ></textarea>\r\n        <div *ngIf=\"submitted && clinicForm.controls.description.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"clinicForm.controls.description.errors.required\">Description is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <label for=\"Rating\" class=\"col-sm-2 col-form-label font-weight-bold\">Rating</label>\r\n      <star-rating value='{{clinic.numberOfStars/clinic.numberOfReviews}}' totalstars=\"5\" checkedcolor=\"blue\" uncheckedcolor=\"gray\" size=\"24px\" readonly=\"true\"></star-rating>\r\n    </div>\r\n\r\n    <div class=\"col-lg-8 col-sm-10\">\r\n      <hr>\r\n    </div>\r\n  </fieldset>\r\n\r\n  <div>\r\n    <button type=\"submit\" class=\"btn btn-primary\" *ngIf='!formDisabled'>Submit changes</button>\r\n    <button type=\"button\" class=\"btn btn-outline-primary m-1\" *ngIf='!formDisabled'\r\n      (click)='cancelChanges()'>Cancel</button>\r\n  </div>\r\n\r\n</form>\r\n<button type=\"button\" class=\"btn btn-outline-primary\" *ngIf='formDisabled' (click)='enableChangeInfo()'>Change\r\n  information</button>\r\n<button type=\"button\" class=\"btn btn-outline-primary\" (click)='showMapModal(clinic)'>Show location on map</button>\r\n<br><br>\r\n\r\n<ng-template #modalContent let-close=\"close\">\r\n  <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">Location on maps</h4>\r\n      <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n              <div class=\"card\" style=\"height: 32em;\">\r\n                  <div class=\"card-body text-center\">\r\n                      <div style=\"height: 25em; width: 100%;\">\r\n                          <angular-yandex-map [center]=\"modalData.location\" [zoom]=\"16\">\r\n                              <angular-yandex-placemark [geometry]=\"modalData.location\"></angular-yandex-placemark>\r\n                          </angular-yandex-map>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"card-footer text-center text-muted\">\r\n                      <label class=\"card-text\">Location on maps</label>\r\n                  </div>\r\n              </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\r\n          Close\r\n      </button>\r\n  </div>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/doctor-form/doctor-form.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/doctor-form/doctor-form.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid col-lg-8 col-sm-10\"\r\n  style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n  <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n    <h3 class=\"display-8\">Add doctor</h3>\r\n    <p class=\"lead\">Here you can add a doctor.</p>\r\n  </div>\r\n</div>\r\n<form [formGroup]=\"doctorForm\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"doctorShiftStart\">Email:</label>\r\n    <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n      <input type=\"email\" formControlName=\"email\"\r\n        [ngClass]=\"{ 'is-invalid': submitted && doctorForm.controls.email.errors }\" class=\"form-control\"\r\n        id=\"doctorEmail\" aria-describedby=\"doctorEmail\" placeholder=\"example@kcv.rs\" style=\"border: 0;\" />\r\n      <div *ngIf=\"submitted && doctorForm.controls.email.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"doctorForm.controls.email.errors.required\">Email is required</div>\r\n        <div *ngIf=\"doctorForm.controls.email.errors.email\">Email must be a valid Email address</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"doctorName\">Name:</label>\r\n    <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n      <input type=\"text\" formControlName=\"name\"\r\n        [ngClass]=\"{ 'is-invalid': submitted && doctorForm.controls.name.errors }\" class=\"form-control\" id=\"doctorName\"\r\n        aria-describedby=\"doctorName\" style=\"border: 0;\" />\r\n      <div *ngIf=\"submitted && doctorForm.controls.name.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"doctorForm.controls.name.errors.required\">Name is required</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"doctorSurname\">Surname:</label>\r\n    <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n      <input type=\"text\" formControlName=\"surname\"\r\n        [ngClass]=\"{ 'is-invalid': submitted && doctorForm.controls.surname.errors }\" class=\"form-control\"\r\n        id=\"doctorSurname\" aria-describedby=\"doctorSurname\" style=\"border: 0;\" />\r\n      <div *ngIf=\"submitted && doctorForm.controls.surname.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"doctorForm.controls.surname.errors.required\">Surname is required</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"doctorAddress\">Address:</label>\r\n    <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n      <input type=\"text\" formControlName=\"address\"\r\n        [ngClass]=\"{ 'is-invalid': submitted && doctorForm.controls.address.errors }\" class=\"form-control\"\r\n        id=\"doctorAddress\" aria-describedby=\"doctorAddress\" style=\"border: 0;\" />\r\n      <div *ngIf=\"submitted && doctorForm.controls.address.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"doctorForm.controls.address.errors.required\">Address is required</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"doctorCity\">City:</label>\r\n    <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n      <input type=\"text\" formControlName=\"city\"\r\n        [ngClass]=\"{ 'is-invalid': submitted && doctorForm.controls.city.errors }\" class=\"form-control\" id=\"doctorCity\"\r\n        aria-describedby=\"doctorCity\" style=\"border: 0;\" />\r\n      <div *ngIf=\"submitted && doctorForm.controls.city.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"doctorForm.controls.city.errors.required\">City is required</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"doctorState\">State:</label>\r\n    <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n      <input type=\"text\" formControlName=\"state\"\r\n        [ngClass]=\"{ 'is-invalid': submitted && doctorForm.controls.state.errors }\" class=\"form-control\"\r\n        id=\"doctorState\" aria-describedby=\"doctorState\" style=\"border: 0;\" />\r\n      <div *ngIf=\"submitted && doctorForm.controls.state.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"doctorForm.controls.state.errors.required\">State is required</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"doctorPhone\">Phone number:</label>\r\n    <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n      <input type=\"text\" formControlName=\"phoneNumber\"\r\n        [ngClass]=\"{ 'is-invalid': submitted && doctorForm.controls.phoneNumber.errors }\" class=\"form-control\"\r\n        id=\"doctorPhone\" aria-describedby=\"doctorPhone\" style=\"border: 0;\" />\r\n      <div *ngIf=\"submitted && doctorForm.controls.phoneNumber.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"doctorForm.controls.phoneNumber.errors.required\">Phone number is required</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"doctorShiftStart\">Shift start:</label>\r\n    <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n      <input type=\"text\" formControlName=\"shiftStart\"\r\n        [ngClass]=\"{ 'is-invalid': submitted && doctorForm.controls.shiftStart.errors }\" class=\"form-control\"\r\n        id=\"doctorShiftStart\" aria-describedby=\"shiftSHelp\" placeholder=\"ex. 07:00\" style=\"border: 0;\" />\r\n      <div *ngIf=\"submitted && doctorForm.controls.shiftStart.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"doctorForm.controls.shiftStart.errors.required\">Shift is required</div>\r\n        <div *ngIf=\"doctorForm.controls.shiftStart.errors.minlength\">Shift is exactly 5 characters long</div>\r\n        <div *ngIf=\"doctorForm.controls.shiftStart.errors.maxlength\">Shift is exactly 5 characters long</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"doctorShiftEnd\">Shift end:</label>\r\n    <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n      <input type=\"text\" formControlName=\"shiftEnd\"\r\n        [ngClass]=\"{ 'is-invalid': submitted && doctorForm.controls.shiftEnd.errors }\" class=\"form-control\"\r\n        id=\"doctorShiftEnd\" placeholder=\"ex. 15:00\" style=\"border: 0;\" />\r\n      <div *ngIf=\"submitted && doctorForm.controls.shiftEnd.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"doctorForm.controls.shiftEnd.errors.required\">Shift is required</div>\r\n        <div *ngIf=\"doctorForm.controls.shiftEnd.errors.minlength\">Shift is exactly 5 characters long</div>\r\n        <div *ngIf=\"doctorForm.controls.shiftEnd.errors.maxlength\">Shift is exactly 5 characters long</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"doctorUpin\">UPIN:</label>\r\n    <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n      <input type=\"text\" formControlName=\"upin\"\r\n        [ngClass]=\"{ 'is-invalid': submitted && doctorForm.controls.upin.errors }\" class=\"form-control\" id=\"doctorUpin\"\r\n        aria-describedby=\"doctorUpin\" style=\"border: 0;\" />\r\n      <div *ngIf=\"submitted && doctorForm.controls.upin.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"doctorForm.controls.upin.errors.required\">UPIN is required</div>\r\n        <div *ngIf=\"doctorForm.controls.upin.errors.minlength\">UPIN is exactly 13 characters long</div>\r\n        <div *ngIf=\"doctorForm.controls.upin.errors.maxlength\">UPIN is exactly 13 characters long</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label for=\"specialization\" class=\"col-sm-2 col-form-label font-weight-bold\">Specialization</label>\r\n    <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded col\">\r\n      <select formControlName=\"specialization\" class=\"m-1 form-control\"\r\n        [ngClass]=\"{ 'is-invalid': submitted && doctorForm.controls.specialization.errors }\" id=\"specialization\"\r\n        style=\"border: 0; width: 100%;\">\r\n        <option value=\"\"></option>\r\n        <option *ngFor=\"let type of typesOfExamination\" [value]=\"type.id\">{{type.name}}\r\n        </option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-primary\">Add</button>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/doctor-listing/doctor-listing.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/doctor-listing/doctor-listing.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n  <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n      <h3 class=\"display-8\">Doctors</h3>\r\n      <p class=\"lead\">Here you can see a list of clinic doctors.</p>\r\n  </div>\r\n</div>\r\n<p>\r\n    <button class=\"btn btn-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\"\r\n        aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n        Search doctors\r\n    </button>\r\n</p>\r\n<div class=\"collapse\" id=\"collapseExample\">\r\n    <div class=\"card card-body\">\r\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearch()\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Name: </label>\r\n                    <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                        <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && searchForm.controls.name.errors }\"\r\n                            class=\"form-control\" formControlName=\"name\" style=\"border: 0;\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Surname: </label>\r\n                    <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                        <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && searchForm.controls.surname.errors }\"\r\n                            class=\"form-control\" formControlName=\"surname\" style=\"border: 0;\" />\r\n                    </div>\r\n                </div>\r\n                <button class=\"btn btn-primary \">Search</button>\r\n            </form>\r\n    </div>\r\n</div>\r\n<table class=\"table\">\r\n  <thead>\r\n      <tr>\r\n          <th scope=\"col\" *ngFor='let param of doctorsHeaders'>{{param}}</th>\r\n          <th scope=\"col\">\r\n              <button type=\"button\" class=\"btn btn-light\" (click)=\"addNewDoctor()\">Add</button>\r\n          </th>\r\n      </tr>\r\n  </thead>\r\n  <tbody>\r\n      <tr *ngFor='let doctor of doctors'>\r\n          <td> {{doctor.name}} </td>\r\n          <td> {{doctor.surname}} </td>\r\n          <td> {{doctor.phoneNumber}} </td>\r\n          <td> {{doctor.shiftStart}} </td>\r\n          <td> {{doctor.shiftEnd}} </td>\r\n          <td> <star-rating value='{{doctor.numberOfStars / doctor.numberOfReviews}}' totalstars=\"5\" checkedcolor=\"blue\" uncheckedcolor=\"gray\" size=\"20px\" readonly=\"true\"></star-rating> </td>\r\n          <td>\r\n              <div class=\"dropdown\">\r\n                  <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                      data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                      Options\r\n                  </button>\r\n                  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                      <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"deleteDoctor(doctor)\">Delete</a>\r\n                  </div>\r\n              </div>\r\n          </td>\r\n      </tr>\r\n  </tbody>\r\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/new-available-appointment-page/new-available-appointment-page.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/new-available-appointment-page/new-available-appointment-page.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid col-lg-8 col-sm-8\" style=\"margin-top:0.5em; padding-top: 0.5em;\">\r\n    <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n        <h3 class=\"display-8\">New available Appointment</h3>\r\n        <p class=\"lead\">Insert informations about new available appointment.</p>\r\n    </div>\r\n</div>\r\n\r\n<form *ngIf='form' [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group row\">\r\n        <label for=\"dateAndTime\" class=\"col-sm-2 col-lg-3 col-form-label font-weight-bold\">Date and time</label>\r\n        <div class=\"row col-lg-4 col-sm-8 col-md-6 shadow-sm p-1 mb-1 bg-white rounded col\">\r\n            <div class=\"col-lg-10 col-sm-10 col-md-10\">\r\n                <input type=\"datetime\" formControlName=\"dateAndTime\" [owlDateTime]=\"dt2\" class=\"form-control\"\r\n                    [ngClass]=\"{ 'is-invalid': submitted && form.controls.dateAndTime.errors }\" id=\"dateAndTime\"\r\n                    style=\"border: 0;\">\r\n                <div *ngIf=\"submitted && form.controls.dateAndTime.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"form.controls.dateAndTime.errors.required\">Date and time is required</div>\r\n                </div>\r\n            </div>\r\n            <span class=\"m-1 float-right col-lg-1 col-sm-2 col-md-2\" [owlDateTimeTrigger]=\"dt2\"> \r\n                <ion-icon size=\"large\" name=\"calendar\" style=\"cursor: pointer;\"></ion-icon> </span>\r\n            <owl-date-time [startAt]=\"now\" [stepMinute]=\"10\" [stepSecond]=\"60\" #dt2></owl-date-time>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n        <label for=\"duration\" class=\"col-sm-2 col-lg-3 col-form-label font-weight-bold\">Duration</label>\r\n        <div class=\"row col-lg-4 col-sm-8 col-md-6 shadow-sm p-1 mb-1 bg-white rounded col\">\r\n            <select formControlName=\"duration\" class=\"m-1 form-control\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && form.controls.duration.errors }\" id=\"duration\"\r\n                style=\"border: 0; width: 100%;\">\r\n                <option value=\"\"></option>\r\n                <option value=\"10\">10 minutes</option>\r\n                <option value=\"20\">20 minutes</option>\r\n                <option value=\"30\">30 minutes</option>\r\n                <option value=\"40\">40 minutes</option>\r\n                <option value=\"50\">50 minutes</option>\r\n            </select>\r\n            <div *ngIf=\"submitted && form.controls.duration.errors\" class=\"invalid-feedback ml-3\">\r\n                <div *ngIf=\"form.controls.duration.errors.required\">Duration is required</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n        <label for=\"typeOfExamination\" class=\"col-sm-2 col-lg-3 col-form-label font-weight-bold\">Type of\r\n            examination</label>\r\n        <div class=\"row col-lg-4 col-sm-8 col-md-6 shadow-sm p-1 mb-1 bg-white rounded col\">\r\n            <select formControlName=\"typeOfExamination\" class=\"m-1 form-control\"\r\n                (change)=\"setPriceFromTypeOfExamination()\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && form.controls.typeOfExamination.errors }\" id=\"typeOfExamination\"\r\n                style=\"border: 0; width: 100%;\">\r\n                <option value=\"\"></option>\r\n                <option *ngFor=\"let type of typesOfExamination\" [value]=\"type.id\">{{type.name}}\r\n                </option>\r\n            </select>\r\n            <div *ngIf=\"submitted && form.controls.typeOfExamination.errors\" class=\"invalid-feedback ml-3\">\r\n                <div *ngIf=\"form.controls.typeOfExamination.errors.required\">Please select type of examination</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-sm-2 col-lg-3 col-form-label font-weight-bold\" for=\"price\">Price: </label>\r\n        <div class=\"row col-lg-4 col-sm-8 col-md-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n            <input type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.price.errors }\"\r\n                class=\"form-control\" formControlName=\"price\" style=\"border: 0;\" />\r\n            <div *ngIf=\"submitted && form.controls.price.errors\" class=\"invalid-feedback ml-3\">\r\n                <div *ngIf=\"form.controls.price.errors.required\">Price is required</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-sm-2 col-lg-3 col-form-label font-weight-bold\" for=\"discount\">Discount: </label>\r\n        <div class=\"row col-lg-4 col-sm-8 col-md-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n            <input type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && form.errors }\"\r\n                class=\"form-control\" formControlName=\"discount\" style=\"border: 0;\" />\r\n            <div *ngIf=\"submitted && form.errors\" class=\"invalid-feedback ml-3\">\r\n                <div *ngIf=\"form.errors\">Discount can't be larger than price</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n        <label for=\"doctor\" class=\"col-sm-2 col-lg-3 col-form-label font-weight-bold\">Doctor</label>\r\n        <div class=\"row col-lg-4 col-sm-8 col-md-6 shadow-sm p-1 mb-1 bg-white rounded col\">\r\n            <select formControlName=\"doctor\" class=\"m-1 form-control\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && form.controls.doctor.errors }\" id=\"doctor\"\r\n                style=\"border: 0; width: 100%;\">\r\n                <option value=\"\"></option>\r\n                <option *ngFor=\"let doctor of doctors\" [value]=\"doctor.id\">\r\n                    {{doctor.name + \" \" + doctor.surname}}\r\n                </option>\r\n            </select>\r\n            <div *ngIf=\"submitted && form.controls.doctor.errors\" class=\"invalid-feedback ml-3\">\r\n                <div *ngIf=\"form.controls.doctor.errors.required\">Please select doctor</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n        <label for=\"ordination\" class=\"col-sm-2 col-lg-3 col-form-label font-weight-bold\">Ordination</label>\r\n        <div class=\"row col-lg-4 col-sm-8 col-md-6 shadow-sm p-1 mb-1 bg-white rounded col\">\r\n            <select formControlName=\"ordination\" class=\"m-1 form-control\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && form.controls.ordination.errors }\" id=\"ordination\"\r\n                style=\"border: 0; width: 100%;\">\r\n                <option value=\"\"></option>\r\n                <option *ngFor=\"let ordination of ordinations\" [value]=\"ordination.id\">\r\n                    {{ordination.name + \"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Num. \" + ordination.number + \")\"}}\r\n                </option>\r\n            </select>\r\n            <div *ngIf=\"submitted && form.controls.ordination.errors\" class=\"invalid-feedback ml-3\">\r\n                <div *ngIf=\"form.controls.ordination.errors.required\">Please select ordination</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-8 col-sm-10\">\r\n        <hr>\r\n    </div>\r\n\r\n    <div>\r\n        <button type=\"submit\" class=\"btn btn-primary\">Create appointment</button>\r\n        <button type=\"button\" class=\"btn btn-outline-primary m-1\" (click)='cancelChanges()'>Cancel</button>\r\n    </div>\r\n</form>\r\n<br><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/nurse-form/nurse-form.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/nurse-form/nurse-form.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  \r\n<div class=\"jumbotron jumbotron-fluid col-lg-8 col-sm-10\"\r\nstyle=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n<div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n  <h3 class=\"display-8\">Add nurse</h3>\r\n  <p class=\"lead\">Here you can add a nurse.</p>\r\n</div>\r\n</div>\r\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n<div class=\"form-group row\">\r\n  <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"nurseEmail\">Email:</label>\r\n  <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n  <input type=\"email\" formControlName=\"email\"\r\n    [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.email.errors }\" class=\"form-control\" id=\"nurseEmail\"\r\n    aria-describedby=\"nurseEmail\" placeholder=\"example@kcv.rs\" style=\"border: 0;\" />\r\n  <div *ngIf=\"submitted && loginForm.controls.email.errors\" class=\"invalid-feedback\">\r\n    <div *ngIf=\"loginForm.controls.email.errors.required\">Email is required</div>\r\n    <div *ngIf=\"loginForm.controls.email.errors.email\">Email must be a valid Email address</div>\r\n  </div>\r\n  </div>\r\n</div>\r\n<div class=\"form-group row\">\r\n  <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"nurseName\">Name:</label>\r\n  <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n  <input type=\"text\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.name.errors }\"\r\n    class=\"form-control\" id=\"nurseName\" aria-describedby=\"nurseEmail\" style=\"border: 0;\" />\r\n  <div *ngIf=\"submitted && loginForm.controls.name.errors\" class=\"invalid-feedback\">\r\n    <div *ngIf=\"loginForm.controls.name.errors.required\">Name is required</div>\r\n  </div>\r\n  </div>\r\n</div>\r\n<div class=\"form-group row\">\r\n  <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"nurseSurname\">Surname:</label>\r\n  <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n  <input type=\"text\" formControlName=\"surname\"\r\n    [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.surname.errors }\" class=\"form-control\"\r\n    id=\"nurseSurname\" aria-describedby=\"doctorSurname\" style=\"border: 0;\" />\r\n  <div *ngIf=\"submitted && loginForm.controls.surname.errors\" class=\"invalid-feedback\">\r\n    <div *ngIf=\"loginForm.controls.surname.errors.required\">Surname is required</div>\r\n  </div>\r\n  </div>\r\n</div>\r\n<div class=\"form-group row\">\r\n  <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"nurseAddress\">Address:</label>\r\n  <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n  <input type=\"text\" formControlName=\"address\"\r\n    [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.address.errors }\" class=\"form-control\"\r\n    id=\"nurseAddress\" aria-describedby=\"doctorAddress\" style=\"border: 0;\" />\r\n  <div *ngIf=\"submitted && loginForm.controls.address.errors\" class=\"invalid-feedback\">\r\n    <div *ngIf=\"loginForm.controls.address.errors.required\">Address is required</div>\r\n  </div>\r\n  </div>\r\n</div>\r\n<div class=\"form-group row\">\r\n  <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"nurseCity\">City:</label>\r\n  <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n  <input type=\"text\" formControlName=\"city\" [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.city.errors }\"\r\n    class=\"form-control\" id=\"nurseCity\" aria-describedby=\"nurseCity\" style=\"border: 0;\" />\r\n  <div *ngIf=\"submitted && loginForm.controls.city.errors\" class=\"invalid-feedback\">\r\n    <div *ngIf=\"loginForm.controls.city.errors.required\">City is required</div>\r\n  </div>\r\n</div>\r\n</div>\r\n<div class=\"form-group row\">\r\n  <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"nurseState\">State:</label>\r\n  <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n  <input type=\"text\" formControlName=\"state\"\r\n    [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.state.errors }\" class=\"form-control\" id=\"nurseState\"\r\n    aria-describedby=\"nurseState\" style=\"border: 0;\" />\r\n  <div *ngIf=\"submitted && loginForm.controls.state.errors\" class=\"invalid-feedback\">\r\n    <div *ngIf=\"loginForm.controls.state.errors.required\">State is required</div>\r\n  </div>\r\n  </div>\r\n</div>\r\n<div class=\"form-group row\">\r\n  <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"nursePhone\">Phone number:</label>\r\n  <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n  <input type=\"text\" formControlName=\"phoneNumber\"\r\n    [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.phoneNumber.errors }\" class=\"form-control\" id=\"nursePhone\"\r\n    aria-describedby=\"nursePhone\" style=\"border: 0;\" />\r\n  <div *ngIf=\"submitted && loginForm.controls.phoneNumber.errors\" class=\"invalid-feedback\">\r\n    <div *ngIf=\"loginForm.controls.phoneNumber.errors.required\">Phone number is required</div>\r\n  </div>\r\n  </div>\r\n</div>\r\n<div class=\"form-group row\">\r\n  <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"nurseShiftStart\">Shift start:</label>\r\n  <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n  <input type=\"text\" formControlName=\"shiftStart\"\r\n    [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.shiftStart.errors }\" class=\"form-control\"\r\n    id=\"nurseShiftStart\" aria-describedby=\"shiftSHelp\" placeholder=\"ex. 07:00\" style=\"border: 0;\" />\r\n  <div *ngIf=\"submitted && loginForm.controls.shiftStart.errors\" class=\"invalid-feedback\">\r\n    <div *ngIf=\"loginForm.controls.shiftStart.errors.required\">Shift is required</div>\r\n    <div *ngIf=\"loginForm.controls.shiftStart.errors.minlength\">Shift is exactly 5 characters long</div>\r\n    <div *ngIf=\"loginForm.controls.shiftStart.errors.maxlength\">Shift is exactly 5 characters long</div>\r\n  </div>\r\n  </div>\r\n</div>\r\n<div class=\"form-group row\">\r\n  <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"nurseShiftEnd\">Shift end:</label>\r\n  <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n  <input type=\"text\" formControlName=\"shiftEnd\"\r\n    [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.shiftEnd.errors }\" class=\"form-control\"\r\n    id=\"nurseShiftEnd\" placeholder=\"ex. 15:00\" style=\"border: 0;\" />\r\n  <div *ngIf=\"submitted && loginForm.controls.shiftEnd.errors\" class=\"invalid-feedback\">\r\n    <div *ngIf=\"loginForm.controls.shiftEnd.errors.required\">Shift is required</div>\r\n    <div *ngIf=\"loginForm.controls.shiftEnd.errors.minlength\">Shift is exactly 5 characters long</div>\r\n    <div *ngIf=\"loginForm.controls.shiftEnd.errors.maxlength\">Shift is exactly 5 characters long</div>\r\n  </div>\r\n  </div>\r\n</div>\r\n<div class=\"form-group row\">\r\n  <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"nurseUpin\">UPIN:</label>\r\n  <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n  <input type=\"text\" formControlName=\"upin\" [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.upin.errors }\"\r\n    class=\"form-control\" id=\"nurseUpin\" aria-describedby=\"nurseUpin\" style=\"border: 0;\" />\r\n  <div *ngIf=\"submitted && loginForm.controls.upin.errors\" class=\"invalid-feedback\">\r\n    <div *ngIf=\"loginForm.controls.upin.errors.required\">UPIN is required</div>\r\n    <div *ngIf=\"loginForm.controls.upin.errors.minlength\">UPIN is exactly 13 characters long</div>\r\n    <div *ngIf=\"loginForm.controls.upin.errors.maxlength\">UPIN is exactly 13 characters long</div>\r\n  </div>\r\n  </div>\r\n</div>\r\n<button type=\"submit\" class=\"btn btn-primary\">Add</button>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/nurse-listing/nurse-listing.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/nurse-listing/nurse-listing.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n  <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n      <h3 class=\"display-8\">Nurses</h3>\r\n      <p class=\"lead\">Here you can see a list of clinic nurses.</p>\r\n  </div>\r\n</div>\r\n<p>\r\n    <button class=\"btn btn-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\"\r\n        aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n        Search nurses\r\n    </button>\r\n</p>\r\n<div class=\"collapse\" id=\"collapseExample\">\r\n    <div class=\"card card-body\">\r\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearch()\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Name: </label>\r\n                    <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                        <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && searchForm.controls.name.errors }\"\r\n                            class=\"form-control\" formControlName=\"name\" style=\"border: 0;\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Surname: </label>\r\n                    <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                        <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && searchForm.controls.surname.errors }\"\r\n                            class=\"form-control\" formControlName=\"surname\" style=\"border: 0;\" />\r\n                    </div>\r\n                </div>\r\n                <button class=\"btn btn-primary \">Search</button>\r\n            </form>\r\n    </div>\r\n</div>\r\n<table class=\"table\">\r\n  <thead>\r\n      <tr>\r\n          <th scope=\"col\" *ngFor='let param of nurseHeaders'>{{param}}</th>\r\n          <th scope=\"col\">\r\n              <button type=\"button\" class=\"btn btn-light\" (click)=\"addNewNurse()\">Add</button>\r\n          </th>\r\n      </tr>\r\n  </thead>\r\n  <tbody>\r\n      <tr *ngFor='let nurse of nurses'>\r\n          <td> {{nurse.name}} </td>\r\n          <td> {{nurse.surname}} </td>\r\n          <td> {{nurse.phoneNumber}} </td>\r\n          <td> {{nurse.shiftStart}} </td>\r\n          <td> {{nurse.shiftEnd}} </td>\r\n          <td>\r\n              <div class=\"dropdown\">\r\n                  <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                      data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                      Options\r\n                  </button>\r\n                  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                      <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"deleteNurse(nurse)\">Delete</a>\r\n                  </div>\r\n              </div>\r\n          </td>\r\n      </tr>\r\n  </tbody>\r\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/ordination-form/ordination-form.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/ordination-form/ordination-form.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid col-lg-8 col-sm-10\"\r\n    style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n    <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n        <h3 class=\"display-8\">{{change}} an ordination</h3>\r\n        <p class=\"lead\">Here you can {{change.toLowerCase()}} an ordination.</p>\r\n    </div>\r\n</div>\r\n<div class=\"m-5 mx-auto\">\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Name: </label>\r\n            <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.name.errors }\"\r\n                    class=\"form-control\" formControlName=\"name\" style=\"border: 0;\" />\r\n                <div *ngIf=\"submitted && form.controls.name.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"form.controls.name.errors.required\">Name is required</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Number: </label>\r\n            <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                <input type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.number.errors }\"\r\n                    class=\"form-control\" formControlName=\"number\" style=\"border: 0;\" />\r\n                <div *ngIf=\"submitted && form.controls.number.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"form.controls.number.errors.required\">Number is required</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <button class=\"btn btn-primary\">Submit</button>\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/ordination-listing/ordination-listing.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/ordination-listing/ordination-listing.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n    <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n        <h3 class=\"display-8\">Ordinations</h3>\r\n        <p class=\"lead\">Here you can see a list of clinic ordinations.</p>\r\n    </div>\r\n</div>\r\n<p>\r\n    <button class=\"btn btn-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#searchForm\" aria-expanded=\"false\"\r\n        aria-controls=\"searchForm\">\r\n        Search ordinations\r\n    </button>\r\n    &nbsp;&nbsp;&nbsp;\r\n    <button class=\"btn btn-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#filterForm\" aria-expanded=\"false\"\r\n        aria-controls=\"filterForm\">\r\n        Filter ordinations\r\n    </button>\r\n</p>\r\n<div class=\"collapse\" id=\"searchForm\">\r\n    <div class=\"card card-body\">\r\n        <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearch()\">\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Name: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"name\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Number: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"number\" class=\"form-control\" formControlName=\"number\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n            <button class=\"btn btn-primary \">Search</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n<div class=\"collapse\" id=\"filterForm\">\r\n    <div class=\"card card-body\">\r\n        <form [formGroup]=\"filterForm\">\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Name: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"name\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Number: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"number\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th scope=\"col\" *ngFor='let param of ordinationsHeaders'>{{param}}</th>\r\n            <th scope=\"col\">\r\n                <button type=\"button\" class=\"btn btn-light\" (click)=\"addNewOrdination()\">Add</button>\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor='let ordination of filteredOrdinations'>\r\n            <td> {{ordination.name}} </td>\r\n            <td> {{ordination.number}} </td>\r\n            <td>\r\n                <div class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Options\r\n                    </button>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\"\r\n                            (click)=\"changeOrdination(ordination)\">Change</a>\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\"\r\n                            (click)=\"deleteOrdination(ordination)\">Delete</a>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/ordination-selection/ordination-selection.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/ordination-selection/ordination-selection.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n    <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n        <h3 class=\"display-8\">Ordinations</h3>\r\n        <p class=\"lead\">Select ordination for appointment</p>\r\n    </div>\r\n</div>\r\n<p>\r\n    <button class=\"btn btn-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#searchForm\" aria-expanded=\"false\"\r\n        aria-controls=\"searchForm\">\r\n        Search ordinations\r\n    </button>\r\n    &nbsp;&nbsp;&nbsp;\r\n    <button class=\"btn btn-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#filterForm\" aria-expanded=\"false\"\r\n        aria-controls=\"filterForm\">\r\n        Filter ordinations\r\n    </button>\r\n</p>\r\n<div class=\"collapse\" id=\"searchForm\">\r\n    <div class=\"card card-body\">\r\n        <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearch()\">\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Name: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"name\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Number: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"number\" class=\"form-control\" formControlName=\"number\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"date\" class=\"col-sm-2 col-form-label font-weight-bold\">Date: </label>\r\n                <div class=\"row col-lg-6 col-sm-10 col-md-6 shadow-sm p-1 mb-1 ml-1 bg-white rounded col\">\r\n                    <div class=\"col-lg-10 col-sm-10 col-md-10\">\r\n                        <input type=\"datetime\" formControlName=\"date\" [owlDateTime]=\"dt2\" class=\"form-control\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && searchForm.controls.date.errors }\" id=\"date\"\r\n                            style=\"border: 0;\">\r\n                    </div>\r\n                    <span class=\"m-1 float-right col-lg-1 col-sm-2 col-md-2\" [owlDateTimeTrigger]=\"dt2\"> \r\n                        <ion-icon size=\"large\" name=\"calendar\" style=\"cursor: pointer;\"></ion-icon> </span>\r\n                    <owl-date-time [pickerType]=\"'calendar'\" #dt2></owl-date-time>\r\n                </div>\r\n            </div>\r\n            <button class=\"btn btn-primary \">Search</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n<div class=\"collapse\" id=\"filterForm\">\r\n    <div class=\"card card-body\">\r\n        <form [formGroup]=\"filterForm\">\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Name: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"name\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Number: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"number\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th scope=\"col\" *ngFor='let param of ordinationsHeaders'>{{param}}</th>\r\n            <th scope=\"col\">\r\n                <!-- <button type=\"button\" class=\"btn btn-light\" (click)=\"addNewOrdination()\">Add</button> -->\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor='let ordination of filteredOrdinations'>\r\n            <td> {{ordination.name}} </td>\r\n            <td> {{ordination.number}} </td>\r\n            <td> {{ordination.available === undefined ? 'Date not selected': ordination.available ? 'Available': 'Not Available - First available date: '+ ordination.firstAvailableDate}}\r\n            </td>\r\n            <!-- <td *ngIf=\"ordination.available\" class=\"collapse\" id=\"availablePeriods{{ordination.id}}\">\r\n                <div class=\"card card-body\">\r\n                    <div *ngFor=\"let timeslot of ordination.availablePeriods\">\r\n                        {{ timeslot }}\r\n                    </div>\r\n                </div>\r\n            </td> -->\r\n            <td *ngIf=\"ordination.available\">\r\n            <button class=\"btn btn-light\" id=\"{{'showAvailable'+ordination.number}}\" type=\"button\" (click)=\"showAvailableTimeslots(ordination)\">\r\n                    Show available timeslots\r\n                </button>\r\n                <!-- <button class=\"btn btn-light\" type=\"button\" data-toggle=\"collapse\"\r\n                    (click)=\"showAvailableTimeslots(ordination)\" [attr.data-target]=\"'#availablePeriods'+ordination.id\"\r\n                    aria-expanded=\"false\" aria-controls=\"filterForm\">\r\n                    Show available timeslots\r\n                </button> -->\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<ng-template #modalContent let-close=\"close\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Appointment info</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"row mx-auto\">\r\n            <div class=\"col\">\r\n                <div class=\"card\" style=\"height: 32em;\">\r\n                    <div class=\"card-body text-center\">\r\n                        <p class=\"card-title\"> <b>Doctor</b>: </p>\r\n                    <div id=\"{{'modal'+modalData.appointment.id}}\" style=\"text-align: center;\">\r\n                            <div class=\"col-sm-12 col-lg-12 shadow-sm p-1 mb-1 bg-white rounded\"\r\n                                style=\"width:80%; display: inline-block;\">\r\n                                <ngx-select-dropdown (change)=\"selectionChangedDoctor($event)\" [multiple]=\"false\"\r\n                                    [config]=\"config2\" [options]=\"optionsDoctors\" [(ngModel)]=\"selectedDoctor\">\r\n                                </ngx-select-dropdown>\r\n                            </div>\r\n                        </div>\r\n                        <hr style=\"width:80%\">\r\n                        <p class=\"card-text\"> <b>Patient</b>: {{modalData.appointment.patient.name}}\r\n                            {{modalData.appointment.patient.surname}} </p>\r\n                        <hr style=\"width:60%\">\r\n                        <p class=\"card-text\"> {{modalData.appointment.typeOfExamination.name}} </p>\r\n                        <hr style=\"width:50%\"><br>\r\n                        <p class=\"card-text\"> <b>Selected time</b>:\r\n                            {{modalData.appointment.startTimeString ? modalData.appointment.startTimeString : \"Not specified\"}}\r\n                        </p>\r\n                        <hr style=\"width:50%\">\r\n                        <p class=\"card-text\"> <b>Selected end time</b>:\r\n                            {{modalData.appointment.endTimeString ? modalData.appointment.endTimeString : \"Not specified\"}}\r\n                        </p>\r\n                        <hr style=\"width:50%\">\r\n                        <div *ngIf=\"modalData.appointment.typeOfExamination.operation\">\r\n                            <p class=\"card-title\"> <b>Attending doctors</b>: </p>\r\n                            <div style=\"text-align: center;\">\r\n                                <div class=\"col-sm-12 col-lg-12 shadow-sm p-1 mb-1 bg-white rounded\"\r\n                                    style=\"width:80%; display: inline-block;\">\r\n                                    <ngx-select-dropdown (change)=\"selectionChangedAttendingDoctor($event)\"\r\n                                        [multiple]=\"true\" [config]=\"config2\" [options]=\"optionsAttendingDoctors\" [(ngModel)]=\"selectedAttendingDoctors\">\r\n                                    </ngx-select-dropdown>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"card\" style=\"height: 32em;\">\r\n                    <div class=\"card-header text-center text-muted\">\r\n                        <label class=\"card-text\">Availible timeslots</label>\r\n                    </div>\r\n                    <div class=\"card-body text-center\" style=\"overflow-y: scroll\">\r\n                        <table style=\"width: 100%;\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th scope=\"col\" *ngFor='let param of timeslotsHeaders'>{{param}}</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor='let period of modalData.ordinationData.filteredPeriods; index as i'\r\n                                    [attr.data-index]=\"i\">\r\n                                    <td> {{ period.split('-')[0] }} </td>\r\n                                    <td> {{ period.split('-')[1] }} </td>\r\n                                    <td>\r\n                                        <button *ngIf=\"!getAlreadySelected(i)\" class=\"btn btn-secondary\" type=\"button\"\r\n                                            aria-haspopup=\"true\" (click)=\"selectTimeslot(period, i)\">\r\n                                            Select\r\n                                        </button>\r\n                                        <button *ngIf=\"getAlreadySelected(i)\" class=\"btn btn-primary\" type=\"button\"\r\n                                            aria-haspopup=\"true\" (click)=\"deselectTimeslot(i)\">\r\n                                            Selected\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\" id=\"btnCreateAppointment\" (click)=\"createAppointment()\">\r\n            Create appointment\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"closeModal()\">\r\n            Close\r\n        </button>\r\n    </div>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/type-of-examination-form/type-of-examination-form.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/type-of-examination-form/type-of-examination-form.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid col-lg-8 col-sm-10\"\r\n    style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n    <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n        <h3 class=\"display-8\">{{change}} a type of examination</h3>\r\n        <p class=\"lead\">Here you can {{change.toLowerCase()}} a type of examination.</p>\r\n    </div>\r\n</div>\r\n<div class=\"m-5 mx-auto\">\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n        <fieldset [disabled]=\"change === 'Change'\">\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Name: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.name.errors }\"\r\n                        class=\"form-control\" formControlName=\"name\" style=\"border: 0;\" />\r\n                    <div *ngIf=\"submitted && form.controls.name.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"form.controls.name.errors.required\">Name is required</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </fieldset>\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Price: </label>\r\n            <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                <input type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.price.errors }\"\r\n                    class=\"form-control\" formControlName=\"price\" style=\"border: 0;\" />\r\n                <div *ngIf=\"submitted && form.controls.price.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"form.controls.price.errors.required\">Price is required</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <fieldset [disabled]=\"change === 'Change'\">\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Operation: </label>\r\n                <div class=\"col-sm-2 col-lg-2  p-1 mb-1 \">\r\n                    <input type=\"checkbox\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.operation.errors }\"\r\n                        class=\"form-control\" formControlName=\"operation\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n        </fieldset>\r\n        <button class=\"btn btn-primary\">Submit</button>\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/type-of-examination-listing/type-of-examination-listing.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/type-of-examination-listing/type-of-examination-listing.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n    <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n        <h3 class=\"display-8\">Types of examination</h3>\r\n        <p class=\"lead\">Here you can see a list of types of examination in this clinic.</p>\r\n    </div>\r\n</div>\r\n<p>\r\n    <button class=\"btn btn-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\"\r\n        aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n        Search types of examination\r\n    </button>\r\n</p>\r\n<div class=\"collapse\" id=\"collapseExample\">\r\n    <div class=\"card card-body\">\r\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearch()\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Name: </label>\r\n                    <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                        <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && searchForm.controls.name.errors }\"\r\n                            class=\"form-control\" formControlName=\"name\" style=\"border: 0;\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Min price: </label>\r\n                    <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                        <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && searchForm.controls.minPrice.errors }\"\r\n                            class=\"form-control\" formControlName=\"minPrice\" style=\"border: 0;\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Max price: </label>\r\n                    <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                        <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && searchForm.controls.maxPrice.errors }\"\r\n                            class=\"form-control\" formControlName=\"maxPrice\" style=\"border: 0;\" />\r\n                    </div>\r\n                </div>\r\n                <button class=\"btn btn-primary \">Search</button>\r\n            </form>\r\n    </div>\r\n</div>\r\n<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th scope=\"col\" *ngFor='let param of typeOfExaminationHeaders'>{{param}}</th>\r\n            <th scope=\"col\">\r\n                <button type=\"button\" class=\"btn btn-light\" (click)=\"addNewTypeOfExamination()\">Add</button>\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor='let typeOfExamination of typesOfExamination'>\r\n            <td> {{typeOfExamination.name}} </td>\r\n            <td> {{typeOfExamination.price}} </td>\r\n            <td>\r\n                <div class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Options\r\n                    </button>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\"\r\n                            (click)=\"changeTypeOfExamination(typeOfExamination)\">Change</a>\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\"\r\n                            (click)=\"deleteTypeOfExamination(typeOfExamination)\">Delete</a>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/vacation-requests/vacation-requests.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/vacation-requests/vacation-requests.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n    <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n        <h3 class=\"display-8\">Vacation requests</h3>\r\n        <p class=\"lead\">Here you can see a list of pending vacation requests. You can approve or reject them.</p>\r\n    </div>\r\n  </div>\r\n  <table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th scope=\"col\" *ngFor='let param of requestsHeaders'>{{param}}</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor='let request of requests'>\r\n            <td> {{request.roles[0]}} </td>\r\n            <td> {{request.staffName}} </td>\r\n            <td> {{request.staffSurname}} </td>\r\n            <td> {{request.startDate}} </td>\r\n            <td> {{request.endDate}} </td>\r\n            <td>\r\n                <div class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Options\r\n                    </button>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"approveRequest(request)\" >Approve</a> <!-- [routerLink]=\"['./clinicAdmins']\" -->\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"rejectRequest(request)\">Delete</a>  \r\n                    </div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n  </table>\r\n  <div *ngIf=\"requests==undefined || requests.length==0\" class=\"alert alert-info\" role=\"alert\">\r\n    Currently there are no new vacation requests!\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/admin-personal-profile/admin-personal-profile.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/admin-personal-profile/admin-personal-profile.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid col-lg-8 col-sm-8\"\r\n  style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n  <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n    <h3 class=\"display-8\">Personal page</h3>\r\n    <p class=\"lead\">Here you can see, or change your personal information.</p>\r\n  </div>\r\n</div>\r\n<form *ngIf='loginForm' [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n  <fieldset [disabled]=\"change\">\r\n    <div class=\"form-group row\">\r\n      <label for=\"Name\" class=\"col-sm-2 col-form-label font-weight-bold\">Name</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.name.errors }\" id=\"Name\" formControlName=\"name\"\r\n          style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && loginForm.controls.name.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"loginForm.controls.name.errors.required\">Name is required</div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"Surname\" class=\"col-sm-2 col-form-label font-weight-bold\">Surname</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.surname.errors }\" id=\"Surname\"\r\n          formControlName=\"surname\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && loginForm.controls.surname.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"loginForm.controls.surname.errors.required\">Surname is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <fieldset [disabled]=\"true\">\r\n      <div class=\"form-group row\">\r\n        <label for=\"Email\" class=\"col-sm-2 col-form-label font-weight-bold\">E-mail</label>\r\n        <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n          <input type=\"email\" class=\"form-control\"\r\n            [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.email.errors }\" id=\"Email\"\r\n            formControlName=\"email\" style=\"border: 0;\" />\r\n          <div *ngIf=\"submitted && loginForm.controls.email.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"loginForm.controls.email.errors.required\">E-mail is required</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </fieldset>\r\n\r\n    <div class=\"form-group row\">\r\n      <label for=\"Address\" class=\"col-sm-2 col-form-label font-weight-bold\">Address</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.address.errors }\" id=\"Address\"\r\n          formControlName=\"address\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && loginForm.controls.address.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"loginForm.controls.address.errors.required\">Address is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"City\" class=\"col-sm-2 col-form-label font-weight-bold\">City</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.city.errors }\" id=\"City\" formControlName=\"city\"\r\n          style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && loginForm.controls.city.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"loginForm.controls.city.errors.required\">City is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"State\" class=\"col-sm-2 col-form-label font-weight-bold\">State</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.state.errors }\" id=\"State\" formControlName=\"state\"\r\n          style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && loginForm.controls.state.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"loginForm.controls.state.errors.required\">State is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"PhoneNumber\" class=\"col-sm-2 col-form-label font-weight-bold\">Phone number</label>\r\n      <div class=\"col-sm-10  col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.phoneNumber.errors }\" id=\"PhoneNumber\"\r\n          formControlName=\"phoneNumber\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && loginForm.controls.phoneNumber.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"loginForm.controls.phoneNumber.errors.required\">Phone number is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <fieldset [disabled]=\"true\">\r\n      <div class=\"form-group row\">\r\n        <label for=\"JMBG\" class=\"col-sm-2 col-form-label font-weight-bold\">UPIN</label>\r\n        <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n          <input type=\"text\" class=\"form-control\"\r\n            [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.upin.errors }\" id=\"JMBG\" formControlName=\"upin\"\r\n            style=\"border: 0;\" />\r\n          <div *ngIf=\"submitted && loginForm.controls.upin.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"loginForm.controls.upin.errors.required\">UPIN is required</div>\r\n            <div *ngIf=\"loginForm.controls.upin.errors.minlength\">UPIN is exactly 13 characters long</div>\r\n            <div *ngIf=\"loginForm.controls.upin.errors.maxlength\">UPIN is exactly 13 characters long</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </fieldset>\r\n\r\n    <!-- <div class=\"form-group row\">\r\n      <label for=\"inputPassword\" class=\"col-sm-2 col-form-label font-weight-bold\">Password</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">\r\n      </div>\r\n    </div> -->\r\n    <div class=\"col-lg-8 col-sm-10\">\r\n      <hr>\r\n    </div>\r\n  </fieldset>\r\n\r\n  <div>\r\n    <button type=\"submit\" class=\"btn btn-primary\" *ngIf='!change'>Submit changes</button>\r\n    <button type=\"button\" class=\"btn btn-outline-primary m-1\" *ngIf='!change'\r\n      (click)='cancelChanges()'>Cancel</button>\r\n  </div>\r\n\r\n</form>\r\n<div>\r\n  <button type=\"button\" class=\"btn btn-outline-primary\" *ngIf='change' (click)='enableChangeInfo()'>Change\r\n    information</button>\r\n  <button type=\"button\" class=\"btn btn-outline-primary m-1\" *ngIf='change' (click)='showChangePasswordForm()'>Change\r\n    password</button>\r\n</div>\r\n<br><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/admin-profile.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/admin-profile.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='row'>\r\n\t<ul class=\"nav nav-pills\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n\t\t<li class=\"nav-item\">\r\n\t\t\t<a class=\"nav-link active\" data-toggle=\"pill\" [routerLink]=\"['./profile']\" href=\"#v-pills-profile\" role=\"tab\"\r\n\t\t\t\taria-controls=\"v-pills-home\" aria-selected=\"true\">Profile</a>\r\n\t\t</li>\r\n\t\t<li class=\"nav-item\">\r\n\t\t\t<a class=\"nav-link\" data-toggle=\"pill\" [routerLink]=\"['./medications']\" role=\"tab\" aria-controls=\"v-pills-home\"\r\n\t\t\t\taria-selected=\"true\">Medication Dictionary</a>\r\n\t\t</li>\r\n\t\t<li class=\"nav-item\">\r\n\t\t\t<a class=\"nav-link\" data-toggle=\"pill\" [routerLink]=\"['./diagnoses']\" role=\"tab\" aria-controls=\"v-pills-home\"\r\n\t\t\t\taria-selected=\"true\">Diagnoses Dictionary</a>\r\n\t\t</li>\r\n\t\t<!-- (click)=\"loadClinics()\" href=\"#v-pills-clinics\" -->\r\n\t\t<!-- <li class=\"nav-item\">\r\n            <a class=\"nav-link\"data-toggle=\"pill\" [routerLink]=\"['./clinicAdmins']\"\r\n            [queryParams]=\"{params:clinicAdminHeaders | json ,title:'Clinic administrator',jumboText:'clinic administraor'}\"  role=\"tab\" aria-controls=\"v-pills-home\" aria-selected=\"true\">Clinic administrators</a>\r\n          </li> -->\r\n\t\t<li class=\"nav-item\">\r\n\t\t\t<a class=\"nav-link\" data-toggle=\"pill\" [routerLink]=\"['./registrationRequests']\" href=\"#v-pills-requests\" role=\"tab\" aria-controls=\"v-pills-home\"\r\n\t\t\t\taria-selected=\"true\">Registration requests</a>\r\n\t\t</li>\r\n\t\t<li class=\"nav-item\" *ngIf=\"currentUser.id === 1\">\r\n\t\t\t<a class=\"nav-link\" data-toggle=\"pill\" [routerLink]=\"['./clinicCenterAdmins']\" href=\"#v-pills-requests\" role=\"tab\" aria-controls=\"v-pills-home\"\r\n\t\t\t\taria-selected=\"true\">Administrators</a>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t<div class=\"tab-content\" style='width: 100%;' id=\"v-pills-tabContent\">\r\n\t\t<router-outlet></router-outlet>\r\n\t\t<!-- <div class=\"tab-pane fade show active \" id=\"v-pills-profile\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">\r\n      </div>\r\n      <div class=\"tab-pane fade show \" id=\"v-pills-clinics\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">\r\n\r\n      </div>\r\n      <div class=\"tab-pane fade show\" id=\"v-pills-cadmins\" role=\"tabpanel\" aria-labelledby=\"v-pills-messages-tab\">\r\n         <app-show-listing \r\n         [params]='clinicAdminHeaders' \r\n         [title]=\"'Clinic administrators'\"\r\n         [jumboText]=\"'clinic administrators'\">\r\n         </app-show-listing> \r\n      </div>\r\n      <div class=\"tab-pane fade show\" id=\"v-pills-requests\" role=\"tabpanel\" aria-labelledby=\"v-pills-settings-tab\"></div> -->\r\n\t</div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/clinic-admin-form/clinic-admin-form.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/clinic-admin-form/clinic-admin-form.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid col-lg-12 col-sm-12\"\r\n  style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n  <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n    <h3 class=\"display-8\">Adding clinic administrator</h3>\r\n    <p class=\"lead\">Here you can add a new clinic administrator.</p>\r\n  </div>\r\n</div>\r\n<form *ngIf='form' [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group row\">\r\n      <label for=\"Name\" class=\"col-sm-2 col-form-label font-weight-bold\">Name</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && form.controls.name.errors }\" \r\n        id=\"Name\" formControlName=\"name\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.name.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.name.errors.required\">Code is required</div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"Surname\" class=\"col-sm-2 col-form-label font-weight-bold\">Surname</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && form.controls.surname.errors }\" \r\n        id=\"Surname\" formControlName=\"surname\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.surname.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.surname.errors.required\">Code is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"Email\" class=\"col-sm-2 col-form-label font-weight-bold\">E-mail</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"email\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && form.controls.email.errors }\" \r\n        id=\"Email\" formControlName=\"email\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.email.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.email.errors.required\">Code is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"Address\" class=\"col-sm-2 col-form-label font-weight-bold\">Address</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && form.controls.address.errors }\" \r\n        id=\"Address\" formControlName=\"address\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.address.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.address.errors.required\">Code is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"City\" class=\"col-sm-2 col-form-label font-weight-bold\">City</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && form.controls.city.errors }\" \r\n        id=\"City\" formControlName=\"city\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.city.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.city.errors.required\">Code is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"State\" class=\"col-sm-2 col-form-label font-weight-bold\">State</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && form.controls.state.errors }\"\r\n         id=\"State\" formControlName=\"state\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.state.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.state.errors.required\">Code is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"PhoneNumber\" class=\"col-sm-2 col-form-label font-weight-bold\">Phone number</label>\r\n      <div class=\"col-sm-10  col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && form.controls.phoneNumber.errors }\" \r\n        id=\"PhoneNumber\" formControlName=\"phoneNumber\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.phoneNumber.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.phoneNumber.errors.required\">Code is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"JMBG\" class=\"col-sm-2 col-form-label font-weight-bold\">JMBG</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && form.controls.upin.errors }\" \r\n        id=\"JMBG\" formControlName=\"upin\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.upin.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.upin.errors.required\">Code is required</div>\r\n          <div *ngIf=\"form.controls.upin.errors.minlength\">Code is exactly 13 characters long</div>\r\n          <div *ngIf=\"form.controls.upin.errors.maxlength\">Code is exactly 13 characters long</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"form-group row\">\r\n      <label for=\"inputPassword\" class=\"col-sm-2 col-form-label font-weight-bold\">Password</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">\r\n      </div>\r\n    </div> -->\r\n    <div class=\"col-lg-8 col-sm-10\">\r\n      <hr>\r\n    </div>\r\n\r\n  <button type=\"submit\" class=\"btn btn-primary\">Add administrator to clinic: {{clinicName}}</button>\r\n\r\n</form>\r\n<br><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/clinic-administrators-listing/clinic-administrators-listing.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/clinic-administrators-listing/clinic-administrators-listing.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n    <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n        <h3 class=\"display-8\">Clinic \"{{clinicName}}\" administrators</h3>\r\n        <p class=\"lead\">Here you can see a list of existing administrators, change them, or add a new one.</p>\r\n    </div>\r\n</div>\r\n<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th scope=\"col\" *ngFor='let param of clinicAdminHeaders'>{{param}}</th>\r\n            <th scope=\"col\">\r\n                <button type=\"button\" class=\"btn btn-light\" (click)='addAdministrator()'>Add</button>\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor='let admin of admins'>\r\n            <td> {{admin.name}} </td>\r\n            <td> {{admin.surname}} </td>\r\n            <td> {{admin.email}} </td>\r\n            <td> {{admin.address}} </td>\r\n            <td> {{admin.city}} </td>\r\n            <td> {{admin.state}} </td>\r\n            <td> {{admin.phoneNumber}} </td>\r\n            <td>\r\n                <div class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Options\r\n                    </button>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)='deleteAdmin(admin)'>Delete</a>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/clinic-center-admins-listing/clinic-center-admins-listing.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/clinic-center-admins-listing/clinic-center-admins-listing.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n  <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n      <h3 class=\"display-8\">Clinical center administrators</h3>\r\n      <p class=\"lead\">Here you can see a list of existing administrators, change them, or add a new one.</p>\r\n  </div>\r\n</div>\r\n<table class=\"table\">\r\n  <thead>\r\n      <tr>\r\n          <th scope=\"col\" *ngFor='let param of clinicAdminHeaders'>{{param}}</th>\r\n          <th scope=\"col\">\r\n              <button type=\"button\" class=\"btn btn-light\" (click)='addAdministrator()'>Add</button>\r\n          </th>\r\n      </tr>\r\n  </thead>\r\n  <tbody>\r\n      <tr *ngFor='let admin of admins'>\r\n          <td> {{admin.name}} </td>\r\n          <td> {{admin.surname}} </td>\r\n          <td> {{admin.email}} </td>\r\n          <td> {{admin.address}} </td>\r\n          <td> {{admin.city}} </td>\r\n          <td> {{admin.state}} </td>\r\n          <td> {{admin.phoneNumber}} </td>\r\n          <td>\r\n              <div class=\"dropdown\" *ngIf=\"currentUser.id != admin.id\">\r\n                  <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                      data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                      Options\r\n                  </button>\r\n                  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                      <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)='deleteAdmin(admin)'>Delete</a>\r\n                  </div>\r\n              </div>\r\n          </td>\r\n      </tr>\r\n  </tbody>\r\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/clinic-center-admins/clinic-center-admins.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/clinic-center-admins/clinic-center-admins.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid col-lg-12 col-sm-12\"\r\n  style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n  <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n    <h3 class=\"display-8\">Adding clinic center administrator</h3>\r\n    <p class=\"lead\">Here you can add a new clinic center administrator.</p>\r\n  </div>\r\n</div>\r\n<form *ngIf='form' [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group row\">\r\n      <label for=\"Name\" class=\"col-sm-2 col-form-label font-weight-bold\">Name</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && form.controls.name.errors }\" \r\n        id=\"Name\" formControlName=\"name\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.name.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.name.errors.required\">Code is required</div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"Surname\" class=\"col-sm-2 col-form-label font-weight-bold\">Surname</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && form.controls.surname.errors }\" \r\n        id=\"Surname\" formControlName=\"surname\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.surname.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.surname.errors.required\">Code is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"Email\" class=\"col-sm-2 col-form-label font-weight-bold\">E-mail</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"email\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && form.controls.email.errors }\" \r\n        id=\"Email\" formControlName=\"email\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.email.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.email.errors.required\">Code is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"Address\" class=\"col-sm-2 col-form-label font-weight-bold\">Address</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && form.controls.address.errors }\" \r\n        id=\"Address\" formControlName=\"address\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.address.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.address.errors.required\">Code is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"City\" class=\"col-sm-2 col-form-label font-weight-bold\">City</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && form.controls.city.errors }\" \r\n        id=\"City\" formControlName=\"city\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.city.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.city.errors.required\">Code is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"State\" class=\"col-sm-2 col-form-label font-weight-bold\">State</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && form.controls.state.errors }\"\r\n         id=\"State\" formControlName=\"state\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.state.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.state.errors.required\">Code is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"PhoneNumber\" class=\"col-sm-2 col-form-label font-weight-bold\">Phone number</label>\r\n      <div class=\"col-sm-10  col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && form.controls.phoneNumber.errors }\" \r\n        id=\"PhoneNumber\" formControlName=\"phoneNumber\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.phoneNumber.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.phoneNumber.errors.required\">Code is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"JMBG\" class=\"col-sm-2 col-form-label font-weight-bold\">JMBG</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && form.controls.upin.errors }\" \r\n        id=\"JMBG\" formControlName=\"upin\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.upin.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.upin.errors.required\">Code is required</div>\r\n          <div *ngIf=\"form.controls.upin.errors.minlength\">Code is exactly 13 characters long</div>\r\n          <div *ngIf=\"form.controls.upin.errors.maxlength\">Code is exactly 13 characters long</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"form-group row\">\r\n      <label for=\"inputPassword\" class=\"col-sm-2 col-form-label font-weight-bold\">Password</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">\r\n      </div>\r\n    </div> -->\r\n    <div class=\"col-lg-8 col-sm-10\">\r\n      <hr>\r\n    </div>\r\n\r\n  <button type=\"submit\" class=\"btn btn-primary\">Add administrator to clinic center</button>\r\n\r\n</form>\r\n<br><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/clinic-form/clinic-form.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/clinic-form/clinic-form.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid col-lg-12 col-sm-12\"\r\n    style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n    <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n        <h3 class=\"display-8\">Adding clinic</h3>\r\n        <p class=\"lead\">Here you can add a new clinic.</p>\r\n    </div>\r\n</div>\r\n<form>\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"inputClinicName\">Name</label>\r\n        <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n            <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=name placeholder=\"Clinic Name\"\r\n                style=\"border: 0;\">\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"inputClinicAddress\">Address</label>\r\n        <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n            <input type=\"text\" class=\"form-control\" name=\"inputClinicAddress\" [(ngModel)]=\"address\"\r\n                placeholder=\"Clinic address\" style=\"border: 0;\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"inputClinicCity\">City</label>\r\n        <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n            <input type=\"text\" class=\"form-control\" name=\"inputClinicCity\" [(ngModel)]=\"city\" placeholder=\"Clinic city\"\r\n                style=\"border: 0;\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"inputClinicState\">State</label>\r\n        <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n            <input type=\"text\" class=\"form-control\" name=\"inputClinicState\" [(ngModel)]=\"state\"\r\n                placeholder=\"Clinic state/country\" style=\"border: 0;\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n        <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"inputClinicDescription\">Description</label>\r\n        <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n            <textarea class=\"form-control\" name=\"name\" [(ngModel)]=\"description\" rows=\"3\"\r\n                placeholder=\"Clinic description\" style=\"border: 0;\"></textarea>\r\n        </div>\r\n    </div>\r\n    <button type=\"button\" (click)=\"onSubmit()\" class=\"btn btn-primary\">Submit</button>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/clinic-listing/clinic-listing.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/clinic-listing/clinic-listing.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf= \"router.url=='/adminCC'\">\r\n<div class=\"jumbotron jumbotron-fluid\" style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n    <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n        <h3 class=\"display-8\">Clinics</h3>\r\n        <p class=\"lead\">Here you can see a list of existing clinics, change them, or add a new one.</p>\r\n    </div>\r\n</div>\r\n<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th scope=\"col\" *ngFor='let param of clinicHeaders'>{{param}}</th>\r\n            <th scope=\"col\">\r\n                <button type=\"button\" class=\"btn btn-light\" (click)=\"showNewClinicForm()\">Add</button>\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor='let clinic of clinics'>\r\n            <td> {{clinic.name}} </td>\r\n            <td> {{clinic.address}} </td>\r\n            <td> {{clinic.city}} </td>\r\n            <td> {{clinic.state}} </td>\r\n            <td> {{clinic.description}} </td>\r\n            <td>\r\n                <div class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Options\r\n                    </button>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"showClinicAdmins(clinic)\" >Show administrators</a> <!-- [routerLink]=\"['./clinicAdmins']\" -->\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"deleteClinic(clinic)\">Delete</a>\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"showClinicInfo(clinic)\">Show info</a>\r\n\r\n                    </div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n</div>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/diagnosis-form/diagnosis-form.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/diagnosis-form/diagnosis-form.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid col-lg-8 col-sm-10\"\r\nstyle=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n<div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n  <h3 class=\"display-8\">{{change}} a diagnosis</h3>\r\n  <p class=\"lead\">Here you can {{change.toLowerCase()}} a diagnosis.</p>\r\n</div>\r\n</div>\r\n<div class=\"m-5 mx-auto\">\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Code: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.code.errors }\"\r\n                        class=\"form-control\" formControlName=\"code\" style=\"border: 0;\" />\r\n                    <div *ngIf=\"submitted && form.controls.code.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"form.controls.code.errors.required\">Code is required</div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Description: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.description.errors }\"\r\n                        class=\"form-control\" formControlName=\"description\" style=\"border: 0;\" />\r\n                    <div *ngIf=\"submitted && form.controls.description.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"form.controls.description.errors.required\">Description is required</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <button class=\"btn btn-primary\">Submit</button>\r\n        </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/diagnosis-listing/diagnosis-listing.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/diagnosis-listing/diagnosis-listing.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n    <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n        <h3 class=\"display-8\">Diagnoses</h3>\r\n        <p class=\"lead\">Here you can see a list of existing diagnoses, change them, or add a new one.</p>\r\n    </div>\r\n</div>\r\n<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th scope=\"col\" *ngFor='let param of diagnosisHeaders'>{{param}}</th>\r\n            <th scope=\"col\">\r\n                <button type=\"button\" class=\"btn btn-light\" (click)=\"openDiagnosisForm(null)\">Add</button>\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor='let diagnosis of diagnoses'>\r\n            <td> {{diagnosis.code}} </td>\r\n            <td> {{diagnosis.description}} </td>\r\n            <td>\r\n                <div class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Options\r\n                    </button>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"openDiagnosisForm(diagnosis)\">Change</a>\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"deleteDiagnosis(diagnosis)\">Delete</a>\r\n\r\n                    </div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/medication-form/medication-form.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/medication-form/medication-form.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid col-lg-8 col-sm-10\"\r\nstyle=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n<div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n  <h3 class=\"display-8\">{{change}} a medication</h3>\r\n  <p class=\"lead\">Here you can {{change.toLowerCase()}} a medication.</p>\r\n</div>\r\n</div>\r\n<div class=\"m-5 mx-auto\">\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Code: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.code.errors }\"\r\n                        class=\"form-control\" formControlName=\"code\" style=\"border: 0;\" />\r\n                    <div *ngIf=\"submitted && form.controls.code.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"form.controls.code.errors.required\">Code is required</div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Name: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.name.errors }\"\r\n                        class=\"form-control\" formControlName=\"name\" style=\"border: 0;\" />\r\n                    <div *ngIf=\"submitted && form.controls.name.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"form.controls.name.errors.required\">Name is required</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <button class=\"btn btn-primary\">Submit</button>\r\n        </form>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/medication-listing/medication-listing.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/medication-listing/medication-listing.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n    <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n        <h3 class=\"display-8\">Medications</h3>\r\n        <p class=\"lead\">Here you can see a list of existing medications, change them, or add a new one.</p>\r\n    </div>\r\n</div>\r\n<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th scope=\"col\" *ngFor='let param of medicationHeaders'>{{param}}</th>\r\n            <th scope=\"col\">\r\n                <button type=\"button\" class=\"btn btn-light\" (click)=\"openMedicationForm(null)\">Add</button>\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor='let medication of medications'>\r\n            <td> {{medication.code}} </td>\r\n            <td> {{medication.name}} </td>\r\n            <td>\r\n                <div class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Options\r\n                    </button>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"openMedicationForm(medication)\">Change</a>\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"deleteMedication(medication)\">Delete</a>\r\n\r\n                    </div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/registration-listing/registration-listing.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/registration-listing/registration-listing.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n  <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n      <h3 class=\"display-8\">Registration requests</h3>\r\n      <p class=\"lead\">Here you can see a list of pending registration requests. You can approve or cancel them.</p>\r\n  </div>\r\n</div>\r\n<table class=\"table\">\r\n  <thead>\r\n      <tr>\r\n          <th scope=\"col\" *ngFor='let param of requestsHeaders'>{{param}}</th>\r\n      </tr>\r\n  </thead>\r\n  <tbody>\r\n      <tr *ngFor='let request of requests'>\r\n          <td> {{request.name}} </td>\r\n          <td> {{request.surname}} </td>\r\n          <td> {{request.city}} </td>\r\n          <td> {{request.state}} </td>\r\n          <td> {{request.phoneNumber}} </td>\r\n          <td> {{request.email}} </td>\r\n          <td>\r\n              <div class=\"dropdown\">\r\n                  <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                      data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                      Options\r\n                  </button>\r\n                  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                      <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"approveRequest(request)\" >Approve</a> <!-- [routerLink]=\"['./clinicAdmins']\" -->\r\n                      <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"deleteRequest(request)\">Delete</a>\r\n                  </div>\r\n              </div>\r\n          </td>\r\n      </tr>\r\n  </tbody>\r\n</table>\r\n<div *ngIf=\"requests==undefined || requests.length==0\" class=\"alert alert-info\" role=\"alert\">\r\n  Currently there are no new registration requests!\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/change-password/change-password.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/change-password/change-password.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-6 offset-md-3 mt-5\">\r\n    <div class=\"card\">\r\n        <h4 class=\"card-header\">Change Password</h4>\r\n        <div class=\"card-body\">\r\n            <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"oldPassword\">Old password</label>\r\n                    <input type=\"password\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.oldPassword.errors }\"\r\n                        class=\"form-control\" formControlName=\"oldPassword\" />\r\n                    <div *ngIf=\"submitted && form.controls.oldPassword.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"form.controls.oldPassword.errors.required\">Old password is required</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"newPassword\">New password</label>\r\n                    <input type=\"password\" \r\n                        [ngClass]=\"{ 'is-invalid': submitted && form.controls.newPassword.errors }\"\r\n                        class=\"form-control\" formControlName=\"newPassword\" />\r\n                    <div *ngIf=\"submitted && form.controls.newPassword.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"form.controls.newPassword.errors.required\">New password is required</div>\r\n                        <div *ngIf=\"form.controls.newPassword.errors.minlength\">Password is at least 6 characters\r\n                            long</div>\r\n                        <div *ngIf=\"form.controls.newPassword.errors.maxlength\">Password is maximum 24 characters\r\n                            long</div>\r\n                    </div>\r\n                </div>\r\n                <button class=\"btn btn-primary\">Submit</button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-home/doctor-calendar/doctor-calendar.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-home/doctor-calendar/doctor-calendar.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row text-center border-top \" style=\"padding-top: 0.3em;\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group float-left p-1\">\r\n      <div\r\n        class=\"btn btn-outline-dark\"\r\n        mwlCalendarPreviousView\r\n        [view]=\"view\"\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n      >\r\n        Previous\r\n      </div>\r\n      <div\r\n        class=\"btn btn-outline-secondary\"\r\n        mwlCalendarToday\r\n        [(viewDate)]=\"viewDate\"\r\n      >\r\n        Today\r\n      </div>\r\n      <div\r\n        class=\"btn btn-outline-dark\"\r\n        mwlCalendarNextView\r\n        [view]=\"view\"\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n      >\r\n        Next\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4 shadow-sm\">\r\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group float-right p-1\">\r\n      <div\r\n        class=\"btn btn-outline-dark\"\r\n        (click)=\"setView(CalendarView.Month)\"\r\n        [class.active]=\"view === CalendarView.Month\"\r\n      >\r\n        Month\r\n      </div>\r\n      <div\r\n        class=\"btn btn-outline-dark\"\r\n        (click)=\"setView(CalendarView.Week)\"\r\n        [class.active]=\"view === CalendarView.Week\"\r\n      >\r\n        Week\r\n      </div>\r\n      <div\r\n        class=\"btn btn-outline-dark\"\r\n        (click)=\"setView(CalendarView.Day)\"\r\n        [class.active]=\"view === CalendarView.Day\"\r\n      >\r\n        Day\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br />\r\n<div class=\"border rounded shadow pl-5 pr-5 pb-5\" [ngSwitch]=\"view\">\r\n  <mwl-calendar-month-view\r\n    *ngSwitchCase=\"CalendarView.Month\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    [activeDayIsOpen]=\"activeDayIsOpen\"\r\n    (dayClicked)=\"dayClicked($event.day)\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n  >\r\n  </mwl-calendar-month-view>\r\n  <mwl-calendar-week-view\r\n    *ngSwitchCase=\"CalendarView.Week\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n    [dayStartHour]=\"daystart\"\r\n    [dayEndHour]=\"dayend\"\r\n  >\r\n  </mwl-calendar-week-view>\r\n  <mwl-calendar-day-view\r\n    *ngSwitchCase=\"CalendarView.Day\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n    [dayStartHour]=\"daystart\"\r\n    [dayEndHour]=\"dayend\"\r\n    [hourSegments]=\"6\"\r\n  >\r\n  </mwl-calendar-day-view>\r\n</div>\r\n\r\n<!-- Everything you see below is just for the demo, you don't need to include it in your app -->\r\n\r\n<br /><br /><br />\r\n\r\n\r\n\r\n<ng-template #modalContent let-close=\"close\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{modalData?.appointment.typeOfExamination.name}}</h4>\r\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body \">\r\n\r\n      <div *ngIf=\"modalData?.appointment.completed\" class=\"jumbotron jumbotron-fluid col-lg-8 col-sm-8\"\r\n      style=\"max-height: 2em; margin-top:0.2em; padding-top: 0.3em; \">\r\n      <div class=\"container-fluid\" style=\"max-height: 1em;\">\r\n        <h6 class=\"h6\"> *Finished appointment </h6>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!modalData?.appointment.patient\" class=\"jumbotron jumbotron-fluid col-lg-8 col-sm-8\"\r\n      style=\"max-height: 2em; margin-top:0.2em; padding-top: 0.3em; \">\r\n      <div class=\"container-fluid\" style=\"max-height: 1em;\">\r\n        <h6 class=\"h6\"> *Available appointment </h6>\r\n      </div>\r\n    </div>\r\n        <div *ngIf=\"modalData?.appointment.patient\" class=\"form-group row \">\r\n          <label for=\"Surname\" class=\"col-sm-3 col-form-label font-weight-bold\">Patient Name</label>\r\n          <div class=\"col-sm-9 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n            <input type=\"text\" class=\"form-control\" value=\"{{modalData?.appointment.patient.name}}\" style=\"border: 0;\" disabled/>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"modalData?.appointment.patient\" class=\"form-group row\">\r\n          <label for=\"Surname\" class=\"col-sm-3 col-form-label font-weight-bold\">Patient surname</label>\r\n          <div class=\"col-sm-9 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n            <input type=\"text\" class=\"form-control\" value=\"{{modalData?.appointment.patient.surname}}\" style=\"border: 0;\" disabled/>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"Surname\" class=\"col-sm-3 col-form-label font-weight-bold\">Ordination</label>\r\n          <div class=\"col-sm-9 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n            <input type=\"text\" class=\"form-control\" value=\"{{modalData?.appointment.ordination.name + ' ' + modalData?.appointment.ordination.number }}\" style=\"border: 0;\" disabled/>\r\n          </div>\r\n      </div>\r\n        <div class=\"form-group row\">\r\n            <label for=\"Surname\" class=\"col-sm-3 col-form-label font-weight-bold\">Starting time</label>\r\n            <div class=\"col-sm-9 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n              <input type=\"text\" class=\"form-control\" value=\"{{timeConverter(modalData?.appointment.startingDateAndTime)}}\" style=\"border: 0;\" disabled/>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label for=\"Surname\" class=\"col-sm-3 col-form-label font-weight-bold\">Ending time</label>\r\n            <div class=\"col-sm-9 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n              <input type=\"text\" class=\"form-control\" value=\"{{timeConverter(modalData?.appointment.endingDateAndTime)}}\" style=\"border: 0;\" disabled/>\r\n            </div>\r\n        </div>\r\n    <div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\r\n      Cancel\r\n    </button>\r\n    <button *ngIf=\"modalData?.appointment.patient && !modalData?.appointment.completed\" type=\"button\" class=\"btn btn-outline-success\" (click)=\"startExamination(modalData?.appointment)\">\r\n      Start examination\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #modalContentVacation let-close=\"close\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{modalData?.appointment.title}}</h4>\r\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n      <div class=\"form-group row \">\r\n        <label for=\"Surname\" class=\"col-sm-2 col-form-label font-weight-bold\">Starts:</label>\r\n        <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n          <input type=\"text\" class=\"form-control\" value=\" {{timeConverter(modalData?.appointment.start/1000)}}\" style=\"border: 0;\" disabled/>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"Surname\" class=\"col-sm-2 col-form-label font-weight-bold\">Ends: </label>\r\n        <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n          <input type=\"text\" class=\"form-control\" value=\"{{timeConverter(modalData?.appointment.end/1000)}}\" style=\"border: 0;\" disabled />\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\r\n      OK\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-home/doctor-home/doctor-home.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-home/doctor-home/doctor-home.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='row'>\r\n\t<ul class=\"nav nav-pills container\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n\t\t<li class=\"nav-item\">\r\n\t\t\t<a class=\"nav-link active\" data-toggle=\"pill\" [routerLink]=\"['./calendar']\" href=\"#v-pills-calendar\" role=\"tab\"\r\n\t\t\t\taria-controls=\"v-pills-home\" aria-selected=\"true\">Calendar</a>\r\n\t\t</li>\r\n\t\t<li class=\"nav-item\">\r\n\t\t\t<a class=\"nav-link\" data-toggle=\"pill\" [routerLink]=\"['./patients']\" role=\"tab\" aria-controls=\"v-pills-home\"\r\n\t\t\t\taria-selected=\"true\">Patients</a>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t<div class=\"tab-content \" style='width: 100%;' id=\"v-pills-tabContent\">\r\n\t\t<router-outlet></router-outlet>\r\n\t</div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-home/doctor-my-profile/doctor-my-profile.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-home/doctor-my-profile/doctor-my-profile.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='row'>\r\n\t<ul class=\"nav nav-pills\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n\t\t<li class=\"nav-item\">\r\n\t\t\t<a class=\"nav-link active\" data-toggle=\"pill\" [routerLink]=\"['./profile']\" href=\"#v-pills-profile\" role=\"tab\"\r\n\t\t\t\taria-controls=\"v-pills-home\" aria-selected=\"true\">Personal profile</a>\r\n\t\t</li>\r\n\t\t<li class=\"nav-item\">\r\n\t\t\t<a class=\"nav-link\" data-toggle=\"pill\" [routerLink]=\"['./vacation_request']\" href=\"#v-pills-vacation_request\" role=\"tab\"\r\n\t\t\t\taria-controls=\"v-pills-home\" aria-selected=\"true\">Vacation request</a>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t<div class=\"tab-content\" style='width: 100%;' id=\"v-pills-tabContent\">\r\n\t\t<router-outlet></router-outlet>\r\n\t</div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-home/doctor-profile/doctor-profile.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-home/doctor-profile/doctor-profile.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid col-lg-8 col-sm-8\"\r\n  style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n  <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n    <h3 class=\"display-8\">Personal page</h3>\r\n    <p class=\"lead\">Here you can see, or change your personal information.</p>\r\n  </div>\r\n</div>\r\n<form *ngIf='loginForm' [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n  <fieldset [disabled]=\"change\">\r\n    <div class=\"form-group row\">\r\n      <label for=\"Name\" class=\"col-sm-2 col-form-label font-weight-bold\">Name</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.name.errors }\" id=\"Name\" formControlName=\"name\"\r\n          style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && loginForm.controls.name.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"loginForm.controls.name.errors.required\">Name is required</div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"Surname\" class=\"col-sm-2 col-form-label font-weight-bold\">Surname</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.surname.errors }\" id=\"Surname\"\r\n          formControlName=\"surname\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && loginForm.controls.surname.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"loginForm.controls.surname.errors.required\">Surname is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <fieldset [disabled]=\"true\">\r\n      <div class=\"form-group row\">\r\n        <label for=\"Email\" class=\"col-sm-2 col-form-label font-weight-bold\">E-mail</label>\r\n        <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n          <input type=\"email\" class=\"form-control\"\r\n            [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.email.errors }\" id=\"Email\"\r\n            formControlName=\"email\" style=\"border: 0;\" />\r\n          <div *ngIf=\"submitted && loginForm.controls.email.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"loginForm.controls.email.errors.required\">E-mail is required</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </fieldset>\r\n\r\n    <div class=\"form-group row\">\r\n      <label for=\"Address\" class=\"col-sm-2 col-form-label font-weight-bold\">Address</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.address.errors }\" id=\"Address\"\r\n          formControlName=\"address\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && loginForm.controls.address.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"loginForm.controls.address.errors.required\">Address is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"City\" class=\"col-sm-2 col-form-label font-weight-bold\">City</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.city.errors }\" id=\"City\" formControlName=\"city\"\r\n          style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && loginForm.controls.city.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"loginForm.controls.city.errors.required\">City is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"State\" class=\"col-sm-2 col-form-label font-weight-bold\">State</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.state.errors }\" id=\"State\" formControlName=\"state\"\r\n          style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && loginForm.controls.state.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"loginForm.controls.state.errors.required\">State is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"PhoneNumber\" class=\"col-sm-2 col-form-label font-weight-bold\">Phone number</label>\r\n      <div class=\"col-sm-10  col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.phoneNumber.errors }\" id=\"PhoneNumber\"\r\n          formControlName=\"phoneNumber\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && loginForm.controls.phoneNumber.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"loginForm.controls.phoneNumber.errors.required\">Phone number is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <fieldset [disabled]=\"true\">\r\n      <div class=\"form-group row\">\r\n        <label for=\"JMBG\" class=\"col-sm-2 col-form-label font-weight-bold\">UPIN</label>\r\n        <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n          <input type=\"text\" class=\"form-control\"\r\n            [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.upin.errors }\" id=\"JMBG\" formControlName=\"upin\"\r\n            style=\"border: 0;\" />\r\n          <div *ngIf=\"submitted && loginForm.controls.upin.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"loginForm.controls.upin.errors.required\">UPIN is required</div>\r\n            <div *ngIf=\"loginForm.controls.upin.errors.minlength\">UPIN is exactly 13 characters long</div>\r\n            <div *ngIf=\"loginForm.controls.upin.errors.maxlength\">UPIN is exactly 13 characters long</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </fieldset>\r\n\r\n    <!-- <div class=\"form-group row\">\r\n      <label for=\"inputPassword\" class=\"col-sm-2 col-form-label font-weight-bold\">Password</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">\r\n      </div>\r\n    </div> -->\r\n    <div class=\"col-lg-8 col-sm-10\">\r\n      <hr>\r\n    </div>\r\n  </fieldset>\r\n\r\n  <div>\r\n    <button type=\"submit\" class=\"btn btn-primary\" *ngIf='!change'>Submit changes</button>\r\n    <button type=\"button\" class=\"btn btn-outline-primary m-1\" *ngIf='!change'\r\n      (click)='cancelChanges()'>Cancel</button>\r\n  </div>\r\n\r\n</form>\r\n<div>\r\n  <button type=\"button\" class=\"btn btn-outline-primary\" *ngIf='change' (click)='enableChangeInfo()'>Change\r\n    information</button>\r\n  <button type=\"button\" class=\"btn btn-outline-primary m-1\" *ngIf='change' (click)='showChangePasswordForm()'>Change\r\n    password</button>\r\n</div>\r\n<br><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-home/examination/examination.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-home/examination/examination.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid col-lg-12 col-sm-12\"\r\n  style=\"max-height: 1em; margin-top:0.5em; padding-top: 0.5em;\">\r\n  <div class=\"container-fluid\" style=\"max-height: 1em; margin-bottom: 0.5em;\">\r\n    <h3 class=\"display-8\">Examination report</h3>\r\n  </div>\r\n</div>\r\n<form [formGroup]=\"examinationForm\" (ngSubmit)=\"submit()\" >\r\n  <div class=\"col-12 border-top border-bottom p-0 m-0 mb-3 pb-3 pt-3\">\r\n\r\n    <label class=\"font-weight-bold\"><img src=\"assets/images/typeOfExamination.png\"\r\n        style=\"width: 2em; height: 2em;\">{{type}}</label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    <img src=\"assets/images/datetime.png\" style=\"width: 2em; height: 2em;\">{{timeConverter(datetime)}}\r\n    \r\n    <div class=\"row border-top  pt-3 mb-3 ml-1 mr-1\">\r\n      <label class=\"col-sm-3 col-form-label font-weight-bold float-left border-bottom\">Doctor:</label>\r\n      <div class=\"col-sm-10 col-lg-9 shadow-sm p-1 mb-1 bg-white rounded \">\r\n        <div class=\"input-group mb-3\" style=\"border: 0; height: 1em;\">\r\n          <input type=\"text\" class=\"form-control input-display\"  formControlName=\"doctor\"  />\r\n          <div class=\"input-group-append\">\r\n            <span class=\"input-group-text\" style=\" height: 2.35em;\"><img src=\"assets/images/doctor.png\"\r\n                style=\" width: 1.7em; height: 1.7em;\"></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row  mb-3 ml-1 mr-1\">\r\n      <label class=\"col-sm-3 col-form-label font-weight-bold float-left border-bottom\">Date:</label>\r\n      <div class=\"col-sm-10 col-lg-9 shadow-sm p-1 mb-1 bg-white rounded \">\r\n        <div class=\"input-group mb-3\" style=\"border: 0; height: 1em;\">\r\n          <input type=\"text\" class=\"form-control input-display\" formControlName=\"dateAndTime\"  />\r\n          <div class=\"input-group-append\">\r\n            <span class=\"input-group-text\" style=\" height: 2.35em;\"><img src=\"assets/images/datetime.png\"\r\n                style=\" width: 1.7em; height: 1.7em;\"></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row  pt-3 mb-3 ml-1 mr-1\">\r\n      <label class=\"col-sm-3 col-form-label font-weight-bold float-left\">Report description:</label>\r\n      <div class=\"col-sm-10 col-lg-9 shadow-sm p-1 mb-1 bg-white rounded \">\r\n        <div class=\"input-group mb-3\" style=\"border: 0; height: 7em;\">\r\n          <textarea [ngClass]=\"{ 'is-invalid': submitted && examinationForm.controls.reportDescription.errors }\" type=\"text\" class=\"form-control input-display\" style=\"height: 8em;\" formControlName=\"reportDescription\"></textarea>\r\n          <div *ngIf=\"submitted && examinationForm.controls.reportDescription.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"examinationForm.controls.reportDescription.errors.required\">Report has to have a description!</div>\r\n          </div>\r\n          <div class=\"input-group-append\" *ngIf=\"!submitted\">\r\n            <span class=\"input-group-text\" style=\" height: 8em;\"><img src=\"assets/images/description.png\"\r\n                style=\" width: 1.7em; height: 1.7em;\"></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row  pt-2 mb-1 pl-1 pr-1\">\r\n      <div class=\"col-6 border-top pt-2\">\r\n        <div class=\"bg-white clearfix rounded \">\r\n          <label class=\"pl-1 col-form-label font-weight-bold float-left\">Diagnoses</label>\r\n          <img class=\"float-right\" src=\"assets/images/diagnosis.png\" style=\" width: 1.7em; height: 1.7em; \">\r\n        </div>\r\n        <ngx-select-dropdown (change)=\"selectionChanged($event)\" formControlName=\"diagnoses\" [multiple]=\"true\"\r\n          [config]=\"config2\" [options]=\"diagnoses\"></ngx-select-dropdown>\r\n      </div>\r\n      <div class=\"col-6 border-top pt-2\">\r\n        <div class=\"bg-white clearfix rounded \">\r\n          <label class=\"pl-1 col-form-label font-weight-bold float-left\">Medications</label>\r\n          <img class=\"float-right\" src=\"assets/images/drug.png\" style=\" width: 1.7em; height: 1.7em; \">\r\n        \r\n          <ngx-select-dropdown (change)=\"selectionChanged($event)\" formControlName=\"prescriptions\" [multiple]=\"true\"\r\n          [config]=\"config\" [options]=\"prescriptions\"></ngx-select-dropdown>\r\n\r\n        </div>\r\n\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-primary btn-md mt-2 mb-4\">Submit & save report</button>\r\n  <button type=\"button\" class=\"btn btn-info btn-md mt-2 float-right ml-1 mb-4\" (click)=\"ShowMedicalRecord(patient)\">Medical record</button>\r\n  <button type=\"button\" class=\"btn btn-secondary btn-md mt-2 float-right mr-1 mb-4\" (click)=\"scheduleNewAppointment(patient)\">Schedule appointment</button>\r\n</form>\r\n<ng-template #modalContent let-close=\"close\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Medical record</h4>\r\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body \">\r\n      <app-medical-record [patientID]=\"modalData?.patientID\" [patientName]=\"modalData?.patientName\"\r\n       [diagnoses]=\"diagnoses\" [prescriptions]=\"prescriptions\" [editable]=\"true\"></app-medical-record>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\r\n      Cancel\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #newAppointmentModal let-close=\"close\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Schedule new appointment</h4>\r\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body \">\r\n      <app-new-appointment-page [doctor]=\"doctor\" [patient]=\"patient.id\" (notifyParent)=\"close()\"></app-new-appointment-page>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\r\n      Cancel\r\n    </button>\r\n  </div>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-home/new-appointment-page/new-appointment-page.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-home/new-appointment-page/new-appointment-page.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"startAppointmentNow\" class=\"jumbotron jumbotron-fluid col-lg-8 col-sm-8\" style=\"margin-top:0.5em; padding-top: 0.5em;\">\r\n    <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n        <h3 class=\"display-8\">New Appointment</h3>\r\n        <p class=\"lead\">Insert informations about new appointment.</p>\r\n    </div>\r\n</div>\r\n\r\n<div>\r\n    <form *ngIf='form' [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n        <fieldset [disabled]=\"startAppointmentNow\">\r\n            <div class=\"form-group row\">\r\n                <label for=\"dateAndTime\" class=\"col-sm-2 col-lg-3 col-form-label font-weight-bold\">Date and time</label>\r\n                <div class=\"row col-lg-4 col-sm-8 col-md-6 shadow-sm p-1 mb-1 bg-white rounded col\">\r\n                    <div class=\"col-lg-10 col-sm-10 col-md-10\">\r\n                        <input type=\"datetime\" formControlName=\"dateAndTime\" [owlDateTime]=\"dt2\" class=\"form-control\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && form.controls.dateAndTime.errors }\" id=\"dateAndTime\"\r\n                            style=\"border: 0;\">\r\n                        <div *ngIf=\"submitted && form.controls.dateAndTime.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"form.controls.dateAndTime.errors.required\">Date and time is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <span *ngIf=\"!startAppointmentNow\" class=\"m-1 float-right col-lg-1 col-sm-2 col-md-2\" [owlDateTimeTrigger]=\"dt2\"> \r\n                        <ion-icon size=\"large\" name=\"calendar\" style=\"cursor: pointer;\"></ion-icon> </span>\r\n                    <owl-date-time [startAt]=\"now\" [stepMinute]=\"10\" [stepSecond]=\"60\" #dt2></owl-date-time>\r\n                </div>\r\n            </div>\r\n        </fieldset>\r\n    \r\n        <div class=\"form-group row\">\r\n            <label for=\"duration\" class=\"col-sm-2 col-lg-3 col-form-label font-weight-bold\">Duration</label>\r\n            <div class=\"row col-lg-4 col-sm-8 col-md-6 shadow-sm p-1 mb-1 bg-white rounded col\">\r\n                <select formControlName=\"duration\" class=\"m-1 form-control\"\r\n                    [ngClass]=\"{ 'is-invalid': submitted && form.controls.duration.errors }\" id=\"duration\"\r\n                    style=\"border: 0; width: 100%;\">\r\n                    <option value=\"\"></option>\r\n                    <option value=\"10\">10 minutes</option>\r\n                    <option value=\"20\">20 minutes</option>\r\n                    <option value=\"30\">30 minutes</option>\r\n                    <option value=\"40\">40 minutes</option>\r\n                    <option value=\"50\">50 minutes</option>\r\n                </select>\r\n                <div *ngIf=\"submitted && form.controls.duration.errors\" class=\"invalid-feedback ml-3\">\r\n                    <div *ngIf=\"form.controls.duration.errors.required\">Duration is required</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n        <div class=\"form-group row\">\r\n            <label for=\"typeOfExamination\" class=\"col-sm-2 col-lg-3 col-form-label font-weight-bold\">Type of\r\n                examination</label>\r\n            <div class=\"row col-lg-4 col-sm-8 col-md-6 shadow-sm p-1 mb-1 bg-white rounded col\">\r\n                <select formControlName=\"typeOfExamination\" class=\"m-1 form-control\"\r\n                    (change)=\"setPriceFromTypeOfExamination()\"\r\n                    [ngClass]=\"{ 'is-invalid': submitted && form.controls.typeOfExamination.errors }\" id=\"typeOfExamination\"\r\n                    style=\"border: 0; width: 100%;\">\r\n                    <option value=\"\"></option>\r\n                    <option *ngFor=\"let type of typesOfExamination\" [value]=\"type.id\">{{type.name}}\r\n                    </option>\r\n                </select>\r\n                <div *ngIf=\"submitted && form.controls.typeOfExamination.errors\" class=\"invalid-feedback ml-3\">\r\n                    <div *ngIf=\"form.controls.typeOfExamination.errors.required\">Please select type of examination</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n        <div class=\"form-group row\">\r\n            <label class=\"col-sm-2 col-lg-3 col-form-label font-weight-bold\" for=\"price\">Price: </label>\r\n            <div class=\"row col-lg-4 col-sm-8 col-md-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                <input type=\"number\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.price.errors }\"\r\n                    class=\"form-control\" formControlName=\"price\" style=\"border: 0;\" />\r\n                <div *ngIf=\"submitted && form.controls.price.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"form.controls.price.errors.required\">Price is required</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n        <div *ngIf=\"startAppointmentNow\" class=\"form-group row\">\r\n            <label for=\"ordination\" class=\"col-sm-2 col-lg-3 col-form-label font-weight-bold\">Ordination</label>\r\n            <div class=\"row col-lg-4 col-sm-8 col-md-6 shadow-sm p-1 mb-1 bg-white rounded col\">\r\n                <select formControlName=\"ordination\" class=\"m-1 form-control\"\r\n                    [ngClass]=\"{ 'is-invalid': submitted && form.controls.ordination.errors }\" id=\"ordination\"\r\n                    style=\"border: 0; width: 100%;\">\r\n                    <option value=\"\"></option>\r\n                    <option *ngFor=\"let ordination of ordinations\" [value]=\"ordination.id\">\r\n                        {{ordination.name + \"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Num. \" + ordination.number + \")\"}}\r\n                    </option>\r\n                </select>\r\n                <div *ngIf=\"submitted && form.controls.ordination.errors\" class=\"invalid-feedback ml-3\">\r\n                    <div *ngIf=\"form.controls.ordination.errors.required\">Please select ordination</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n        <div class=\"accordion col-lg-7 col-sm-7 mb-5 p-0\" id=\"accordionExample\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" id=\"headingOne\">\r\n                    <h2 class=\"mb-0\">\r\n                        <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\r\n                            aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                            Patient informations\r\n                        </button>\r\n                    </h2>\r\n                </div>\r\n    \r\n                <div id=\"collapseOne\" class=\"collapse border\" aria-labelledby=\"headingOne\"\r\n                    data-parent=\"#accordionExample\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                            <label class=\"col-lg-3\"> <b>Name:</b> </label>\r\n                            <label class=\"col-lg-9\"> {{patient.name}} </label>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <label class=\"col-lg-3\"><b>Surname: </b> </label>\r\n                            <label class=\"col-lg-9\"> {{patient.surname}} </label>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <label class=\"col-lg-3\"><b>Upin: </b> </label>\r\n                            <label class=\"col-lg-9\"> {{patient.upin}} </label>\r\n                        </div>\r\n    \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n        <div class=\"col-lg-8 col-sm-10\">\r\n            <hr>\r\n        </div>\r\n     \r\n        <div>\r\n            <button type=\"submit\" *ngIf=\"!startAppointmentNow\" class=\"btn btn-primary\">Schedule appointment</button>\r\n            <button type=\"submit\" *ngIf=\"startAppointmentNow\" class=\"btn btn-primary\">Start appointment</button>\r\n            <button type=\"button\" *ngIf=\"startAppointmentNow\" class=\"btn btn-outline-primary m-1\" (click)='cancelChanges()'>Cancel</button>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<br *ngIf=\"startAppointmentNow\"><br *ngIf=\"startAppointmentNow\">");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-home/new-vacation-request/new-vacation-request.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-home/new-vacation-request/new-vacation-request.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid col-lg-8 col-sm-8\" style=\"margin-top:0.5em; padding-top: 0.5em;\">\r\n  <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n      <h3 class=\"display-8\">Vaction Request</h3>\r\n      <p class=\"lead\">Please fill in the required fields.</p>\r\n  </div>\r\n</div>\r\n\r\n<form *ngIf='form' [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group row\">\r\n          <label for=\"startingDateAndTime\" class=\"col-sm-2 col-lg-3 col-form-label font-weight-bold\">Starting date and time</label>\r\n          <div class=\"row col-lg-4 col-sm-8 col-md-6 shadow-sm p-1 mb-1 bg-white rounded col\">\r\n              <div class=\"col-lg-10 col-sm-10 col-md-10\">\r\n                  <input type=\"datetime\" formControlName=\"startingDateAndTime\" [owlDateTime]=\"dt2\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && form.controls.startingDateAndTime.errors }\" id=\"startingDateAndTime\"\r\n                      style=\"border: 0;\">\r\n                  <div *ngIf=\"submitted && form.controls.startingDateAndTime.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"form.controls.startingDateAndTime.errors.required\">Starting date and time is required</div>\r\n                  </div>\r\n              </div>\r\n              <span class=\"m-1 float-right col-lg-1 col-sm-2 col-md-2\" [owlDateTimeTrigger]=\"dt2\"> \r\n                  <ion-icon size=\"large\" name=\"calendar\" style=\"cursor: pointer;\"></ion-icon> </span>\r\n              <owl-date-time [startAt]=\"now\" [stepMinute]=\"10\" [stepSecond]=\"60\" #dt2></owl-date-time>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"endingDateAndTime\" class=\"col-sm-2 col-lg-3 col-form-label font-weight-bold\">Ending date and time</label>\r\n        <div class=\"row col-lg-4 col-sm-8 col-md-6 shadow-sm p-1 mb-1 bg-white rounded col\">\r\n            <div class=\"col-lg-10 col-sm-10 col-md-10\">\r\n                <input type=\"datetime\" formControlName=\"endingDateAndTime\" [owlDateTime]=\"dt22\" class=\"form-control\"\r\n                    [ngClass]=\"{ 'is-invalid': submitted && form.controls.endingDateAndTime.errors }\" id=\"endingDateAndTime\"\r\n                    style=\"border: 0;\">\r\n                <div *ngIf=\"submitted && form.controls.endingDateAndTime.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"form.controls.endingDateAndTime.errors.required\">Ending date and time is required</div>\r\n                </div>\r\n            </div>\r\n            <span class=\"m-1 float-right col-lg-1 col-sm-2 col-md-2\" [owlDateTimeTrigger]=\"dt22\"> \r\n                <ion-icon size=\"large\" name=\"calendar\" style=\"cursor: pointer;\"></ion-icon> </span>\r\n            <owl-date-time [startAt]=\"now\" [stepMinute]=\"10\" [stepSecond]=\"60\" #dt22></owl-date-time>\r\n        </div>\r\n    </div>\r\n\r\n  <div class=\"col-lg-8 col-sm-10\">\r\n      <hr>\r\n  </div>\r\n\r\n  <div>\r\n      <button type=\"submit\" class=\"btn btn-primary\">Send request</button>\r\n      <button type=\"button\" class=\"btn btn-outline-primary m-1\" (click)='cancelChanges()'>Cancel</button>\r\n  </div>\r\n</form>\r\n<br><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-home/patient-listing/patient-listing.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-home/patient-listing/patient-listing.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n    <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n        <h3 class=\"display-8\">Patients</h3>\r\n        <p class=\"lead\">Here you can see a list of patients.</p>\r\n    </div>\r\n</div>\r\n<p>\r\n    <button class=\"btn btn-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#searchForm\"\r\n        aria-expanded=\"false\" aria-controls=\"searchForm\">\r\n        Search patients\r\n    </button>\r\n    &nbsp;&nbsp;&nbsp;\r\n    <button class=\"btn btn-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#filterForm\"\r\n        aria-expanded=\"false\" aria-controls=\"filterForm\">\r\n        Filter patients\r\n    </button>\r\n</p>\r\n<div class=\"collapse\" id=\"searchForm\">\r\n    <div class=\"card card-body\">\r\n        <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearch()\" >\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Name: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"name\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Surname: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"surname\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Upin: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"upin\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n            <button class=\"btn btn-primary \">Search</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n<div class=\"collapse\" id=\"filterForm\">\r\n    <div class=\"card card-body\">\r\n        <form [formGroup]=\"filterForm\">\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Name: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"name\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Surname: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"surname\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Upin: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"upin\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th scope=\"col\" *ngFor='let param of patientsHeaders'>\r\n                {{param}}\r\n            </th>\r\n            <th scope=\"col\">\r\n                <div class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Sort by\r\n                    </button>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"sortName()\" >Name</a>\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"sortSurname()\" >Surname</a>\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"sortUpin()\">UPIN</a>\r\n                    </div>\r\n                </div>\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor='let patient of filteredPatients'>\r\n            <td> {{patient.name}} </td>\r\n            <td> {{patient.surname}} </td>\r\n            <td> {{patient.upin}} </td>\r\n            <td> {{patient.email}} </td>\r\n            <td> {{patient.city}} </td>\r\n            <td>\r\n                <div class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Options\r\n                    </button>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"startAppointment(patient.id)\">Start\r\n                            appointment</a>\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"ShowMedicalRecord(patient)\">Show\r\n                            medical record</a>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<ng-template #modalContent let-close=\"close\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Medical record</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body \">\r\n        <app-medical-record [patientID]=\"modalData?.patientID\" [patientName]=\"modalData?.patientName\">\r\n        </app-medical-record>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\r\n            Cancel\r\n        </button>\r\n    </div>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\">\r\n        <div class=\"container\">\r\n            <ng-container *ngIf=\"!userService.checkLoggedIn();else second\">\r\n                <a class=\"navbar-brand\" routerLink=\"/\">Clinical System</a>\r\n            </ng-container>\r\n            <ng-template #second>\r\n                <ng-container *ngIf=\"userService.checkLoggedIn().roles.indexOf('PATIENT')!= -1; else third\"> \r\n                    <a class=\"navbar-brand\" routerLink=\"/patient\">Clinical System</a> </ng-container>\r\n            </ng-template>\r\n            <ng-template #third>\r\n                <ng-container *ngIf=\"userService.checkLoggedIn().roles.indexOf('DOCTOR')!= -1; else fourth\">\r\n                     <a class=\"navbar-brand\" routerLink=\"/doctor\">Clinical System</a> </ng-container>\r\n            </ng-template>\r\n            <ng-template #fourth>\r\n                <ng-container *ngIf=\"userService.checkLoggedIn().roles.indexOf('NURSE')!= -1; else fifth\"> \r\n                    <a class=\"navbar-brand\" routerLink=\"/nurse\">Clinical System</a> </ng-container>\r\n            </ng-template>\r\n            <ng-template #fifth>\r\n                <ng-container *ngIf=\"userService.checkLoggedIn().roles.indexOf('ADMINCC')!= -1; else sixth\"> \r\n                    <a class=\"navbar-brand\" routerLink=\"/adminCC\">Clinical System</a> </ng-container>\r\n            </ng-template>\r\n            <ng-template #sixth>\r\n                <ng-container *ngIf=\"userService.checkLoggedIn().roles.indexOf('ADMINC')!= -1; else seventh\"> \r\n                    <a class=\"navbar-brand\" routerLink=\"/clinic_admin_home\">Clinical System</a> </ng-container>\r\n            </ng-template>\r\n            <ng-template #seventh>\r\n                <ng-container> <a class=\"navbar-brand\" routerLink=\"/\">Clinical System</a> </ng-container>\r\n            </ng-template>\r\n\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\r\n                aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n                <ul class=\"navbar-nav ml-auto\">\r\n                    <li class=\"nav-item\" *ngIf=\"userService.checkLoggedIn()\">\r\n                        <ng-container *ngIf=\"!userService.checkLoggedIn();else second\">\r\n                            <a class=\"nav-link\" routerLink=\"/\">Home</a>\r\n                        </ng-container>\r\n                        <ng-template #second>\r\n                            <ng-container *ngIf=\"userService.checkLoggedIn().roles.indexOf('PATIENT')!= -1; else third\">\r\n                                <a class=\"nav-link\" routerLink=\"/patient\">Home</a>\r\n                             </ng-container>\r\n                        </ng-template>\r\n                        <ng-template #third>\r\n                            <ng-container *ngIf=\"userService.checkLoggedIn().roles.indexOf('DOCTOR')!= -1; else fourth\">\r\n                                <a class=\"nav-link\" routerLink=\"/doctor\">Home</a>\r\n                             </ng-container>\r\n                        </ng-template>\r\n                        <ng-template #fourth>\r\n                            <ng-container  *ngIf=\"userService.checkLoggedIn().roles.indexOf('NURSE')!= -1; else fifth\">\r\n                                <a class=\"nav-link\" routerLink=\"/nurse\">Home</a>\r\n                             </ng-container>\r\n                        </ng-template>\r\n                        <ng-template #fifth>\r\n                            <ng-container  *ngIf=\"userService.checkLoggedIn().roles.indexOf('ADMINCC')!= -1; else sixth\">\r\n                                <a class=\"nav-link\" routerLink=\"/adminCC\">Home</a>\r\n                             </ng-container>\r\n                        </ng-template>\r\n                        <ng-template #sixth>\r\n                            <ng-container  *ngIf=\"userService.checkLoggedIn().roles.indexOf('ADMINC')!= -1; else seventh\">\r\n                                <a class=\"nav-link\" routerLink=\"/clinic_admin_home\">Home</a>\r\n                             </ng-container>\r\n                        </ng-template>\r\n                        <ng-template #seventh>\r\n                            <ng-container>\r\n                                <a class=\"nav-link\" routerLink=\"/\">Home</a>\r\n                             </ng-container>\r\n                        </ng-template>\r\n                    </li>\r\n                    <li class=\"nav-item\" *ngIf=\"userService.checkLoggedIn()\">\r\n                        <!-- *ngIf=\"userService.user\" -->\r\n                        <a class=\"nav-link\" *ngIf=\"userService.checkLoggedIn().roles.indexOf('ADMINCC')!= -1\"\r\n                            routerLink=\"/adminCCdashboard\">Dashboard</a>\r\n                        <a class=\"nav-link\" *ngIf=\"userService.checkLoggedIn().roles.indexOf('ADMINC')!= -1\"\r\n                            routerLink=\"/adminCdashboard\">Dashboard</a>\r\n                        <a class=\"nav-link\" *ngIf=\"userService.checkLoggedIn().roles.indexOf('PATIENT')!= -1\"\r\n                            routerLink=\"/patient/profile\">My Profile</a>\r\n                        <a class=\"nav-link\" *ngIf=\"userService.checkLoggedIn().roles.indexOf('DOCTOR')!= -1\"\r\n                            routerLink=\"/doctor/profile\">My Profile</a>\r\n                        <a class=\"nav-link\" *ngIf=\"userService.checkLoggedIn().roles.indexOf('NURSE')!= -1\"\r\n                            routerLink=\"/nurse/profile\">My Profile</a>\r\n\r\n                    </li>\r\n                    <li class=\"nav-item\" *ngIf=\"!userService.checkLoggedIn()\">\r\n                        <a class=\"nav-link\" routerLink=\"/login\">Login</a>\r\n                    </li>\r\n                    <li class=\"nav-item\" *ngIf=\"!userService.checkLoggedIn()\">\r\n                        <a class=\"nav-link\" routerLink=\"/register\">Register</a>\r\n                    </li>\r\n                    <li class=\"nav-item dropdown\" *ngIf=\"userService.checkLoggedIn()\">\r\n                        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n                            style=\"cursor: pointer;\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                            {{userService.checkLoggedIn().name}}\r\n                        </a>\r\n                        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" style=\"cursor: pointer;\">\r\n                            <a class=\"dropdown-item\" (click)=\"logout()\">Logout</a>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/helperComponents/dialog/dialog.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/helperComponents/dialog/dialog.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">{{ title }}</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"dismiss()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n<div class=\"modal-body\">\r\n  {{ message }}\r\n\r\n<div class=\"form-group row\" *ngIf=\"userInput\" style=\" padding: 1em;\">\r\n  <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n    <textarea class=\"form-control\" name=\"name\" rows=\"3\"\r\n      [ngClass]=\"{ 'is-invalid': submitted && form.controls.explanation.errors }\" formControlName=\"explanation\"\r\n      placeholder=\"Explanation...\" style=\"border: 0;\"></textarea>\r\n    <div *ngIf=\"submitted && form.controls.explanation.errors\" class=\"invalid-feedback\">\r\n      <div *ngIf=\"form.controls.explanation.errors.required\">Explanation is required</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"decline()\">{{ btnCancelText }}</button>\r\n  <button type=\"button\" *ngIf=\"!userInput\" class=\"btn btn-primary\" (click)=\"accept()\">{{ btnOkText }}</button>\r\n\r\n  <button type=\"submit\" class=\"btn btn-primary\" *ngIf='userInput'>{{ btnOkText }}</button>\r\n</div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-6 offset-md-3 mt-5\">\r\n  <div class=\"card\">\r\n      <h4 class=\"card-header\">Login to Clinical System</h4>\r\n      <div class=\"card-body\">\r\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n              <div class=\"form-group\">\r\n                  <label for=\"email\">Email</label>\r\n                  <input type=\"email\" name=\"email\" [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.email.errors }\" class=\"form-control\" formControlName=\"email\" placeholder=\"example@kcv.rs\"/>\r\n                    <div *ngIf=\"submitted && loginForm.controls.email.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"loginForm.controls.email.errors.required\">Email is required</div>\r\n                        <div *ngIf=\"loginForm.controls.email.errors.email\">Email must be a valid email address</div>\r\n                    </div>\r\n                </div>\r\n              <div class=\"form-group\">\r\n                  <label for=\"password\">Password</label>\r\n                  <input type=\"password\"  name=\"password\" [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.password.errors }\" class=\"form-control\" formControlName=\"password\" placeholder=\"*****\"/>\r\n                    <div *ngIf=\"submitted && loginForm.controls.password.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"loginForm.controls.password.errors.required\">Password is required</div>\r\n                        <div *ngIf=\"loginForm.controls.password.errors.minlength\">Password is at least 6 characters long</div>\r\n                        <div *ngIf=\"loginForm.controls.password.errors.maxlength\">Password is maximum 24 characters long</div>\r\n                    </div>\r\n                </div>\r\n              <button class=\"btn btn-primary\">Submit</button>\r\n          </form>\r\n      </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-home/nurse-calendar/nurse-calendar.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-home/nurse-calendar/nurse-calendar.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row text-center border-top \" style=\"padding-top: 0.3em;\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group float-left p-1\">\r\n      <div\r\n        class=\"btn btn-outline-dark\"\r\n        mwlCalendarPreviousView\r\n        [view]=\"view\"\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n      >\r\n        Previous\r\n      </div>\r\n      <div\r\n        class=\"btn btn-outline-secondary\"\r\n        mwlCalendarToday\r\n        [(viewDate)]=\"viewDate\"\r\n      >\r\n        Today\r\n      </div>\r\n      <div\r\n        class=\"btn btn-outline-dark\"\r\n        mwlCalendarNextView\r\n        [view]=\"view\"\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n      >\r\n        Next\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4 shadow-sm\">\r\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group float-right p-1\">\r\n      <div\r\n        class=\"btn btn-outline-dark\"\r\n        (click)=\"setView(CalendarView.Month)\"\r\n        [class.active]=\"view === CalendarView.Month\"\r\n      >\r\n        Month\r\n      </div>\r\n      <div\r\n        class=\"btn btn-outline-dark\"\r\n        (click)=\"setView(CalendarView.Week)\"\r\n        [class.active]=\"view === CalendarView.Week\"\r\n      >\r\n        Week\r\n      </div>\r\n      <div\r\n        class=\"btn btn-outline-dark\"\r\n        (click)=\"setView(CalendarView.Day)\"\r\n        [class.active]=\"view === CalendarView.Day\"\r\n      >\r\n        Day\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br />\r\n<div class=\"border rounded shadow pl-5 pr-5 pb-5\" [ngSwitch]=\"view\">\r\n  <mwl-calendar-month-view\r\n    *ngSwitchCase=\"CalendarView.Month\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    [activeDayIsOpen]=\"activeDayIsOpen\"\r\n    (dayClicked)=\"dayClicked($event.day)\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n  >\r\n  </mwl-calendar-month-view>\r\n  <mwl-calendar-week-view\r\n    *ngSwitchCase=\"CalendarView.Week\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n    [dayStartHour]=\"daystart\"\r\n    [dayEndHour]=\"dayend\"\r\n  >\r\n  </mwl-calendar-week-view>\r\n  <mwl-calendar-day-view\r\n    *ngSwitchCase=\"CalendarView.Day\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n    [dayStartHour]=\"daystart\"\r\n    [dayEndHour]=\"dayend\"\r\n    [hourSegments]=\"6\"\r\n  >\r\n  </mwl-calendar-day-view>\r\n</div>\r\n\r\n<!-- Everything you see below is just for the demo, you don't need to include it in your app -->\r\n\r\n<br /><br /><br />\r\n\r\n\r\n\r\n<ng-template #modalContent let-close=\"close\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{modalData?.event.title}}</h4>\r\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"jumbotron jumbotron-fluid col-lg-8 col-sm-8\"\r\n    style=\"max-height: 2em; margin-top:0.2em; padding-top: 0.3em; \">\r\n    <div class=\"container-fluid\" style=\"max-height: 1em;\">\r\n      <h3 class=\"h5\">{{modalData?.event.title}}</h3>\r\n    </div>\r\n  </div>\r\n      <div class=\"form-group row \">\r\n        <label for=\"Surname\" class=\"col-sm-2 col-form-label font-weight-bold\">Starts:</label>\r\n        <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n          <input type=\"text\" class=\"form-control\" value=\" {{timeConverter(modalData?.event.start)}}\" style=\"border: 0;\" disabled/>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"Surname\" class=\"col-sm-2 col-form-label font-weight-bold\">Ends: </label>\r\n        <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n          <input type=\"text\" class=\"form-control\" value=\"{{timeConverter(modalData?.event.end)}}\" style=\"border: 0;\" disabled />\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\r\n      OK\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-home/nurse-home.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-home/nurse-home.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='row'>\r\n\t<ul class=\"nav nav-pills\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n\t\t<li class=\"nav-item\">\r\n\t\t\t<a class=\"nav-link active\" data-toggle=\"pill\" [routerLink]=\"['./calendar']\" href=\"#v-pills-profile\" role=\"tab\"\r\n\t\t\t\taria-controls=\"v-pills-home\" aria-selected=\"true\">Calendar</a>\r\n\t\t</li>\r\n\t\t<li class=\"nav-item\">\r\n\t\t\t<a class=\"nav-link\" data-toggle=\"pill\" [routerLink]=\"['./patients']\" href=\"#v-pills-profile\" role=\"tab\"\r\n\t\t\t\taria-controls=\"v-pills-home\" aria-selected=\"false\">Patients</a>\r\n\t\t</li>\r\n\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" data-toggle=\"pill\" [routerLink]=\"['./prescriptions']\" href=\"#v-pills-profile\" role=\"tab\"\r\n\t\t\t\t\taria-controls=\"v-pills-home\" aria-selected=\"false\">Prescriptions</a>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t<div class=\"tab-content\" style='width: 100%;' id=\"v-pills-tabContent\">\r\n\t\t<router-outlet></router-outlet>\r\n\t</div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-home/nurse-patient-listing/nurse-patient-listing.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-home/nurse-patient-listing/nurse-patient-listing.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n    <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n        <h3 class=\"display-8\">Patients</h3>\r\n        <p class=\"lead\">Here you can see a list of patients.</p>\r\n    </div>\r\n</div>\r\n<p>\r\n    <button class=\"btn btn-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#searchForm\"\r\n        aria-expanded=\"false\" aria-controls=\"searchForm\">\r\n        Search patients\r\n    </button>\r\n    &nbsp;&nbsp;&nbsp;\r\n    <button class=\"btn btn-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#filterForm\"\r\n        aria-expanded=\"false\" aria-controls=\"filterForm\">\r\n        Filter patients\r\n    </button>\r\n</p>\r\n<div class=\"collapse\" id=\"searchForm\">\r\n    <div class=\"card card-body\">\r\n        <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearch()\">\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Name: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"name\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Surname: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"surname\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Upin: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"upin\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n            <button class=\"btn btn-primary \">Search</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n<div class=\"collapse\" id=\"filterForm\">\r\n    <div class=\"card card-body\">\r\n        <form [formGroup]=\"filterForm\">\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Name: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"name\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Surname: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"surname\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Upin: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"upin\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div> \r\n<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th scope=\"col\" *ngFor='let param of patientsHeaders'>\r\n                {{param}}\r\n            </th>\r\n            <th scope=\"col\">\r\n                <div class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Sort by\r\n                    </button>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"sortName()\">Name</a>\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"sortAddress()\">Address</a>\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"sortCity()\">City</a>\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"sortState()\">State</a>\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"sortUpin()\">UPIN</a>\r\n                    </div>\r\n                </div>\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor='let patient of filteredPatients'>\r\n            <td> {{patient.name}} </td>\r\n            <td> {{patient.surname}} </td>\r\n            <td> {{patient.upin}} </td>\r\n            <td> {{patient.email}} </td>\r\n            <td> {{patient.city}} </td>\r\n            <td>\r\n                <div class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Options\r\n                    </button>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"ShowMedicalRecord(patient)\">Show\r\n                            medical record</a>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<ng-template #modalContent let-close=\"close\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Medical record</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body \">\r\n        <app-medical-record [patientID]=\"modalData?.patientID\" [patientName]=\"modalData?.patientName\">\r\n        </app-medical-record>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\r\n            Cancel\r\n        </button>\r\n    </div>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-home/nurse-profile/nurse-personal-profile/nurse-personal-profile.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-home/nurse-profile/nurse-personal-profile/nurse-personal-profile.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid col-lg-8 col-sm-8\"\r\n  style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n  <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n    <h3 class=\"display-8\">Personal page</h3>\r\n    <p class=\"lead\">Here you can see, or change your personal information.</p>\r\n  </div>\r\n</div>\r\n<form *ngIf='form' [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <fieldset [disabled]=\"change\">\r\n    <div class=\"form-group row\">\r\n      <label for=\"Name\" class=\"col-sm-2 col-form-label font-weight-bold\">Name</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.name.errors }\"\r\n          id=\"Name\" formControlName=\"name\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.name.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.name.errors.required\">Name is required</div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"Surname\" class=\"col-sm-2 col-form-label font-weight-bold\">Surname</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.surname.errors }\"\r\n          id=\"Surname\" formControlName=\"surname\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.surname.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.surname.errors.required\">Surname is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <fieldset [disabled]=\"true\">\r\n      <div class=\"form-group row\">\r\n        <label for=\"Email\" class=\"col-sm-2 col-form-label font-weight-bold\">E-mail</label>\r\n        <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n          <input type=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.email.errors }\"\r\n            id=\"Email\" formControlName=\"email\" style=\"border: 0;\" />\r\n          <div *ngIf=\"submitted && form.controls.email.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"form.controls.email.errors.required\">E-mail is required</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </fieldset>\r\n\r\n    <div class=\"form-group row\">\r\n      <label for=\"Address\" class=\"col-sm-2 col-form-label font-weight-bold\">Address</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.address.errors }\"\r\n          id=\"Address\" formControlName=\"address\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.address.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.address.errors.required\">Address is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"City\" class=\"col-sm-2 col-form-label font-weight-bold\">City</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.city.errors }\"\r\n          id=\"City\" formControlName=\"city\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.city.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.city.errors.required\">City is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"State\" class=\"col-sm-2 col-form-label font-weight-bold\">State</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.state.errors }\"\r\n          id=\"State\" formControlName=\"state\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.state.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.state.errors.required\">State is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"PhoneNumber\" class=\"col-sm-2 col-form-label font-weight-bold\">Phone number</label>\r\n      <div class=\"col-sm-10  col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && form.controls.phoneNumber.errors }\" id=\"PhoneNumber\"\r\n          formControlName=\"phoneNumber\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.phoneNumber.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.phoneNumber.errors.required\">Phone number is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </fieldset>\r\n  <fieldset [disabled]=\"true\">\r\n    <div class=\"form-group row\">\r\n      <label for=\"JMBG\" class=\"col-sm-2 col-form-label font-weight-bold\">UPIN</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.upin.errors }\"\r\n          id=\"JMBG\" formControlName=\"upin\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.upin.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.upin.errors.required\">UPIN is required</div>\r\n          <div *ngIf=\"form.controls.upin.errors.minlength\">UPIN is exactly 13 characters long</div>\r\n          <div *ngIf=\"form.controls.upin.errors.maxlength\">UPIN is exactly 13 characters long</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-8 col-sm-10\">\r\n      <hr>\r\n    </div>\r\n  </fieldset>\r\n\r\n  <div>\r\n    <button type=\"submit\" class=\"btn btn-primary\" *ngIf='!change'>Submit changes</button>\r\n    <button type=\"button\" class=\"btn btn-outline-primary m-1\" *ngIf='!change'\r\n      (click)='cancelChanges()'>Cancel</button>\r\n  </div>\r\n\r\n</form>\r\n<div>\r\n  <button type=\"button\" class=\"btn btn-outline-primary\" *ngIf='change' (click)='enableChangeInfo()'>Change\r\n    information</button>\r\n  <button type=\"button\" class=\"btn btn-outline-primary m-1\" *ngIf='change' (click)='showChangePasswordForm()'>Change\r\n    password</button>\r\n</div>\r\n<br><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-home/nurse-profile/nurse-profile.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-home/nurse-profile/nurse-profile.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='row'>\r\n\t<ul class=\"nav nav-pills\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n\t\t<li class=\"nav-item\">\r\n\t\t\t<a class=\"nav-link active\" data-toggle=\"pill\" [routerLink]=\"['./profile']\" href=\"#v-pills-profile\" role=\"tab\"\r\n\t\t\t\taria-controls=\"v-pills-home\" aria-selected=\"true\">Personal profile</a>\r\n\t\t</li>\r\n\t\t<li class=\"nav-item\">\r\n\t\t\t<a class=\"nav-link\" data-toggle=\"pill\" [routerLink]=\"['./vacation_request']\" href=\"#v-pills-vacation_request\" role=\"tab\"\r\n\t\t\t\taria-controls=\"v-pills-home\" aria-selected=\"true\">Vacation request</a>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t<div class=\"tab-content\" style='width: 100%;' id=\"v-pills-tabContent\">\r\n\t\t<router-outlet></router-outlet>\r\n\t</div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-home/prescription-listing/prescription-listing.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-home/prescription-listing/prescription-listing.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n  <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n      <h3 class=\"display-8\">Prescriptions</h3>\r\n      <p class=\"lead\">Here you can see a list of clinic prescriptions.</p>\r\n  </div>\r\n</div>\r\n<p>\r\n  <button class=\"btn btn-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\"\r\n      aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n      Search prescriptions\r\n  </button>\r\n</p>\r\n<div class=\"collapse\" id=\"collapseExample\">\r\n  <div class=\"card card-body\">\r\n          <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearch()\">\r\n              <div class=\"form-group row\">\r\n                  <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"name\">Doctor name: </label>\r\n                  <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                      <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && searchForm.controls.name.errors }\"\r\n                          class=\"form-control\" formControlName=\"name\" style=\"border: 0;\" />\r\n                  </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"surname\">Doctor surname: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && searchForm.controls.surname.errors }\"\r\n                        class=\"form-control\" formControlName=\"surname\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n              <div class=\"form-group row\">\r\n                  <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"medication\">Medication: </label>\r\n                  <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                      <input type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && searchForm.controls.medication.errors }\"\r\n                          class=\"form-control\" formControlName=\"medication\" style=\"border: 0;\" />\r\n                  </div>\r\n              </div>\r\n              <button class=\"btn btn-primary \">Search</button>\r\n          </form>\r\n  </div>\r\n</div>\r\n\r\n<table class=\"table\">\r\n  <thead>\r\n      <tr>\r\n          <th scope=\"col\" *ngFor='let param of prescriptionsHeader'>{{param}}</th>\r\n      </tr>\r\n  </thead>\r\n  <tbody>\r\n      <tr *ngFor='let prescription of prescriptions'>\r\n          <td> {{prescription.doctor_name}} </td>\r\n          <td> {{prescription.doctor_surname}} </td>\r\n          <td> {{prescription.medication_name}} </td>\r\n          <td> <button class=\"btn btn-light\" type=\"button\" (click)=\"approvePrescription(prescription)\">Approve</button> </td>\r\n      </tr>\r\n  </tbody>\r\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-home/patient-available-appointments/patient-available-appointments.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-home/patient-available-appointments/patient-available-appointments.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n    <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n        <h3 class=\"display-8\">Available appointments</h3>\r\n        <p class=\"lead\">Here you can see and choose appointment quickly.</p>\r\n    </div>\r\n</div>\r\n<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th scope=\"col\" *ngFor='let param of appointmentHeaders'>{{param}}</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor='let appointment of appointments'>\r\n            <td> {{appointment.doctors[0].name + \" \" + appointment.doctors[0].surname}} </td>\r\n            <td> {{appointment.ordination.name + \" - \" + appointment.ordination.number}} </td>\r\n            <td> {{appointment.typeOfExamination.name}} </td>\r\n            <td> {{appointment.formatedDateAndTime}} </td>\r\n            <td> {{appointment.duration / 1000 / 60}} </td>\r\n            <td> {{appointment.price}} </td>\r\n            <td> {{appointment.discount}} </td>\r\n            <td>\r\n            <button type=\"button\" id=\"{{'appointment'+appointment.id}}\" class=\"btn btn-secondary\" (click)=\"chooseAvailableAppointment(appointment)\">Choose</button>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-home/patient-clinic-listing/patient-clinic-listing.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-home/patient-clinic-listing/patient-clinic-listing.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n    <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n        <h3 class=\"display-8\">Clinics</h3>\r\n        <p class=\"lead\">Here you can see a list of existing clinics.</p>\r\n    </div>\r\n</div>\r\n<p>\r\n    <button class=\"btn btn-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#searchForm\"\r\n        aria-expanded=\"false\" aria-controls=\"searchForm\">\r\n        Search\r\n    </button>\r\n    &nbsp;&nbsp;&nbsp;\r\n    <button *ngIf=\"!notSearched\" class=\"btn btn-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#filterForm\"\r\n        aria-expanded=\"false\" aria-controls=\"filterForm\">\r\n        Filter\r\n    </button>\r\n</p>\r\n<div class=\"collapse\" id=\"filterForm\">\r\n    <div class=\"card card-body\">\r\n        <form [formGroup]=\"filterForm\">\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"name\">Name: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"name\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"address\">Address: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"address\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"price\">Price: </label>\r\n                <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"price\" style=\"border: 0;\" />\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<div class=\"collapse\" id=\"searchForm\">\r\n    <div class=\"card card-body\">\r\n            <form [formGroup]=\"form\" (ngSubmit)=\"onSearch()\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Name: </label>\r\n                    <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"name\" style=\"border: 0;\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"code\">Address: </label>\r\n                    <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"address\" style=\"border: 0;\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"rating\">Rating: </label>\r\n                    <star-rating value='{{starRatingSearch}}' totalstars=\"5\" checkedcolor=\"blue\" uncheckedcolor=\"gray\" size=\"22px\" readonly=\"false\" (rate)=\"onRateSearch($event)\"></star-rating>\r\n                  </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <label for=\"typeOfExamination\" class=\"col-sm-2 col-lg-3 col-form-label font-weight-bold\">Type of\r\n                        examination: </label>\r\n                    <div class=\"row col-lg-4 col-sm-8 col-md-6 shadow-sm p-1 mb-1 bg-white rounded col\">\r\n                        <select formControlName=\"typeOfExamination\" class=\"m-1 form-control\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && form.controls.typeOfExamination.errors }\" id=\"typeOfExamination\"\r\n                            style=\"border: 0; width: 100%;\">\r\n                            <!--<option value=\"\"></option>-->\r\n                            <option *ngFor=\"let type of typesOfExamination\" [value]=\"type.id\">{{type.name}}\r\n                            </option>\r\n                        </select>\r\n                        <div *ngIf=\"submitted && form.controls.typeOfExamination.errors\" class=\"invalid-feedback ml-3\">\r\n                            <div *ngIf=\"form.controls.typeOfExamination.errors.required\">Please select type of examination</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <label for=\"date\" class=\"col-sm-2 col-form-label font-weight-bold\">Date: </label>\r\n                    <div class=\"row col-lg-6 col-sm-10 col-md-6 shadow-sm p-1 mb-1 ml-1 bg-white rounded col\">\r\n                        <div class=\"col-lg-10 col-sm-10 col-md-10\">\r\n                            <input type=\"datetime\" formControlName=\"date\" [owlDateTime]=\"dt2\" class=\"form-control\"\r\n                                [ngClass]=\"{ 'is-invalid': submitted && form.controls.date.errors }\" id=\"date\"\r\n                                style=\"border: 0;\">\r\n                        </div>\r\n                        <span class=\"m-1 float-right col-lg-1 col-sm-2 col-md-2\" [owlDateTimeTrigger]=\"dt2\"> \r\n                            <ion-icon size=\"large\" name=\"calendar\" style=\"cursor: pointer;\"></ion-icon> </span>\r\n                        <owl-date-time [pickerType]=\"'calendar'\" #dt2></owl-date-time>\r\n                        <div *ngIf=\"submitted && form.controls.date.errors\" class=\"invalid-feedback ml-3\">\r\n                            <div *ngIf=\"form.controls.date.errors.required\">Please select a date</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <button class=\"btn btn-primary \">Search</button>\r\n            </form>\r\n    </div>\r\n</div>\r\n<table class=\"table\" *ngIf=\"notSearched\">\r\n    <thead>\r\n        <tr>\r\n            <th scope=\"col\" *ngFor='let param of clinicHeaders'>{{param}}</th>\r\n            <th scope=\"col\">\r\n                <div class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Sort by\r\n                    </button>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"sortName()\" >Name</a>\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"sortAddress()\">Address</a>\r\n                    </div>\r\n                </div>\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor='let clinic of clinicsFiltered'>\r\n            <td> {{clinic.name}} </td>\r\n            <td> {{clinic.address}}, {{clinic.city}}, {{clinic.state}} </td>\r\n            <td>\r\n                <div class=\"dropdown\">\r\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"{{'dropdown'+ clinic.id}}\"\r\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Options\r\n                    </button>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <a class=\"dropdown-item\" id=\"{{'info'+ clinic.id}}\" style=\"cursor: pointer;\" (click)=\"showClinicInfo(clinic)\">Show additional info</a>\r\n                        <a class=\"dropdown-item\" id=\"{{'doctors'+ clinic.id}}\" style=\"cursor: pointer;\" (click)=\"showClinicsDoctors(clinic)\">Show clinics doctors</a>\r\n                        <a class=\"dropdown-item\" id=\"{{'appointment'+ clinic.id}}\" style=\"cursor: pointer;\" (click)=\"showAvailableAppointments(clinic.id)\">Schedule appointment quickly</a>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<table class=\"table\" *ngIf=\"!notSearched\">\r\n    <thead>\r\n        <tr>\r\n            <th scope=\"col\" *ngFor='let param of clinicsSearchedHeaders'>{{param}}</th>\r\n            <th scope=\"col\">\r\n                <div class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Sort by\r\n                    </button>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"sortName()\" >Name</a>\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"sortAddress()\">Address</a>\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"sortPrice()\">Price</a>\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"sortRating()\">Rating</a>\r\n                    </div>\r\n                </div>\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor='let clinic of clinicsFiltered'>\r\n            <td> {{clinic.name}} </td>\r\n            <td> {{clinic.address}}, {{clinic.city}}, {{clinic.state}} </td>\r\n            <td> <star-rating value='{{clinic.numberOfStars/clinic.numberOfReviews}}' totalstars=\"5\" checkedcolor=\"blue\" uncheckedcolor=\"gray\" size=\"20px\" readonly=\"true\"></star-rating> </td>\r\n            <td> {{clinic.typeOfExamination.price}}</td>\r\n            <td>\r\n                <div class=\"dropdown\">\r\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"{{'optionsButtonSearch'+ clinic.id}}\"\r\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Options\r\n                    </button>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"showClinicInfo(clinic)\">Show additional info</a>\r\n                        <a class=\"dropdown-item\" id=\"{{'doctorts'+ clinic.id}}\" style=\"cursor: pointer;\" (click)=\"showDoctors(clinic)\">Show available doctors</a>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<br><br>\r\n\r\n<ng-template #modalContent let-close=\"close\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Clinic Information</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"row mx-auto\">\r\n            <div class=\"col\">\r\n                <div class=\"card\" style=\"height: 32em;\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h5 class=\"card-title\"> {{modalData.clinicName}} </h5><hr style=\"width:75%\">\r\n                        <p class=\"card-text\"> {{modalData.clinicAddress}} </p><hr style=\"width:50%\">\r\n                        <p class=\"card-text\"> {{modalData.clinicCity}} </p><hr style=\"width:50%\">\r\n                        <p class=\"card-text\"> {{modalData.clinicState}} </p><hr style=\"width:50%\">\r\n                        <p class=\"card-text text-muted\">Rating:</p><hr style=\"width:50%\">\r\n                        <star-rating value='{{modalData.rating}}' totalstars=\"5\" checkedcolor=\"blue\" uncheckedcolor=\"gray\" size=\"24px\" readonly=\"true\"></star-rating><hr style=\"width:50%\"><br>\r\n                        <p class=\"card-text\" style=\"padding: 5px 25px 5px;\"> {{modalData.clinicDescription}} </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div class=\"card\" style=\"height: 32em;\">\r\n                    <div class=\"card-body text-center\">\r\n                        <div style=\"height: 25em; width: 100%;\">\r\n                            <angular-yandex-map [center]=\"modalData.location\" [zoom]=\"16\">\r\n                                <angular-yandex-placemark [geometry]=\"modalData.location\"></angular-yandex-placemark>\r\n                            </angular-yandex-map>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-footer text-center text-muted\">\r\n                        <label class=\"card-text\">Location on maps</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\r\n            Close\r\n        </button>\r\n    </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-home/patient-doctor-listing/patient-doctor-listing.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-home/patient-doctor-listing/patient-doctor-listing.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n  <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n      <h3 class=\"display-8\">Doctors</h3>\r\n      <p class=\"lead\">After finding a suitable doctor, select a timeslot to schedule an appointment.</p>\r\n  </div>\r\n</div>\r\n<p>\r\n  <button class=\"btn btn-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#searchForm\"\r\n      aria-expanded=\"false\" aria-controls=\"searchForm\">\r\n      Search\r\n  </button>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <button *ngIf=\"!notSearched\" class=\"btn btn-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#filterForm\"\r\n      aria-expanded=\"false\" aria-controls=\"filterForm\">\r\n      Filter\r\n  </button>\r\n</p>\r\n<div class=\"collapse\" id=\"filterForm\">\r\n  <div class=\"card card-body\">\r\n      <form [formGroup]=\"filterForm\">\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"name\">Name: </label>\r\n              <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                  <input type=\"text\" class=\"form-control\" name=\"filterName\" formControlName=\"name\" style=\"border: 0;\" />\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"surname\">Surname: </label>\r\n              <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                  <input type=\"text\" class=\"form-control\" name=\"filterSurname\" formControlName=\"surname\" style=\"border: 0;\" />\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n              <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"rating\">Rating: </label>\r\n              <star-rating value='{{starRatingFilter}}' totalstars=\"5\" checkedcolor=\"blue\" uncheckedcolor=\"gray\" size=\"22px\" readonly=\"false\" (rate)=\"onRateFilter($event)\"></star-rating>\r\n          </div>\r\n      </form>\r\n  </div>\r\n</div>\r\n<div class=\"collapse\" id=\"searchForm\">\r\n  <div class=\"card card-body\">\r\n          <form [formGroup]=\"form\" (ngSubmit)=\"onSearch()\">\r\n              <div class=\"form-group row\">\r\n                  <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"name\">Name: </label>\r\n                  <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"name\" style=\"border: 0;\" />\r\n                  </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                  <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"surname\">Surname: </label>\r\n                  <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"surname\" style=\"border: 0;\" />\r\n                  </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-2 col-form-label font-weight-bold\" for=\"rating\">Rating: </label>\r\n                <star-rating value='{{starRatingSearch}}' totalstars=\"5\" checkedcolor=\"blue\" uncheckedcolor=\"gray\" size=\"22px\" readonly=\"false\" (rate)=\"onRateSearch($event)\"></star-rating>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                  <label for=\"typeOfExamination\" class=\"col-sm-2 col-lg-3 col-form-label font-weight-bold\">Type of\r\n                      examination: </label>\r\n                  <div class=\"row col-lg-4 col-sm-8 col-md-6 shadow-sm p-1 mb-1 bg-white rounded col\">\r\n                      <select formControlName=\"typeOfExamination\" class=\"m-1 form-control\"\r\n                          [ngClass]=\"{ 'is-invalid': submitted && form.controls.typeOfExamination.errors }\" id=\"typeOfExamination\"\r\n                          style=\"border: 0; width: 100%;\" >\r\n                          <!--<option value=\"\"></option>-->\r\n                          <option *ngFor=\"let type of typesOfExamination\" [value]=\"type.id\">{{type.name}}\r\n                          </option>\r\n                      </select>\r\n                      <div *ngIf=\"submitted && form.controls.typeOfExamination.errors\" class=\"invalid-feedback ml-3\">\r\n                          <div *ngIf=\"form.controls.typeOfExamination.errors.required\">Please select type of examination</div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                  <label for=\"date\" class=\"col-sm-2 col-form-label font-weight-bold\">Date: </label>\r\n                  <div class=\"row col-lg-6 col-sm-10 col-md-6 shadow-sm p-1 mb-1 ml-1 bg-white rounded col\">\r\n                      <div class=\"col-lg-10 col-sm-10 col-md-10\">\r\n                          <input type=\"datetime\" formControlName=\"date\" [owlDateTime]=\"dt2\" class=\"form-control\"\r\n                              [ngClass]=\"{ 'is-invalid': submitted && form.controls.date.errors }\" id=\"date\"\r\n                              style=\"border: 0;\">\r\n                      </div>\r\n                      <span class=\"m-1 float-right col-lg-1 col-sm-2 col-md-2\" [owlDateTimeTrigger]=\"dt2\"> \r\n                        <ion-icon size=\"large\" name=\"calendar\" style=\"cursor: pointer;\"></ion-icon> </span>\r\n                      <owl-date-time [startAt]=\"\" [stepMinute]=\"10\" [stepSecond]=\"60\" [pickerType]=\"'calendar'\" #dt2></owl-date-time>\r\n                      <div *ngIf=\"submitted && form.controls.date.errors\" class=\"invalid-feedback ml-3\">\r\n                          <div *ngIf=\"form.controls.date.errors.required\">Please select a date</div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n\r\n              <button class=\"btn btn-primary \">Search</button>\r\n          </form>\r\n  </div>\r\n</div>\r\n<table class=\"table\">\r\n  <thead>\r\n      <tr>\r\n          <th scope=\"col\" *ngFor='let param of doctorHeaders'>{{param}}</th>\r\n          <th scope=\"col\">\r\n              <div class=\"dropdown\">\r\n                  <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                      data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                      Sort by\r\n                  </button>\r\n                  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                      <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"sortName()\" >Name</a>\r\n                      <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"sortSurname()\">Surname</a>\r\n                      <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"sortRating()\">Rating</a>\r\n                  </div>\r\n              </div>\r\n          </th>\r\n      </tr>\r\n  </thead>\r\n  <tbody>\r\n      <tr *ngFor='let doctor of doctorsFiltered'>\r\n          <td> {{doctor.name}} </td>\r\n          <td> {{doctor.surname}} </td>\r\n          <td> <star-rating value='{{doctor.numberOfStars / doctor.numberOfReviews}}' totalstars=\"5\" checkedcolor=\"blue\" uncheckedcolor=\"gray\" size=\"20px\" readonly=\"true\"></star-rating> </td>\r\n          <td>\r\n              <div class=\"dropdown\">\r\n                  <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"{{'optionsDoctor'+ doctor.id}}\"\r\n                      data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                      Options\r\n                  </button>\r\n                  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                      <a class=\"dropdown-item\" id=\"{{'showDoctor'+ doctor.id}}\" style=\"cursor: pointer;\" (click)=\"showDoctorInfo(doctor)\">Show more</a>\r\n                  </div>\r\n              </div>\r\n          </td>\r\n      </tr>\r\n  </tbody>\r\n</table>\r\n<br><br>\r\n\r\n<ng-template #modalContent let-close=\"close\">\r\n  <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">More info</h4>\r\n      <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row mx-auto\">\r\n        <div class=\"col\">\r\n            <div class=\"card\" style=\"height: 32em;\">\r\n                <div class=\"card-body text-center\">\r\n                    <h5 class=\"card-title\"> {{modalData.doctorName}} {{modalData.doctorSurname}} </h5><hr style=\"width:75%\">\r\n                    <p class=\"card-text\"> {{modalData.doctorEmail}} </p><hr style=\"width:50%\">\r\n                    <p class=\"card-text\"> {{modalData.doctorPhone}} </p><hr style=\"width:50%\">\r\n                    <p class=\"card-text text-muted\">Working hours:</p><hr style=\"width:50%\">\r\n                    <p class=\"card-text\"> {{modalData.doctorShiftStart}} - {{modalData.doctorShiftEnd}} </p><hr style=\"width:50%\">\r\n                    <p class=\"card-text text-muted\">Rating:</p><hr style=\"width:50%\">\r\n                    <star-rating value='{{modalData.rating}}' totalstars=\"5\" checkedcolor=\"blue\" uncheckedcolor=\"gray\" size=\"24px\" readonly=\"true\"></star-rating><hr style=\"width:50%\"><br>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col\" *ngIf=\"!notSearched\">\r\n            <div class=\"card\" style=\"height: 32em;\">\r\n                <div class=\"card-header text-center text-muted\">\r\n                    <label class=\"card-text\">Availability</label>\r\n                </div>\r\n                <div class=\"card-body text-center\" style=\"overflow-y: scroll;\">\r\n                    <table style=\"width: 100%;\" *ngIf=\"modalData.available\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th scope=\"col\" *ngFor='let param of availibleApptHeaders'>{{param}}</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor='let time of modalData.availableTimes'>\r\n                                <td> {{time}} </td>\r\n                                <td>\r\n                                    <div class=\"dropdown\">\r\n                                        <button class=\"btn btn-secondary\" id=\"{{'select'+time}}\" type=\"button\" aria-haspopup=\"true\" (click)=\"showAppointmentPage(time, modalData.doctorID, modalData.clinicID)\">\r\n                                            Select\r\n                                        </button>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                      </table>\r\n                      <h5 *ngIf=\"!modalData.available\">The doctor is not available that day.</h5>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\r\n          Close\r\n      </button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-home/patient-home.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-home/patient-home.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='row'>\r\n\t<ul class=\"nav nav-pills\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n\t\t<li class=\"nav-item\">\r\n\t\t\t<a class=\"nav-link active\" data-toggle=\"pill\" [routerLink]=\"['./clinics']\" href=\"#v-pills-profile\" role=\"tab\"\r\n\t\t\t\taria-controls=\"v-pills-home\" aria-selected=\"true\">Clinics</a>\r\n\t\t</li>\r\n\t\t<li class=\"nav-item\">\r\n\t\t\t<a class=\"nav-link\" data-toggle=\"pill\" [routerLink]=\"['./pending_appointments']\" role=\"tab\" aria-controls=\"v-pills-home\"\r\n\t\t\t\taria-selected=\"true\">Pending appointments</a>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t<div class=\"tab-content\" style='width: 100%;' id=\"v-pills-tabContent\">\r\n\t\t<router-outlet></router-outlet>\r\n\t</div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-home/patient-pending-appointments-listing/patient-pending-appointments-listing.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-home/patient-pending-appointments-listing/patient-pending-appointments-listing.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\" style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n        <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n            <h3 class=\"display-8\">Pending appointments</h3>\r\n            <p class=\"lead\">Here you can see a list of your pending appointments.</p>\r\n        </div>\r\n    </div>\r\n    <table class=\"table\">\r\n        <thead>\r\n            <tr>\r\n                <th scope=\"col\" *ngFor='let param of appointmentHeaders'>{{param}}</th>\r\n                <th scope=\"col\">\r\n                    <div class=\"dropdown\">\r\n                        <button class=\"btn btn-sm btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                            data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                            Sort by\r\n                        </button>\r\n                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                            <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"sortClinicName()\" >Clinic name</a>\r\n                            <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"sortType()\">Type</a>\r\n                            <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"sortDuration()\">Duration</a>\r\n                            <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"sortDate()\">Date</a>\r\n                        </div>\r\n                    </div>\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor='let appointment of appointments'>\r\n                <td> {{appointment.clinic.name}} </td>\r\n                <td> {{appointment.ordination.name}} </td>\r\n                <td> {{appointment.doctors[0].name + \" \" + appointment.doctors[0].surname}} </td>\r\n                <td> {{appointment.typeOfExamination.name}} </td>\r\n                <td> {{appointment.formatedDateAndTime}} </td>\r\n                <td> {{appointment.duration / 1000 / 60}} </td>\r\n                <td> {{appointment.price - appointment.discount}} </td>\r\n                <td>\r\n                    <button class=\"btn btn-sm btn-secondary \" type=\"button\" (click)=\"cancelAppointment(appointment)\">\r\n                        Cancel\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-home/patient-schedule-appointment/patient-schedule-appointment.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-home/patient-schedule-appointment/patient-schedule-appointment.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid col-lg-8 col-sm-8\" style=\"margin-top:0.5em; padding-top: 0.5em;\">\r\n  <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n      <h3 class=\"display-8\">New Appointment</h3>\r\n      <p class=\"lead\">Send a schedule request for a new appointment.</p>\r\n  </div>\r\n</div>\r\n\r\n<div>\r\n  <form *ngIf='form' [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n      <fieldset [disabled]=\"true\">\r\n          <div class=\"form-group row\">\r\n              <label for=\"dateAndTime\" class=\"col-sm-2 col-lg-3 col-form-label font-weight-bold\">Date and time</label>\r\n              <div class=\"row col-lg-4 col-sm-8 col-md-6 shadow-sm p-1 mb-1 bg-white rounded col\">\r\n                  <div class=\"col-lg-10 col-sm-10 col-md-10\">\r\n                      <input type=\"datetime\" formControlName=\"dateAndTime\" [owlDateTime]=\"dt2\" class=\"form-control\"\r\n                          [ngClass]=\"{ 'is-invalid': submitted && form.controls.dateAndTime.errors }\" id=\"dateAndTime\"\r\n                          style=\"border: 0;\">\r\n                      <div *ngIf=\"submitted && form.controls.dateAndTime.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"form.controls.dateAndTime.errors.required\">Date and time is required</div>\r\n                      </div>\r\n                  </div>\r\n                  <!--<span class=\"m-1 float-right col-lg-1 col-sm-2 col-md-2\" [owlDateTimeTrigger]=\"dt2\"> \r\n                      <ion-icon size=\"large\" name=\"calendar\" style=\"cursor: pointer;\"></ion-icon> </span>-->\r\n                  <owl-date-time [startAt]=\"now\" [stepMinute]=\"10\" [stepSecond]=\"60\" #dt2></owl-date-time>\r\n              </div>\r\n          </div>\r\n        </fieldset>\r\n  \r\n      <fieldset [disabled]=\"true\">\r\n        <div class=\"form-group row\">\r\n          <label for=\"typeOfExamination\" class=\"col-sm-2 col-lg-3 col-form-label font-weight-bold\">Type of\r\n              examination</label>\r\n          <div class=\"row col-lg-4 col-sm-8 col-md-6 shadow-sm p-1 mb-1 bg-white rounded col\">\r\n              <select formControlName=\"typeOfExamination\" name=\"formTOE\" class=\"m-1 form-control\"\r\n                  (change)=\"setPriceFromTypeOfExamination()\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && form.controls.typeOfExamination.errors }\" id=\"typeOfExamination\"\r\n                  style=\"border: 0; width: 100%;\">\r\n                  <option *ngFor=\"let type of ExaminationTypes\" [value]=\"type.id\">{{type.name}}\r\n                  </option>\r\n              </select>\r\n              <div *ngIf=\"submitted && form.controls.typeOfExamination.errors\" class=\"invalid-feedback ml-3\">\r\n                  <div *ngIf=\"form.controls.typeOfExamination.errors.required\">Please select type of examination</div>\r\n              </div>\r\n          </div>\r\n         </div>\r\n       </fieldset>\r\n\r\n  \r\n      <div class=\"form-group row\">\r\n          <label class=\"col-sm-2 col-lg-3 col-form-label font-weight-bold\" for=\"price\">Price: </label>\r\n          <label class=\"col-sm-2 col-lg-3 col-form-label font-weight-bold\" for=\"priceVal\"> {{price}} </label>\r\n      </div>\r\n    <div class=\"col\">\r\n      <div class=\"accordion col-lg-6 col-sm-6 mb-5 p-0\" id=\"accordionExample1\">\r\n          <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingOne\">\r\n                  <h2 class=\"mb-0\">\r\n                      <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\r\n                          aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                          Clinic information\r\n                      </button>\r\n                  </h2>\r\n              </div>\r\n  \r\n              <div id=\"collapseOne\" class=\"collapse border\" aria-labelledby=\"headingOne\"\r\n                  data-parent=\"#accordionExample1\">\r\n                  <div class=\"card-body\">\r\n                      <div class=\"row\">\r\n                          <label class=\"col-lg-4\"> <b>Name:</b> </label>\r\n                          <label class=\"col-lg-8\"> {{clinic.name}} </label>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                          <label class=\"col-lg-4\"><b>Address: </b> </label>\r\n                          <label class=\"col-lg-8\"> {{clinic.address}}, {{clinic.city}}, {{clinic.state}} </label>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                          <label class=\"col-lg-4\"><b>Rating: </b> </label>\r\n                          <label class=\"col-lg-8\"><star-rating value='{{clinic.numberOfStars/clinic.numberOfReviews}}' totalstars=\"5\" checkedcolor=\"blue\" uncheckedcolor=\"gray\" size=\"20px\" readonly=\"true\"></star-rating></label>\r\n                      </div>\r\n  \r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"accordion col-lg-6 col-sm-6 mb-5 p-0\" id=\"accordionExample2\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\" id=\"headingTwo\">\r\n                <h2 class=\"mb-0\">\r\n                    <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\"\r\n                        aria-expanded=\"true\" aria-controls=\"collapseTwo\">\r\n                        Doctor information\r\n                    </button>\r\n                </h2>\r\n            </div>\r\n\r\n            <div id=\"collapseTwo\" class=\"collapse border\" aria-labelledby=\"headingTwo\"\r\n                data-parent=\"#accordionExample2\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <label class=\"col-lg-4\"> <b>Name:</b> </label>\r\n                        <label class=\"col-lg-8\"> {{doctor.name}} {{doctor.surname}} </label>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <label class=\"col-lg-4\"><b>Email: </b> </label>\r\n                        <label class=\"col-lg-8\"> {{doctor.email}} </label>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <label class=\"col-lg-4\"><b>Working hours: </b> </label>\r\n                      <label class=\"col-lg-8\">{{doctor.shiftStart}} - {{doctor.shiftEnd}}</label>\r\n                  </div>\r\n                    <div class=\"row\">\r\n                        <label class=\"col-lg-4\"><b>Rating: </b> </label>\r\n                        <label class=\"col-lg-8\"><star-rating value='{{doctor.numberOfStars/doctor.numberOfReviews}}' totalstars=\"5\" checkedcolor=\"blue\" uncheckedcolor=\"gray\" size=\"20px\" readonly=\"true\"></star-rating></label>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  \r\n      <div class=\"col-lg-8 col-sm-10\">\r\n          <hr>\r\n      </div>\r\n   \r\n      <div>\r\n          <button type=\"submit\" class=\"btn btn-primary\">Send scheduling request</button>\r\n          <button type=\"button\" class=\"btn btn-outline-primary m-1\" (click)='cancelChanges()'>Cancel</button>\r\n      </div>\r\n  </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-profile/medical-record/medical-record.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-profile/medical-record/medical-record.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid col-lg-12 col-sm-12\"\r\n  style=\"max-height: 4em; margin-top:0.5em; padding-top: 0.5em; \">\r\n  <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n    <h4 class=\"display-8\" *ngIf=\"!patientName\">Medical record</h4>\r\n    <h3 class=\"display-8\" *ngIf=\"patientName\">{{patientName}}</h3>\r\n    <p class=\"lead\" *ngIf=\"!patientName\">Here you can see your personal medical record.</p>\r\n  </div>\r\n</div>\r\n<mat-accordion>\r\n  <mat-expansion-panel expanded id=\"\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <p class=\"h3 \">Basic information </p>\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n    <form [formGroup]=\"basicInfoForm\" (keydown.enter)=\"$event.target.tagName == 'TEXTAREA'\"\r\n      (ngSubmit)=\"submitBasicInfo()\" *ngIf=\"medicalRecord\">\r\n      <div class=\"col-12 border\" style=\"margin-top: 0.2em;\">\r\n        <div class=\"row justify-content-start\">\r\n          <div class=\"col-8 border-top border-bottom pt-2\">\r\n            <div class=\"form-group row \">\r\n              <label for=\"Surname\" class=\"col-sm-3 col-form-label font-weight-bold\">Blood type</label>\r\n              <div class=\"col-sm-8 col-lg-8 shadow-sm p-1 mb-1 bg-white rounded pt-2\">\r\n                <div class=\"input-group mb-3\" style=\"border: 0; height: 1em;\">\r\n                  <input type=\"text\" class=\"form-control input-display\" formControlName=\"bloodType\" />\r\n                  <div class=\"input-group-append\">\r\n                    <span class=\"input-group-text\" style=\" height: 2em;\"><img src=\"assets/images/blood-type.png\"\r\n                        style=\" width: 2em; height: 2em;\"></span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"Surname\" class=\"col-sm-3 col-form-label font-weight-bold\">Diopter</label>\r\n              <div class=\"col-sm-8 col-lg-8 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                <div class=\"input-group mb-3\" style=\"border: 0; height: 1em;\">\r\n                  <input type=\"text\" class=\"form-control input-display\" formControlName=\"diopter\" />\r\n                  <div class=\"input-group-append\">\r\n                    <span class=\"input-group-text\" style=\"height: 2em;\"><img src=\"assets/images/diopter.png\"\r\n                        style=\" width: 2em; height: 2em;\"></span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"Surname\" class=\"col-sm-3 col-form-label font-weight-bold\">Height</label>\r\n              <div class=\"col-sm-8 col-lg-8 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                <div class=\"input-group mb-3\" style=\"border: 0; height: 1em;\">\r\n                  <input type=\"text\" class=\"form-control input-display\" formControlName=\"height\" />\r\n                  <div class=\"input-group-append\">\r\n                    <span class=\"input-group-text\" style=\" height: 2em;\"><img src=\"assets/images/height.png\"\r\n                        style=\"width: 2em; height: 2em;\"></span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"Surname\" class=\"col-sm-3 col-form-label font-weight-bold\">Weight</label>\r\n              <div class=\"col-sm-8 col-lg-8 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                <div class=\"input-group mb-3\" style=\"border: 0; height: 1em;\">\r\n                  <input type=\"text\" class=\"form-control input-display\" formControlName=\"weight\" />\r\n                  <div class=\"input-group-append\">\r\n                    <span class=\"input-group-text\" style=\" height: 2em;\"><img src=\"assets/images/weight.png\"\r\n                        style=\" width: 2em; height: 2em;\"></span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-4 border-top border-bottom pt-2\">\r\n\r\n            <div class=\"bg-white clearfix rounded \">\r\n              <label class=\"col-sm-3 col-form-label font-weight-bold float-left\">Alergies</label>\r\n              <img class=\"float-right\" src=\"assets/images/alergies.png\" style=\" width: 2em; height: 2em; \">\r\n            </div>\r\n            <div class=\"overflow-auto border rounded\" style=\"max-height: 11.4em;\">\r\n              <ul class=\"list-group rounded\">\r\n                <li class=\"list-group-item\" *ngFor='let alergie of allergies?.split(\",\")'\r\n                  (mouseenter)=\"onHovering($event)\" (mouseleave)=\"onUnovering($event)\">\r\n                  <span class=\"float-left\" *ngIf=\"alergie!==''\">{{alergie}}</span>\r\n                  <button type=\"button\" class=\"btn float-right\" *ngIf=\"alergie!==''\" (click)=\"deleteAllergie(alergie)\"\r\n                    hidden=true style=\" width: 1.6em; height: 1.6em; background: url('assets/images/remove.svg')\">\r\n                  </button>\r\n                </li>\r\n              </ul>\r\n\r\n            </div>\r\n            <div class=\"form-group row ml-1 mt-2 float-bottom\" *ngIf=\"editBasicInfo\">\r\n              <div class=\"col-sm-11 col-lg-11 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                <div class=\"input-group mb-3\" style=\"border: 0; height: 1em;\">\r\n                  <input type=\"text\" class=\"form-control input-display\" placeholder=\"Add an allergie\"\r\n                    (keydown.enter)=\"addAllergie($event.target.value)\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-2\"></div>\r\n        </div>\r\n      </div>\r\n      <mat-action-row>\r\n        <button type=\"button\" mat-button *ngIf=\"editable && !editBasicInfo\" (click)=\"enableInfoEdit()\">Edit</button>\r\n        <button type=\"button\" mat-button color=\"warn\" *ngIf=\"editBasicInfo\" (click)=\"cancelInfoEdit()\">Cancel</button>\r\n        <button type=\"submit\" mat-button *ngIf=\"editBasicInfo\">Submit & save</button>\r\n      </mat-action-row>\r\n    </form>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n<mat-accordion class=\"example-headers-align mt-2 pt-3\">\r\n  <mat-expansion-panel style=\"margin-top: 0.5em;\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <p class=\"h3\">Examination history</p>\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n\r\n    <div class=\"col-12 p-0 m-0 mb-2 \" *ngIf=\"medicalRecord\">\r\n\r\n      <mat-accordion class=\"example-headers-align\">\r\n        <mat-action-row>\r\n          <div class=\"dropdown\">\r\n            <button class=\"dropdown-toggle\" mat-button type=\"button\" id=\"dropdownMenuButton\"\r\n                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                Sort by\r\n            </button>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n              <span class=\"dropdown-item\">\r\n                Type \r\n                <ion-icon class=\"ml-1 mt-1\" name=\"arrow-round-down\" (click)=\"sortByTypeDesc()\" aria-hidden=\"true\" style=\"cursor: pointer;\"></ion-icon>\r\n                <ion-icon class=\"ml-1 mt-1\" name=\"arrow-round-up\" (click)=\"sortByTypeAsc()\" aria-hidden=\"true\" style=\"cursor: pointer;\"></ion-icon>\r\n                <!-- <i class=\"fa fa-arrow-down ml-1\" (click)=\"sortByTypeDesc()\" aria-hidden=\"true\" style=\"cursor: pointer;\"></i>\r\n                <i class=\"fa fa-arrow-up ml-1\" (click)=\"sortByTypeAsc()\" aria-hidden=\"true\" style=\"cursor: pointer;\"></i> -->\r\n              </span>\r\n              <span class=\"dropdown-item\">\r\n                Date\r\n                <ion-icon class=\"ml-1 mt-1\" name=\"arrow-round-down\" (click)=\"sortByTypeDesc()\" aria-hidden=\"true\" style=\"cursor: pointer;\"></ion-icon>\r\n                <ion-icon class=\"ml-1 mt-1\" name=\"arrow-round-up\" (click)=\"sortByTypeAsc()\" aria-hidden=\"true\" style=\"cursor: pointer;\"></ion-icon>\r\n                <!-- <i class=\"fa fa-arrow-down ml-1\" (click)=\"sortByDateDesc()\" aria-hidden=\"true\" style=\"cursor: pointer;\"></i>\r\n                <i class=\"fa fa-arrow-up ml-1\" (click)=\"sortByDateAsc()\" aria-hidden=\"true\" style=\"cursor: pointer;\"></i> -->\r\n              </span>\r\n\r\n            </div>\r\n        </div>\r\n          <!-- <button type=\"submit\" mat-button  (click)=\"submitReportEdit(examination)\">Sort</button> -->\r\n        </mat-action-row> \r\n        <ul style=\"list-style-type:none;\">\r\n          <li *ngFor='let examination of medicalRecord.examinationReport'>\r\n            <form (keydown.enter)=\"$event.target.tagName == 'TEXTAREA'\" (ngSubmit)=\"submitBasicInfo()\">\r\n              <mat-expansion-panel class=\"example-headers-align\" style=\"margin-top: 0.6em;\" (closed)=\"panelClosed()\">\r\n\r\n                <mat-expansion-panel-header style=\"max-height: 3em;\" class=\"example-headers-align\">\r\n                  <mat-panel-title>\r\n                    <label class=\"font-weight-bold\"><img src=\"assets/images/typeOfExamination.png\"\r\n                        style=\"width: 2em; height: 2em;\">{{\" \" + examination.typeOfExamination.name + \" \"}}</label>\r\n                  </mat-panel-title>\r\n                  <mat-panel-description>\r\n                    <span><img src=\"assets/images/datetime.png\"\r\n                        style=\"width: 2em; height: 2em;\">{{timeConverter(examination.dateAndTime)}}</span>\r\n                  </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n\r\n                <div class=\"row border-top  pt-3 mb-2 mt-2\">\r\n                  <label class=\"col-sm-3 col-form-label font-weight-bold float-left border-bottom\">Doctor:</label>\r\n                  <div class=\"col-sm-8 col-lg-8 shadow-sm p-1 mb-1 bg-white rounded \">\r\n                    <div class=\"input-group mb-3\" style=\"border: 0; height: 1em;\">\r\n                      <input type=\"text\" class=\"form-control input-display\"\r\n                        value='{{examination.performs.name + \" \" + examination.performs.surname}} ' disabled />\r\n                      <div class=\"input-group-append\">\r\n                        <span class=\"input-group-text\" style=\" height: 2em;\"><img src=\"assets/images/doctor.png\"\r\n                            style=\" width: 1.7em; height: 1.7em;\"></span>\r\n                      </div>\r\n                      <div *ngIf=\"this.patientName === undefined\">\r\n                        <star-rating value='{{examination.performs.numberOfStars / examination.performs.numberOfReviews}}' totalstars=\"5\" checkedcolor=\"blue\" uncheckedcolor=\"gray\" size=\"24px\" readonly=\"false\" (rate)=\"onRateDoctor($event, examination.performs.id)\"></star-rating>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row  pt-3 mb-2\">\r\n                  <label class=\"col-sm-3 col-form-label font-weight-bold float-left border-bottom\">Clinic:</label>\r\n                  <div class=\"col-sm-8 col-lg-8 shadow-sm p-1 mb-1 bg-white rounded \">\r\n                    <div class=\"input-group mb-3\" style=\"border: 0; height: 1em;\">\r\n                      <input type=\"text\" class=\"form-control input-display\" value='{{examination.clinic.name}} '\r\n                        disabled />\r\n                      <div class=\"input-group-append\">\r\n                        <span class=\"input-group-text\" style=\" height: 2em;\"><img src=\"assets/images/clinic.png\"\r\n                            style=\" width: 1.7em; height: 1.7em;\"></span>\r\n                      </div>\r\n                      <div *ngIf=\"this.patientName === undefined\">\r\n                        <star-rating value='{{examination.clinic.numberOfStars / examination.clinic.numberOfReviews}}' totalstars=\"5\" checkedcolor=\"blue\" uncheckedcolor=\"gray\" size=\"24px\" readonly=\"false\" (rate)=\"onRateClinic($event, examination.clinic.id)\"></star-rating>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row  pt-3 mb-2\">\r\n                  <label class=\"col-sm-3 col-form-label font-weight-bold float-left border-bottom\">Date:</label>\r\n                  <div class=\"col-sm-8 col-lg-8 shadow-sm p-1 mb-1 bg-white rounded \">\r\n                    <div class=\"input-group mb-3\" style=\"border: 0; height: 1em;\">\r\n                      <input type=\"text\" class=\"form-control input-display\"\r\n                        value='{{timeConverter(examination.dateAndTime)}} ' disabled />\r\n                      <div class=\"input-group-append\">\r\n                        <span class=\"input-group-text\" style=\" height: 2em;\"><img src=\"assets/images/datetime.png\"\r\n                            style=\" width: 1.7em; height: 1.7em;\"></span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <fieldset [disabled]=\"changeReport\">\r\n                  <div class=\"row  pt-3 mb-2\">\r\n                    <label class=\"col-sm-3 col-form-label font-weight-bold float-left \">Report\r\n                      description:</label>\r\n                    <div class=\"col-sm-8 col-lg-8 shadow-sm p-1 mb-1 bg-white rounded \">\r\n                      <div class=\"input-group mb-3\" style=\"border: 0; height: 4em;\">\r\n                        <textarea type=\"text\" class=\"form-control input-display\" (change)=\"changedReportDesc($event,examination)\" style=\"height: 5em;\"\r\n                          value='{{examination.reportDescription}}'></textarea>\r\n                        <div class=\"input-group-append\">\r\n                          <span class=\"input-group-text\" style=\" height: 5em;\"><img src=\"assets/images/description.png\"\r\n                              style=\" width: 1.7em; height: 1.7em;\"></span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row  pt-2 mb-1\">\r\n                    <div class=\"col-6 border-top pt-2\">\r\n                      <div class=\"bg-white clearfix rounded \">\r\n                        <label class=\"col-sm-3 col-form-label font-weight-bold float-left\">Diagnoses</label>\r\n                        <img class=\"float-right\" src=\"assets/images/diagnosis.png\" style=\" width: 2em; height: 2em; \">\r\n                      </div>\r\n                      <div class=\"overflow-auto border rounded\" style=\"max-height: 11.4em;\">\r\n\r\n                        <table class=\"table table-sm table-hover table-bordered\">\r\n                          <thead style=\"font-size: 0.8em;\">\r\n                            <tr>\r\n                              <th>Code</th>\r\n                              <th>Description</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody >\r\n                            <tr class=\"\" *ngFor='let diagnosis of examination.diagnosis'>\r\n                              <td>{{diagnosis.code}}</td>\r\n                              <td>{{diagnosis.description}}</td>\r\n                              <td *ngIf=\"!changeReport\"><button class=\"btn\"  (click)=\"deleteDiagnosis(diagnosis, examination)\"\r\n                                style=\" width: 1.6em; height: 1.6em; background: url('assets/images/remove.svg')\"></button></td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n\r\n                        <div class=\"alert alert-info\" role=\"alert\"\r\n                          *ngIf=\"examination.diagnosis && examination.diagnosis.length <1\">Doctor established no\r\n                          diagnosis.\r\n                        </div>\r\n\r\n\r\n                      </div>\r\n                      <div class=\"form-group row ml-1 mr-1 mt-2 float-bottom\" *ngIf=\"!changeReport\">\r\n                        <div class=\"col-sm-12 col-lg-12 shadow-sm p-1 mb-1 bg-white rounded\">\r\n                          <ngx-select-dropdown (change)=\"selectionChangedDiag($event, examination)\" [multiple]=\"true\"\r\n                            [config]=\"config2\" [options]=\"optionsDiagnosis\"></ngx-select-dropdown>\r\n\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-6 border-top pt-2\">\r\n                      <div class=\"bg-white clearfix rounded \">\r\n                        <label class=\"col-sm-3 col-form-label font-weight-bold float-left\">Prescriptions</label>\r\n                        <img class=\"float-right\" src=\"assets/images/drug.png\" style=\" width: 2em; height: 2em; \">\r\n                      </div>\r\n                      <div class=\"overflow-auto border rounded\" style=\"max-height: 11.4em;\">\r\n                        <table class=\"table table-sm table-hover table-bordered\">\r\n                          <thead style=\"font-size: 0.8em;\">\r\n                            <tr>\r\n                              <th>Code</th>\r\n                              <th>Name</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody >\r\n                            <tr class=\"\" *ngFor='let prescription of examination.prescription'>\r\n                              <td>{{prescription.medication_code}}</td>\r\n                              <td>{{prescription.medication_name}}</td>\r\n                            </tr>\r\n\r\n                          </tbody>\r\n                        </table>\r\n\r\n                        <div class=\"alert alert-info\" role=\"alert\"\r\n                          *ngIf=\"examination.prescription && examination.prescription.length <1\">\r\n                          Doctor prescribed no medications.\r\n                        </div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </fieldset>\r\n                <mat-action-row>\r\n                  <button mat-button *ngIf=\"editable && changeReport && examination.performs.id===currentUser.id\"\r\n                    (click)=\"enableReportEdit(examination)\">Edit</button>\r\n                  <button mat-button color=\"warn\" *ngIf=\"!changeReport\"\r\n                    (click)=\"cancelReportEdit(examination.dateAndTime)\">Cancel</button>\r\n                  <button type=\"submit\" mat-button *ngIf=\"!changeReport\" (click)=\"submitReportEdit(examination)\">Submit &\r\n                    save</button>\r\n                </mat-action-row>\r\n              </mat-expansion-panel>\r\n            </form>\r\n          </li>\r\n        </ul>\r\n      </mat-accordion>\r\n\r\n    </div>\r\n\r\n  </mat-expansion-panel>\r\n</mat-accordion>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-profile/patient-personal-profile/patient-personal-profile.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-profile/patient-personal-profile/patient-personal-profile.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid col-lg-8 col-sm-8\"\r\n  style=\"max-height: 6em; margin-top:0.5em; padding-top: 0.5em; \">\r\n  <div class=\"container-fluid\" style=\"max-height: 2em; margin-bottom: 0.5em;\">\r\n    <h3 class=\"display-8\">Personal page</h3>\r\n    <p class=\"lead\">Here you can see, or change your personal information.</p>\r\n  </div>\r\n</div>\r\n<form *ngIf='form' [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <fieldset [disabled]=\"change\">\r\n    <div class=\"form-group row\">\r\n      <label for=\"Name\" class=\"col-sm-2 col-form-label font-weight-bold\">Name</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.name.errors }\"\r\n          id=\"Name\" formControlName=\"name\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.name.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.name.errors.required\">Name is required</div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"Surname\" class=\"col-sm-2 col-form-label font-weight-bold\">Surname</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.surname.errors }\"\r\n          id=\"Surname\" formControlName=\"surname\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.surname.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.surname.errors.required\">Surname is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <fieldset [disabled]=\"true\">\r\n      <div class=\"form-group row\">\r\n        <label for=\"Email\" class=\"col-sm-2 col-form-label font-weight-bold\">E-mail</label>\r\n        <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n          <input type=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.email.errors }\"\r\n            id=\"Email\" formControlName=\"email\" style=\"border: 0;\" />\r\n          <div *ngIf=\"submitted && form.controls.email.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"form.controls.email.errors.required\">E-mail is required</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </fieldset>\r\n    <div class=\"form-group row\">\r\n      <label for=\"Address\" class=\"col-sm-2 col-form-label font-weight-bold\">Address</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.address.errors }\"\r\n          id=\"Address\" formControlName=\"address\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.address.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.address.errors.required\">Address is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"City\" class=\"col-sm-2 col-form-label font-weight-bold\">City</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.city.errors }\"\r\n          id=\"City\" formControlName=\"city\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.city.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.city.errors.required\">City is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"State\" class=\"col-sm-2 col-form-label font-weight-bold\">State</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.state.errors }\"\r\n          id=\"State\" formControlName=\"state\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.state.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.state.errors.required\">State is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"PhoneNumber\" class=\"col-sm-2 col-form-label font-weight-bold\">Phone number</label>\r\n      <div class=\"col-sm-10  col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"text\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && form.controls.phoneNumber.errors }\" id=\"PhoneNumber\"\r\n          formControlName=\"phoneNumber\" style=\"border: 0;\" />\r\n        <div *ngIf=\"submitted && form.controls.phoneNumber.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"form.controls.phoneNumber.errors.required\">Phone number is required</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <fieldset [disabled]=\"true\">\r\n      <div class=\"form-group row\">\r\n        <label for=\"JMBG\" class=\"col-sm-2 col-form-label font-weight-bold\">UPIN</label>\r\n        <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.controls.upin.errors }\"\r\n            id=\"JMBG\" formControlName=\"upin\" style=\"border: 0;\" />\r\n          <div *ngIf=\"submitted && form.controls.upin.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"form.controls.upin.errors.required\">UPIN is required</div>\r\n            <div *ngIf=\"form.controls.upin.errors.minlength\">UPIN is exactly 13 characters long</div>\r\n            <div *ngIf=\"form.controls.upin.errors.maxlength\">UPIN is exactly 13 characters long</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </fieldset>\r\n    <!-- <div class=\"form-group row\">\r\n      <label for=\"inputPassword\" class=\"col-sm-2 col-form-label font-weight-bold\">Password</label>\r\n      <div class=\"col-sm-10 col-lg-6 shadow-sm p-1 mb-1 bg-white rounded\">\r\n        <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">\r\n      </div>\r\n    </div> -->\r\n    <div class=\"col-lg-8 col-sm-10\">\r\n      <hr>\r\n    </div>\r\n  </fieldset>\r\n\r\n  <div>\r\n    <button type=\"submit\" class=\"btn btn-primary\" *ngIf='!change'>Submit changes</button>\r\n    <button type=\"button\" class=\"btn btn-outline-primary m-1\" *ngIf='!change'\r\n      (click)='cancelChanges()'>Cancel</button>\r\n  </div>\r\n\r\n</form>\r\n<div>\r\n  <button type=\"button\" class=\"btn btn-outline-primary\" *ngIf='change' (click)='enableChangeInfo()'>Change\r\n    information</button>\r\n  <button type=\"button\" class=\"btn btn-outline-primary m-1\" *ngIf='change' (click)='showChangePasswordForm()'>Change\r\n    password</button>\r\n</div>\r\n<br><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-profile/patient-profile.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-profile/patient-profile.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='row'>\r\n\t<ul class=\"nav nav-pills\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n\t\t<li class=\"nav-item\">\r\n\t\t\t<a class=\"nav-link active\" data-toggle=\"pill\" [routerLink]=\"['./profile']\" href=\"#v-pills-profile\" role=\"tab\"\r\n\t\t\t\taria-controls=\"v-pills-home\" aria-selected=\"true\">Personal profile</a>\r\n\t\t</li>\r\n\t\t<li class=\"nav-item\">\r\n\t\t\t<a class=\"nav-link\" data-toggle=\"pill\" [routerLink]=\"['./medicalRecord']\" role=\"tab\" aria-controls=\"v-pills-home\"\r\n\t\t\t\taria-selected=\"true\">Medical record</a>\r\n\t\t</li>\r\n\r\n\t</ul>\r\n\r\n\t<div class=\"tab-content\" style='width: 100%;' id=\"v-pills-tabContent\">\r\n\t\t<router-outlet></router-outlet>\r\n\t</div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registration/registration.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/registration/registration.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-6 offset-md-3 mt-5\">\r\n  <div class=\"card\">\r\n      <h4 class=\"card-header\">Register to Clinical System</h4>\r\n      <div class=\"card-body\">\r\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n              <div class=\"form-group\">\r\n                  <label for=\"email\">Email</label>\r\n                  <input type=\"email\" name=\"email\" [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.email.errors }\" class=\"form-control\" formControlName=\"email\" placeholder=\"example@kcv.rs\"/>\r\n                    <div *ngIf=\"submitted && loginForm.controls.email.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"loginForm.controls.email.errors.required\">Email is required</div>\r\n                        <div *ngIf=\"loginForm.controls.email.errors.email\">Email must be a valid email address</div>\r\n                    </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <label for=\"password\">Password</label>\r\n                  <input type=\"password\"  name=\"password\" [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.password.errors }\" class=\"form-control\" formControlName=\"password\" placeholder=\"******\"/>\r\n                    <div *ngIf=\"submitted && loginForm.controls.password.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"loginForm.controls.password.errors.required\">Password is required</div>\r\n                        <div *ngIf=\"loginForm.controls.password.errors.minlength\">Password is at least 6 characters long</div>\r\n                        <div *ngIf=\"loginForm.controls.password.errors.maxlength\">Password is maximum 24 characters long</div>\r\n                    </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"confirmPassword\">Confirm password</label>\r\n                <input type=\"password\" name=\"confirmPassword\" [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.confirmPassword.errors }\" class=\"form-control\" formControlName=\"confirmPassword\" placeholder=\"******\"/>\r\n                  <div *ngIf=\"submitted && loginForm.controls.confirmPassword.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"loginForm.controls.confirmPassword.errors.required\">Password is required</div>\r\n                    <div *ngIf=\"loginForm.controls.confirmPassword.errors.minlength\">Password is at least 6 characters long</div>\r\n                    <div *ngIf=\"loginForm.controls.confirmPassword.errors.maxlength\">Password is maximum 24 characters long</div>\r\n                    <div *ngIf=\"loginForm.controls.confirmPassword.errors.mustMatch\">Passwords must match</div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Name</label>\r\n                <input type=\"text\" name=\"name\" [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.name.errors }\" class=\"form-control\" formControlName=\"name\" placeholder=\"\"/>\r\n                  <div *ngIf=\"submitted && loginForm.controls.name.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"loginForm.controls.name.errors.required\">Name is required</div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"surname\">Surname</label>\r\n                <input type=\"text\" name=\"surname\" [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.surname.errors }\" class=\"form-control\" formControlName=\"surname\" placeholder=\"\"/>\r\n                  <div *ngIf=\"submitted && loginForm.controls.surname.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"loginForm.controls.surname.errors.required\">Surname is required</div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"address\">Address</label>\r\n                <input type=\"text\" name=\"address\" [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.address.errors }\" class=\"form-control\" formControlName=\"address\" placeholder=\"\"/>\r\n                  <div *ngIf=\"submitted && loginForm.controls.address.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"loginForm.controls.address.errors.required\">Address is required</div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"city\">City</label>\r\n                <input type=\"text\" name=\"city\" [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.city.errors }\" class=\"form-control\" formControlName=\"city\" placeholder=\"\"/>\r\n                  <div *ngIf=\"submitted && loginForm.controls.city.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"loginForm.controls.city.errors.required\">City is required</div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"state\">State</label>\r\n                <input type=\"text\" name=\"state\" [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.state.errors }\" class=\"form-control\" formControlName=\"state\" placeholder=\"\"/>\r\n                  <div *ngIf=\"submitted && loginForm.controls.state.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"loginForm.controls.state.errors.required\">State is required</div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"phoneNumber\">Phone number</label>\r\n                <input type=\"text\" name=\"phoneNumber\" [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.phoneNumber.errors }\" class=\"form-control\" formControlName=\"phoneNumber\" placeholder=\"\"/>\r\n                  <div *ngIf=\"submitted && loginForm.controls.phoneNumber.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"loginForm.controls.phoneNumber.errors.required\">Phone number is required</div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"upin\">UPIN</label>\r\n                <input type=\"number\" name=\"upin\" [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.upin.errors }\" class=\"form-control\" formControlName=\"upin\" placeholder=\"13 digit unique person identification number\"/>\r\n                  <div *ngIf=\"submitted && loginForm.controls.upin.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"loginForm.controls.upin.errors.required\">UPIN is required</div>\r\n                    <div *ngIf=\"loginForm.controls.upin.errors.minlength\">UPIN is exactly 13 digits long</div>\r\n                    <div *ngIf=\"loginForm.controls.upin.errors.maxlength\">UPIN is exactly 13 digits long</div>\r\n                  </div>\r\n              </div>\r\n              <button class=\"btn btn-primary\">Submit</button>\r\n          </form>\r\n      </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_adminC_dashboard_doctor_listing_doctor_listing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/adminC-dashboard/doctor-listing/doctor-listing.component */ "./src/app/components/adminC-dashboard/doctor-listing/doctor-listing.component.ts");
/* harmony import */ var _components_adminCC_dashboard_clinic_admin_form_clinic_admin_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/adminCC-dashboard/clinic-admin-form/clinic-admin-form.component */ "./src/app/components/adminCC-dashboard/clinic-admin-form/clinic-admin-form.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
/* harmony import */ var _components_adminCC_dashboard_admin_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/adminCC-dashboard/admin-profile.component */ "./src/app/components/adminCC-dashboard/admin-profile.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_adminCC_dashboard_clinic_listing_clinic_listing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/adminCC-dashboard/clinic-listing/clinic-listing.component */ "./src/app/components/adminCC-dashboard/clinic-listing/clinic-listing.component.ts");
/* harmony import */ var _components_adminCC_dashboard_clinic_administrators_listing_clinic_administrators_listing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/adminCC-dashboard/clinic-administrators-listing/clinic-administrators-listing.component */ "./src/app/components/adminCC-dashboard/clinic-administrators-listing/clinic-administrators-listing.component.ts");
/* harmony import */ var _components_adminCC_dashboard_clinic_form_clinic_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/adminCC-dashboard/clinic-form/clinic-form.component */ "./src/app/components/adminCC-dashboard/clinic-form/clinic-form.component.ts");
/* harmony import */ var _components_adminCC_dashboard_medication_listing_medication_listing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/adminCC-dashboard/medication-listing/medication-listing.component */ "./src/app/components/adminCC-dashboard/medication-listing/medication-listing.component.ts");
/* harmony import */ var _components_adminCC_dashboard_medication_form_medication_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/adminCC-dashboard/medication-form/medication-form.component */ "./src/app/components/adminCC-dashboard/medication-form/medication-form.component.ts");
/* harmony import */ var _components_adminC_dashboard_doctor_form_doctor_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/adminC-dashboard/doctor-form/doctor-form.component */ "./src/app/components/adminC-dashboard/doctor-form/doctor-form.component.ts");
/* harmony import */ var _components_adminCC_dashboard_admin_personal_profile_admin_personal_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/adminCC-dashboard/admin-personal-profile/admin-personal-profile.component */ "./src/app/components/adminCC-dashboard/admin-personal-profile/admin-personal-profile.component.ts");
/* harmony import */ var _components_adminC_dashboard_clinic_profile_info_clinic_profile_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/adminC-dashboard/clinic-profile-info/clinic-profile-info.component */ "./src/app/components/adminC-dashboard/clinic-profile-info/clinic-profile-info.component.ts");
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/change-password/change-password.component */ "./src/app/components/change-password/change-password.component.ts");
/* harmony import */ var _guards_change_password_deactivate_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guards/change-password-deactivate.service */ "./src/app/guards/change-password-deactivate.service.ts");
/* harmony import */ var _components_adminC_dashboard_adminC_personal_profile_adminC_personal_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/adminC-dashboard/adminC-personal-profile/adminC-personal-profile.component */ "./src/app/components/adminC-dashboard/adminC-personal-profile/adminC-personal-profile.component.ts");
/* harmony import */ var _components_adminC_dashboard_adminC_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/adminC-dashboard/adminC-dashboard.component */ "./src/app/components/adminC-dashboard/adminC-dashboard.component.ts");
/* harmony import */ var _components_adminCC_dashboard_diagnosis_listing_diagnosis_listing_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/adminCC-dashboard/diagnosis-listing/diagnosis-listing.component */ "./src/app/components/adminCC-dashboard/diagnosis-listing/diagnosis-listing.component.ts");
/* harmony import */ var _components_adminCC_dashboard_diagnosis_form_diagnosis_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/adminCC-dashboard/diagnosis-form/diagnosis-form.component */ "./src/app/components/adminCC-dashboard/diagnosis-form/diagnosis-form.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _components_adminC_dashboard_ordination_listing_ordination_listing_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/adminC-dashboard/ordination-listing/ordination-listing.component */ "./src/app/components/adminC-dashboard/ordination-listing/ordination-listing.component.ts");
/* harmony import */ var _components_adminC_dashboard_available_appointment_listing_available_appointment_listing_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/adminC-dashboard/available-appointment-listing/available-appointment-listing.component */ "./src/app/components/adminC-dashboard/available-appointment-listing/available-appointment-listing.component.ts");
/* harmony import */ var _components_adminCC_dashboard_registration_listing_registration_listing_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/adminCC-dashboard/registration-listing/registration-listing.component */ "./src/app/components/adminCC-dashboard/registration-listing/registration-listing.component.ts");
/* harmony import */ var _components_adminC_dashboard_type_of_examination_listing_type_of_examination_listing_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/adminC-dashboard/type-of-examination-listing/type-of-examination-listing.component */ "./src/app/components/adminC-dashboard/type-of-examination-listing/type-of-examination-listing.component.ts");
/* harmony import */ var _components_adminC_dashboard_type_of_examination_form_type_of_examination_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/adminC-dashboard/type-of-examination-form/type-of-examination-form.component */ "./src/app/components/adminC-dashboard/type-of-examination-form/type-of-examination-form.component.ts");
/* harmony import */ var _components_adminC_dashboard_ordination_form_ordination_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/adminC-dashboard/ordination-form/ordination-form.component */ "./src/app/components/adminC-dashboard/ordination-form/ordination-form.component.ts");
/* harmony import */ var _components_patient_home_patient_home_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/patient-home/patient-home.component */ "./src/app/components/patient-home/patient-home.component.ts");
/* harmony import */ var _components_patient_profile_patient_personal_profile_patient_personal_profile_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/patient-profile/patient-personal-profile/patient-personal-profile.component */ "./src/app/components/patient-profile/patient-personal-profile/patient-personal-profile.component.ts");
/* harmony import */ var _components_patient_home_patient_clinic_listing_patient_clinic_listing_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/patient-home/patient-clinic-listing/patient-clinic-listing.component */ "./src/app/components/patient-home/patient-clinic-listing/patient-clinic-listing.component.ts");
/* harmony import */ var _components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/patient-profile/patient-profile.component */ "./src/app/components/patient-profile/patient-profile.component.ts");
/* harmony import */ var _components_patient_home_patient_pending_appointments_listing_patient_pending_appointments_listing_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/patient-home/patient-pending-appointments-listing/patient-pending-appointments-listing.component */ "./src/app/components/patient-home/patient-pending-appointments-listing/patient-pending-appointments-listing.component.ts");
/* harmony import */ var _components_doctor_home_doctor_home_doctor_home_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/doctor-home/doctor-home/doctor-home.component */ "./src/app/components/doctor-home/doctor-home/doctor-home.component.ts");
/* harmony import */ var _components_doctor_home_doctor_calendar_doctor_calendar_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/doctor-home/doctor-calendar/doctor-calendar.component */ "./src/app/components/doctor-home/doctor-calendar/doctor-calendar.component.ts");
/* harmony import */ var _components_nurse_home_nurse_home_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/nurse-home/nurse-home.component */ "./src/app/components/nurse-home/nurse-home.component.ts");
/* harmony import */ var _components_nurse_home_nurse_profile_nurse_profile_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/nurse-home/nurse-profile/nurse-profile.component */ "./src/app/components/nurse-home/nurse-profile/nurse-profile.component.ts");
/* harmony import */ var _components_nurse_home_nurse_profile_nurse_personal_profile_nurse_personal_profile_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/nurse-home/nurse-profile/nurse-personal-profile/nurse-personal-profile.component */ "./src/app/components/nurse-home/nurse-profile/nurse-personal-profile/nurse-personal-profile.component.ts");
/* harmony import */ var _components_adminC_dashboard_nurse_listing_nurse_listing_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/adminC-dashboard/nurse-listing/nurse-listing.component */ "./src/app/components/adminC-dashboard/nurse-listing/nurse-listing.component.ts");
/* harmony import */ var _components_adminC_dashboard_nurse_form_nurse_form_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/adminC-dashboard/nurse-form/nurse-form.component */ "./src/app/components/adminC-dashboard/nurse-form/nurse-form.component.ts");
/* harmony import */ var _components_doctor_home_doctor_my_profile_doctor_my_profile_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/doctor-home/doctor-my-profile/doctor-my-profile.component */ "./src/app/components/doctor-home/doctor-my-profile/doctor-my-profile.component.ts");
/* harmony import */ var _components_doctor_home_doctor_profile_doctor_profile_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/doctor-home/doctor-profile/doctor-profile.component */ "./src/app/components/doctor-home/doctor-profile/doctor-profile.component.ts");
/* harmony import */ var _components_doctor_home_patient_listing_patient_listing_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/doctor-home/patient-listing/patient-listing.component */ "./src/app/components/doctor-home/patient-listing/patient-listing.component.ts");
/* harmony import */ var _components_nurse_home_nurse_calendar_nurse_calendar_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/nurse-home/nurse-calendar/nurse-calendar.component */ "./src/app/components/nurse-home/nurse-calendar/nurse-calendar.component.ts");
/* harmony import */ var _components_nurse_home_nurse_patient_listing_nurse_patient_listing_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/nurse-home/nurse-patient-listing/nurse-patient-listing.component */ "./src/app/components/nurse-home/nurse-patient-listing/nurse-patient-listing.component.ts");
/* harmony import */ var _components_nurse_home_prescription_listing_prescription_listing_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/nurse-home/prescription-listing/prescription-listing.component */ "./src/app/components/nurse-home/prescription-listing/prescription-listing.component.ts");
/* harmony import */ var _components_doctor_home_new_appointment_page_new_appointment_page_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/doctor-home/new-appointment-page/new-appointment-page.component */ "./src/app/components/doctor-home/new-appointment-page/new-appointment-page.component.ts");
/* harmony import */ var _components_adminC_dashboard_new_available_appointment_page_new_available_appointment_page_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/adminC-dashboard/new-available-appointment-page/new-available-appointment-page.component */ "./src/app/components/adminC-dashboard/new-available-appointment-page/new-available-appointment-page.component.ts");
/* harmony import */ var _components_doctor_home_new_vacation_request_new_vacation_request_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/doctor-home/new-vacation-request/new-vacation-request.component */ "./src/app/components/doctor-home/new-vacation-request/new-vacation-request.component.ts");
/* harmony import */ var _components_patient_profile_medical_record_medical_record_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/patient-profile/medical-record/medical-record.component */ "./src/app/components/patient-profile/medical-record/medical-record.component.ts");
/* harmony import */ var _components_doctor_home_examination_examination_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/doctor-home/examination/examination.component */ "./src/app/components/doctor-home/examination/examination.component.ts");
/* harmony import */ var _components_adminC_dashboard_ordination_selection_ordination_selection_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/adminC-dashboard/ordination-selection/ordination-selection.component */ "./src/app/components/adminC-dashboard/ordination-selection/ordination-selection.component.ts");
/* harmony import */ var _components_adminC_dashboard_vacation_requests_vacation_requests_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/adminC-dashboard/vacation-requests/vacation-requests.component */ "./src/app/components/adminC-dashboard/vacation-requests/vacation-requests.component.ts");
/* harmony import */ var _components_patient_home_patient_doctor_listing_patient_doctor_listing_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/patient-home/patient-doctor-listing/patient-doctor-listing.component */ "./src/app/components/patient-home/patient-doctor-listing/patient-doctor-listing.component.ts");
/* harmony import */ var _components_adminC_dashboard_admin_c_home_admin_c_home_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/adminC-dashboard/admin-c-home/admin-c-home.component */ "./src/app/components/adminC-dashboard/admin-c-home/admin-c-home.component.ts");
/* harmony import */ var _components_adminC_dashboard_appointment_requests_appointment_requests_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/adminC-dashboard/appointment-requests/appointment-requests.component */ "./src/app/components/adminC-dashboard/appointment-requests/appointment-requests.component.ts");
/* harmony import */ var _components_patient_home_patient_available_appointments_patient_available_appointments_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/patient-home/patient-available-appointments/patient-available-appointments.component */ "./src/app/components/patient-home/patient-available-appointments/patient-available-appointments.component.ts");
/* harmony import */ var _guards_examination_deactivate_service__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./guards/examination-deactivate.service */ "./src/app/guards/examination-deactivate.service.ts");
/* harmony import */ var _components_patient_home_patient_schedule_appointment_patient_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/patient-home/patient-schedule-appointment/patient-schedule-appointment.component */ "./src/app/components/patient-home/patient-schedule-appointment/patient-schedule-appointment.component.ts");
/* harmony import */ var _components_adminC_dashboard_clinic_business_clinic_business_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/adminC-dashboard/clinic-business/clinic-business.component */ "./src/app/components/adminC-dashboard/clinic-business/clinic-business.component.ts");
/* harmony import */ var _components_adminCC_dashboard_clinic_center_admins_clinic_center_admins_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./components/adminCC-dashboard/clinic-center-admins/clinic-center-admins.component */ "./src/app/components/adminCC-dashboard/clinic-center-admins/clinic-center-admins.component.ts");
/* harmony import */ var _components_adminCC_dashboard_clinic_center_admins_listing_clinic_center_admins_listing_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./components/adminCC-dashboard/clinic-center-admins-listing/clinic-center-admins-listing.component */ "./src/app/components/adminCC-dashboard/clinic-center-admins-listing/clinic-center-admins-listing.component.ts");































































const routes = [
    {
        path: 'adminCCdashboard',
        component: _components_adminCC_dashboard_admin_profile_component__WEBPACK_IMPORTED_MODULE_6__["AdminProfileComponent"],
        children: [
            { path: '', component: _components_adminCC_dashboard_admin_personal_profile_admin_personal_profile_component__WEBPACK_IMPORTED_MODULE_14__["AdminPersonalProfileComponent"] },
            { path: 'profile', component: _components_adminCC_dashboard_admin_personal_profile_admin_personal_profile_component__WEBPACK_IMPORTED_MODULE_14__["AdminPersonalProfileComponent"] },
            { path: 'medications', component: _components_adminCC_dashboard_medication_listing_medication_listing_component__WEBPACK_IMPORTED_MODULE_11__["MedicationListingComponent"] },
            { path: 'medication_info', component: _components_adminCC_dashboard_medication_form_medication_form_component__WEBPACK_IMPORTED_MODULE_12__["MedicationFormComponent"] },
            { path: 'diagnoses', component: _components_adminCC_dashboard_diagnosis_listing_diagnosis_listing_component__WEBPACK_IMPORTED_MODULE_20__["DiagnosisListingComponent"] },
            { path: 'diagnosis_info', component: _components_adminCC_dashboard_diagnosis_form_diagnosis_form_component__WEBPACK_IMPORTED_MODULE_21__["DiagnosisFormComponent"] },
            { path: 'registrationRequests', component: _components_adminCC_dashboard_registration_listing_registration_listing_component__WEBPACK_IMPORTED_MODULE_25__["RegistrationListingComponent"] },
            { path: 'addClinicCenterAdmin', component: _components_adminCC_dashboard_clinic_center_admins_clinic_center_admins_component__WEBPACK_IMPORTED_MODULE_61__["ClinicCenterAdminsComponent"] },
            { path: 'clinicCenterAdmins', component: _components_adminCC_dashboard_clinic_center_admins_listing_clinic_center_admins_listing_component__WEBPACK_IMPORTED_MODULE_62__["ClinicCenterAdminsListingComponent"] }
        ],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
        data: { roles: ['ADMINCC'] }
    },
    {
        path: 'adminCC',
        component: _components_adminCC_dashboard_clinic_listing_clinic_listing_component__WEBPACK_IMPORTED_MODULE_8__["ClinicListingComponent"],
        children: [
            { path: 'clinicAdmins', component: _components_adminCC_dashboard_clinic_administrators_listing_clinic_administrators_listing_component__WEBPACK_IMPORTED_MODULE_9__["ClinicAdministratorsListingComponent"] },
            { path: 'addClinic', component: _components_adminCC_dashboard_clinic_form_clinic_form_component__WEBPACK_IMPORTED_MODULE_10__["ClinicFormComponent"] },
            { path: 'showClinicInfo', component: _components_adminC_dashboard_clinic_profile_info_clinic_profile_info_component__WEBPACK_IMPORTED_MODULE_15__["ClinicProfileInfoComponent"] },
            { path: 'addClinicAdmin', component: _components_adminCC_dashboard_clinic_admin_form_clinic_admin_form_component__WEBPACK_IMPORTED_MODULE_2__["ClinicAdminFormComponent"] }
        ],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
        data: { roles: ['ADMINCC'] }
    },
    {
        path: 'adminCdashboard',
        component: _components_adminC_dashboard_adminC_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["AdminCDashboardComponent"],
        children: [
            { path: '', component: _components_adminC_dashboard_adminC_personal_profile_adminC_personal_profile_component__WEBPACK_IMPORTED_MODULE_18__["AdminCPersonalProfileComponent"] },
            { path: 'profile', component: _components_adminC_dashboard_adminC_personal_profile_adminC_personal_profile_component__WEBPACK_IMPORTED_MODULE_18__["AdminCPersonalProfileComponent"] },
            { path: 'clinic', component: _components_adminC_dashboard_clinic_profile_info_clinic_profile_info_component__WEBPACK_IMPORTED_MODULE_15__["ClinicProfileInfoComponent"] },
            { path: 'doctors', component: _components_adminC_dashboard_doctor_listing_doctor_listing_component__WEBPACK_IMPORTED_MODULE_1__["DoctorListingComponent"] },
            { path: 'doctor', component: _components_adminC_dashboard_doctor_form_doctor_form_component__WEBPACK_IMPORTED_MODULE_13__["DoctorFormComponent"] },
            { path: 'types_of_examination', component: _components_adminC_dashboard_type_of_examination_listing_type_of_examination_listing_component__WEBPACK_IMPORTED_MODULE_26__["TypeOfExaminationListingComponent"] },
            { path: 'type_of_examination_info', component: _components_adminC_dashboard_type_of_examination_form_type_of_examination_form_component__WEBPACK_IMPORTED_MODULE_27__["TypeOfExaminationFormComponent"] },
            { path: 'ordinations', component: _components_adminC_dashboard_ordination_listing_ordination_listing_component__WEBPACK_IMPORTED_MODULE_23__["OrdinationListingComponent"] },
            { path: 'ordinations_TEMP', component: _components_adminC_dashboard_ordination_selection_ordination_selection_component__WEBPACK_IMPORTED_MODULE_52__["OrdinationSelectionComponent"] },
            { path: 'ordination_form', component: _components_adminC_dashboard_ordination_form_ordination_form_component__WEBPACK_IMPORTED_MODULE_28__["OrdinationFormComponent"] },
            { path: 'nurse_listing', component: _components_adminC_dashboard_nurse_listing_nurse_listing_component__WEBPACK_IMPORTED_MODULE_39__["NurseListingComponent"] },
            { path: 'nurse_form', component: _components_adminC_dashboard_nurse_form_nurse_form_component__WEBPACK_IMPORTED_MODULE_40__["NurseFormComponent"] },
        ],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
        data: { roles: ['ADMINC'] }
    },
    {
        path: 'clinic_admin_home',
        component: _components_adminC_dashboard_admin_c_home_admin_c_home_component__WEBPACK_IMPORTED_MODULE_55__["AdminCHomeComponent"],
        children: [
            { path: '', component: _components_adminC_dashboard_appointment_requests_appointment_requests_component__WEBPACK_IMPORTED_MODULE_56__["AppointmentRequestsComponent"] },
            { path: 'appointment_requests', component: _components_adminC_dashboard_appointment_requests_appointment_requests_component__WEBPACK_IMPORTED_MODULE_56__["AppointmentRequestsComponent"] },
            { path: 'available_appointments', component: _components_adminC_dashboard_available_appointment_listing_available_appointment_listing_component__WEBPACK_IMPORTED_MODULE_24__["AvailableAppointmentListingComponent"] },
            { path: 'new_available_appointment', component: _components_adminC_dashboard_new_available_appointment_page_new_available_appointment_page_component__WEBPACK_IMPORTED_MODULE_48__["NewAvailableAppointmentPageComponent"] },
            { path: 'vacation_requests', component: _components_adminC_dashboard_vacation_requests_vacation_requests_component__WEBPACK_IMPORTED_MODULE_53__["VacationRequestsComponent"] },
            { path: 'business', component: _components_adminC_dashboard_clinic_business_clinic_business_component__WEBPACK_IMPORTED_MODULE_60__["ClinicBusinessComponent"] },
            { path: 'ordination_selection', component: _components_adminC_dashboard_ordination_selection_ordination_selection_component__WEBPACK_IMPORTED_MODULE_52__["OrdinationSelectionComponent"] },
        ],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
        data: { roles: ['ADMINC'] }
    },
    {
        path: 'patient',
        component: _components_patient_home_patient_home_component__WEBPACK_IMPORTED_MODULE_29__["PatientHomeComponent"],
        children: [
            { path: '', component: _components_patient_home_patient_clinic_listing_patient_clinic_listing_component__WEBPACK_IMPORTED_MODULE_31__["PatientClinicListingComponent"] },
            { path: 'clinics', component: _components_patient_home_patient_clinic_listing_patient_clinic_listing_component__WEBPACK_IMPORTED_MODULE_31__["PatientClinicListingComponent"] },
            { path: 'doctors/:clinic_id', component: _components_patient_home_patient_doctor_listing_patient_doctor_listing_component__WEBPACK_IMPORTED_MODULE_54__["PatientDoctorListingComponent"] },
            { path: 'pending_appointments', component: _components_patient_home_patient_pending_appointments_listing_patient_pending_appointments_listing_component__WEBPACK_IMPORTED_MODULE_33__["PatientPendingAppointmentsListingComponent"] },
            { path: 'available_appointments/:clinic_id', component: _components_patient_home_patient_available_appointments_patient_available_appointments_component__WEBPACK_IMPORTED_MODULE_57__["PatientAvailableAppointmentsComponent"] },
            { path: 'schedule', component: _components_patient_home_patient_schedule_appointment_patient_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_59__["PatientScheduleAppointmentComponent"] },
        ],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
        data: { roles: ['PATIENT'] }
    },
    {
        path: 'doctor',
        component: _components_doctor_home_doctor_home_doctor_home_component__WEBPACK_IMPORTED_MODULE_34__["DoctorHomeComponent"],
        children: [
            { path: '', component: _components_doctor_home_doctor_calendar_doctor_calendar_component__WEBPACK_IMPORTED_MODULE_35__["DoctorCalendarComponent"] },
            { path: 'calendar', component: _components_doctor_home_doctor_calendar_doctor_calendar_component__WEBPACK_IMPORTED_MODULE_35__["DoctorCalendarComponent"] },
            { path: 'patients', component: _components_doctor_home_patient_listing_patient_listing_component__WEBPACK_IMPORTED_MODULE_43__["PatientListingComponent"] },
            { path: 'new_appointment/:patient_id', component: _components_doctor_home_new_appointment_page_new_appointment_page_component__WEBPACK_IMPORTED_MODULE_47__["NewAppointmentPageComponent"] },
            { path: 'examination', component: _components_doctor_home_examination_examination_component__WEBPACK_IMPORTED_MODULE_51__["ExaminationComponent"], canDeactivate: [_guards_examination_deactivate_service__WEBPACK_IMPORTED_MODULE_58__["ExaminationDeactivateService"]] },
        ],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
        data: { roles: ['DOCTOR'] }
    },
    {
        path: 'doctor/profile',
        component: _components_doctor_home_doctor_my_profile_doctor_my_profile_component__WEBPACK_IMPORTED_MODULE_41__["DoctorMyProfileComponent"],
        children: [
            { path: '', component: _components_doctor_home_doctor_profile_doctor_profile_component__WEBPACK_IMPORTED_MODULE_42__["DoctorProfileComponent"] },
            { path: 'profile', component: _components_doctor_home_doctor_profile_doctor_profile_component__WEBPACK_IMPORTED_MODULE_42__["DoctorProfileComponent"] },
            { path: 'vacation_request', component: _components_doctor_home_new_vacation_request_new_vacation_request_component__WEBPACK_IMPORTED_MODULE_49__["NewVacationRequestComponent"] },
        ],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
        data: { roles: ['DOCTOR'] }
    },
    {
        path: 'patient/profile',
        component: _components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_32__["PatientProfileComponent"],
        children: [
            { path: '', component: _components_patient_profile_patient_personal_profile_patient_personal_profile_component__WEBPACK_IMPORTED_MODULE_30__["PatientPersonalProfileComponent"] },
            { path: 'profile', component: _components_patient_profile_patient_personal_profile_patient_personal_profile_component__WEBPACK_IMPORTED_MODULE_30__["PatientPersonalProfileComponent"] },
            { path: 'medicalRecord', component: _components_patient_profile_medical_record_medical_record_component__WEBPACK_IMPORTED_MODULE_50__["MedicalRecordComponent"] },
        ],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
        data: { roles: ['PATIENT'] }
    },
    {
        path: 'nurse',
        component: _components_nurse_home_nurse_home_component__WEBPACK_IMPORTED_MODULE_36__["NurseHomeComponent"],
        children: [
            { path: '', component: _components_nurse_home_nurse_calendar_nurse_calendar_component__WEBPACK_IMPORTED_MODULE_44__["NurseCalendarComponent"] },
            { path: 'calendar', component: _components_nurse_home_nurse_calendar_nurse_calendar_component__WEBPACK_IMPORTED_MODULE_44__["NurseCalendarComponent"] },
            { path: 'patients', component: _components_nurse_home_nurse_patient_listing_nurse_patient_listing_component__WEBPACK_IMPORTED_MODULE_45__["NursePatientListingComponent"] },
            { path: 'prescriptions', component: _components_nurse_home_prescription_listing_prescription_listing_component__WEBPACK_IMPORTED_MODULE_46__["PrescriptionListingComponent"] },
        ],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
        data: { roles: ['NURSE'] }
    },
    {
        path: 'nurse/profile',
        component: _components_nurse_home_nurse_profile_nurse_profile_component__WEBPACK_IMPORTED_MODULE_37__["NurseProfileComponent"],
        children: [
            { path: '', component: _components_nurse_home_nurse_profile_nurse_personal_profile_nurse_personal_profile_component__WEBPACK_IMPORTED_MODULE_38__["NursePersonalProfileComponent"] },
            { path: 'profile', component: _components_nurse_home_nurse_profile_nurse_personal_profile_nurse_personal_profile_component__WEBPACK_IMPORTED_MODULE_38__["NursePersonalProfileComponent"] },
            { path: 'vacation_request', component: _components_doctor_home_new_vacation_request_new_vacation_request_component__WEBPACK_IMPORTED_MODULE_49__["NewVacationRequestComponent"] },
        ],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]],
        data: { roles: ['NURSE'] }
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    },
    {
        path: 'register',
        component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_22__["RegistrationComponent"]
    },
    {
        path: 'change-password',
        component: _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__["ChangePasswordComponent"],
        canDeactivate: [_guards_change_password_deactivate_service__WEBPACK_IMPORTED_MODULE_17__["ChangePasswordDeactivateService"]]
    }
    //{
    // 	path: '',
    // 	component: HomeComponent,
    // 	canActivate: [AuthGuardService]
    // },
    // {
    // 	path: 'admin',
    // 	component: AdminComponent,
    // 	canActivate: [AuthGuardService],
    // 	data: { roles: ["clinicalCenterAdmin, clinicAdmin, doctor, nurse, patient"] }
    // },
    // {
    // 	path: 'login',
    // 	component: LoginComponent
    // },
    // {
    // 	path: 'register',
    // 	component: RegisterComponent
    // },
    // // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload', useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'client';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-http-loader */ "./node_modules/ng-http-loader/fesm2015/ng-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_adminCC_dashboard_clinic_form_clinic_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/adminCC-dashboard/clinic-form/clinic-form.component */ "./src/app/components/adminCC-dashboard/clinic-form/clinic-form.component.ts");
/* harmony import */ var _components_adminCC_dashboard_admin_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/adminCC-dashboard/admin-profile.component */ "./src/app/components/adminCC-dashboard/admin-profile.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_adminCC_dashboard_clinic_listing_clinic_listing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/adminCC-dashboard/clinic-listing/clinic-listing.component */ "./src/app/components/adminCC-dashboard/clinic-listing/clinic-listing.component.ts");
/* harmony import */ var _components_adminCC_dashboard_clinic_administrators_listing_clinic_administrators_listing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/adminCC-dashboard/clinic-administrators-listing/clinic-administrators-listing.component */ "./src/app/components/adminCC-dashboard/clinic-administrators-listing/clinic-administrators-listing.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_adminCC_dashboard_medication_listing_medication_listing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/adminCC-dashboard/medication-listing/medication-listing.component */ "./src/app/components/adminCC-dashboard/medication-listing/medication-listing.component.ts");
/* harmony import */ var _components_adminCC_dashboard_medication_form_medication_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/adminCC-dashboard/medication-form/medication-form.component */ "./src/app/components/adminCC-dashboard/medication-form/medication-form.component.ts");
/* harmony import */ var _components_adminCC_dashboard_admin_personal_profile_admin_personal_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/adminCC-dashboard/admin-personal-profile/admin-personal-profile.component */ "./src/app/components/adminCC-dashboard/admin-personal-profile/admin-personal-profile.component.ts");
/* harmony import */ var _components_adminC_dashboard_doctor_form_doctor_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/adminC-dashboard/doctor-form/doctor-form.component */ "./src/app/components/adminC-dashboard/doctor-form/doctor-form.component.ts");
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/change-password/change-password.component */ "./src/app/components/change-password/change-password.component.ts");
/* harmony import */ var _components_adminCC_dashboard_clinic_admin_form_clinic_admin_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/adminCC-dashboard/clinic-admin-form/clinic-admin-form.component */ "./src/app/components/adminCC-dashboard/clinic-admin-form/clinic-admin-form.component.ts");
/* harmony import */ var _components_adminC_dashboard_doctor_listing_doctor_listing_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/adminC-dashboard/doctor-listing/doctor-listing.component */ "./src/app/components/adminC-dashboard/doctor-listing/doctor-listing.component.ts");
/* harmony import */ var _components_adminC_dashboard_clinic_profile_info_clinic_profile_info_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/adminC-dashboard/clinic-profile-info/clinic-profile-info.component */ "./src/app/components/adminC-dashboard/clinic-profile-info/clinic-profile-info.component.ts");
/* harmony import */ var _components_adminC_dashboard_adminC_personal_profile_adminC_personal_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/adminC-dashboard/adminC-personal-profile/adminC-personal-profile.component */ "./src/app/components/adminC-dashboard/adminC-personal-profile/adminC-personal-profile.component.ts");
/* harmony import */ var _components_adminC_dashboard_adminC_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/adminC-dashboard/adminC-dashboard.component */ "./src/app/components/adminC-dashboard/adminC-dashboard.component.ts");
/* harmony import */ var _components_adminCC_dashboard_diagnosis_listing_diagnosis_listing_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/adminCC-dashboard/diagnosis-listing/diagnosis-listing.component */ "./src/app/components/adminCC-dashboard/diagnosis-listing/diagnosis-listing.component.ts");
/* harmony import */ var _components_adminCC_dashboard_diagnosis_form_diagnosis_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/adminCC-dashboard/diagnosis-form/diagnosis-form.component */ "./src/app/components/adminCC-dashboard/diagnosis-form/diagnosis-form.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _components_adminC_dashboard_ordination_listing_ordination_listing_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/adminC-dashboard/ordination-listing/ordination-listing.component */ "./src/app/components/adminC-dashboard/ordination-listing/ordination-listing.component.ts");
/* harmony import */ var _components_adminC_dashboard_available_appointment_listing_available_appointment_listing_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/adminC-dashboard/available-appointment-listing/available-appointment-listing.component */ "./src/app/components/adminC-dashboard/available-appointment-listing/available-appointment-listing.component.ts");
/* harmony import */ var _components_adminCC_dashboard_registration_listing_registration_listing_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/adminCC-dashboard/registration-listing/registration-listing.component */ "./src/app/components/adminCC-dashboard/registration-listing/registration-listing.component.ts");
/* harmony import */ var _components_helperComponents_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/helperComponents/dialog/dialog.component */ "./src/app/components/helperComponents/dialog/dialog.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var angular8_yandex_maps__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! angular8-yandex-maps */ "./node_modules/angular8-yandex-maps/fesm2015/angular8-yandex-maps.js");
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng-starrating */ "./node_modules/ng-starrating/fesm2015/ng-starrating.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/fesm2015/swimlane-ngx-charts.js");
/* harmony import */ var _components_adminC_dashboard_type_of_examination_listing_type_of_examination_listing_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/adminC-dashboard/type-of-examination-listing/type-of-examination-listing.component */ "./src/app/components/adminC-dashboard/type-of-examination-listing/type-of-examination-listing.component.ts");
/* harmony import */ var _components_adminC_dashboard_type_of_examination_form_type_of_examination_form_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/adminC-dashboard/type-of-examination-form/type-of-examination-form.component */ "./src/app/components/adminC-dashboard/type-of-examination-form/type-of-examination-form.component.ts");
/* harmony import */ var _components_adminC_dashboard_ordination_form_ordination_form_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/adminC-dashboard/ordination-form/ordination-form.component */ "./src/app/components/adminC-dashboard/ordination-form/ordination-form.component.ts");
/* harmony import */ var _components_patient_home_patient_home_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/patient-home/patient-home.component */ "./src/app/components/patient-home/patient-home.component.ts");
/* harmony import */ var _components_patient_profile_patient_personal_profile_patient_personal_profile_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/patient-profile/patient-personal-profile/patient-personal-profile.component */ "./src/app/components/patient-profile/patient-personal-profile/patient-personal-profile.component.ts");
/* harmony import */ var _components_patient_home_patient_clinic_listing_patient_clinic_listing_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/patient-home/patient-clinic-listing/patient-clinic-listing.component */ "./src/app/components/patient-home/patient-clinic-listing/patient-clinic-listing.component.ts");
/* harmony import */ var _components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/patient-profile/patient-profile.component */ "./src/app/components/patient-profile/patient-profile.component.ts");
/* harmony import */ var _components_patient_home_patient_pending_appointments_listing_patient_pending_appointments_listing_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/patient-home/patient-pending-appointments-listing/patient-pending-appointments-listing.component */ "./src/app/components/patient-home/patient-pending-appointments-listing/patient-pending-appointments-listing.component.ts");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var _components_doctor_home_doctor_home_doctor_home_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/doctor-home/doctor-home/doctor-home.component */ "./src/app/components/doctor-home/doctor-home/doctor-home.component.ts");
/* harmony import */ var _components_doctor_home_doctor_calendar_doctor_calendar_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/doctor-home/doctor-calendar/doctor-calendar.component */ "./src/app/components/doctor-home/doctor-calendar/doctor-calendar.component.ts");
/* harmony import */ var _components_adminC_dashboard_nurse_form_nurse_form_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/adminC-dashboard/nurse-form/nurse-form.component */ "./src/app/components/adminC-dashboard/nurse-form/nurse-form.component.ts");
/* harmony import */ var _components_nurse_home_nurse_home_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/nurse-home/nurse-home.component */ "./src/app/components/nurse-home/nurse-home.component.ts");
/* harmony import */ var _components_adminC_dashboard_nurse_listing_nurse_listing_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/adminC-dashboard/nurse-listing/nurse-listing.component */ "./src/app/components/adminC-dashboard/nurse-listing/nurse-listing.component.ts");
/* harmony import */ var _components_nurse_home_nurse_profile_nurse_profile_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/nurse-home/nurse-profile/nurse-profile.component */ "./src/app/components/nurse-home/nurse-profile/nurse-profile.component.ts");
/* harmony import */ var _components_nurse_home_nurse_profile_nurse_personal_profile_nurse_personal_profile_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/nurse-home/nurse-profile/nurse-personal-profile/nurse-personal-profile.component */ "./src/app/components/nurse-home/nurse-profile/nurse-personal-profile/nurse-personal-profile.component.ts");
/* harmony import */ var _components_doctor_home_patient_listing_patient_listing_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/doctor-home/patient-listing/patient-listing.component */ "./src/app/components/doctor-home/patient-listing/patient-listing.component.ts");
/* harmony import */ var _components_doctor_home_doctor_profile_doctor_profile_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/doctor-home/doctor-profile/doctor-profile.component */ "./src/app/components/doctor-home/doctor-profile/doctor-profile.component.ts");
/* harmony import */ var _components_doctor_home_doctor_my_profile_doctor_my_profile_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/doctor-home/doctor-my-profile/doctor-my-profile.component */ "./src/app/components/doctor-home/doctor-my-profile/doctor-my-profile.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _components_doctor_home_new_appointment_page_new_appointment_page_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./components/doctor-home/new-appointment-page/new-appointment-page.component */ "./src/app/components/doctor-home/new-appointment-page/new-appointment-page.component.ts");
/* harmony import */ var _components_nurse_home_nurse_calendar_nurse_calendar_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./components/nurse-home/nurse-calendar/nurse-calendar.component */ "./src/app/components/nurse-home/nurse-calendar/nurse-calendar.component.ts");
/* harmony import */ var _components_nurse_home_nurse_patient_listing_nurse_patient_listing_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./components/nurse-home/nurse-patient-listing/nurse-patient-listing.component */ "./src/app/components/nurse-home/nurse-patient-listing/nurse-patient-listing.component.ts");
/* harmony import */ var _components_nurse_home_prescription_listing_prescription_listing_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./components/nurse-home/prescription-listing/prescription-listing.component */ "./src/app/components/nurse-home/prescription-listing/prescription-listing.component.ts");
/* harmony import */ var _components_adminC_dashboard_new_available_appointment_page_new_available_appointment_page_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./components/adminC-dashboard/new-available-appointment-page/new-available-appointment-page.component */ "./src/app/components/adminC-dashboard/new-available-appointment-page/new-available-appointment-page.component.ts");
/* harmony import */ var _components_doctor_home_new_vacation_request_new_vacation_request_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./components/doctor-home/new-vacation-request/new-vacation-request.component */ "./src/app/components/doctor-home/new-vacation-request/new-vacation-request.component.ts");
/* harmony import */ var _components_patient_profile_medical_record_medical_record_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./components/patient-profile/medical-record/medical-record.component */ "./src/app/components/patient-profile/medical-record/medical-record.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _components_doctor_home_examination_examination_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./components/doctor-home/examination/examination.component */ "./src/app/components/doctor-home/examination/examination.component.ts");
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/dist/index.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _components_adminC_dashboard_ordination_selection_ordination_selection_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./components/adminC-dashboard/ordination-selection/ordination-selection.component */ "./src/app/components/adminC-dashboard/ordination-selection/ordination-selection.component.ts");
/* harmony import */ var _components_adminC_dashboard_vacation_requests_vacation_requests_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./components/adminC-dashboard/vacation-requests/vacation-requests.component */ "./src/app/components/adminC-dashboard/vacation-requests/vacation-requests.component.ts");
/* harmony import */ var _components_patient_home_patient_doctor_listing_patient_doctor_listing_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./components/patient-home/patient-doctor-listing/patient-doctor-listing.component */ "./src/app/components/patient-home/patient-doctor-listing/patient-doctor-listing.component.ts");
/* harmony import */ var _services_token_interceptor__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./services/token.interceptor */ "./src/app/services/token.interceptor.ts");
/* harmony import */ var _components_adminC_dashboard_admin_c_home_admin_c_home_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./components/adminC-dashboard/admin-c-home/admin-c-home.component */ "./src/app/components/adminC-dashboard/admin-c-home/admin-c-home.component.ts");
/* harmony import */ var _components_adminC_dashboard_appointment_requests_appointment_requests_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./components/adminC-dashboard/appointment-requests/appointment-requests.component */ "./src/app/components/adminC-dashboard/appointment-requests/appointment-requests.component.ts");
/* harmony import */ var _components_patient_home_patient_available_appointments_patient_available_appointments_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./components/patient-home/patient-available-appointments/patient-available-appointments.component */ "./src/app/components/patient-home/patient-available-appointments/patient-available-appointments.component.ts");
/* harmony import */ var _components_patient_home_patient_schedule_appointment_patient_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./components/patient-home/patient-schedule-appointment/patient-schedule-appointment.component */ "./src/app/components/patient-home/patient-schedule-appointment/patient-schedule-appointment.component.ts");
/* harmony import */ var _components_adminC_dashboard_clinic_business_clinic_business_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./components/adminC-dashboard/clinic-business/clinic-business.component */ "./src/app/components/adminC-dashboard/clinic-business/clinic-business.component.ts");
/* harmony import */ var _components_adminCC_dashboard_clinic_center_admins_clinic_center_admins_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./components/adminCC-dashboard/clinic-center-admins/clinic-center-admins.component */ "./src/app/components/adminCC-dashboard/clinic-center-admins/clinic-center-admins.component.ts");
/* harmony import */ var _components_adminCC_dashboard_clinic_center_admins_listing_clinic_center_admins_listing_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./components/adminCC-dashboard/clinic-center-admins-listing/clinic-center-admins-listing.component */ "./src/app/components/adminCC-dashboard/clinic-center-admins-listing/clinic-center-admins-listing.component.ts");





















































































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _components_adminCC_dashboard_clinic_form_clinic_form_component__WEBPACK_IMPORTED_MODULE_10__["ClinicFormComponent"],
            _components_adminCC_dashboard_admin_profile_component__WEBPACK_IMPORTED_MODULE_11__["AdminProfileComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
            _components_adminCC_dashboard_clinic_listing_clinic_listing_component__WEBPACK_IMPORTED_MODULE_13__["ClinicListingComponent"],
            _components_adminCC_dashboard_clinic_administrators_listing_clinic_administrators_listing_component__WEBPACK_IMPORTED_MODULE_14__["ClinicAdministratorsListingComponent"],
            _components_adminCC_dashboard_medication_listing_medication_listing_component__WEBPACK_IMPORTED_MODULE_16__["MedicationListingComponent"],
            _components_adminCC_dashboard_medication_form_medication_form_component__WEBPACK_IMPORTED_MODULE_17__["MedicationFormComponent"],
            _components_adminCC_dashboard_admin_personal_profile_admin_personal_profile_component__WEBPACK_IMPORTED_MODULE_18__["AdminPersonalProfileComponent"],
            _components_adminC_dashboard_doctor_form_doctor_form_component__WEBPACK_IMPORTED_MODULE_19__["DoctorFormComponent"],
            _components_adminCC_dashboard_clinic_admin_form_clinic_admin_form_component__WEBPACK_IMPORTED_MODULE_21__["ClinicAdminFormComponent"],
            _components_adminC_dashboard_clinic_profile_info_clinic_profile_info_component__WEBPACK_IMPORTED_MODULE_23__["ClinicProfileInfoComponent"],
            _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_20__["ChangePasswordComponent"],
            _components_adminC_dashboard_doctor_listing_doctor_listing_component__WEBPACK_IMPORTED_MODULE_22__["DoctorListingComponent"],
            _components_adminC_dashboard_adminC_personal_profile_adminC_personal_profile_component__WEBPACK_IMPORTED_MODULE_24__["AdminCPersonalProfileComponent"],
            _components_adminC_dashboard_adminC_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["AdminCDashboardComponent"],
            _components_adminCC_dashboard_diagnosis_listing_diagnosis_listing_component__WEBPACK_IMPORTED_MODULE_26__["DiagnosisListingComponent"],
            _components_adminCC_dashboard_diagnosis_form_diagnosis_form_component__WEBPACK_IMPORTED_MODULE_27__["DiagnosisFormComponent"],
            _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_28__["RegistrationComponent"],
            _components_adminCC_dashboard_diagnosis_form_diagnosis_form_component__WEBPACK_IMPORTED_MODULE_27__["DiagnosisFormComponent"],
            _components_adminC_dashboard_available_appointment_listing_available_appointment_listing_component__WEBPACK_IMPORTED_MODULE_30__["AvailableAppointmentListingComponent"],
            _components_adminCC_dashboard_registration_listing_registration_listing_component__WEBPACK_IMPORTED_MODULE_31__["RegistrationListingComponent"],
            _components_helperComponents_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_32__["DialogComponent"],
            _components_adminC_dashboard_adminC_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["AdminCDashboardComponent"],
            _components_adminC_dashboard_type_of_examination_listing_type_of_examination_listing_component__WEBPACK_IMPORTED_MODULE_41__["TypeOfExaminationListingComponent"],
            _components_adminC_dashboard_type_of_examination_form_type_of_examination_form_component__WEBPACK_IMPORTED_MODULE_42__["TypeOfExaminationFormComponent"],
            _components_adminC_dashboard_ordination_listing_ordination_listing_component__WEBPACK_IMPORTED_MODULE_29__["OrdinationListingComponent"],
            _components_adminC_dashboard_ordination_form_ordination_form_component__WEBPACK_IMPORTED_MODULE_43__["OrdinationFormComponent"],
            _components_patient_home_patient_home_component__WEBPACK_IMPORTED_MODULE_44__["PatientHomeComponent"],
            _components_patient_profile_patient_personal_profile_patient_personal_profile_component__WEBPACK_IMPORTED_MODULE_45__["PatientPersonalProfileComponent"],
            _components_patient_home_patient_clinic_listing_patient_clinic_listing_component__WEBPACK_IMPORTED_MODULE_46__["PatientClinicListingComponent"],
            _components_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_47__["PatientProfileComponent"],
            _components_patient_home_patient_pending_appointments_listing_patient_pending_appointments_listing_component__WEBPACK_IMPORTED_MODULE_48__["PatientPendingAppointmentsListingComponent"],
            _components_doctor_home_doctor_home_doctor_home_component__WEBPACK_IMPORTED_MODULE_51__["DoctorHomeComponent"],
            _components_doctor_home_doctor_calendar_doctor_calendar_component__WEBPACK_IMPORTED_MODULE_52__["DoctorCalendarComponent"],
            _components_patient_home_patient_pending_appointments_listing_patient_pending_appointments_listing_component__WEBPACK_IMPORTED_MODULE_48__["PatientPendingAppointmentsListingComponent"],
            _components_adminC_dashboard_nurse_form_nurse_form_component__WEBPACK_IMPORTED_MODULE_53__["NurseFormComponent"],
            _components_nurse_home_nurse_home_component__WEBPACK_IMPORTED_MODULE_54__["NurseHomeComponent"],
            _components_adminC_dashboard_nurse_listing_nurse_listing_component__WEBPACK_IMPORTED_MODULE_55__["NurseListingComponent"],
            _components_adminC_dashboard_nurse_form_nurse_form_component__WEBPACK_IMPORTED_MODULE_53__["NurseFormComponent"],
            _components_nurse_home_nurse_profile_nurse_profile_component__WEBPACK_IMPORTED_MODULE_56__["NurseProfileComponent"],
            _components_nurse_home_nurse_profile_nurse_personal_profile_nurse_personal_profile_component__WEBPACK_IMPORTED_MODULE_57__["NursePersonalProfileComponent"],
            _components_doctor_home_patient_listing_patient_listing_component__WEBPACK_IMPORTED_MODULE_58__["PatientListingComponent"],
            _components_doctor_home_doctor_profile_doctor_profile_component__WEBPACK_IMPORTED_MODULE_59__["DoctorProfileComponent"],
            _components_doctor_home_doctor_my_profile_doctor_my_profile_component__WEBPACK_IMPORTED_MODULE_60__["DoctorMyProfileComponent"],
            _components_nurse_home_nurse_profile_nurse_personal_profile_nurse_personal_profile_component__WEBPACK_IMPORTED_MODULE_57__["NursePersonalProfileComponent"],
            _components_doctor_home_new_appointment_page_new_appointment_page_component__WEBPACK_IMPORTED_MODULE_62__["NewAppointmentPageComponent"],
            _components_nurse_home_nurse_calendar_nurse_calendar_component__WEBPACK_IMPORTED_MODULE_63__["NurseCalendarComponent"],
            _components_nurse_home_nurse_patient_listing_nurse_patient_listing_component__WEBPACK_IMPORTED_MODULE_64__["NursePatientListingComponent"],
            _components_nurse_home_prescription_listing_prescription_listing_component__WEBPACK_IMPORTED_MODULE_65__["PrescriptionListingComponent"],
            _components_adminC_dashboard_new_available_appointment_page_new_available_appointment_page_component__WEBPACK_IMPORTED_MODULE_66__["NewAvailableAppointmentPageComponent"],
            _components_doctor_home_new_vacation_request_new_vacation_request_component__WEBPACK_IMPORTED_MODULE_67__["NewVacationRequestComponent"],
            _components_patient_profile_medical_record_medical_record_component__WEBPACK_IMPORTED_MODULE_68__["MedicalRecordComponent"],
            _components_adminC_dashboard_vacation_requests_vacation_requests_component__WEBPACK_IMPORTED_MODULE_74__["VacationRequestsComponent"],
            _components_patient_home_patient_doctor_listing_patient_doctor_listing_component__WEBPACK_IMPORTED_MODULE_75__["PatientDoctorListingComponent"],
            _components_doctor_home_examination_examination_component__WEBPACK_IMPORTED_MODULE_70__["ExaminationComponent"],
            _components_adminC_dashboard_ordination_selection_ordination_selection_component__WEBPACK_IMPORTED_MODULE_73__["OrdinationSelectionComponent"],
            _components_adminC_dashboard_admin_c_home_admin_c_home_component__WEBPACK_IMPORTED_MODULE_77__["AdminCHomeComponent"],
            _components_adminC_dashboard_appointment_requests_appointment_requests_component__WEBPACK_IMPORTED_MODULE_78__["AppointmentRequestsComponent"],
            _components_patient_home_patient_available_appointments_patient_available_appointments_component__WEBPACK_IMPORTED_MODULE_79__["PatientAvailableAppointmentsComponent"],
            _components_patient_home_patient_schedule_appointment_patient_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_80__["PatientScheduleAppointmentComponent"],
            _components_adminC_dashboard_clinic_business_clinic_business_component__WEBPACK_IMPORTED_MODULE_81__["ClinicBusinessComponent"],
            _components_adminCC_dashboard_clinic_center_admins_clinic_center_admins_component__WEBPACK_IMPORTED_MODULE_82__["ClinicCenterAdminsComponent"],
            _components_adminCC_dashboard_clinic_center_admins_listing_clinic_center_admins_listing_component__WEBPACK_IMPORTED_MODULE_83__["ClinicCenterAdminsListingComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatTableModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__["BrowserAnimationsModule"],
            ng_http_loader__WEBPACK_IMPORTED_MODULE_6__["NgHttpLoaderModule"].forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_33__["NgbModule"],
            angular_calendar__WEBPACK_IMPORTED_MODULE_49__["CalendarModule"].forRoot({ provide: angular_calendar__WEBPACK_IMPORTED_MODULE_49__["DateAdapter"], useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_50__["adapterFactory"] }),
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_36__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_36__["OwlNativeDateTimeModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_37__["AngularFontAwesomeModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_69__["MatExpansionModule"],
            angular8_yandex_maps__WEBPACK_IMPORTED_MODULE_38__["AngularYandexMapsModule"].forRoot("396fefe7-95c2-486a-ae3e-c8f062813962"),
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_69__["MatExpansionModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_71__["SelectDropDownModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_72__["MatButtonModule"],
            ng_starrating__WEBPACK_IMPORTED_MODULE_39__["RatingModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_40__["NgxChartsModule"],
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
        exports: [
            _components_patient_profile_medical_record_medical_record_component__WEBPACK_IMPORTED_MODULE_68__["MedicalRecordComponent"]
        ],
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"], _services_user_service__WEBPACK_IMPORTED_MODULE_61__["UserService"],
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                useFactory: (userService) => function () { userService.refreshToken(); },
                deps: [_services_user_service__WEBPACK_IMPORTED_MODULE_61__["UserService"]],
                multi: true
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                useClass: _services_token_interceptor__WEBPACK_IMPORTED_MODULE_76__["TokenInterceptor"],
                multi: true
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        entryComponents: [_components_helperComponents_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_32__["DialogComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/adminC-dashboard/admin-c-home/admin-c-home.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/admin-c-home/admin-c-home.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    margin-bottom: 1em;\r\n}\r\n\r\nli+li { border-left: 1px solid #0000FF }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbkMtZGFzaGJvYXJkL2FkbWluLWMtaG9tZS9hZG1pbi1jLWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSxRQUFRLCtCQUErQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DLWRhc2hib2FyZC9hZG1pbi1jLWhvbWUvYWRtaW4tYy1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxubGkrbGkgeyBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDAwRkYgfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/adminC-dashboard/admin-c-home/admin-c-home.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/admin-c-home/admin-c-home.component.ts ***!
  \************************************************************************************/
/*! exports provided: AdminCHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCHomeComponent", function() { return AdminCHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminCHomeComponent = class AdminCHomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminCHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-c-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-c-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/admin-c-home/admin-c-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-c-home.component.css */ "./src/app/components/adminC-dashboard/admin-c-home/admin-c-home.component.css")).default]
    })
], AdminCHomeComponent);



/***/ }),

/***/ "./src/app/components/adminC-dashboard/adminC-dashboard.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/adminC-dashboard.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("li+li { border-left: 1px solid #0000FF }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbkMtZGFzaGJvYXJkL2FkbWluQy1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFRLCtCQUErQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DLWRhc2hib2FyZC9hZG1pbkMtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaStsaSB7IGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDBGRiB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/adminC-dashboard/adminC-dashboard.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/adminC-dashboard.component.ts ***!
  \***************************************************************************/
/*! exports provided: AdminCDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCDashboardComponent", function() { return AdminCDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var src_app_services_clinic_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/clinic-admin.service */ "./src/app/services/clinic-admin.service.ts");






let AdminCDashboardComponent = class AdminCDashboardComponent {
    constructor(router, activatedRoute, cookieService, clinicAdminService, userService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cookieService = cookieService;
        this.clinicAdminService = clinicAdminService;
        this.userService = userService;
    }
    ngOnInit() {
    }
    showClinicInfo() {
        let clinicID = this.userService.getUser().clinic_id;
        this.clinicAdminService.getAdminC().subscribe();
        console.log(clinicID);
        this.clinicAdminService.getClinic(clinicID).subscribe((data) => {
            this.router.navigate(['clinic'], { relativeTo: this.activatedRoute, state: { data: data } });
        }, (error) => {
            alert(error);
        });
    }
};
AdminCDashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: src_app_services_clinic_admin_service__WEBPACK_IMPORTED_MODULE_5__["ClinicAdminService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
];
AdminCDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-adminC-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adminC-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/adminC-dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adminC-dashboard.component.css */ "./src/app/components/adminC-dashboard/adminC-dashboard.component.css")).default]
    })
], AdminCDashboardComponent);



/***/ }),

/***/ "./src/app/components/adminC-dashboard/adminC-personal-profile/adminC-personal-profile.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/adminC-personal-profile/adminC-personal-profile.component.css ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DLWRhc2hib2FyZC9hZG1pbkMtcGVyc29uYWwtcHJvZmlsZS9hZG1pbkMtcGVyc29uYWwtcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/adminC-dashboard/adminC-personal-profile/adminC-personal-profile.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/adminC-personal-profile/adminC-personal-profile.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AdminCPersonalProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCPersonalProfileComponent", function() { return AdminCPersonalProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var src_app_services_clinic_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/clinic-admin.service */ "./src/app/services/clinic-admin.service.ts");







let AdminCPersonalProfileComponent = class AdminCPersonalProfileComponent {
    constructor(clinicAdminService, formBuilder, router, activatedRoute, cookieService, userService) {
        this.clinicAdminService = clinicAdminService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cookieService = cookieService;
        this.userService = userService;
    }
    ngOnInit() {
        this.getAdminInfo();
    }
    getAdminInfo() {
        this.clinicAdminService.getAdminC().subscribe((data) => {
            this.admin = data;
            this.form = this.formBuilder.group({
                name: [this.admin.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
                surname: [this.admin.surname, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                email: [this.admin.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
                address: [this.admin.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                city: [this.admin.city, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                state: [this.admin.state, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                phoneNumber: [this.admin.phoneNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                upin: [this.admin.upin, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(13)]]
            });
            this.change = true;
        }, (error) => {
            alert(error);
        });
    }
    enableChangeInfo() {
        this.change = !this.change;
    }
    cancelChanges() {
        this.change = !this.change;
        this.getAdminInfo();
    }
    showChangePasswordForm() {
        this.router.navigate(['../change-password']);
    }
    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        var adminC = {
            id: this.admin.id,
            email: this.form.controls.email.value,
            name: this.form.controls.name.value,
            surname: this.form.controls.surname.value,
            address: this.form.controls.address.value,
            city: this.form.controls.city.value,
            state: this.form.controls.state.value,
            phoneNumber: this.form.controls.phoneNumber.value,
            upin: this.form.controls.upin.value,
            clinic_id: this.admin.clinic_id
        };
        this.clinicAdminService.changeAdminC(adminC).subscribe((data) => { this.change = !this.change; return; }, (error) => { alert(error); });
    }
};
AdminCPersonalProfileComponent.ctorParameters = () => [
    { type: src_app_services_clinic_admin_service__WEBPACK_IMPORTED_MODULE_6__["ClinicAdminService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
];
AdminCPersonalProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-adminC-personal-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adminC-personal-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/adminC-personal-profile/adminC-personal-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adminC-personal-profile.component.css */ "./src/app/components/adminC-dashboard/adminC-personal-profile/adminC-personal-profile.component.css")).default]
    })
], AdminCPersonalProfileComponent);



/***/ }),

/***/ "./src/app/components/adminC-dashboard/appointment-requests/appointment-requests.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/appointment-requests/appointment-requests.component.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DLWRhc2hib2FyZC9hcHBvaW50bWVudC1yZXF1ZXN0cy9hcHBvaW50bWVudC1yZXF1ZXN0cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/adminC-dashboard/appointment-requests/appointment-requests.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/appointment-requests/appointment-requests.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: AppointmentRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentRequestsComponent", function() { return AppointmentRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/appointment.service */ "./src/app/services/appointment.service.ts");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");






let AppointmentRequestsComponent = class AppointmentRequestsComponent {
    constructor(router, activatedRoute, userService, appointmentService, confirmationDialogService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.appointmentService = appointmentService;
        this.confirmationDialogService = confirmationDialogService;
        this.appointmentHeaders = ['Doctor', 'Patient', 'Type', 'Date and time', 'Duration (minutes)'];
        this.navigationSubscription = this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.clinicID = this.userService.getUser().clinic_id;
                this.getAppointmentRequests();
            }
        });
    }
    ngOnInit() {
        // this.activatedRoute.params.subscribe((params) => {
        // 	this.clinicID = params.id;
        // 	this.clinicName = params.name;
        // });
    }
    getAppointmentRequests() {
        this.clinicID = this.userService.getUser().clinic_id;
        this.appointmentService.getClinicAppointmentRequests(this.clinicID).subscribe((data) => {
            this.appointments = data;
            for (const [i, value] of this.appointments.entries()) {
                this.appointments[i].formatedDateAndTime = this.timeConverter(this.appointments[i].startingDateAndTime);
            }
            this.appointments.sort((a, b) => (a.id > b.id) ? 1 : -1);
        }, (error) => {
            alert(error);
        });
    }
    selectOrdination(appointment) {
        if (this.router.url.indexOf('appointment_requests') === -1) {
            this.router.navigate(['ordination_selection'], { relativeTo: this.activatedRoute, state: { data: appointment } });
        }
        else {
            this.router.navigate(['../ordination_selection'], { relativeTo: this.activatedRoute, state: { data: appointment } });
        }
    }
    rejectRequest(appointment) {
        this.confirmationDialogService.confirm('Please confirm', 'Are you sure you want to reject this appointment request?', true)
            .then((confirmed) => {
            if (confirmed.submited) {
                this.appointmentService.rejectAppointmentRequest(appointment.id, confirmed.explanation).subscribe((data) => {
                    this.getAppointmentRequests();
                }, (error) => {
                    alert(error);
                });
            }
        });
    }
    timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
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
};
AppointmentRequestsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_4__["AppointmentService"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] }
];
AppointmentRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appointment-requests',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./appointment-requests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/appointment-requests/appointment-requests.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./appointment-requests.component.css */ "./src/app/components/adminC-dashboard/appointment-requests/appointment-requests.component.css")).default]
    })
], AppointmentRequestsComponent);



/***/ }),

/***/ "./src/app/components/adminC-dashboard/available-appointment-listing/available-appointment-listing.component.css":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/available-appointment-listing/available-appointment-listing.component.css ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DLWRhc2hib2FyZC9hdmFpbGFibGUtYXBwb2ludG1lbnQtbGlzdGluZy9hdmFpbGFibGUtYXBwb2ludG1lbnQtbGlzdGluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/adminC-dashboard/available-appointment-listing/available-appointment-listing.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/available-appointment-listing/available-appointment-listing.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: AvailableAppointmentListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableAppointmentListingComponent", function() { return AvailableAppointmentListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/appointment.service */ "./src/app/services/appointment.service.ts");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");






let AvailableAppointmentListingComponent = class AvailableAppointmentListingComponent {
    constructor(router, activatedRoute, userService, appointmentService, confirmationDialogService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.appointmentService = appointmentService;
        this.confirmationDialogService = confirmationDialogService;
        this.appointmentHeaders = ['Doctor', 'Ordination name and number', 'Type', 'Date and time', 'Duration (minutes)', 'Price', 'Discount'];
        this.navigationSubscription = this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.clinicID = this.userService.getUser().clinic_id;
                this.getAppointments();
            }
        });
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.clinicID = params.id;
            this.clinicName = params.name;
        });
    }
    getAppointments() {
        this.clinicID = this.userService.getUser().clinic_id;
        this.appointmentService.getClinicAvailableAppointments(this.clinicID).subscribe((data) => {
            this.appointments = data;
            for (const [i, value] of this.appointments.entries()) {
                this.appointments[i].formatedDateAndTime = this.timeConverter(this.appointments[i].startingDateAndTime);
            }
            this.appointments.sort((a, b) => (a.id > b.id) ? 1 : -1);
        }, (error) => {
            alert(error);
        });
    }
    addNewAppointment() {
        this.router.navigate(['../new_available_appointment'], { relativeTo: this.activatedRoute });
    }
    deleteAppointment(appointment) {
        this.confirmationDialogService.confirm('Please confirm', 'Are you sure you want to delete available appointment: ' + appointment.doctors[0].name + ' ' + appointment.doctors[0].surname + ' ' + appointment.ordination.name + '?', false)
            .then((confirmed) => {
            if (confirmed.submited) {
                this.appointmentService.deleteAvailableAppointment(appointment.id).subscribe((data) => {
                    this.getAppointments();
                }, (error) => {
                    alert(error);
                });
            }
        });
    }
    timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
        var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
        var time = date + '. ' + month + ' ' + year + '. ' + hour + ':' + min + ':' + sec;
        return time;
    }
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
};
AvailableAppointmentListingComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_4__["AppointmentService"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] }
];
AvailableAppointmentListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-available-appointment-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./available-appointment-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/available-appointment-listing/available-appointment-listing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./available-appointment-listing.component.css */ "./src/app/components/adminC-dashboard/available-appointment-listing/available-appointment-listing.component.css")).default]
    })
], AvailableAppointmentListingComponent);



/***/ }),

/***/ "./src/app/components/adminC-dashboard/clinic-business/clinic-business.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/clinic-business/clinic-business.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DLWRhc2hib2FyZC9jbGluaWMtYnVzaW5lc3MvY2xpbmljLWJ1c2luZXNzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/adminC-dashboard/clinic-business/clinic-business.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/clinic-business/clinic-business.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ClinicBusinessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicBusinessComponent", function() { return ClinicBusinessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/clinic.service */ "./src/app/services/clinic.service.ts");





let ClinicBusinessComponent = class ClinicBusinessComponent {
    constructor(formBuilder, router, clinicService, activatedRoute) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.clinicService = clinicService;
        this.activatedRoute = activatedRoute;
        this.incomeFormSubmitted = false;
        this.incomeDataArrived = false;
        this.earnings = 0;
        this.chartShowSubmitted = false;
        this.view = "";
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Time';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Appointments';
        this.colorScheme = {
            domain: ['#428bca']
        };
    }
    ngOnInit() {
        this.incomeForm = this.formBuilder.group({
            periodStart: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            periodEnd: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.chartForm = this.formBuilder.group({
            mode: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            day: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
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
        this.clinicService.getClinicEarnings(periodStart, periodEnd).subscribe((data) => { this.earnings = data; this.incomeDataArrived = true; }, (error) => { alert(error); });
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
        }
        else if (mode === 'WEEK') {
            day = this.getMonday(day);
            day = day.getTime() / 1000;
            periodStart = day;
            periodEnd = day + 7 * 24 * 60 * 60;
        }
        else if (mode === 'MONTH') {
            day = new Date(day);
            let firstDay = new Date(day.getFullYear(), day.getMonth(), 1);
            let lastDay = new Date(day.getFullYear(), day.getMonth() + 1, 0);
            periodStart = firstDay.getTime() / 1000;
            periodEnd = lastDay.getTime() / 1000;
        }
        else {
            return;
        }
        this.clinicService.getChartData(mode, periodStart, periodEnd).subscribe((data) => {
            this.data = data;
            if (mode === 'MONTH' || mode === 'WEEK') {
                for (let i = 0; i < this.data.length; i++) {
                    this.data[i].name = this.convertToDate(this.data[i].name);
                }
            }
            else if (mode === 'DAY') {
                for (let i = 0; i < this.data.length - 1; i++) {
                    this.data[i].name = this.convertToTime(this.data[i].name) + ' - ' + this.convertToTime(this.data[i + 1].name);
                }
                this.data[this.data.length - 1].name = this.convertToTime(this.data[this.data.length - 1].name) + ' - 00:00';
            }
        }, (error) => { alert(error); });
    }
    getMonday(d) {
        d = new Date(d);
        var day = d.getDay(), diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        return new Date(d.setDate(diff));
    }
    timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var time = date + '. ' + month + ' ' + year + '.';
        return time;
    }
    convertToDate(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
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
};
ClinicBusinessComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_4__["ClinicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ClinicBusinessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clinic-business',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clinic-business.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/clinic-business/clinic-business.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clinic-business.component.css */ "./src/app/components/adminC-dashboard/clinic-business/clinic-business.component.css")).default]
    })
], ClinicBusinessComponent);



/***/ }),

/***/ "./src/app/components/adminC-dashboard/clinic-profile-info/clinic-profile-info.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/clinic-profile-info/clinic-profile-info.component.css ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DLWRhc2hib2FyZC9jbGluaWMtcHJvZmlsZS1pbmZvL2NsaW5pYy1wcm9maWxlLWluZm8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/adminC-dashboard/clinic-profile-info/clinic-profile-info.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/clinic-profile-info/clinic-profile-info.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ClinicProfileInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicProfileInfoComponent", function() { return ClinicProfileInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/clinic.service */ "./src/app/services/clinic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let ClinicProfileInfoComponent = class ClinicProfileInfoComponent {
    constructor(clinicService, router, activatedRoute, modal, formBuilder) {
        this.clinicService = clinicService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.modal = modal;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.clinic = history.state.data;
        this.clinicBackup = history.state.data;
        this.createFormGroup();
    }
    createFormGroup() {
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
            name: [name, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            address: [address, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            city: [city, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            state: [state, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            description: [description]
        });
        this.formDisabled = true;
    }
    showMapModal(clinic) {
        let action = "Opened";
        let clinicAddress = clinic.address;
        let clinicCity = clinic.city;
        let clinicState = clinic.state;
        this.loadClinicLocation(clinicAddress, clinicCity, clinicState).then(() => {
            let chars;
            chars = this.locationModal.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
            let res = chars.split(' ');
            let location;
            location = [0, 0];
            location[0] = Number(res[1]);
            location[1] = Number(res[0]);
            this.modalData = { location, action };
            this.modal.open(this.modalContent, { size: 'xl' });
        }, () => alert("Error loading data"));
    }
    loadClinicLocation(clinicAddress, clinicCity, clinicState) {
        let promise = new Promise((resolve, reject) => {
            this.clinicService.getClinicLocation(clinicAddress, clinicCity, clinicState).subscribe((data) => { this.locationModal = data; resolve(); }, (error) => { alert(error); reject(); });
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
        };
        if (this.clinicID) {
            clinic.id = this.clinicID;
            this.clinicService.changeClinicInfo(clinic).subscribe((data) => { this.enableChangeInfo(); this.clinicBackup = data; /* this.router.navigate(['../clinics'], { relativeTo: this.activatedRoute }); */ }, (error) => { alert(error); return; });
        }
        else {
            this.clinicService.addClinic(clinic).subscribe((data) => { this.router.navigate(['../clinics'], { relativeTo: this.activatedRoute }); }, (error) => { alert(error); return; });
        }
    }
};
ClinicProfileInfoComponent.ctorParameters = () => [
    { type: src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_2__["ClinicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true })
], ClinicProfileInfoComponent.prototype, "modalContent", void 0);
ClinicProfileInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clinic-profile-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clinic-profile-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/clinic-profile-info/clinic-profile-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clinic-profile-info.component.css */ "./src/app/components/adminC-dashboard/clinic-profile-info/clinic-profile-info.component.css")).default]
    })
], ClinicProfileInfoComponent);



/***/ }),

/***/ "./src/app/components/adminC-dashboard/doctor-form/doctor-form.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/doctor-form/doctor-form.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DLWRhc2hib2FyZC9kb2N0b3ItZm9ybS9kb2N0b3ItZm9ybS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/adminC-dashboard/doctor-form/doctor-form.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/doctor-form/doctor-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DoctorFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorFormComponent", function() { return DoctorFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/clinic.service */ "./src/app/services/clinic.service.ts");






let DoctorFormComponent = class DoctorFormComponent {
    constructor(formBuilder, clinicService, router, activatedRoute, userService) {
        this.formBuilder = formBuilder;
        this.clinicService = clinicService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.submitted = false;
    }
    ngOnInit() {
        this.loadTypesOfExamination();
        var doctor = history.state.data;
        var email = "";
        var name = "";
        var surname = "";
        var address = "";
        var city = "";
        var state = "";
        var phoneNumber = "";
        var shiftStart = "";
        var shiftEnd = "";
        var upin = "";
        var specialization = 0;
        this.doctorForm = this.formBuilder.group({
            email: [email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            name: [name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            surname: [surname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            address: [address, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            city: [city, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            state: [state, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phoneNumber: [phoneNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            shiftStart: [shiftStart, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)]],
            shiftEnd: [shiftEnd, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)]],
            upin: [upin, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(13)]],
            specialization: [specialization]
        });
    }
    loadTypesOfExamination() {
        let clinic_id = this.userService.getUser().clinic_id;
        this.clinicService.getTypesOfExamination(clinic_id).subscribe((data) => { this.typesOfExamination = data; }, (error) => { alert(error); });
    }
    onSubmit() {
        this.submitted = true;
        if (this.doctorForm.invalid) {
            return;
        }
        var doctor = {
            email: this.doctorForm.controls.email.value,
            name: this.doctorForm.controls.name.value,
            surname: this.doctorForm.controls.surname.value,
            address: this.doctorForm.controls.address.value,
            city: this.doctorForm.controls.city.value,
            state: this.doctorForm.controls.state.value,
            phoneNumber: this.doctorForm.controls.phoneNumber.value,
            shiftStart: this.doctorForm.controls.shiftStart.value,
            shiftEnd: this.doctorForm.controls.shiftEnd.value,
            upin: this.doctorForm.controls.upin.value,
            clinic_id: this.userService.getUser().clinic_id,
            specialization: {
                id: this.doctorForm.controls.specialization.value
            }
        };
        this.clinicService.addDoctor(doctor).subscribe((data) => { this.router.navigate(['../doctors'], { relativeTo: this.activatedRoute }); }, (error) => { alert(error); return; });
    }
};
DoctorFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_5__["ClinicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
DoctorFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doctor-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doctor-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/doctor-form/doctor-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doctor-form.component.css */ "./src/app/components/adminC-dashboard/doctor-form/doctor-form.component.css")).default]
    })
], DoctorFormComponent);



/***/ }),

/***/ "./src/app/components/adminC-dashboard/doctor-listing/doctor-listing.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/doctor-listing/doctor-listing.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DLWRhc2hib2FyZC9kb2N0b3ItbGlzdGluZy9kb2N0b3ItbGlzdGluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/adminC-dashboard/doctor-listing/doctor-listing.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/doctor-listing/doctor-listing.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DoctorListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorListingComponent", function() { return DoctorListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/clinic.service */ "./src/app/services/clinic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");







let DoctorListingComponent = class DoctorListingComponent {
    constructor(clinicService, router, activatedRoute, userService, formBuilder, confirmationDialogService) {
        this.clinicService = clinicService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.confirmationDialogService = confirmationDialogService;
        this.doctorsHeaders = ['Name', 'Surname', 'Phone Number', 'Shift starts', 'Shift ends', 'Rating'];
        this.submitted = false;
        this.navigationSubscription = this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
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
        this.clinicService.getDoctors(this.clinicID).subscribe((data) => {
            this.doctors = data;
        }, (error) => {
            alert(error);
        });
    }
    addNewDoctor() {
        this.router.navigate(['../doctor'], { relativeTo: this.activatedRoute });
    }
    deleteDoctor(doctor) {
        this.confirmationDialogService.confirm('Please confirm', 'Are you sure you want to delete doctor: ' + doctor.name + ' ' + doctor.surname + ' ?', false)
            .then((confirmed) => {
            if (confirmed.submited) {
                this.clinicService.deleteDoctor(doctor.id).subscribe((data) => {
                    this.getDoctors();
                }, (error) => {
                    alert(error);
                });
            }
        });
    }
    onSearch() {
        this.submitted = true;
        var doctor = {
            name: this.searchForm.controls.name.value ? this.searchForm.controls.name.value : "",
            surname: this.searchForm.controls.surname.value ? this.searchForm.controls.surname.value : "",
            clinic_id: this.userService.getUser().clinic_id
        };
        this.clinicService.searchDoctors(doctor).subscribe((data) => {
            this.doctors = data;
        }, (error) => {
            alert(error);
        });
    }
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
};
DoctorListingComponent.ctorParameters = () => [
    { type: src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_2__["ClinicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] }
];
DoctorListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doctor-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doctor-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/doctor-listing/doctor-listing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doctor-listing.component.css */ "./src/app/components/adminC-dashboard/doctor-listing/doctor-listing.component.css")).default]
    })
], DoctorListingComponent);



/***/ }),

/***/ "./src/app/components/adminC-dashboard/new-available-appointment-page/new-available-appointment-page.component.css":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/new-available-appointment-page/new-available-appointment-page.component.css ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DLWRhc2hib2FyZC9uZXctYXZhaWxhYmxlLWFwcG9pbnRtZW50LXBhZ2UvbmV3LWF2YWlsYWJsZS1hcHBvaW50bWVudC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/adminC-dashboard/new-available-appointment-page/new-available-appointment-page.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/new-available-appointment-page/new-available-appointment-page.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: NewAvailableAppointmentPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAvailableAppointmentPageComponent", function() { return NewAvailableAppointmentPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/clinic.service */ "./src/app/services/clinic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/appointment.service */ "./src/app/services/appointment.service.ts");







let NewAvailableAppointmentPageComponent = class NewAvailableAppointmentPageComponent {
    constructor(formBuilder, userService, clinicService, appointmentService, router, activatedRoute) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.clinicService = clinicService;
        this.appointmentService = appointmentService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        let time = 1000 * 60 * 10;
        let date = new Date();
        this.now = new Date(Math.round(date.getTime() / time) * time);
        this.loadData().then(() => {
            this.createFormGroup();
        }, () => alert("Error loading data"));
    }
    loadData() {
        let promise = new Promise((resolve, reject) => {
            this.loadTypesOfExamination().then(() => {
                this.loadOrdinations().then(() => {
                    this.loadClinicDoctors().then(() => {
                        resolve();
                    }, () => reject());
                }, () => reject());
            }, () => reject());
        });
        return promise;
    }
    loadClinicDoctors() {
        let promise = new Promise((resolve, reject) => {
            let clinic_id = this.userService.getUser().clinic_id;
            this.clinicService.getDoctors(clinic_id).subscribe((data) => { this.doctors = data; resolve(); }, (error) => { alert(error); reject(); });
        });
        return promise;
    }
    loadTypesOfExamination() {
        let promise = new Promise((resolve, reject) => {
            let clinic_id = this.userService.getUser().clinic_id;
            this.clinicService.getTypesOfExamination(clinic_id).subscribe((data) => { this.typesOfExamination = data; resolve(); }, (error) => { alert(error); reject(); });
        });
        return promise;
    }
    loadOrdinations() {
        let promise = new Promise((resolve, reject) => {
            let clinic_id = this.userService.getUser().clinic_id;
            this.clinicService.getOrdinations(clinic_id).subscribe((data) => { this.ordinations = data; resolve(); }, (error) => { alert(error); reject(); });
        });
        return promise;
    }
    createFormGroup() {
        this.form = this.formBuilder.group({
            dateAndTime: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
            duration: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
            typeOfExamination: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
            ordination: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
            price: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
            discount: [0, []],
            doctor: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]]
        }, { validator: checkIfDiscountIsLargerThanPrice });
    }
    setPriceFromTypeOfExamination() {
        let type = this.typesOfExamination.find(element => element.id == this.form.controls.typeOfExamination.value);
        if (!type) {
            this.form.controls['price'].setValue("");
            return;
        }
        this.form.controls['price'].setValue(type.price);
    }
    discountValidator(control) {
        if (this.form.controls['discount'].value > this.form.controls['price'].value) {
            return null;
        }
    }
    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        let admin = this.userService.getUser();
        if (!admin) {
            alert("Invalid user");
            return;
        }
        let clinic_id = admin.clinic_id;
        let appointment = {
            startingDateAndTime: this.form.controls.dateAndTime.value.getTime() / 1000,
            duration: this.form.controls.duration.value * 60 * 1000,
            typeOfExamination: { id: this.form.controls.typeOfExamination.value },
            ordination: { id: this.form.controls.ordination.value },
            price: this.form.controls.price.value,
            discount: this.form.controls.discount.value,
            clinic: { id: clinic_id },
            doctors: [{ id: this.form.controls.doctor.value }]
        };
        this.appointmentService.createAvailableAppointment(appointment).subscribe((data) => { this.router.navigate(['../available_appointments'], { relativeTo: this.activatedRoute }); }, (error) => { alert(error); });
    }
    cancelChanges() {
        this.router.navigate(['../available_appointments'], { relativeTo: this.activatedRoute });
    }
};
NewAvailableAppointmentPageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_4__["ClinicService"] },
    { type: src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_6__["AppointmentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
NewAvailableAppointmentPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-available-appointment-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-available-appointment-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/new-available-appointment-page/new-available-appointment-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-available-appointment-page.component.css */ "./src/app/components/adminC-dashboard/new-available-appointment-page/new-available-appointment-page.component.css")).default]
    })
], NewAvailableAppointmentPageComponent);

function checkIfDiscountIsLargerThanPrice(c) {
    if (c.get('discount').value <= c.get('price').value) {
        return null;
    }
    else {
        return { 'invalidDiscount': true };
    }
}


/***/ }),

/***/ "./src/app/components/adminC-dashboard/nurse-form/nurse-form.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/nurse-form/nurse-form.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DLWRhc2hib2FyZC9udXJzZS1mb3JtL251cnNlLWZvcm0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/adminC-dashboard/nurse-form/nurse-form.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/nurse-form/nurse-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: NurseFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NurseFormComponent", function() { return NurseFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/clinic.service */ "./src/app/services/clinic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");






let NurseFormComponent = class NurseFormComponent {
    constructor(formBuilder, clinicService, router, activatedRoute, userService) {
        this.formBuilder = formBuilder;
        this.clinicService = clinicService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.submitted = false;
    }
    ngOnInit() {
        var nurse = history.state.data;
        var email = "";
        var name = "";
        var surname = "";
        var address = "";
        var city = "";
        var state = "";
        var phoneNumber = "";
        var shiftStart = "";
        var shiftEnd = "";
        var upin = "";
        this.loginForm = this.formBuilder.group({
            email: [email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            name: [name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            surname: [surname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            address: [address, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            city: [city, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            state: [state, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phoneNumber: [phoneNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            shiftStart: [shiftStart, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)]],
            shiftEnd: [shiftEnd, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)]],
            upin: [upin, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(13)]],
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        var nurse = {
            email: this.loginForm.controls.email.value,
            name: this.loginForm.controls.name.value,
            surname: this.loginForm.controls.surname.value,
            address: this.loginForm.controls.address.value,
            city: this.loginForm.controls.city.value,
            state: this.loginForm.controls.state.value,
            phoneNumber: this.loginForm.controls.phoneNumber.value,
            shiftStart: this.loginForm.controls.shiftStart.value,
            shiftEnd: this.loginForm.controls.shiftEnd.value,
            upin: this.loginForm.controls.upin.value,
            clinic_id: this.userService.getUser().clinic_id
        };
        this.clinicService.addNurse(nurse).subscribe((data) => { this.router.navigate(['../nurse_listing'], { relativeTo: this.activatedRoute }); }, (error) => { alert(error); return; });
    }
};
NurseFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_3__["ClinicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
NurseFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nurse-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nurse-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/nurse-form/nurse-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nurse-form.component.css */ "./src/app/components/adminC-dashboard/nurse-form/nurse-form.component.css")).default]
    })
], NurseFormComponent);



/***/ }),

/***/ "./src/app/components/adminC-dashboard/nurse-listing/nurse-listing.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/nurse-listing/nurse-listing.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DLWRhc2hib2FyZC9udXJzZS1saXN0aW5nL251cnNlLWxpc3RpbmcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/adminC-dashboard/nurse-listing/nurse-listing.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/nurse-listing/nurse-listing.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NurseListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NurseListingComponent", function() { return NurseListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/clinic.service */ "./src/app/services/clinic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");






let NurseListingComponent = class NurseListingComponent {
    constructor(clinicService, router, activatedRoute, userService, formBuilder) {
        this.clinicService = clinicService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.nurseHeaders = ['Name', 'Surname', 'Phone Number', 'Shift starts', 'Shift ends'];
        this.submitted = false;
        this.navigationSubscription = this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
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
        this.clinicService.getNurses(this.clinicID).subscribe((data) => {
            this.nurses = data;
        }, (error) => {
            alert(error);
        });
    }
    addNewNurse() {
        this.router.navigate(['../nurse_form'], { relativeTo: this.activatedRoute });
    }
    deleteNurse(nurse) {
        this.clinicService.deleteNurse(nurse.id).subscribe((data) => {
            this.getNurses();
        }, (error) => {
            alert(error);
        });
    }
    onSearch() {
        this.submitted = true;
        var nurse = {
            name: this.searchForm.controls.name.value ? this.searchForm.controls.name.value : "",
            surname: this.searchForm.controls.surname.value ? this.searchForm.controls.surname.value : "",
            clinic_id: this.userService.getUser().clinic_id
        };
        this.clinicService.searchNurses(nurse).subscribe((data) => {
            this.nurses = data;
        }, (error) => {
            alert(error);
        });
    }
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
};
NurseListingComponent.ctorParameters = () => [
    { type: src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_3__["ClinicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
NurseListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nurse-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nurse-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/nurse-listing/nurse-listing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nurse-listing.component.css */ "./src/app/components/adminC-dashboard/nurse-listing/nurse-listing.component.css")).default]
    })
], NurseListingComponent);



/***/ }),

/***/ "./src/app/components/adminC-dashboard/ordination-form/ordination-form.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/ordination-form/ordination-form.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DLWRhc2hib2FyZC9vcmRpbmF0aW9uLWZvcm0vb3JkaW5hdGlvbi1mb3JtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/adminC-dashboard/ordination-form/ordination-form.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/ordination-form/ordination-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: OrdinationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdinationFormComponent", function() { return OrdinationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/clinic.service */ "./src/app/services/clinic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");






let OrdinationFormComponent = class OrdinationFormComponent {
    constructor(formBuilder, clinicService, router, activatedRoute, userService) {
        this.formBuilder = formBuilder;
        this.clinicService = clinicService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.submitted = false;
    }
    ngOnInit() {
        var ordination = history.state.data;
        var name = "";
        var number = 0;
        this.change = 'Add';
        if (ordination) {
            this.ordination_id = ordination.id;
            name = ordination.name;
            number = ordination.number;
            this.change = 'Change';
        }
        this.form = this.formBuilder.group({
            name: [name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            number: [number, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        var ordination = {
            id: this.ordination_id,
            name: this.form.controls.name.value,
            number: this.form.controls.number.value,
            clinic_id: this.userService.getUser().clinic_id
        };
        if (this.change === 'Change') {
            this.clinicService.editOrdination(ordination).subscribe((data) => { this.router.navigate(['../ordinations'], { relativeTo: this.activatedRoute }); }, (error) => { alert(error); return; });
        }
        else {
            this.clinicService.addOrdination(ordination, ordination.clinic_id).subscribe((data) => { this.router.navigate(['../ordinations'], { relativeTo: this.activatedRoute }); }, (error) => { alert(error); return; });
        }
    }
};
OrdinationFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_3__["ClinicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
OrdinationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ordination-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ordination-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/ordination-form/ordination-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ordination-form.component.css */ "./src/app/components/adminC-dashboard/ordination-form/ordination-form.component.css")).default]
    })
], OrdinationFormComponent);



/***/ }),

/***/ "./src/app/components/adminC-dashboard/ordination-listing/ordination-listing.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/ordination-listing/ordination-listing.component.css ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DLWRhc2hib2FyZC9vcmRpbmF0aW9uLWxpc3Rpbmcvb3JkaW5hdGlvbi1saXN0aW5nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/adminC-dashboard/ordination-listing/ordination-listing.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/ordination-listing/ordination-listing.component.ts ***!
  \************************************************************************************************/
/*! exports provided: OrdinationListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdinationListingComponent", function() { return OrdinationListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/clinic.service */ "./src/app/services/clinic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let OrdinationListingComponent = class OrdinationListingComponent {
    constructor(clinicService, router, activatedRoute, userService, formBuilder) {
        this.clinicService = clinicService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.ordinationsHeaders = ['Name', 'Number'];
        this.submitted = false;
        this.navigationSubscription = this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                this.clinicID = this.userService.getUser().clinic_id;
                this.getOrdinations();
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
            number: [""],
            date: [""]
        });
        this.filterForm = this.formBuilder.group({
            name: [""],
            number: [""]
        });
        this.onFilterChanges();
    }
    getOrdinations() {
        this.clinicID = this.userService.getUser().clinic_id;
        this.clinicService.getOrdinations(this.clinicID).subscribe((data) => {
            this.ordinations = data;
            this.filteredOrdinations = data;
        }, (error) => {
            alert(error);
        });
    }
    changeOrdination(ordination) {
        this.router.navigate(['../ordination_form'], { relativeTo: this.activatedRoute, state: { data: ordination } });
    }
    addNewOrdination() {
        this.router.navigate(['../ordination_form'], { relativeTo: this.activatedRoute });
    }
    deleteOrdination(ordination) {
        this.clinicService.deleteOrdination(ordination.id).subscribe((data) => {
            this.getOrdinations();
        }, (error) => {
            alert(error);
        });
    }
    onSearch() {
        this.submitted = true;
        var ordination = {
            name: this.searchForm.controls.name.value ? this.searchForm.controls.name.value : "",
            number: this.searchForm.controls.number.value ? this.searchForm.controls.number.value : "",
            clinic_id: this.userService.getUser().clinic_id
        };
        this.clinicService.searchOrdinations(ordination).subscribe((data) => {
            this.ordinations = data;
            this.filteredOrdinations = data;
        }, (error) => {
            alert(error);
        });
    }
    onFilterChanges() {
        this.filterForm.valueChanges.subscribe(filters => {
            this.filteredOrdinations = this.filterOrdinations(filters);
        });
    }
    filterOrdinations(filters) {
        return this.ordinations.filter(ordination => ordination.name.toLowerCase().indexOf(filters.name.toLowerCase()) !== -1 &&
            ordination.number.toString().indexOf(filters.number.toLowerCase()) !== -1);
    }
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
};
OrdinationListingComponent.ctorParameters = () => [
    { type: src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_2__["ClinicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
OrdinationListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ordination-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ordination-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/ordination-listing/ordination-listing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ordination-listing.component.css */ "./src/app/components/adminC-dashboard/ordination-listing/ordination-listing.component.css")).default]
    })
], OrdinationListingComponent);



/***/ }),

/***/ "./src/app/components/adminC-dashboard/ordination-selection/ordination-selection.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/ordination-selection/ordination-selection.component.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DLWRhc2hib2FyZC9vcmRpbmF0aW9uLXNlbGVjdGlvbi9vcmRpbmF0aW9uLXNlbGVjdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/adminC-dashboard/ordination-selection/ordination-selection.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/ordination-selection/ordination-selection.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: OrdinationSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdinationSelectionComponent", function() { return OrdinationSelectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/clinic.service */ "./src/app/services/clinic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/appointment.service */ "./src/app/services/appointment.service.ts");
/* harmony import */ var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/doctor.service */ "./src/app/services/doctor.service.ts");









let OrdinationSelectionComponent = class OrdinationSelectionComponent {
    constructor(clinicService, router, appointmentService, doctorService, activatedRoute, userService, formBuilder, modal) {
        this.clinicService = clinicService;
        this.router = router;
        this.appointmentService = appointmentService;
        this.doctorService = doctorService;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.modal = modal;
        this.selectedTimeslots = [];
        this.ordinationsHeaders = ['Name', 'Number', 'Status'];
        this.timeslotsHeaders = ['From', 'To'];
        this.submitted = false;
        this.config2 = {
            displayKey: "fullname",
            search: true,
            height: '8em',
            placeholder: 'Doctor not selected',
            customComparator: () => { },
            limitTo: 10,
            moreText: 'more',
            noResultsFound: 'No results found!',
            searchPlaceholder: 'Search doctors',
            searchOnKey: '',
            clearOnSelection: false,
        };
        this.navigationSubscription = this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                this.clinicID = this.userService.getUser().clinic_id;
                //this.getOrdinations();
                this.appointment = history.state.data;
                let startTime = new Date(this.appointment.startingDateAndTime * 1000);
                this.appointment.startTimeString = ("0" + startTime.getHours()).slice(-2) + ":" + ("0" + startTime.getMinutes()).slice(-2);
                if (this.appointment.endingDateAndTime) {
                    let endTime = new Date(this.appointment.endingDateAndTime * 1000);
                    this.appointment.endTimeString = ("0" + endTime.getHours()).slice(-2) + ":" + ("0" + endTime.getMinutes()).slice(-2);
                }
                // this.activatedRoute.params.subscribe((params) => {
                // 	this.clinicID = params.id;
                // 	this.clinicName = params.name;
                // });
                this.clinicService.getDoctors(this.clinicID).subscribe((data) => {
                    this.clinicDoctors = data;
                    this.optionsDoctors = data;
                    for (let doc of this.optionsDoctors) {
                        doc.fullname = doc.name + " " + doc.surname;
                    }
                    this.optionsDoctors = this.optionsDoctors.filter(obj => obj.id !== this.appointment.doctors[0].id);
                    this.optionsAttendingDoctors = data;
                    for (let doc of this.optionsAttendingDoctors) {
                        doc.fullname = doc.name + " " + doc.surname;
                    }
                    this.optionsAttendingDoctors = this.optionsAttendingDoctors.filter(obj => obj.id !== this.appointment.doctors[0].id);
                }, (error) => {
                    alert(error);
                });
                this.date = "";
                this.date = new Date(this.appointment.startingDateAndTime * 1000);
                this.date.setHours(0, 0, 0, 0);
                this.searchForm = this.formBuilder.group({
                    name: [""],
                    number: [""],
                    date: [this.date, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
                });
                this.filterForm = this.formBuilder.group({
                    name: [""],
                    number: [""]
                });
                this.onFilterChanges();
                if (this.appointment) {
                    this.onSearch();
                }
            }
        });
    }
    ngOnInit() {
    }
    getOrdinations() {
        this.clinicID = this.userService.getUser().clinic_id;
        this.clinicService.getOrdinations(this.clinicID).subscribe((data) => {
            this.ordinations = data;
            this.filteredOrdinations = data;
        }, (error) => {
            alert(error);
        });
    }
    onSearch() {
        this.submitted = true;
        if (this.searchForm.invalid) {
            return;
        }
        var ordination = {
            name: this.searchForm.controls.name.value ? this.searchForm.controls.name.value : "",
            number: this.searchForm.controls.number.value ? this.searchForm.controls.number.value : "",
            date: this.searchForm.controls.date.value ? this.searchForm.controls.date.value.getTime() / 1000 : "",
            clinic_id: this.userService.getUser().clinic_id
        };
        this.clinicService.searchOrdinationsWithDate(ordination).subscribe((data) => {
            this.ordinations = data;
            for (let i = 0; i < this.ordinations.length; i++) {
                let ordination = this.ordinations[i];
                this.ordinations[i].backupPeriods = [];
                for (let period of this.ordinations[i].availablePeriods) {
                    this.ordinations[i].backupPeriods.push(period);
                }
                for (let j = 0; j < ordination.availablePeriods.length; j++) {
                    let startTime = new Date(ordination.availablePeriods[j].split(':')[0] * 1000);
                    let endTime = new Date(ordination.availablePeriods[j].split(':')[1] * 1000);
                    this.ordinations[i].availablePeriods[j] = ("0" + startTime.getHours()).slice(-2) + ":" + ("0" + startTime.getMinutes()).slice(-2) + " - " + ("0" + endTime.getHours()).slice(-2) + ":" + ("0" + endTime.getMinutes()).slice(-2);
                    this.ordinations[i].backupPeriods[j] = ("0" + startTime.getHours()).slice(-2) + ":" + ("0" + startTime.getMinutes()).slice(-2) + " - " + ("0" + endTime.getHours()).slice(-2) + ":" + ("0" + endTime.getMinutes()).slice(-2);
                }
                if (!ordination.available) {
                    this.ordinations[i].firstAvailableDate = this.timeConverter(ordination.firstAvailableDateTimestamp);
                }
            }
            this.ordinations.sort((x, y) => (x === y) ? 0 : x ? -1 : 1);
            this.filteredOrdinations = this.ordinations;
        }, (error) => {
            alert(error);
        });
    }
    onFilterChanges() {
        this.filterForm.valueChanges.subscribe(filters => {
            this.filteredOrdinations = this.filterOrdinations(filters);
        });
    }
    filterOrdinations(filters) {
        return this.ordinations.filter(ordination => ordination.name.toLowerCase().indexOf(filters.name.toLowerCase()) !== -1 &&
            ordination.number.toString().indexOf(filters.number.toLowerCase()) !== -1);
    }
    showAvailableTimeslots(ordination) {
        let action = "Opened";
        let appointment = this.appointment;
        let ordinationData = ordination;
        this.selectedDoctor = appointment.doctors[0];
        this.selectedDoctor.fullname = this.selectedDoctor.name + " " + this.selectedDoctor.surname;
        this.selectedAttendingDoctors = [];
        this.setFilteredTimeslots(ordinationData, appointment);
        this.modalData = { appointment, ordinationData, action };
        this.modal.open(this.modalContent, { size: 'lg' });
    }
    isPeriodInsideChosenTime(period) {
        let selectedStartHour = this.appointment.startTimeString.split(':')[0];
        let selectedStartMinute = this.appointment.startTimeString.split(':')[1];
        let selectedEndHour = this.appointment.endTimeString.split(':')[0];
        let selectedEndMinute = this.appointment.endTimeString.split(':')[1];
        let periodStart = period.split(' - ')[0];
        let periodStartHour = periodStart.split(':')[0];
        let periodStartMinute = periodStart.split(':')[1];
        let periodEnd = period.split(' - ')[1];
        let periodEndHour = periodEnd.split(':')[0];
        let periodEndMinute = periodEnd.split(':')[1];
        if (periodStartHour >= selectedStartHour && periodStartHour <= selectedEndHour
            && periodEndHour >= selectedStartHour && periodEndHour <= selectedEndHour) {
            if (periodStartHour == selectedStartHour && periodStartMinute < selectedStartMinute) {
                return false;
            }
            if (periodEndHour == selectedEndHour && periodEndMinute > selectedEndMinute) {
                return false;
            }
            return true;
        }
        else {
            return false;
        }
    }
    selectTimeslot(period, i) {
        if (this.selectedTimeslots.length !== 0) {
            if (this.selectedTimeslots[0].index === i + 1
                && period.split(' - ')[1] === this.selectedTimeslots[0].period.split(' - ')[0]) {
                this.selectedTimeslots.unshift({ period, index: i });
            }
            else if (this.selectedTimeslots[this.selectedTimeslots.length - 1].index === i - 1
                && period.split(' - ')[0] === this.selectedTimeslots[this.selectedTimeslots.length - 1].period.split(' - ')[1]) {
                this.selectedTimeslots.push({ period, index: i });
            }
        }
        else {
            this.selectedTimeslots.push({ period, index: i });
        }
        this.modalData.appointment.startTimeString = this.selectedTimeslots[0].period.split(' - ')[0];
        this.modalData.appointment.endTimeString = this.selectedTimeslots[this.selectedTimeslots.length - 1].period.split(' - ')[1];
    }
    deselectTimeslot(index) {
        if (this.selectedTimeslots[0].index === index) {
            this.selectedTimeslots.splice(0, 1);
        }
        else if (this.selectedTimeslots[this.selectedTimeslots.length - 1].index === index) {
            this.selectedTimeslots.splice(this.selectedTimeslots.length - 1, 1);
        }
        if (this.selectedTimeslots.length !== 0) {
            this.modalData.appointment.startTimeString = this.selectedTimeslots[0].period.split(' - ')[0];
            this.modalData.appointment.endTimeString = this.selectedTimeslots[this.selectedTimeslots.length - 1].period.split(' - ')[1];
        }
        else {
            this.modalData.appointment.startTimeString = '';
            this.modalData.appointment.endTimeString = '';
        }
    }
    getAlreadySelected(index) {
        return this.selectedTimeslots.filter(slot => (slot.index === index)).length !== 0;
    }
    removeDoctor(doctor) {
        this.modalData.appointment.doctors = this.modalData.appointment.doctors.filter(obj => obj.id !== doctor.id);
        this.optionsDoctors = this.clinicDoctors;
        this.modalData.appointment.doctors.forEach(element => {
            this.optionsDoctors = this.optionsDoctors.filter(obj => obj.id !== element.id);
        });
    }
    selectionChangedDoctor(event) {
        if (event.value) {
            this.modalData.appointment.doctors[0] = event.value;
            this.optionsDoctors = this.clinicDoctors.filter(obj => obj.id !== this.modalData.appointment.doctors[0].id);
            this.optionsAttendingDoctors = this.clinicDoctors.filter(obj => obj.id !== this.modalData.appointment.doctors[0].id);
            this.selectedAttendingDoctors.splice(0, this.selectedAttendingDoctors.length);
        }
        else {
            this.modalData.appointment.doctors[0] = "";
            this.optionsDoctors = this.clinicDoctors;
            this.selectedAttendingDoctors.splice(0, this.selectedAttendingDoctors.length);
        }
        this.setFilteredTimeslots(this.modalData.ordinationData, this.modalData.appointment);
    }
    setFilteredTimeslots(ordinationData, appointment) {
        ordinationData.filteredPeriods = [];
        ordinationData.availablePeriods = [];
        for (let period of ordinationData.backupPeriods) {
            ordinationData.availablePeriods.push(period);
        }
        this.selectedTimeslots = [];
        this.selectedDoctorAvailability = [];
        let doctor = appointment.doctors[0];
        if (doctor) {
            this.doctorService.getAvailability(this.selectedDoctor.id, this.date.getTime() / 1000, "admin").subscribe((data) => {
                this.selectedDoctorAvailability = data;
                if (this.selectedDoctorAvailability.availableTimes.length === 0) {
                    alert("Doctor has no available timeslots!");
                    return;
                }
                for (let i = 0; i < this.selectedDoctorAvailability.availableTimes.length; i++) {
                    this.selectedDoctorAvailability.availableTimes[i] = this.timeConverterHourMin(this.selectedDoctorAvailability.availableTimes[i]);
                }
                if (doctor.shiftStart.split(':')[0] > doctor.shiftEnd.split(':')[0]) {
                    doctor.shiftStart = '00:00';
                }
                if (doctor.shiftEnd.split(':')[0] < doctor.shiftStart.split(':')[0]) {
                    doctor.shiftEnd = '24:00';
                }
                let lastPeriod = ordinationData.availablePeriods[ordinationData.availablePeriods.length - 1];
                if (lastPeriod.split(' - ')[1].split(':')[0] === '00') {
                    ordinationData.availablePeriods[ordinationData.availablePeriods.length - 1] = lastPeriod.split(' - ')[0] + " - 24:00";
                }
                let i = 0;
                let period;
                for (let j = 0; j < ordinationData.availablePeriods.length; j++) {
                    period = ordinationData.availablePeriods[j];
                    if (this.selectedDoctorAvailability.availableTimes.indexOf(period.split(' - ')[0]) === -1) {
                        ordinationData.availablePeriods.splice(j, 1);
                        j--;
                        continue;
                    }
                    ordinationData.filteredPeriods.push(period);
                    if (this.appointment.endTimeString && this.isPeriodInsideChosenTime(period)) {
                        this.selectedTimeslots.push({ period, index: i });
                    }
                    i++;
                }
            }, (error) => {
                alert(error);
            });
        }
    }
    selectionChangedAttendingDoctor(event) {
        this.modalData.appointment.doctors.splice(1, this.modalData.appointment.doctors.length - 1);
        this.modalData.appointment.doctors.push(...this.selectedAttendingDoctors);
    }
    createAppointment() {
        if (!this.modalData) {
            alert("Invalid data");
            return;
        }
        let appointment = this.modalData.appointment;
        if (appointment.startTimeString === undefined || appointment.endTimeString === undefined || appointment.startTimeString === '' || appointment.endTimeString === '') {
            alert("Please choose time of appointment");
            return;
        }
        if (appointment.doctors.length === 0) {
            alert("Please choose a doctor");
            return;
        }
        if (!this.modalData.ordinationData) {
            alert("Please choose ordination");
            return;
        }
        let midnightTimestamp = this.searchForm.controls.date.value.getTime() / 1000;
        appointment.startingDateAndTime = midnightTimestamp + appointment.startTimeString.split(":")[0] * 60 * 60 + appointment.startTimeString.split(":")[1] * 60;
        appointment.endingDateAndTime = midnightTimestamp + appointment.endTimeString.split(":")[0] * 60 * 60 + appointment.endTimeString.split(":")[1] * 60;
        appointment.duration = (appointment.endingDateAndTime - appointment.startingDateAndTime) * 1000;
        appointment.ordination = { id: this.modalData.ordinationData.id };
        this.appointmentService.approveAppointmentRequest(appointment).subscribe((data) => {
            alert("Appointment succesfully created");
            this.modal.dismissAll();
            this.router.navigate([`../appointment_requests`], { relativeTo: this.activatedRoute });
        }, (error) => {
            alert(error);
        });
    }
    timeConverter(a) {
        a = new Date(a * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var time = date + '. ' + month + ' ' + year + '.';
        return time;
    }
    timeConverterHourMin(a) {
        a = new Date(a * 1000);
        var hour = a.getHours();
        var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
        var time = hour + ':' + min;
        if (time.length == 4) {
            time = '0' + time;
        }
        return time;
    }
    closeModal() {
        this.selectedTimeslots = [];
        this.modal.dismissAll();
    }
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
};
OrdinationSelectionComponent.ctorParameters = () => [
    { type: src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_2__["ClinicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_7__["AppointmentService"] },
    { type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_8__["DoctorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true })
], OrdinationSelectionComponent.prototype, "modalContent", void 0);
OrdinationSelectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ordination-selection',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ordination-selection.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/ordination-selection/ordination-selection.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ordination-selection.component.css */ "./src/app/components/adminC-dashboard/ordination-selection/ordination-selection.component.css")).default]
    })
], OrdinationSelectionComponent);



/***/ }),

/***/ "./src/app/components/adminC-dashboard/type-of-examination-form/type-of-examination-form.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/type-of-examination-form/type-of-examination-form.component.css ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DLWRhc2hib2FyZC90eXBlLW9mLWV4YW1pbmF0aW9uLWZvcm0vdHlwZS1vZi1leGFtaW5hdGlvbi1mb3JtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/adminC-dashboard/type-of-examination-form/type-of-examination-form.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/type-of-examination-form/type-of-examination-form.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: TypeOfExaminationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfExaminationFormComponent", function() { return TypeOfExaminationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/clinic.service */ "./src/app/services/clinic.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");






let TypeOfExaminationFormComponent = class TypeOfExaminationFormComponent {
    constructor(formBuilder, clinicService, router, activatedRoute, userService) {
        this.formBuilder = formBuilder;
        this.clinicService = clinicService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.submitted = false;
    }
    ngOnInit() {
        var typeOfExamination = history.state.data;
        var name = "";
        var price = 0;
        this.change = 'Add';
        var operation = false;
        if (typeOfExamination) {
            this.typeOfExamination_id = typeOfExamination.id;
            name = typeOfExamination.name;
            price = typeOfExamination.price;
            operation = typeOfExamination.operation;
            this.change = 'Change';
        }
        this.form = this.formBuilder.group({
            name: [name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            price: [price, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            operation: [operation,]
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        var typeOfExamination = {
            id: this.typeOfExamination_id,
            name: this.form.controls.name.value,
            price: this.form.controls.price.value,
            clinic_id: this.userService.getUser().clinic_id,
            operation: this.form.controls.operation.value
        };
        if (this.change === 'Change') {
            this.clinicService.editTypeOfExamination(typeOfExamination).subscribe((data) => { this.router.navigate(['../types_of_examination'], { relativeTo: this.activatedRoute }); }, (error) => { alert(error); return; });
        }
        else {
            this.clinicService.addTypeOfExamination(typeOfExamination, typeOfExamination.clinic_id).subscribe((data) => { this.router.navigate(['../types_of_examination'], { relativeTo: this.activatedRoute }); }, (error) => { alert(error); return; });
        }
    }
};
TypeOfExaminationFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_4__["ClinicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
TypeOfExaminationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-type-of-examination-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./type-of-examination-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/type-of-examination-form/type-of-examination-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./type-of-examination-form.component.css */ "./src/app/components/adminC-dashboard/type-of-examination-form/type-of-examination-form.component.css")).default]
    })
], TypeOfExaminationFormComponent);



/***/ }),

/***/ "./src/app/components/adminC-dashboard/type-of-examination-listing/type-of-examination-listing.component.css":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/type-of-examination-listing/type-of-examination-listing.component.css ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DLWRhc2hib2FyZC90eXBlLW9mLWV4YW1pbmF0aW9uLWxpc3RpbmcvdHlwZS1vZi1leGFtaW5hdGlvbi1saXN0aW5nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/adminC-dashboard/type-of-examination-listing/type-of-examination-listing.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/type-of-examination-listing/type-of-examination-listing.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: TypeOfExaminationListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOfExaminationListingComponent", function() { return TypeOfExaminationListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/clinic.service */ "./src/app/services/clinic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");







let TypeOfExaminationListingComponent = class TypeOfExaminationListingComponent {
    constructor(clinicService, router, activatedRoute, userService, formBuilder, confirmationDialogService) {
        this.clinicService = clinicService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.confirmationDialogService = confirmationDialogService;
        this.typeOfExaminationHeaders = ['Name', 'Price'];
        this.submitted = false;
        this.navigationSubscription = this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
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
        this.clinicService.getTypesOfExamination(this.clinicID).subscribe((data) => {
            this.typesOfExamination = data;
        }, (error) => {
            alert(error);
        });
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
                this.clinicService.deleteTypeOfExamination(typeOfExamination.id).subscribe((data) => {
                    this.getTypesOfExamination();
                }, (error) => {
                    alert(error);
                });
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
        };
        this.clinicService.searchTypesOfExamination(type).subscribe((data) => {
            this.typesOfExamination = data;
        }, (error) => {
            alert(error);
        });
    }
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
};
TypeOfExaminationListingComponent.ctorParameters = () => [
    { type: src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_2__["ClinicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] }
];
TypeOfExaminationListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-type-of-examination-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./type-of-examination-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/type-of-examination-listing/type-of-examination-listing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./type-of-examination-listing.component.css */ "./src/app/components/adminC-dashboard/type-of-examination-listing/type-of-examination-listing.component.css")).default]
    })
], TypeOfExaminationListingComponent);



/***/ }),

/***/ "./src/app/components/adminC-dashboard/vacation-requests/vacation-requests.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/vacation-requests/vacation-requests.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DLWRhc2hib2FyZC92YWNhdGlvbi1yZXF1ZXN0cy92YWNhdGlvbi1yZXF1ZXN0cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/adminC-dashboard/vacation-requests/vacation-requests.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/adminC-dashboard/vacation-requests/vacation-requests.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: VacationRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacationRequestsComponent", function() { return VacationRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_clinic_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/clinic-admin.service */ "./src/app/services/clinic-admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");





let VacationRequestsComponent = class VacationRequestsComponent {
    constructor(clinicAdminService, router, activatedRoute, confirmationDialogService) {
        this.clinicAdminService = clinicAdminService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.confirmationDialogService = confirmationDialogService;
        this.requestsHeaders = ['Applicant', 'Name', 'Surname', 'Start', 'End'];
        this.navigationSubscription = this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
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
            this.requests.sort((a, b) => (a.id > b.id) ? 1 : -1);
        });
    }
    approveRequest(request) {
        this.confirmationDialogService.confirm('Please confirm', 'Are you sure you want to approve vacation request for ' + request.roles[0] + ': ' + request.staffName + ' ?', false)
            .then((confirmed) => {
            if (confirmed.submited) {
                this.clinicAdminService.approveVacationRequest(request).subscribe((data) => {
                    this.router.navigate(['../vacation_requests'], { relativeTo: this.activatedRoute });
                }, (error) => {
                    alert(error);
                });
            }
        })
            .catch(() => this.router.navigate(['../vacation_requests'], { relativeTo: this.activatedRoute }));
    }
    rejectRequest(request) {
        this.confirmationDialogService.confirm('Please confirm', 'Please provide a reason for deleting request for ' + request.roles[0] + ': ' + request.staffName + ' ?', true)
            .then((confirmed) => {
            if (confirmed.submited) {
                this.clinicAdminService.rejectVacationRequest(request, confirmed.explanation).subscribe((data) => {
                    this.router.navigate(['../vacation_requests'], { relativeTo: this.activatedRoute });
                }, (error) => {
                    alert(error);
                });
            }
        })
            .catch(() => this.router.navigate(['../vacation_requests'], { relativeTo: this.activatedRoute }));
    }
    timeConverter(a) {
        a = new Date(a * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
        var time = date + '. ' + month + ' ' + year + '. ' + hour + ':' + min;
        return time;
    }
};
VacationRequestsComponent.ctorParameters = () => [
    { type: src_app_services_clinic_admin_service__WEBPACK_IMPORTED_MODULE_2__["ClinicAdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] }
];
VacationRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vacation-requests',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vacation-requests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminC-dashboard/vacation-requests/vacation-requests.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vacation-requests.component.css */ "./src/app/components/adminC-dashboard/vacation-requests/vacation-requests.component.css")).default]
    })
], VacationRequestsComponent);



/***/ }),

/***/ "./src/app/components/adminCC-dashboard/admin-personal-profile/admin-personal-profile.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/admin-personal-profile/admin-personal-profile.component.css ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DQy1kYXNoYm9hcmQvYWRtaW4tcGVyc29uYWwtcHJvZmlsZS9hZG1pbi1wZXJzb25hbC1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/adminCC-dashboard/admin-personal-profile/admin-personal-profile.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/admin-personal-profile/admin-personal-profile.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AdminPersonalProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPersonalProfileComponent", function() { return AdminPersonalProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_clinic_center_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/clinic-center-admin.service */ "./src/app/services/clinic-center-admin.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");






let AdminPersonalProfileComponent = class AdminPersonalProfileComponent {
    constructor(clinicCenterAdminService, formBuilder, router, activatedRoute, cookieService) {
        this.clinicCenterAdminService = clinicCenterAdminService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cookieService = cookieService;
    }
    ngOnInit() {
        this.getAdminInfo();
    }
    getAdminInfo() {
        this.clinicCenterAdminService.getAdminKc().subscribe((data) => {
            this.admin = data;
            this.loginForm = this.formBuilder.group({
                name: [this.admin.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
                surname: [this.admin.surname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                email: [this.admin.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                address: [this.admin.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                city: [this.admin.city, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                state: [this.admin.state, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                phoneNumber: [this.admin.phoneNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                upin: [this.admin.upin, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(13)]]
            });
            this.change = true;
        });
        ;
    }
    enableChangeInfo() {
        this.change = !this.change;
    }
    cancelChanges() {
        this.change = !this.change;
        this.getAdminInfo();
    }
    showChangePasswordForm() {
        this.router.navigate(['../change-password']);
    }
    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        var adminKc = {
            id: JSON.parse(this.cookieService.get('user'))['id'],
            email: this.loginForm.controls.email.value,
            name: this.loginForm.controls.name.value,
            surname: this.loginForm.controls.surname.value,
            address: this.loginForm.controls.address.value,
            city: this.loginForm.controls.city.value,
            state: this.loginForm.controls.state.value,
            phoneNumber: this.loginForm.controls.phoneNumber.value,
            upin: this.loginForm.controls.upin.value
        };
        this.clinicCenterAdminService.changeAdminKc(adminKc).subscribe((data) => { this.change = !this.change; return; }, (error) => { alert(error); });
    }
};
AdminPersonalProfileComponent.ctorParameters = () => [
    { type: src_app_services_clinic_center_admin_service__WEBPACK_IMPORTED_MODULE_4__["ClinicCenterAdminService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
AdminPersonalProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-personal-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-personal-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/admin-personal-profile/admin-personal-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-personal-profile.component.css */ "./src/app/components/adminCC-dashboard/admin-personal-profile/admin-personal-profile.component.css")).default]
    })
], AdminPersonalProfileComponent);



/***/ }),

/***/ "./src/app/components/adminCC-dashboard/admin-profile.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/admin-profile.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("li+li { border-left: 1px solid #0000FF }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbkNDLWRhc2hib2FyZC9hZG1pbi1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSwrQkFBK0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluQ0MtZGFzaGJvYXJkL2FkbWluLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpK2xpIHsgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwMEZGIH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/adminCC-dashboard/admin-profile.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/admin-profile.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProfileComponent", function() { return AdminProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");



let AdminProfileComponent = class AdminProfileComponent {
    constructor(cookieService) {
        this.cookieService = cookieService;
        this.clinicHeaders = ['Name', 'Address', 'City', 'State', 'Description'];
    }
    ngOnInit() {
        this.currentUser = JSON.parse(this.cookieService.get('user'));
    }
    loadClinics() {
    }
};
AdminProfileComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }
];
AdminProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/admin-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-profile.component.css */ "./src/app/components/adminCC-dashboard/admin-profile.component.css")).default]
    })
], AdminProfileComponent);



/***/ }),

/***/ "./src/app/components/adminCC-dashboard/clinic-admin-form/clinic-admin-form.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/clinic-admin-form/clinic-admin-form.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DQy1kYXNoYm9hcmQvY2xpbmljLWFkbWluLWZvcm0vY2xpbmljLWFkbWluLWZvcm0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/adminCC-dashboard/clinic-admin-form/clinic-admin-form.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/clinic-admin-form/clinic-admin-form.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ClinicAdminFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicAdminFormComponent", function() { return ClinicAdminFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/clinic.service */ "./src/app/services/clinic.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");






let ClinicAdminFormComponent = class ClinicAdminFormComponent {
    constructor(router, clinicService, activatedRoute, formBuilder, cookieService) {
        this.router = router;
        this.clinicService = clinicService;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.cookieService = cookieService;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,]],
            surname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            upin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(13)]]
        });
        this.activatedRoute.params.subscribe((params) => {
            this.clinicID = params.id;
            this.clinicName = params.name;
        });
    }
    onSubmit() {
        this.submitted = true;
        var adminC = {
            id: null,
            email: this.form.controls.email.value,
            name: this.form.controls.name.value,
            surname: this.form.controls.surname.value,
            address: this.form.controls.address.value,
            city: this.form.controls.city.value,
            state: this.form.controls.state.value,
            phoneNumber: this.form.controls.phoneNumber.value,
            upin: this.form.controls.upin.value,
            clinic_id: this.clinicID
        };
        this.clinicService.addAdmin(adminC).subscribe((data) => { this.router.navigate(['../clinicAdmins', { id: this.clinicID, name: this.clinicName }], { relativeTo: this.activatedRoute }); }, (error) => { alert(error); });
    }
};
ClinicAdminFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_3__["ClinicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
ClinicAdminFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clinic-admin-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clinic-admin-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/clinic-admin-form/clinic-admin-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clinic-admin-form.component.css */ "./src/app/components/adminCC-dashboard/clinic-admin-form/clinic-admin-form.component.css")).default]
    })
], ClinicAdminFormComponent);



/***/ }),

/***/ "./src/app/components/adminCC-dashboard/clinic-administrators-listing/clinic-administrators-listing.component.css":
/*!************************************************************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/clinic-administrators-listing/clinic-administrators-listing.component.css ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DQy1kYXNoYm9hcmQvY2xpbmljLWFkbWluaXN0cmF0b3JzLWxpc3RpbmcvY2xpbmljLWFkbWluaXN0cmF0b3JzLWxpc3RpbmcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/adminCC-dashboard/clinic-administrators-listing/clinic-administrators-listing.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/clinic-administrators-listing/clinic-administrators-listing.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ClinicAdministratorsListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicAdministratorsListingComponent", function() { return ClinicAdministratorsListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_clinic_center_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/clinic-center-admin.service */ "./src/app/services/clinic-center-admin.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/clinic.service */ "./src/app/services/clinic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");






let ClinicAdministratorsListingComponent = class ClinicAdministratorsListingComponent {
    constructor(clinicService, clinicCenterAdminService, router, activatedRoute, confirmationDialogService) {
        this.clinicService = clinicService;
        this.clinicCenterAdminService = clinicCenterAdminService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.confirmationDialogService = confirmationDialogService;
        this.clinicAdminHeaders = ['Name', 'Surname', 'E-mail', 'Address', 'City', 'State', 'Phone Number'];
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.clinicID = params.id;
            this.clinicName = params.name;
            this.getClinicAdministrators();
        });
    }
    getClinicAdministrators() {
        this.clinicService.getClinicAdmins(this.clinicID).subscribe((data) => {
            this.admins = data;
        });
    }
    deleteAdmin(admin) {
        this.confirmationDialogService.confirm('Please confirm', 'Are you sure you want to delete clinic administrator: ' + admin.name + ' ' + admin.surname + ' ?', false)
            .then((confirmed) => {
            if (confirmed.submited) {
                this.clinicCenterAdminService.deleteClinicAdmin(admin).subscribe((data) => {
                    this.getClinicAdministrators();
                    alert("Administrator succesfully deleted!");
                }, // Dodati feedback za uspesno brisanje
                (error) => { alert(error); });
            }
        });
    }
    addAdministrator() {
        this.router.navigate(['../addClinicAdmin', { id: this.clinicID, name: this.clinicName }], { relativeTo: this.activatedRoute });
    }
};
ClinicAdministratorsListingComponent.ctorParameters = () => [
    { type: src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_3__["ClinicService"] },
    { type: _services_clinic_center_admin_service__WEBPACK_IMPORTED_MODULE_1__["ClinicCenterAdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] }
];
ClinicAdministratorsListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-clinic-administrators-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clinic-administrators-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/clinic-administrators-listing/clinic-administrators-listing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clinic-administrators-listing.component.css */ "./src/app/components/adminCC-dashboard/clinic-administrators-listing/clinic-administrators-listing.component.css")).default]
    })
], ClinicAdministratorsListingComponent);



/***/ }),

/***/ "./src/app/components/adminCC-dashboard/clinic-center-admins-listing/clinic-center-admins-listing.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/clinic-center-admins-listing/clinic-center-admins-listing.component.css ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DQy1kYXNoYm9hcmQvY2xpbmljLWNlbnRlci1hZG1pbnMtbGlzdGluZy9jbGluaWMtY2VudGVyLWFkbWlucy1saXN0aW5nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/adminCC-dashboard/clinic-center-admins-listing/clinic-center-admins-listing.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/clinic-center-admins-listing/clinic-center-admins-listing.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ClinicCenterAdminsListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicCenterAdminsListingComponent", function() { return ClinicCenterAdminsListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/clinic.service */ "./src/app/services/clinic.service.ts");
/* harmony import */ var src_app_services_clinic_center_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/clinic-center-admin.service */ "./src/app/services/clinic-center-admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");







let ClinicCenterAdminsListingComponent = class ClinicCenterAdminsListingComponent {
    constructor(clinicService, clinicCenterAdminService, router, activatedRoute, confirmationDialogService, cookieService) {
        this.clinicService = clinicService;
        this.clinicCenterAdminService = clinicCenterAdminService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.confirmationDialogService = confirmationDialogService;
        this.cookieService = cookieService;
        this.clinicAdminHeaders = ['Name', 'Surname', 'E-mail', 'Address', 'City', 'State', 'Phone Number'];
    }
    ngOnInit() {
        this.getClinicAdministrators();
        this.currentUser = JSON.parse(this.cookieService.get('user'));
    }
    getClinicAdministrators() {
        this.clinicCenterAdminService.getAdminsKc().subscribe((data) => {
            this.admins = data;
        });
    }
    deleteAdmin(admin) {
        this.confirmationDialogService.confirm('Please confirm', 'Are you sure you want to delete clinic center administrator: ' + admin.name + ' ' + admin.surname + ' ?', false)
            .then((confirmed) => {
            if (confirmed.submited) {
                this.clinicCenterAdminService.deleteClinicCenterAdmin(admin).subscribe((data) => {
                    this.getClinicAdministrators();
                    alert("Administrator succesfully deleted!");
                }, // Dodati feedback za uspesno brisanje
                (error) => { alert(error); });
            }
        });
    }
    addAdministrator() {
        this.router.navigate(['../addClinicCenterAdmin'], { relativeTo: this.activatedRoute });
    }
};
ClinicCenterAdminsListingComponent.ctorParameters = () => [
    { type: src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_3__["ClinicService"] },
    { type: src_app_services_clinic_center_admin_service__WEBPACK_IMPORTED_MODULE_4__["ClinicCenterAdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }
];
ClinicCenterAdminsListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-clinic-center-admins-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clinic-center-admins-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/clinic-center-admins-listing/clinic-center-admins-listing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clinic-center-admins-listing.component.css */ "./src/app/components/adminCC-dashboard/clinic-center-admins-listing/clinic-center-admins-listing.component.css")).default]
    })
], ClinicCenterAdminsListingComponent);



/***/ }),

/***/ "./src/app/components/adminCC-dashboard/clinic-center-admins/clinic-center-admins.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/clinic-center-admins/clinic-center-admins.component.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DQy1kYXNoYm9hcmQvY2xpbmljLWNlbnRlci1hZG1pbnMvY2xpbmljLWNlbnRlci1hZG1pbnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/adminCC-dashboard/clinic-center-admins/clinic-center-admins.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/clinic-center-admins/clinic-center-admins.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ClinicCenterAdminsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicCenterAdminsComponent", function() { return ClinicCenterAdminsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var src_app_services_clinic_center_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/clinic-center-admin.service */ "./src/app/services/clinic-center-admin.service.ts");






let ClinicCenterAdminsComponent = class ClinicCenterAdminsComponent {
    constructor(router, clinicCenterAdminService, activatedRoute, formBuilder, cookieService) {
        this.router = router;
        this.clinicCenterAdminService = clinicCenterAdminService;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.cookieService = cookieService;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
            surname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            upin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(13)]]
        });
    }
    onSubmit() {
        this.submitted = true;
        var adminCC = {
            id: null,
            email: this.form.controls.email.value,
            name: this.form.controls.name.value,
            surname: this.form.controls.surname.value,
            address: this.form.controls.address.value,
            city: this.form.controls.city.value,
            state: this.form.controls.state.value,
            phoneNumber: this.form.controls.phoneNumber.value,
            upin: this.form.controls.upin.value,
        };
        this.clinicCenterAdminService.addAdmin(adminCC).subscribe((data) => { this.router.navigate(['../clinicCenterAdmins',], { relativeTo: this.activatedRoute }); }, (error) => { alert(error); });
    }
};
ClinicCenterAdminsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_clinic_center_admin_service__WEBPACK_IMPORTED_MODULE_5__["ClinicCenterAdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
ClinicCenterAdminsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clinic-center-admins',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clinic-center-admins.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/clinic-center-admins/clinic-center-admins.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clinic-center-admins.component.css */ "./src/app/components/adminCC-dashboard/clinic-center-admins/clinic-center-admins.component.css")).default]
    })
], ClinicCenterAdminsComponent);



/***/ }),

/***/ "./src/app/components/adminCC-dashboard/clinic-form/clinic-form.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/clinic-form/clinic-form.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DQy1kYXNoYm9hcmQvY2xpbmljLWZvcm0vY2xpbmljLWZvcm0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/adminCC-dashboard/clinic-form/clinic-form.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/clinic-form/clinic-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ClinicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicFormComponent", function() { return ClinicFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_clinic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/clinic.service */ "./src/app/services/clinic.service.ts");




let ClinicFormComponent = class ClinicFormComponent {
    constructor(router, clinicService, activatedRoute) {
        this.router = router;
        this.clinicService = clinicService;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.test = true;
    }
    onSubmit() {
        var clinic = {
            name: this.name,
            address: this.address,
            city: this.city,
            state: this.state,
            description: this.description
        };
        this.clinicService.addClinic(clinic).subscribe((data) => { this.router.navigate(['../clinics'], { relativeTo: this.activatedRoute }); }, (error) => alert(error));
    }
};
ClinicFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_clinic_service__WEBPACK_IMPORTED_MODULE_3__["ClinicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ClinicFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clinic-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clinic-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/clinic-form/clinic-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clinic-form.component.css */ "./src/app/components/adminCC-dashboard/clinic-form/clinic-form.component.css")).default]
    })
], ClinicFormComponent);



/***/ }),

/***/ "./src/app/components/adminCC-dashboard/clinic-listing/clinic-listing.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/clinic-listing/clinic-listing.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DQy1kYXNoYm9hcmQvY2xpbmljLWxpc3RpbmcvY2xpbmljLWxpc3RpbmcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/adminCC-dashboard/clinic-listing/clinic-listing.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/clinic-listing/clinic-listing.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ClinicListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicListingComponent", function() { return ClinicListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/clinic.service */ "./src/app/services/clinic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");





let ClinicListingComponent = class ClinicListingComponent {
    constructor(clinicService, router, activatedRoute, confirmationDialogService) {
        this.clinicService = clinicService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.confirmationDialogService = confirmationDialogService;
        this.clinicHeaders = ['Name', 'Address', 'City', 'State', 'Description'];
        this.navigationSubscription = this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                this.getClinics();
            }
        });
    }
    ngOnInit() {
    }
    getClinics() {
        this.clinicService.getClinics().subscribe((data) => {
            this.clinics = data;
            this.clinics.sort((a, b) => (a.id > b.id) ? 1 : -1);
        });
    }
    showClinicInfo(clinic) {
        this.router.navigate(['showClinicInfo'], { relativeTo: this.activatedRoute, state: { data: clinic } });
    }
    showClinicAdmins(clinic) {
        this.router.navigate(['clinicAdmins', { id: clinic.id, name: clinic.name }], { relativeTo: this.activatedRoute });
    }
    showNewClinicForm() {
        this.router.navigate(['addClinic'], { relativeTo: this.activatedRoute });
    }
    deleteClinic(clinic) {
        this.confirmationDialogService.confirm('Please confirm', 'Are you sure you want to delete clinic: ' + clinic.name + ' ?', false)
            .then((confirmed) => {
            if (confirmed.submited) {
                this.clinicService.deleteClinic(clinic).subscribe((data) => {
                    this.router.navigate(['../adminCC'], { relativeTo: this.activatedRoute });
                }, (error) => {
                    alert(error);
                });
            }
        });
    }
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
};
ClinicListingComponent.ctorParameters = () => [
    { type: src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_2__["ClinicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] }
];
ClinicListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clinic-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clinic-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/clinic-listing/clinic-listing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clinic-listing.component.css */ "./src/app/components/adminCC-dashboard/clinic-listing/clinic-listing.component.css")).default]
    })
], ClinicListingComponent);



/***/ }),

/***/ "./src/app/components/adminCC-dashboard/diagnosis-form/diagnosis-form.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/diagnosis-form/diagnosis-form.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DQy1kYXNoYm9hcmQvZGlhZ25vc2lzLWZvcm0vZGlhZ25vc2lzLWZvcm0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/adminCC-dashboard/diagnosis-form/diagnosis-form.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/diagnosis-form/diagnosis-form.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DiagnosisFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosisFormComponent", function() { return DiagnosisFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_clinical_center_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/clinical-center.service */ "./src/app/services/clinical-center.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");






let DiagnosisFormComponent = class DiagnosisFormComponent {
    constructor(formBuilder, clinicalCenterService, router, activatedRoute, confirmationDialogService) {
        this.formBuilder = formBuilder;
        this.clinicalCenterService = clinicalCenterService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.confirmationDialogService = confirmationDialogService;
        this.submitted = false;
    }
    ngOnInit() {
        var diagnosis = history.state.data;
        var code = "";
        var description = "";
        this.change = 'Add';
        if (diagnosis) {
            this.diagnosis_id = diagnosis.id;
            code = diagnosis.code;
            description = diagnosis.description;
            this.change = 'Change';
        }
        this.form = this.formBuilder.group({
            code: [code, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: [description, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    onSubmit() {
        if (this.diagnosis_id) {
            this.confirmationDialogService.confirm('Please confirm', 'Are you sure you want to ' + 'edit' + ' diagnosis with code: ' + this.form.controls.code.value + ' ?', false)
                .then((confirmed) => {
                if (confirmed.submited) {
                    this.submitOrEdit();
                }
            });
        }
        else {
            this.submitOrEdit();
        }
    }
    submitOrEdit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        var diagnosis = {
            id: this.diagnosis_id,
            code: this.form.controls.code.value,
            description: this.form.controls.description.value
        };
        if (this.diagnosis_id) {
            this.clinicalCenterService.editDiagnosis(diagnosis).subscribe((data) => { this.router.navigate(['../diagnoses'], { relativeTo: this.activatedRoute }); }, (error) => { alert(error); return; });
        }
        else {
            this.clinicalCenterService.addDiagnosis(diagnosis).subscribe((data) => { this.router.navigate(['../diagnoses'], { relativeTo: this.activatedRoute }); }, (error) => { alert(error); return; });
        }
    }
};
DiagnosisFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_clinical_center_service__WEBPACK_IMPORTED_MODULE_3__["ClinicalCenterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] }
];
DiagnosisFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-diagnosis-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./diagnosis-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/diagnosis-form/diagnosis-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./diagnosis-form.component.css */ "./src/app/components/adminCC-dashboard/diagnosis-form/diagnosis-form.component.css")).default]
    })
], DiagnosisFormComponent);



/***/ }),

/***/ "./src/app/components/adminCC-dashboard/diagnosis-listing/diagnosis-listing.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/diagnosis-listing/diagnosis-listing.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DQy1kYXNoYm9hcmQvZGlhZ25vc2lzLWxpc3RpbmcvZGlhZ25vc2lzLWxpc3RpbmcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/adminCC-dashboard/diagnosis-listing/diagnosis-listing.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/diagnosis-listing/diagnosis-listing.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: DiagnosisListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosisListingComponent", function() { return DiagnosisListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_clinical_center_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/clinical-center.service */ "./src/app/services/clinical-center.service.ts");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");





let DiagnosisListingComponent = class DiagnosisListingComponent {
    constructor(clinicalCenterService, router, activatedRoute, confirmationDialogService) {
        this.clinicalCenterService = clinicalCenterService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.confirmationDialogService = confirmationDialogService;
        this.diagnosisHeaders = ['Code', 'Description'];
        this.navigationSubscription = this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.getDiagnosis();
            }
        });
    }
    ngOnInit() {
    }
    getDiagnosis() {
        this.clinicalCenterService.getDiagnosis().subscribe((data) => {
            this.diagnoses = data;
        });
    }
    openDiagnosisForm(diagnosis) {
        this.router.navigate(['../diagnosis_info'], { relativeTo: this.activatedRoute, state: { data: diagnosis } });
    }
    deleteDiagnosis(diagnosis) {
        this.confirmationDialogService.confirm('Please confirm', 'Are you sure you want to delete diagnosis with code: ' + diagnosis.code + ' ?', false)
            .then((confirmed) => {
            if (confirmed.submited) {
                this.clinicalCenterService.deleteDiagnosis(diagnosis.id).subscribe((data) => this.getDiagnosis(), (error) => alert(error));
            }
        });
    }
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
};
DiagnosisListingComponent.ctorParameters = () => [
    { type: src_app_services_clinical_center_service__WEBPACK_IMPORTED_MODULE_3__["ClinicalCenterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] }
];
DiagnosisListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-diagnosis-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./diagnosis-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/diagnosis-listing/diagnosis-listing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./diagnosis-listing.component.css */ "./src/app/components/adminCC-dashboard/diagnosis-listing/diagnosis-listing.component.css")).default]
    })
], DiagnosisListingComponent);



/***/ }),

/***/ "./src/app/components/adminCC-dashboard/medication-form/medication-form.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/medication-form/medication-form.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DQy1kYXNoYm9hcmQvbWVkaWNhdGlvbi1mb3JtL21lZGljYXRpb24tZm9ybS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/adminCC-dashboard/medication-form/medication-form.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/medication-form/medication-form.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: MedicationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationFormComponent", function() { return MedicationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_clinical_center_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/clinical-center.service */ "./src/app/services/clinical-center.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");






let MedicationFormComponent = class MedicationFormComponent {
    constructor(formBuilder, clinicalCenterService, router, activatedRoute, confirmationDialogService) {
        this.formBuilder = formBuilder;
        this.clinicalCenterService = clinicalCenterService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.confirmationDialogService = confirmationDialogService;
        this.submitted = false;
    }
    ngOnInit() {
        var medication = history.state.data;
        var code = "";
        var name = "";
        this.change = 'Add';
        if (medication) {
            this.medication_id = medication.id;
            code = medication.code;
            name = medication.name;
            this.change = 'Change';
        }
        this.form = this.formBuilder.group({
            code: [code, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: [name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    onSubmit() {
        if (this.medication_id) {
            this.confirmationDialogService.confirm('Please confirm', 'Are you sure you want to ' + 'edit' + ' medication with code: ' + this.form.controls.code.value + ' ?', false)
                .then((confirmed) => {
                if (confirmed.submited) {
                    this.submitOrEdit();
                }
            });
        }
        else {
            this.submitOrEdit();
        }
    }
    submitOrEdit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        var medication = {
            id: this.medication_id,
            code: this.form.controls.code.value,
            name: this.form.controls.name.value
        };
        if (this.medication_id) {
            this.clinicalCenterService.editMedication(medication).subscribe((data) => { this.router.navigate(['../medications'], { relativeTo: this.activatedRoute }); }, (error) => { alert(error); return; });
        }
        else {
            this.clinicalCenterService.addMedication(medication).subscribe((data) => { this.router.navigate(['../medications'], { relativeTo: this.activatedRoute }); }, (error) => { alert(error); return; });
        }
    }
};
MedicationFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_clinical_center_service__WEBPACK_IMPORTED_MODULE_3__["ClinicalCenterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] }
];
MedicationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-medication-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./medication-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/medication-form/medication-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./medication-form.component.css */ "./src/app/components/adminCC-dashboard/medication-form/medication-form.component.css")).default]
    })
], MedicationFormComponent);



/***/ }),

/***/ "./src/app/components/adminCC-dashboard/medication-listing/medication-listing.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/medication-listing/medication-listing.component.css ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DQy1kYXNoYm9hcmQvbWVkaWNhdGlvbi1saXN0aW5nL21lZGljYXRpb24tbGlzdGluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/adminCC-dashboard/medication-listing/medication-listing.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/medication-listing/medication-listing.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: MedicationListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationListingComponent", function() { return MedicationListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_clinical_center_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/clinical-center.service */ "./src/app/services/clinical-center.service.ts");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");





let MedicationListingComponent = class MedicationListingComponent {
    constructor(clinicalCenterService, router, activatedRoute, confirmationDialogService) {
        this.clinicalCenterService = clinicalCenterService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.confirmationDialogService = confirmationDialogService;
        this.medicationHeaders = ['Code', 'Name'];
        this.navigationSubscription = this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.getMedications();
            }
        });
    }
    ngOnInit() {
    }
    getMedications() {
        this.clinicalCenterService.getMedications().subscribe((data) => {
            this.medications = data;
        });
    }
    openMedicationForm(medication) {
        this.router.navigate(['../medication_info'], { relativeTo: this.activatedRoute, state: { data: medication } });
    }
    deleteMedication(medication) {
        this.confirmationDialogService.confirm('Please confirm', 'Are you sure you want to delete medication with code: ' + medication.code + ' ?', false)
            .then((confirmed) => {
            if (confirmed.submited) {
                this.clinicalCenterService.deleteMedication(medication.id).subscribe((data) => this.getMedications(), (error) => alert(error));
            }
        });
    }
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
};
MedicationListingComponent.ctorParameters = () => [
    { type: src_app_services_clinical_center_service__WEBPACK_IMPORTED_MODULE_3__["ClinicalCenterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] }
];
MedicationListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-medication-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./medication-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/medication-listing/medication-listing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./medication-listing.component.css */ "./src/app/components/adminCC-dashboard/medication-listing/medication-listing.component.css")).default]
    })
], MedicationListingComponent);



/***/ }),

/***/ "./src/app/components/adminCC-dashboard/registration-listing/registration-listing.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/registration-listing/registration-listing.component.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5DQy1kYXNoYm9hcmQvcmVnaXN0cmF0aW9uLWxpc3RpbmcvcmVnaXN0cmF0aW9uLWxpc3RpbmcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/adminCC-dashboard/registration-listing/registration-listing.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/adminCC-dashboard/registration-listing/registration-listing.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: RegistrationListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationListingComponent", function() { return RegistrationListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_clinic_center_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/clinic-center-admin.service */ "./src/app/services/clinic-center-admin.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");





let RegistrationListingComponent = class RegistrationListingComponent {
    constructor(clinicCenterAdminService, router, activatedRoute, confirmationDialogService) {
        this.clinicCenterAdminService = clinicCenterAdminService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.confirmationDialogService = confirmationDialogService;
        this.requestsHeaders = ['Name', 'Surname', 'City', 'State', 'Phone Number', 'Email'];
        this.navigationSubscription = this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                this.getRequests();
            }
        });
    }
    ngOnInit() {
    }
    getRequests() {
        this.clinicCenterAdminService.getRegistrationRequests().subscribe((data) => {
            this.requests = data;
            this.requests.sort((a, b) => (a.id > b.id) ? 1 : -1);
        });
    }
    approveRequest(request) {
        this.confirmationDialogService.confirm('Please confirm', 'Are you sure you want to approve reqistration request for user: ' + request.name + ' ?', false)
            .then((confirmed) => {
            if (confirmed.submited) {
                this.clinicCenterAdminService.approveRequest(request).subscribe((data) => {
                    this.router.navigate(['../registrationRequests'], { relativeTo: this.activatedRoute });
                }, (error) => {
                    alert(error);
                });
            }
        })
            .catch(() => this.router.navigate(['../registrationRequests'], { relativeTo: this.activatedRoute }));
    }
    deleteRequest(request) {
        this.confirmationDialogService.confirm('Please confirm', 'Please provide a reason for deleting request for user: ' + request.name + ' ?', true)
            .then((confirmed) => {
            if (confirmed.submited) {
                this.clinicCenterAdminService.deleteRequest(request, confirmed.explanation).subscribe((data) => {
                    this.router.navigate(['../registrationRequests'], { relativeTo: this.activatedRoute });
                }, (error) => {
                    alert(error);
                });
            }
        })
            .catch(() => this.router.navigate(['../registrationRequests'], { relativeTo: this.activatedRoute }));
    }
};
RegistrationListingComponent.ctorParameters = () => [
    { type: _services_clinic_center_admin_service__WEBPACK_IMPORTED_MODULE_1__["ClinicCenterAdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] }
];
RegistrationListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-registration-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/adminCC-dashboard/registration-listing/registration-listing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration-listing.component.css */ "./src/app/components/adminCC-dashboard/registration-listing/registration-listing.component.css")).default]
    })
], RegistrationListingComponent);



/***/ }),

/***/ "./src/app/components/change-password/change-password.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/change-password/change-password.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/change-password/change-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/change-password/change-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(userService, router, formBuilder) {
        this.userService = userService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            oldPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(24)])],
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(24)])]
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        this.userService.changePassowrd(this.form.value)
            .subscribe(() => {
            this.userService.logout();
            this.router.navigate(['/login', { msgType: 'success', msgBody: 'Success! Please sign in with your new password.' }]);
        }, error => {
            this.submitted = false;
            alert('Invalid old password.');
        });
    }
    canExit() {
        const passwordChanged = this.userService.passwordChanged;
        if (passwordChanged) {
            return true;
        }
        else {
            alert("You need to change your password on first login!");
            return false;
        }
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/change-password/change-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-password.component.css */ "./src/app/components/change-password/change-password.component.css")).default]
    })
], ChangePasswordComponent);



/***/ }),

/***/ "./src/app/components/doctor-home/doctor-calendar/doctor-calendar.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/doctor-home/doctor-calendar/doctor-calendar.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DoctorCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorCalendarComponent", function() { return DoctorCalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/doctor.service */ "./src/app/services/doctor.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");










const colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
let DoctorCalendarComponent = class DoctorCalendarComponent {
    constructor(doctorService, router, userService, activatedRoute, modal, cookieService) {
        this.doctorService = doctorService;
        this.router = router;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.modal = modal;
        this.cookieService = cookieService;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarView"];
        this.viewDate = new Date();
        this.excludeDays = [0, 6];
        this.weekStartsOn = angular_calendar__WEBPACK_IMPORTED_MODULE_6__["DAYS_OF_WEEK"].SUNDAY;
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                a11yLabel: 'Edit',
                onClick: ({ event }) => {
                    this.handleEvent('Edited', event);
                }
            }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.events = [];
        this.activeDayIsOpen = false;
    }
    ngOnInit() {
        let user = JSON.parse(this.cookieService.get('user'));
        this.daystart = parseInt(user.shiftStart);
        this.dayend = parseInt(user.shiftEnd);
        this.doctorService.getAppointments().subscribe((data) => {
            this.populateCalendarEvents(data);
            this.refresh.next();
        }, (error) => {
            alert(error);
        });
        this.doctorService.getVacations().subscribe((data) => {
            this.populateVacations(data);
            this.refresh.next();
        }, (error) => {
            alert(error);
        });
    }
    dayClicked({ date, events }) {
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    }
    eventTimesChanged({ event, newStart, newEnd }) {
        this.events = this.events.map(iEvent => {
            if (iEvent === event) {
                return Object.assign({}, event, { start: newStart, end: newEnd });
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
    }
    handleEvent(action, event) {
        if (event.id) {
            let appointment = {};
            this.doctorService.getOneAppointment(event.id).subscribe((data) => {
                appointment = data;
                this.modalData = { appointment, action };
                this.modal.open(this.modalContent, { size: 'lg' });
            }, (error) => {
                alert(error);
            });
        }
        else {
            this.modalData = { appointment: event, action };
            this.modal.open(this.modalContentVacation, { size: 'lg' });
        }
    }
    addEvent() {
        this.events = [
            ...this.events,
            {
                title: 'New event',
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfDay"])(new Date()),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["endOfDay"])(new Date()),
                color: colors.red,
                draggable: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                }
            }
        ];
    }
    deleteEvent(eventToDelete) {
        this.events = this.events.filter(event => event !== eventToDelete);
    }
    setView(view) {
        this.view = view;
    }
    closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
    }
    // TODO: Izdvojiti operacije, preglede i godisnje odmore po bojama i u kodu
    populateCalendarEvents(data) {
        data.forEach(appointment => {
            var eventToAdd = {
                id: appointment.id,
                start: new Date(appointment.startingDateAndTime * 1000),
                end: new Date(appointment.endingDateAndTime * 1000),
                title: appointment.typeOfExamination.name,
                color: colors.red,
                actions: this.actions
            };
            this.events.push(eventToAdd);
        });
    }
    populateVacations(data) {
        data.forEach(vacation => {
            var eventToAdd = {
                start: new Date(vacation.startDate * 1000),
                end: new Date(vacation.endDate * 1000),
                title: "Vacation",
                color: colors.blue,
                actions: this.actions
            };
            this.events.push(eventToAdd);
        });
    }
    timeConverter(a) {
        a = new Date(a * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
        var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
        var time = date + '. ' + month + ' ' + year + '. ' + hour + ':' + min;
        return time;
    }
    startExamination(appointment) {
        this.modal.dismissAll();
        let patientID = appointment.patient.id;
        let doctor = JSON.parse(this.cookieService.get('user'));
        let doctorID = this.userService.getUser().name + " " + this.userService.getUser().surname;
        let type = appointment.typeOfExamination.name;
        let typeID = appointment.typeOfExamination.id;
        let appointmentP = appointment.id;
        let dateTime = appointment.startingDateAndTime;
        if (this.router.url.indexOf('calendar') === -1) {
            this.router.navigate([`examination`], { queryParams: { patient: patientID, doctor: doctorID, type: type, typeID: typeID, appointment: appointmentP, datetime: dateTime
                }, relativeTo: this.activatedRoute });
        }
        else {
            this.router.navigate([`../examination`], { queryParams: { patient: patientID, doctor: doctorID, type: type, typeID: typeID, appointment: appointmentP, datetime: dateTime
                }, relativeTo: this.activatedRoute });
        }
    }
    close() {
        this.modal.dismissAll();
    }
};
DoctorCalendarComponent.ctorParameters = () => [
    { type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_8__["DoctorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('modalContent', { static: true })
], DoctorCalendarComponent.prototype, "modalContent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('modalContentVacation', { static: true })
], DoctorCalendarComponent.prototype, "modalContentVacation", void 0);
DoctorCalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'mwl-demo-component',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        //styleUrls: ['./../../../../styles.css'],
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doctor-calendar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-home/doctor-calendar/doctor-calendar.component.html")).default
    })
], DoctorCalendarComponent);



/***/ }),

/***/ "./src/app/components/doctor-home/doctor-home/doctor-home.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/doctor-home/doctor-home/doctor-home.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    margin-bottom: 1em;\r\n}\r\n\r\nli+li { border-left: 1px solid #0000FF }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb2N0b3ItaG9tZS9kb2N0b3ItaG9tZS9kb2N0b3ItaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBLFFBQVEsK0JBQStCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kb2N0b3ItaG9tZS9kb2N0b3ItaG9tZS9kb2N0b3ItaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbmxpK2xpIHsgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwMEZGIH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/doctor-home/doctor-home/doctor-home.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/doctor-home/doctor-home/doctor-home.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DoctorHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorHomeComponent", function() { return DoctorHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DoctorHomeComponent = class DoctorHomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
DoctorHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doctor-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doctor-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-home/doctor-home/doctor-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doctor-home.component.css */ "./src/app/components/doctor-home/doctor-home/doctor-home.component.css")).default]
    })
], DoctorHomeComponent);



/***/ }),

/***/ "./src/app/components/doctor-home/doctor-my-profile/doctor-my-profile.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/doctor-home/doctor-my-profile/doctor-my-profile.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("li+li { border-left: 1px solid #0000FF }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb2N0b3ItaG9tZS9kb2N0b3ItbXktcHJvZmlsZS9kb2N0b3ItbXktcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsK0JBQStCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kb2N0b3ItaG9tZS9kb2N0b3ItbXktcHJvZmlsZS9kb2N0b3ItbXktcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGkrbGkgeyBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDAwRkYgfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/doctor-home/doctor-my-profile/doctor-my-profile.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/doctor-home/doctor-my-profile/doctor-my-profile.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DoctorMyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorMyProfileComponent", function() { return DoctorMyProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DoctorMyProfileComponent = class DoctorMyProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
DoctorMyProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doctor-my-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doctor-my-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-home/doctor-my-profile/doctor-my-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doctor-my-profile.component.css */ "./src/app/components/doctor-home/doctor-my-profile/doctor-my-profile.component.css")).default]
    })
], DoctorMyProfileComponent);



/***/ }),

/***/ "./src/app/components/doctor-home/doctor-profile/doctor-profile.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/doctor-home/doctor-profile/doctor-profile.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdG9yLWhvbWUvZG9jdG9yLXByb2ZpbGUvZG9jdG9yLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/doctor-home/doctor-profile/doctor-profile.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/doctor-home/doctor-profile/doctor-profile.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DoctorProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorProfileComponent", function() { return DoctorProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/doctor.service */ "./src/app/services/doctor.service.ts");






let DoctorProfileComponent = class DoctorProfileComponent {
    constructor(doctorService, formBuilder, router, activatedRoute, cookieService) {
        this.doctorService = doctorService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cookieService = cookieService;
    }
    ngOnInit() {
        this.getDoctorInfo();
    }
    getDoctorInfo() {
        this.doctorService.getDoctor().subscribe((data) => {
            this.doctor = data;
            this.loginForm = this.formBuilder.group({
                name: [this.doctor.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
                surname: [this.doctor.surname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                email: [this.doctor.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                address: [this.doctor.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                city: [this.doctor.city, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                state: [this.doctor.state, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                phoneNumber: [this.doctor.phoneNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                upin: [this.doctor.upin, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(13)]]
            });
            this.change = true;
        });
    }
    showChangePasswordForm() {
        this.router.navigate(['../change-password']);
    }
    enableChangeInfo() {
        this.change = !this.change;
    }
    cancelChanges() {
        this.change = !this.change;
        this.getDoctorInfo();
    }
    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        var doctor = {
            id: JSON.parse(this.cookieService.get('user'))['id'],
            email: this.loginForm.controls.email.value,
            name: this.loginForm.controls.name.value,
            surname: this.loginForm.controls.surname.value,
            address: this.loginForm.controls.address.value,
            city: this.loginForm.controls.city.value,
            state: this.loginForm.controls.state.value,
            phoneNumber: this.loginForm.controls.phoneNumber.value,
            upin: this.loginForm.controls.upin.value
        };
        this.doctorService.changeDoctor(doctor).subscribe((data) => { this.change = !this.change; return; }, (error) => { alert(error); });
    }
};
DoctorProfileComponent.ctorParameters = () => [
    { type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_5__["DoctorService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
DoctorProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doctor-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doctor-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-home/doctor-profile/doctor-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doctor-profile.component.css */ "./src/app/components/doctor-home/doctor-profile/doctor-profile.component.css")).default]
    })
], DoctorProfileComponent);



/***/ }),

/***/ "./src/app/components/doctor-home/examination/examination.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/doctor-home/examination/examination.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdG9yLWhvbWUvZXhhbWluYXRpb24vZXhhbWluYXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/doctor-home/examination/examination.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/doctor-home/examination/examination.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ExaminationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationComponent", function() { return ExaminationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_clinical_center_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/clinical-center.service */ "./src/app/services/clinical-center.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/doctor.service */ "./src/app/services/doctor.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");










let ExaminationComponent = class ExaminationComponent {
    /** control for the selected bank for multi-selection */
    constructor(patientService, clinicalCenterService, activatedRoute, formBuilder, cookieService, router, doctorService, modal, confirmationDialogService) {
        this.patientService = patientService;
        this.clinicalCenterService = clinicalCenterService;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.cookieService = cookieService;
        this.router = router;
        this.doctorService = doctorService;
        this.modal = modal;
        this.confirmationDialogService = confirmationDialogService;
        this.canExitFlag = false;
        this.config = {
            displayKey: "code",
            search: true,
            height: 'auto',
            placeholder: 'Select',
            customComparator: () => { },
            limitTo: 10,
            moreText: 'more',
            noResultsFound: 'No results found!',
            searchPlaceholder: 'Search medications',
            searchOnKey: 'code',
            clearOnSelection: false,
        };
        this.config2 = {
            displayKey: "code",
            search: true,
            height: 'auto',
            placeholder: 'Select',
            customComparator: () => { },
            limitTo: 10,
            moreText: 'more',
            noResultsFound: 'No results found!',
            searchPlaceholder: 'Search diagnoses',
            searchOnKey: 'code',
            clearOnSelection: false,
        };
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.patientID = +params['patient'];
            this.doctor = params['doctor'];
            this.type = params['type'];
            this.typeID = +params['typeID'];
            this.appointment = +params['appointment'];
            this.datetime = Number.parseFloat(params['datetime']);
            this.loadPatientInfo().then(() => {
            }, () => alert("Error loading data"));
            this.loadPrescriptions();
            this.loadDiagnoses();
        });
        this.examinationForm = this.formBuilder.group({
            reportDescription: [this.reportDescription, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            dateAndTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: this.timeConverter(this.datetime), disabled: true }),
            doctor: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: this.doctor, disabled: true }),
            diagnoses: [],
            prescriptions: [],
            typeOfExamination: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: this.type, disabled: true })
        });
    }
    loadPatientInfo() {
        let promise = new Promise((resolve, reject) => {
            this.patientService.getPatientById(this.patientID).subscribe((data) => { this.patient = data; resolve(); }, (error) => { console.log(error); reject(); });
        });
        return promise;
    }
    loadPrescriptions() {
        this.clinicalCenterService.getMedications().subscribe((data) => {
            this.prescriptions = data;
        }, (error) => { console.log(error); });
    }
    loadDiagnoses() {
        this.clinicalCenterService.getDiagnosis().subscribe((data) => {
            this.diagnoses = data;
        }, (error) => { console.log(error); });
    }
    timeConverter(a) {
        a = new Date(a * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
        var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
        var time = date + '. ' + month + ' ' + year + '. ' + hour + ':' + min;
        return time;
    }
    selectionChanged(event) {
    }
    submit() {
        this.submitted = true;
        if (this.examinationForm.invalid) {
            return;
        }
        let doctor = JSON.parse(this.cookieService.get('user'));
        var report = {
            performs: doctor,
            clinic: { id: doctor.clinic_id },
            reportDescription: this.examinationForm.controls.reportDescription.value,
            dateAndTime: this.datetime,
            diagnosis: this.examinationForm.controls.diagnoses.value,
            medications: this.examinationForm.controls.prescriptions.value,
            typeOfExamination: {
                id: this.typeID,
                name: this.type
            }
        };
        let patientID = this.patient.id;
        this.doctorService.submitReport(report, patientID, this.appointment).subscribe((data) => {
            this.canExitFlag = true;
            this.router.navigate([`../patients`], { relativeTo: this.activatedRoute });
        }, (error) => { alert(error); });
    }
    ShowMedicalRecord(patient) {
        //TODO
        let action = "Opened";
        let patientID = patient.id;
        let patientName = patient.name + " " + patient.surname;
        this.modalData = { patientID, patientName, action };
        this.modal.open(this.modalContent, { size: 'xl' });
    }
    scheduleNewAppointment(patient) {
        let action = "Opened";
        this.modal.open(this.newAppointmentModal, { size: 'lg' });
    }
    close() {
    }
    canExit(nextState) {
        if (this.canExitFlag) {
            return true;
        }
        else {
            this.confirmationDialogService.confirm('Warning', 'You are leaving this page without finishing an appointment. Proceed?', false)
                .then((confirmed) => {
                if (confirmed.submited) {
                    this.canExitFlag = true;
                    this.router.navigate([nextState.url], { relativeTo: this.activatedRoute });
                    return true;
                }
                else {
                    return false;
                }
            })
                .catch(() => { return false; });
        }
    }
};
ExaminationComponent.ctorParameters = () => [
    { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"] },
    { type: src_app_services_clinical_center_service__WEBPACK_IMPORTED_MODULE_5__["ClinicalCenterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_7__["DoctorService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true })
], ExaminationComponent.prototype, "modalContent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('newAppointmentModal', { static: true })
], ExaminationComponent.prototype, "newAppointmentModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('singleSelect', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true })
], ExaminationComponent.prototype, "singleSelect", void 0);
ExaminationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-examination',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./examination.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-home/examination/examination.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./examination.component.css */ "./src/app/components/doctor-home/examination/examination.component.css")).default]
    })
], ExaminationComponent);



/***/ }),

/***/ "./src/app/components/doctor-home/new-appointment-page/new-appointment-page.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/components/doctor-home/new-appointment-page/new-appointment-page.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdG9yLWhvbWUvbmV3LWFwcG9pbnRtZW50LXBhZ2UvbmV3LWFwcG9pbnRtZW50LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/doctor-home/new-appointment-page/new-appointment-page.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/doctor-home/new-appointment-page/new-appointment-page.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NewAppointmentPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAppointmentPageComponent", function() { return NewAppointmentPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/clinic.service */ "./src/app/services/clinic.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/appointment.service */ "./src/app/services/appointment.service.ts");








let NewAppointmentPageComponent = class NewAppointmentPageComponent {
    constructor(formBuilder, userService, clinicService, patientService, activatedRoute, appointmentService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.clinicService = clinicService;
        this.patientService = patientService;
        this.activatedRoute = activatedRoute;
        this.appointmentService = appointmentService;
        this.router = router;
        this.notifyParent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            let flag = params['time'];
            let time = 1000 * 60 * 10;
            let date = new Date();
            this.now = new Date(Math.round(date.getTime() / time) * time);
            if (flag) {
                this.startAppointmentNow = true;
            }
            else {
                this.startAppointmentNow = false;
            }
        });
        this.sub = this.activatedRoute.params.subscribe(params => {
            let patient_id = +params['patient_id'];
            if (!patient_id) {
                patient_id = this.patient;
            }
            this.loadData(patient_id).then(() => {
                this.createFormGroup();
            }, () => alert("Error loading data"));
        });
    }
    loadData(patient_id) {
        let promise = new Promise((resolve, reject) => {
            this.loadPatientInfo(patient_id).then(() => {
                this.loadTypesOfExamination().then(() => {
                    this.loadOrdinations().then(() => {
                        resolve();
                    }, () => reject());
                }, () => reject());
            }, () => reject());
        });
        return promise;
    }
    loadPatientInfo(patient_id) {
        let promise = new Promise((resolve, reject) => {
            this.patientService.getPatientById(patient_id).subscribe((data) => { this.patient = data; resolve(); }, (error) => { alert(error); reject(); });
        });
        return promise;
    }
    loadTypesOfExamination() {
        let promise = new Promise((resolve, reject) => {
            let clinic_id = this.userService.getUser().clinic_id;
            this.clinicService.getTypesOfExamination(clinic_id).subscribe((data) => { this.typesOfExamination = data; resolve(); }, (error) => { alert(error); reject(); });
        });
        return promise;
    }
    loadOrdinations() {
        let promise = new Promise((resolve, reject) => {
            if (this.startAppointmentNow) {
                let clinic_id = this.userService.getUser().clinic_id;
                this.clinicService.getOrdinations(clinic_id).subscribe((data) => { this.ordinations = data; resolve(); }, (error) => { alert(error); reject(); });
            }
            else {
                resolve();
            }
        });
        return promise;
    }
    createFormGroup() {
        let date;
        if (this.startAppointmentNow) {
            date = this.now;
        }
        this.form = this.formBuilder.group({
            dateAndTime: [date, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
            duration: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
            typeOfExamination: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
            ordination: [,],
            price: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
        });
        if (this.startAppointmentNow) {
            this.form.controls['ordination'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        }
    }
    setPriceFromTypeOfExamination() {
        let type = this.typesOfExamination.find(element => element.id == this.form.controls.typeOfExamination.value);
        if (!type) {
            this.form.controls['price'].setValue("");
            return;
        }
        this.form.controls['price'].setValue(type.price);
    }
    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        let doctor = this.userService.getUser();
        if (!doctor) {
            alert("Invalid user");
            return;
        }
        let clinic_id = doctor.clinic_id;
        let appointment = {
            id: null,
            startingDateAndTime: this.form.controls.dateAndTime.value.getTime() / 1000,
            duration: this.form.controls.duration.value * 60 * 1000,
            typeOfExamination: { id: this.form.controls.typeOfExamination.value },
            ordination: { id: this.form.controls.ordination.value },
            price: this.form.controls.price.value,
            clinic: { id: clinic_id },
            patient: { id: this.patient.id },
            doctors: [{ id: this.userService.getUser().id }]
        };
        if (this.startAppointmentNow) {
            this.appointmentService.startAppointment(appointment).subscribe((data) => {
                alert("Appointment created");
                let appo = data;
                let type = this.typesOfExamination.find(element => element.id == this.form.controls.typeOfExamination.value);
                let doctor = this.userService.getUser().name + " " + this.userService.getUser().surname;
                this.router.navigate([`../../examination`], { queryParams: { patient: this.patient.id, doctor: doctor, type: type.name, typeID: type.id, datetime: appointment.startingDateAndTime, appointment: appo.id }, relativeTo: this.activatedRoute });
                /* rutirati na stranicu za evidecniju o pregledu */
            }, (error) => { alert(error); });
        }
        else {
            this.appointmentService.scheduleNewAppointment(appointment, 'doctor').subscribe((data) => {
                alert("Appointment request created");
                this.notifyParent.emit();
            }, (error) => { alert(error); });
        }
    }
    cancelChanges() {
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
NewAppointmentPageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_3__["ClinicService"] },
    { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_6__["PatientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_7__["AppointmentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NewAppointmentPageComponent.prototype, "doctor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NewAppointmentPageComponent.prototype, "patient", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NewAppointmentPageComponent.prototype, "notifyParent", void 0);
NewAppointmentPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-appointment-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-appointment-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-home/new-appointment-page/new-appointment-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-appointment-page.component.css */ "./src/app/components/doctor-home/new-appointment-page/new-appointment-page.component.css")).default]
    })
], NewAppointmentPageComponent);



/***/ }),

/***/ "./src/app/components/doctor-home/new-vacation-request/new-vacation-request.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/components/doctor-home/new-vacation-request/new-vacation-request.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdG9yLWhvbWUvbmV3LXZhY2F0aW9uLXJlcXVlc3QvbmV3LXZhY2F0aW9uLXJlcXVlc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/doctor-home/new-vacation-request/new-vacation-request.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/doctor-home/new-vacation-request/new-vacation-request.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NewVacationRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewVacationRequestComponent", function() { return NewVacationRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_vacation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/vacation.service */ "./src/app/services/vacation.service.ts");






let NewVacationRequestComponent = class NewVacationRequestComponent {
    constructor(formBuilder, userService, router, activatedRoute, vacationService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.vacationService = vacationService;
    }
    ngOnInit() {
        let time = 1000 * 60 * 10;
        let date = new Date();
        this.now = new Date(Math.round(date.getTime() / time) * time);
        this.createFormGroup();
    }
    createFormGroup() {
        this.form = this.formBuilder.group({
            startingDateAndTime: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
            endingDateAndTime: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        let staff = this.userService.getUser();
        if (!staff) {
            alert("Invalid user");
            return;
        }
        let vacation = {
            startDate: this.form.controls.startingDateAndTime.value.getTime() / 1000,
            endDate: this.form.controls.endingDateAndTime.value.getTime() / 1000,
            staffId: this.userService.getUser().id
        };
        alert(vacation.startDate);
        this.vacationService.sendRequest(vacation).subscribe((data) => { this.router.navigate(['../profile'], { relativeTo: this.activatedRoute }); }, (error) => { alert(error); });
    }
    cancelChanges() {
    }
};
NewVacationRequestComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_vacation_service__WEBPACK_IMPORTED_MODULE_5__["VacationService"] }
];
NewVacationRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-vacation-request',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-vacation-request.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-home/new-vacation-request/new-vacation-request.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-vacation-request.component.css */ "./src/app/components/doctor-home/new-vacation-request/new-vacation-request.component.css")).default]
    })
], NewVacationRequestComponent);



/***/ }),

/***/ "./src/app/components/doctor-home/patient-listing/patient-listing.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/doctor-home/patient-listing/patient-listing.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdG9yLWhvbWUvcGF0aWVudC1saXN0aW5nL3BhdGllbnQtbGlzdGluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/doctor-home/patient-listing/patient-listing.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/doctor-home/patient-listing/patient-listing.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PatientListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientListingComponent", function() { return PatientListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");







let PatientListingComponent = class PatientListingComponent {
    constructor(patientService, router, activatedRoute, userService, formBuilder, modal) {
        this.patientService = patientService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.modal = modal;
        this.patientsHeaders = ['Name', 'Surname', 'UPIN', 'E-mail', 'City'];
        this.submitted = false;
    }
    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            name: [""],
            surname: [""],
            upin: [""]
        });
        this.filterForm = this.formBuilder.group({
            name: [""],
            surname: [""],
            upin: [""]
        });
        this.getPatients();
        this.onFilterChanges();
    }
    getPatients() {
        this.patientService.getClinicPatients().subscribe((data) => {
            this.patients = data;
            this.filteredPatients = data;
        }, (error) => {
            alert(error);
        });
    }
    sortName() {
        this.sortingOption = "name";
        this.sortClinics();
    }
    sortSurname() {
        this.sortingOption = "surname";
        this.sortClinics();
    }
    sortUpin() {
        this.sortingOption = "upin";
        this.sortClinics();
    }
    sortClinics() {
        switch (this.sortingOption) {
            case "name": {
                this.filteredPatients.sort((a, b) => (a.name > b.name) ? 1 : -1);
                break;
            }
            case "surname": {
                this.filteredPatients.sort((a, b) => (a.surname > b.surname) ? 1 : -1);
                break;
            }
            case "upin": {
                this.filteredPatients.sort((a, b) => (a.upin > b.upin) ? 1 : -1);
                break;
            }
            default: {
                this.filteredPatients.sort((a, b) => (a.id > b.id) ? 1 : -1);
                break;
            }
        }
    }
    onSearch() {
        this.submitted = true;
        var patient = {
            name: this.searchForm.controls.name.value ? this.searchForm.controls.name.value : "",
            surname: this.searchForm.controls.surname.value ? this.searchForm.controls.surname.value : "",
            upin: this.searchForm.controls.upin.value ? this.searchForm.controls.upin.value : ""
        };
        this.patientService.searchPatients(patient).subscribe((data) => {
            this.patients = data;
            this.filteredPatients = data;
        }, (error) => {
            alert(error);
        });
    }
    onFilterChanges() {
        this.filterForm.valueChanges.subscribe(filters => {
            this.filteredPatients = this.filterPatients(filters);
        });
    }
    filterPatients(filters) {
        return this.patients.filter(patient => patient.name.toLowerCase().indexOf(filters.name.toLowerCase()) !== -1 &&
            patient.surname.toLowerCase().indexOf(filters.surname.toLowerCase()) !== -1 &&
            patient.upin.indexOf(filters.upin) !== -1);
    }
    ShowMedicalRecord(patient) {
        this.patientService.checkAuthorityToViewMedicalRecord(patient.id).subscribe((data) => {
            let action = "Opened";
            let patientID = patient.id;
            let patientName = patient.name + " " + patient.surname;
            this.modalData = { patientID, patientName, action };
            this.modal.open(this.modalContent, { size: 'xl' });
        }, (error) => {
            alert(error);
        });
    }
    close() {
        this.modal.dismissAll();
    }
    startAppointment(patient_id) {
        this.router.navigate([`../new_appointment/${patient_id}`], { queryParams: { time: 'now' }, relativeTo: this.activatedRoute });
    }
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
};
PatientListingComponent.ctorParameters = () => [
    { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true })
], PatientListingComponent.prototype, "modalContent", void 0);
PatientListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patient-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patient-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor-home/patient-listing/patient-listing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patient-listing.component.css */ "./src/app/components/doctor-home/patient-listing/patient-listing.component.css")).default]
    })
], PatientListingComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
    }
    logout() {
        this.userService.logout();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/helperComponents/dialog/dialog.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/helperComponents/dialog/dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let DialogComponent = class DialogComponent {
    constructor(activeModal, formBuilder) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            explanation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    }
    decline() {
        var response = {
            explanation: "",
            submited: false
        };
        this.activeModal.close(response);
    }
    accept() {
        var response = {
            explanation: "",
            submited: true
        };
        this.activeModal.close(response);
    }
    onSubmit() {
        this.submitted = true;
        var response = {
            explanation: this.form.controls.explanation.value,
            submited: true
        };
        this.activeModal.close(response);
    }
    dismiss() {
        this.activeModal.dismiss();
    }
};
DialogComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DialogComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DialogComponent.prototype, "message", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DialogComponent.prototype, "btnOkText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DialogComponent.prototype, "btnCancelText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DialogComponent.prototype, "userInput", void 0);
DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/helperComponents/dialog/dialog.component.html")).default,
    })
], DialogComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");





let LoginComponent = class LoginComponent {
    constructor(formBuilder, route, router, userService
    // private authenticationService: AuthenticationService,
    ) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.loading = false;
        this.submitted = false;
        this.returnUrl = '';
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(24)]]
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
            .pipe()
            .subscribe(data => {
            //this.router.navigate([this.returnUrl]);
        }, error => {
            this.loading = false;
            alert(error);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/nurse-home/nurse-calendar/nurse-calendar.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/nurse-home/nurse-calendar/nurse-calendar.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    margin-bottom: 1em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udXJzZS1ob21lL251cnNlLWNhbGVuZGFyL251cnNlLWNhbGVuZGFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL251cnNlLWhvbWUvbnVyc2UtY2FsZW5kYXIvbnVyc2UtY2FsZW5kYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/nurse-home/nurse-calendar/nurse-calendar.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/nurse-home/nurse-calendar/nurse-calendar.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NurseCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NurseCalendarComponent", function() { return NurseCalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_nurse_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/nurse.service */ "./src/app/services/nurse.service.ts");









const colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
let NurseCalendarComponent = class NurseCalendarComponent {
    constructor(nurseService, router, activatedRoute, modal, cookieService) {
        this.nurseService = nurseService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.modal = modal;
        this.cookieService = cookieService;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarView"];
        this.viewDate = new Date();
        this.excludeDays = [0, 6];
        this.weekStartsOn = angular_calendar__WEBPACK_IMPORTED_MODULE_6__["DAYS_OF_WEEK"].SUNDAY;
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                a11yLabel: 'Edit',
                onClick: ({ event }) => {
                    this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                a11yLabel: 'Delete',
                onClick: ({ event }) => {
                    this.events = this.events.filter(iEvent => iEvent !== event);
                    this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.events = [];
        this.activeDayIsOpen = false;
    }
    ngOnInit() {
        let user = JSON.parse(this.cookieService.get('user'));
        this.daystart = parseInt(user.shiftStart);
        this.dayend = parseInt(user.shiftEnd);
        this.nurseService.getVacations().subscribe((data) => {
            this.populateCalendarEvents(data);
            this.refresh.next();
        }, (error) => {
            alert(error);
        });
    }
    dayClicked({ date, events }) {
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    }
    eventTimesChanged({ event, newStart, newEnd }) {
        this.events = this.events.map(iEvent => {
            if (iEvent === event) {
                return Object.assign({}, event, { start: newStart, end: newEnd });
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
    }
    handleEvent(action, event) {
        this.modalData = { event, action };
        this.modal.open(this.modalContent, { size: 'lg' });
    }
    deleteEvent(eventToDelete) {
        this.events = this.events.filter(event => event !== eventToDelete);
    }
    setView(view) {
        this.view = view;
    }
    closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
    }
    // TODO: Izdvojiti operacije, preglede i godisnje odmore po bojama i u kodu
    populateCalendarEvents(data) {
        data.forEach(appointment => {
            var eventToAdd = {
                start: new Date(appointment.startDate * 1000),
                end: new Date(appointment.endDate * 1000),
                title: "Vacation",
                color: colors.blue,
                actions: this.actions
            };
            this.events.push(eventToAdd);
        });
    }
    timeConverter(a) {
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
        var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
        var time = date + '. ' + month + ' ' + year + '. ' + hour + ':' + min;
        return time;
    }
    close() {
        this.modal.dismissAll();
    }
};
NurseCalendarComponent.ctorParameters = () => [
    { type: src_app_services_nurse_service__WEBPACK_IMPORTED_MODULE_8__["NurseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('modalContent', { static: true })
], NurseCalendarComponent.prototype, "modalContent", void 0);
NurseCalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-nurse-calendar',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nurse-calendar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-home/nurse-calendar/nurse-calendar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nurse-calendar.component.css */ "./src/app/components/nurse-home/nurse-calendar/nurse-calendar.component.css")).default]
    })
], NurseCalendarComponent);



/***/ }),

/***/ "./src/app/components/nurse-home/nurse-home.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/nurse-home/nurse-home.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("li+li { border-left: 1px solid #0000FF }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udXJzZS1ob21lL251cnNlLWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFRLCtCQUErQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnVyc2UtaG9tZS9udXJzZS1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaStsaSB7IGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDBGRiB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/nurse-home/nurse-home.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/nurse-home/nurse-home.component.ts ***!
  \***************************************************************/
/*! exports provided: NurseHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NurseHomeComponent", function() { return NurseHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NurseHomeComponent = class NurseHomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
NurseHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nurse-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nurse-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-home/nurse-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nurse-home.component.css */ "./src/app/components/nurse-home/nurse-home.component.css")).default]
    })
], NurseHomeComponent);



/***/ }),

/***/ "./src/app/components/nurse-home/nurse-patient-listing/nurse-patient-listing.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/nurse-home/nurse-patient-listing/nurse-patient-listing.component.css ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnVyc2UtaG9tZS9udXJzZS1wYXRpZW50LWxpc3RpbmcvbnVyc2UtcGF0aWVudC1saXN0aW5nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/nurse-home/nurse-patient-listing/nurse-patient-listing.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/nurse-home/nurse-patient-listing/nurse-patient-listing.component.ts ***!
  \************************************************************************************************/
/*! exports provided: NursePatientListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NursePatientListingComponent", function() { return NursePatientListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");







let NursePatientListingComponent = class NursePatientListingComponent {
    constructor(patientService, router, activatedRoute, userService, formBuilder, modal) {
        this.patientService = patientService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.modal = modal;
        this.patientsHeaders = ['Name', 'Surname', 'UPIN', 'E-mail', 'City'];
        this.submitted = false;
    }
    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            name: [""],
            surname: [""],
            upin: [""]
        });
        this.filterForm = this.formBuilder.group({
            name: [""],
            surname: [""],
            upin: [""]
        });
        this.getPatients();
        this.onFilterChanges();
    }
    getPatients() {
        this.patientService.getClinicPatients().subscribe((data) => {
            this.patients = data;
            this.filteredPatients = data;
        }, (error) => {
            alert(error);
        });
    }
    onSearch() {
        this.submitted = true;
        var patient = {
            name: this.searchForm.controls.name.value ? this.searchForm.controls.name.value : "",
            surname: this.searchForm.controls.surname.value ? this.searchForm.controls.surname.value : "",
            upin: this.searchForm.controls.upin.value ? this.searchForm.controls.upin.value : ""
        };
        this.patientService.searchPatients(patient).subscribe((data) => {
            this.patients = data;
            this.filteredPatients = data;
        }, (error) => {
            alert(error);
        });
    }
    onFilterChanges() {
        this.filterForm.valueChanges.subscribe(filters => {
            this.filteredPatients = this.filterPatients(filters);
        });
    }
    filterPatients(filters) {
        return this.patients.filter(patient => patient.name.toLowerCase().indexOf(filters.name.toLowerCase()) !== -1 &&
            patient.surname.toLowerCase().indexOf(filters.surname.toLowerCase()) !== -1 &&
            patient.upin.indexOf(filters.upin) !== -1);
    }
    ShowMedicalRecord(patient) {
        //TODO
        let action = "Opened";
        let patientID = patient.id;
        let patientName = patient.name + " " + patient.surname;
        this.modalData = { patientID, patientName, action };
        this.modal.open(this.modalContent, { size: 'xl' });
    }
    close() {
        this.modal.dismissAll();
    }
    timeConverter(a) {
        a = new Date(a * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
        var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
        var time = date + '. ' + month + ' ' + year + '. ' + hour + ':' + min;
        return time;
    }
    sortName() {
        this.sortingOption = "name";
        this.sortPatients();
    }
    sortUpin() {
        this.sortingOption = "upin";
        this.sortPatients();
    }
    sortAddress() {
        this.sortingOption = "address";
        this.sortPatients();
    }
    sortCity() {
        this.sortingOption = "city";
        this.sortPatients();
    }
    sortState() {
        this.sortingOption = "state";
        this.sortPatients();
    }
    sortPatients() {
        switch (this.sortingOption) {
            case "name": {
                this.patients.sort((a, b) => (a.name > b.name) ? 1 : -1);
                break;
            }
            case "address": {
                this.patients.sort((a, b) => (a.address > b.address) ? 1 : -1);
                break;
            }
            case "city": {
                this.patients.sort((a, b) => (a.city > b.city) ? 1 : -1);
                break;
            }
            case "state": {
                this.patients.sort((a, b) => (a.state > b.state) ? 1 : -1);
                break;
            }
            case "upin": {
                this.patients.sort((a, b) => (a.upin > b.upin) ? 1 : -1);
                break;
            }
            default: {
                this.patients.sort((a, b) => (a.id > b.id) ? 1 : -1);
                break;
            }
        }
    }
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
};
NursePatientListingComponent.ctorParameters = () => [
    { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true })
], NursePatientListingComponent.prototype, "modalContent", void 0);
NursePatientListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nurse-patient-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nurse-patient-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-home/nurse-patient-listing/nurse-patient-listing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nurse-patient-listing.component.css */ "./src/app/components/nurse-home/nurse-patient-listing/nurse-patient-listing.component.css")).default]
    })
], NursePatientListingComponent);



/***/ }),

/***/ "./src/app/components/nurse-home/nurse-profile/nurse-personal-profile/nurse-personal-profile.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/nurse-home/nurse-profile/nurse-personal-profile/nurse-personal-profile.component.css ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnVyc2UtaG9tZS9udXJzZS1wcm9maWxlL251cnNlLXBlcnNvbmFsLXByb2ZpbGUvbnVyc2UtcGVyc29uYWwtcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/nurse-home/nurse-profile/nurse-personal-profile/nurse-personal-profile.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/nurse-home/nurse-profile/nurse-personal-profile/nurse-personal-profile.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: NursePersonalProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NursePersonalProfileComponent", function() { return NursePersonalProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_nurse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/nurse.service */ "./src/app/services/nurse.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let NursePersonalProfileComponent = class NursePersonalProfileComponent {
    constructor(nurseService, formBuilder, router) {
        this.nurseService = nurseService;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    ngOnInit() {
        this.getNurseInfo();
    }
    getNurseInfo() {
        this.nurseService.getNurse().subscribe((data) => {
            this.nurse = data;
            this.form = this.formBuilder.group({
                name: [this.nurse.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
                surname: [this.nurse.surname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                email: [this.nurse.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                address: [this.nurse.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                city: [this.nurse.city, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                state: [this.nurse.state, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                phoneNumber: [this.nurse.phoneNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                upin: [this.nurse.upin, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(13)]]
            });
            this.change = true;
        }, (error) => {
            alert(error);
        });
    }
    enableChangeInfo() {
        this.change = !this.change;
    }
    cancelChanges() {
        this.change = !this.change;
        this.getNurseInfo();
    }
    showChangePasswordForm() {
        this.router.navigate(['../change-password']);
    }
    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        var nurse = {
            id: this.nurse.id,
            email: this.form.controls.email.value,
            name: this.form.controls.name.value,
            surname: this.form.controls.surname.value,
            address: this.form.controls.address.value,
            city: this.form.controls.city.value,
            state: this.form.controls.state.value,
            phoneNumber: this.form.controls.phoneNumber.value,
            upin: this.form.controls.upin.value
        };
        this.nurseService.changeNurse(nurse).subscribe((data) => { this.change = !this.change; return; }, (error) => { alert(error); });
    }
};
NursePersonalProfileComponent.ctorParameters = () => [
    { type: src_app_services_nurse_service__WEBPACK_IMPORTED_MODULE_3__["NurseService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
NursePersonalProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nurse-personal-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nurse-personal-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-home/nurse-profile/nurse-personal-profile/nurse-personal-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nurse-personal-profile.component.css */ "./src/app/components/nurse-home/nurse-profile/nurse-personal-profile/nurse-personal-profile.component.css")).default]
    })
], NursePersonalProfileComponent);



/***/ }),

/***/ "./src/app/components/nurse-home/nurse-profile/nurse-profile.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/nurse-home/nurse-profile/nurse-profile.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("li+li { border-left: 1px solid #0000FF }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udXJzZS1ob21lL251cnNlLXByb2ZpbGUvbnVyc2UtcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsK0JBQStCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9udXJzZS1ob21lL251cnNlLXByb2ZpbGUvbnVyc2UtcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGkrbGkgeyBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDAwRkYgfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/nurse-home/nurse-profile/nurse-profile.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/nurse-home/nurse-profile/nurse-profile.component.ts ***!
  \********************************************************************************/
/*! exports provided: NurseProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NurseProfileComponent", function() { return NurseProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NurseProfileComponent = class NurseProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
NurseProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nurse-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nurse-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-home/nurse-profile/nurse-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nurse-profile.component.css */ "./src/app/components/nurse-home/nurse-profile/nurse-profile.component.css")).default]
    })
], NurseProfileComponent);



/***/ }),

/***/ "./src/app/components/nurse-home/prescription-listing/prescription-listing.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/nurse-home/prescription-listing/prescription-listing.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnVyc2UtaG9tZS9wcmVzY3JpcHRpb24tbGlzdGluZy9wcmVzY3JpcHRpb24tbGlzdGluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/nurse-home/prescription-listing/prescription-listing.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/nurse-home/prescription-listing/prescription-listing.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PrescriptionListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriptionListingComponent", function() { return PrescriptionListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/clinic.service */ "./src/app/services/clinic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");







let PrescriptionListingComponent = class PrescriptionListingComponent {
    constructor(clinicService, router, activatedRoute, userService, formBuilder, confirmationDialogService) {
        this.clinicService = clinicService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.confirmationDialogService = confirmationDialogService;
        this.prescriptionsHeader = ['Doctor name', 'Doctor surname', 'Medication'];
        this.submitted = false;
        this.navigationSubscription = this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                this.clinicID = this.userService.getUser().clinic_id;
                this.getPrescriptions();
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
            surname: [""],
            medication: [""]
        });
    }
    getPrescriptions() {
        this.clinicID = this.userService.getUser().clinic_id;
        this.clinicService.getPrescriptions(this.clinicID).subscribe((data) => {
            this.prescriptions = data;
        }, (error) => {
            alert(error);
        });
    }
    approvePrescription(prescription) {
        this.confirmationDialogService.confirm('Please confirm', 'Are you sure you want to approve prescription for medication: ' + prescription.medication_name + ' ?', false)
            .then((confirmed) => {
            if (confirmed.submited) {
                this.clinicService.approvePrescription(prescription).subscribe((data) => {
                    this.getPrescriptions();
                }, (error) => {
                    alert(error);
                });
            }
        });
    }
    onSearch() {
        this.submitted = true;
        var prescription = {
            name: this.searchForm.controls.name.value ? this.searchForm.controls.name.value : "",
            surname: this.searchForm.controls.surname.value ? this.searchForm.controls.surname.value : "",
            medication: this.searchForm.controls.medication.value ? this.searchForm.controls.medication.value : "",
            clinic_id: this.userService.getUser().clinic_id
        };
        this.clinicService.searchPrescriptions(prescription).subscribe((data) => {
            this.prescriptions = data;
        }, (error) => {
            alert(error);
        });
    }
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
};
PrescriptionListingComponent.ctorParameters = () => [
    { type: src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_4__["ClinicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"] }
];
PrescriptionListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-prescription-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./prescription-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nurse-home/prescription-listing/prescription-listing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./prescription-listing.component.css */ "./src/app/components/nurse-home/prescription-listing/prescription-listing.component.css")).default]
    })
], PrescriptionListingComponent);



/***/ }),

/***/ "./src/app/components/patient-home/patient-available-appointments/patient-available-appointments.component.css":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/patient-home/patient-available-appointments/patient-available-appointments.component.css ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF0aWVudC1ob21lL3BhdGllbnQtYXZhaWxhYmxlLWFwcG9pbnRtZW50cy9wYXRpZW50LWF2YWlsYWJsZS1hcHBvaW50bWVudHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/patient-home/patient-available-appointments/patient-available-appointments.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/components/patient-home/patient-available-appointments/patient-available-appointments.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: PatientAvailableAppointmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientAvailableAppointmentsComponent", function() { return PatientAvailableAppointmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/appointment.service */ "./src/app/services/appointment.service.ts");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");






let PatientAvailableAppointmentsComponent = class PatientAvailableAppointmentsComponent {
    constructor(router, activatedRoute, userService, appointmentService, confirmationDialogService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.appointmentService = appointmentService;
        this.confirmationDialogService = confirmationDialogService;
        this.appointmentHeaders = ['Doctor', 'Ordination name and number', 'Type', 'Date and time', 'Duration (minutes)', 'Price', 'Discount'];
        this.navigationSubscription = this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.activatedRoute.params.subscribe((params) => {
                    this.clinicID = +params['clinic_id'];
                    this.getAppointments();
                });
            }
        });
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.clinicID = +params['clinic_id'];
        });
    }
    getAppointments() {
        this.appointmentService.getClinicAvailableAppointments(this.clinicID).subscribe((data) => {
            this.appointments = data;
            for (const [i, value] of this.appointments.entries()) {
                this.appointments[i].formatedDateAndTime = this.timeConverter(this.appointments[i].startingDateAndTime);
            }
            this.appointments.sort((a, b) => (a.id > b.id) ? 1 : -1);
        }, (error) => {
            alert(error);
        });
    }
    chooseAvailableAppointment(appointment) {
        let patient_id = this.userService.getUser().id;
        this.appointmentService.choseAvailableAppointment(appointment.id, patient_id).subscribe((data) => {
            alert("Successfully selected an appointment");
            this.getAppointments();
        }, (error) => {
            alert(error);
        });
    }
    timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
        var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
        var time = date + '. ' + month + ' ' + year + '. ' + hour + ':' + min + ':' + sec;
        return time;
    }
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
};
PatientAvailableAppointmentsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_4__["AppointmentService"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] }
];
PatientAvailableAppointmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patient-available-appointments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patient-available-appointments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-home/patient-available-appointments/patient-available-appointments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patient-available-appointments.component.css */ "./src/app/components/patient-home/patient-available-appointments/patient-available-appointments.component.css")).default]
    })
], PatientAvailableAppointmentsComponent);



/***/ }),

/***/ "./src/app/components/patient-home/patient-clinic-listing/patient-clinic-listing.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/patient-home/patient-clinic-listing/patient-clinic-listing.component.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF0aWVudC1ob21lL3BhdGllbnQtY2xpbmljLWxpc3RpbmcvcGF0aWVudC1jbGluaWMtbGlzdGluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/patient-home/patient-clinic-listing/patient-clinic-listing.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/patient-home/patient-clinic-listing/patient-clinic-listing.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: PatientClinicListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientClinicListingComponent", function() { return PatientClinicListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/clinic.service */ "./src/app/services/clinic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_clinical_center_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/clinical-center.service */ "./src/app/services/clinical-center.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");








let PatientClinicListingComponent = class PatientClinicListingComponent {
    constructor(patientService, router, activatedRoute, formBuilder, clinicalCenterService, clinicService, modal) {
        this.patientService = patientService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.clinicalCenterService = clinicalCenterService;
        this.clinicService = clinicService;
        this.modal = modal;
        this.clinicHeaders = ['Name', 'Address'];
        this.submitted = false;
        this.starRatingSearch = 0;
        this.clinicsSearchedHeaders = ['Name', 'Address', 'Rating', 'Price'];
        this.notSearched = true;
    }
    ngOnInit() {
        this.notSearched = true;
        this.loadData();
        this.createFormGroups();
        this.onFilterChanges();
    }
    //LOAD METHODS
    createFormGroups() {
        let date;
        date = new Date();
        this.form = this.formBuilder.group({
            date: [date, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,]],
            name: [""],
            typeOfExamination: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,]],
            address: [""],
            rating: [""],
        });
        this.filterForm = this.formBuilder.group({
            name: [""],
            address: [""],
            price: [""],
        });
    }
    loadData() {
        let promise = new Promise((resolve, reject) => {
            this.loadClinics().then(() => {
                this.loadTypesOfExamination().then(() => {
                    resolve();
                }, () => reject());
            }, () => reject());
        });
        return promise;
    }
    loadTypesOfExamination() {
        let promise = new Promise((resolve, reject) => {
            this.clinicalCenterService.getTypesOfExamination().subscribe((data) => { this.typesOfExamination = data; resolve(); }, (error) => { alert(error); reject(); });
        });
        return promise;
    }
    loadClinics() {
        let promise = new Promise((resolve, reject) => {
            this.patientService.getClinics().subscribe((data) => {
                this.clinics = data;
                this.clinicsFiltered = data;
                this.clinicsFiltered.sort((a, b) => (a.id > b.id) ? 1 : -1);
                resolve();
            }, (error) => { alert(error); reject(); });
        });
        return promise;
    }
    //LISTING METHODS
    sortName() {
        this.sortingOption = "name";
        this.sortClinics();
    }
    sortAddress() {
        this.sortingOption = "address";
        this.sortClinics();
    }
    sortCity() {
        this.sortingOption = "city";
        this.sortClinics();
    }
    sortPrice() {
        this.sortingOption = "price";
        this.sortClinics();
    }
    sortRating() {
        this.sortingOption = "rating";
        this.sortClinics();
    }
    sortClinics() {
        switch (this.sortingOption) {
            case "name": {
                this.clinicsFiltered.sort((a, b) => (a.name > b.name) ? 1 : -1);
                break;
            }
            case "address": {
                this.clinicsFiltered.sort((a, b) => (a.address > b.address) ? 1 : -1);
                break;
            }
            case "city": {
                this.clinicsFiltered.sort((a, b) => (a.city > b.city) ? 1 : -1);
                break;
            }
            case "price": {
                this.clinicsFiltered.sort((a, b) => (a.typeOfExamination.price > b.typeOfExamination.price) ? 1 : -1);
                break;
            }
            case "rating": {
                this.clinicsFiltered.sort((a, b) => ((a.numberOfStars / a.numberOfReviews) < (b.numberOfStars / b.numberOfReviews)) ? 1 : -1);
                break;
            }
            default: {
                this.clinicsFiltered.sort((a, b) => (a.id > b.id) ? 1 : -1);
                break;
            }
        }
    }
    onFilterChanges() {
        this.filterForm.valueChanges.subscribe(filters => {
            this.clinicsFiltered = this.filterClinics(filters);
        });
    }
    filterClinics(filters) {
        return this.clinicsSearched.filter(clinic => clinic.name.toLowerCase().indexOf(filters.name.toLowerCase()) !== -1 &&
            clinic.address.toLowerCase().indexOf(filters.address.toLowerCase()) !== -1
            && clinic.typeOfExamination.price.toString().indexOf(filters.price) !== -1);
    }
    onSearch() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        var criteria = {
            name: this.form.controls.name.value ? this.form.controls.name.value : "",
            address: this.form.controls.address.value ? this.form.controls.address.value : "",
            typeOfExamination: this.form.controls.typeOfExamination.value,
            rating: this.starRatingSearch ? this.starRatingSearch : -1,
            date: this.form.controls.date.value.getTime().toString().substr(0, 10)
        };
        this.searchClinics(criteria).then(() => {
            this.notSearched = false;
        }, () => alert("Error searching clinics"));
    }
    searchClinics(criteria) {
        let promise = new Promise((resolve, reject) => {
            this.clinicService.searchClinics(criteria).subscribe((data) => {
                this.clinicsSearched = data;
                this.clinicsFiltered = data;
                resolve();
            }, (error) => {
                alert(error);
                reject();
            });
        });
        return promise;
    }
    //OTHER FUNCTIONS
    onRateSearch($event) {
        this.starRatingSearch = $event.newValue;
    }
    showClinicInfo(clinic) {
        let action = "Opened";
        let clinicID = clinic.id;
        let clinicName = clinic.name;
        let clinicAddress = clinic.address;
        let clinicCity = clinic.city;
        let clinicState = clinic.state;
        let clinicDescription = clinic.description;
        let rating = clinic.numberOfStars / clinic.numberOfReviews;
        this.loadClinicLocation(clinicAddress, clinicCity, clinicState).then(() => {
            let chars;
            chars = this.locationModal.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
            let res = chars.split(' ');
            let location;
            location = [0, 0];
            location[0] = Number(res[1]);
            location[1] = Number(res[0]);
            this.modalData = { clinicID, clinicName, clinicAddress, clinicCity, clinicState, clinicDescription, location, rating, action };
            this.modal.open(this.modalContent, { size: 'xl' });
        }, () => alert("Error loading data"));
    }
    loadClinicLocation(clinicAddress, clinicCity, clinicState) {
        let promise = new Promise((resolve, reject) => {
            this.clinicService.getClinicLocation(clinicAddress, clinicCity, clinicState).subscribe((data) => { this.locationModal = data; resolve(); }, (error) => { alert(error); reject(); });
        });
        return promise;
    }
    showDoctors(clinic) {
        let clinic_id = clinic.id;
        let dateP = this.form.controls.date.value.getTime().toString().substr(0, 13);
        let TOEP = this.form.controls.typeOfExamination.value ? this.form.controls.typeOfExamination.value : -1;
        if (this.router.url.indexOf('clinics') === -1) {
            this.router.navigate([`doctors/${clinic_id}`], { queryParams: { TOE: TOEP, date: dateP }, relativeTo: this.activatedRoute });
        }
        else {
            this.router.navigate([`../doctors/${clinic_id}`], { queryParams: { TOE: TOEP, date: dateP }, relativeTo: this.activatedRoute });
        }
    }
    showClinicsDoctors(clinic) {
        let clinic_id = clinic.id;
        if (this.router.url.indexOf('clinics') === -1) {
            this.router.navigate([`doctors/${clinic_id}`], { relativeTo: this.activatedRoute });
        }
        else {
            this.router.navigate([`../doctors/${clinic_id}`], { relativeTo: this.activatedRoute });
        }
    }
    showAvailableAppointments(clinic_id) {
        if (this.router.url.indexOf('clinics') === -1) {
            this.router.navigate([`available_appointments/${clinic_id}`], { relativeTo: this.activatedRoute });
        }
        else {
            this.router.navigate([`../available_appointments/${clinic_id}`], { relativeTo: this.activatedRoute });
        }
    }
    close() {
        this.modal.dismissAll();
    }
    ngOnDestroy() {
        this.modal.dismissAll();
    }
};
PatientClinicListingComponent.ctorParameters = () => [
    { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_4__["PatientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_services_clinical_center_service__WEBPACK_IMPORTED_MODULE_6__["ClinicalCenterService"] },
    { type: src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_2__["ClinicService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true })
], PatientClinicListingComponent.prototype, "modalContent", void 0);
PatientClinicListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patient-clinic-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patient-clinic-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-home/patient-clinic-listing/patient-clinic-listing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patient-clinic-listing.component.css */ "./src/app/components/patient-home/patient-clinic-listing/patient-clinic-listing.component.css")).default]
    })
], PatientClinicListingComponent);



/***/ }),

/***/ "./src/app/components/patient-home/patient-doctor-listing/patient-doctor-listing.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/patient-home/patient-doctor-listing/patient-doctor-listing.component.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF0aWVudC1ob21lL3BhdGllbnQtZG9jdG9yLWxpc3RpbmcvcGF0aWVudC1kb2N0b3ItbGlzdGluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/patient-home/patient-doctor-listing/patient-doctor-listing.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/patient-home/patient-doctor-listing/patient-doctor-listing.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: PatientDoctorListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientDoctorListingComponent", function() { return PatientDoctorListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/clinic.service */ "./src/app/services/clinic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/doctor.service */ "./src/app/services/doctor.service.ts");








let PatientDoctorListingComponent = class PatientDoctorListingComponent {
    constructor(formBuilder, userService, router, clinicService, doctorService, activatedRoute, modal) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.clinicService = clinicService;
        this.doctorService = doctorService;
        this.activatedRoute = activatedRoute;
        this.modal = modal;
        this.doctorHeaders = ['Name', 'Surname', 'Rating'];
        this.availibleApptHeaders = ['From'];
        this.submitted = false;
        this.starRatingFilter = 0;
        this.starRatingSearch = 0;
        this.notSearched = true;
    }
    ngOnInit() {
        this.date = new Date();
        this.date.setHours(0, 0, 0, 0);
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.clinic_id_param = +params['clinic_id'];
        });
        this.activatedRoute.queryParams.subscribe(params => {
            this.TOE_param = +params['TOE'];
            this.date_param = +params['date'];
        });
        if (!this.clinic_id_param)
            alert("ERROR, NO CLINIC ID!");
        this.createFormGroups();
        this.loadData(this.clinic_id_param).then(() => {
            this.onFilterChanges();
            if (this.TOE_param) {
                this.onSearch();
            }
        }, () => alert("Error loading data"));
    }
    //LOADING METHODS
    createFormGroups() {
        let date = new Date();
        if (this.date_param) {
            this.date = new Date(this.date_param);
            this.date.setHours(0, 0, 0, 0);
        }
        this.form = this.formBuilder.group({
            date: [this.date, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
            name: [""],
            typeOfExamination: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
            surname: [""],
            rating: [""],
        });
        this.filterForm = this.formBuilder.group({
            name: [""],
            surname: [""],
            rating: [""],
        });
        if (this.TOE_param) {
            this.form.controls['typeOfExamination'].setValue(this.TOE_param);
        }
    }
    loadData(clinic_id) {
        let promise = new Promise((resolve, reject) => {
            this.loadDoctors().then(() => {
                this.loadTypesOfExamination().then(() => {
                    resolve();
                }, () => reject());
            }, () => reject());
        });
        return promise;
    }
    loadTypesOfExamination() {
        let promise = new Promise((resolve, reject) => {
            let clinic_id = this.clinic_id_param;
            this.clinicService.getTypesOfExamination(clinic_id).subscribe((data) => { this.typesOfExamination = data; resolve(); }, (error) => { alert(error); reject(); });
        });
        return promise;
    }
    loadDoctors() {
        let promise = new Promise((resolve, reject) => {
            let clinic_id = this.clinic_id_param;
            this.clinicService.getDoctors(clinic_id).subscribe((data) => {
                this.doctors = data;
                this.doctorsFiltered = data;
                this.doctorsFiltered.sort((a, b) => (a.id > b.id) ? 1 : -1);
                resolve();
            }, (error) => { alert(error); reject(); });
        });
        return promise;
    }
    //LISTING METHODS
    sortName() {
        this.sortingOption = "name";
        this.sortDoctors();
    }
    sortSurname() {
        this.sortingOption = "address";
        this.sortDoctors();
    }
    sortRating() {
        this.sortingOption = "rating";
        this.sortDoctors();
    }
    sortDoctors() {
        switch (this.sortingOption) {
            case "name": {
                this.doctorsFiltered.sort((a, b) => (a.name > b.name) ? 1 : -1);
                break;
            }
            case "address": {
                this.doctorsFiltered.sort((a, b) => (a.surname > b.surname) ? 1 : -1);
                break;
            }
            case "rating": {
                this.doctorsFiltered.sort((a, b) => ((a.numberOfStars / a.numberOfReviews) > (b.numberOfStars / b.numberOfReviews)) ? 1 : -1);
                break;
            }
            default: {
                this.doctorsFiltered.sort((a, b) => (a.id > b.id) ? 1 : -1);
                break;
            }
        }
    }
    onFilterChanges() {
        this.filterForm.valueChanges.subscribe(filters => {
            this.doctorsFiltered = this.filterDoctors(filters);
        });
    }
    filterDoctors(filters) {
        return this.doctors.filter(doctor => doctor.name.toLowerCase().indexOf(filters.name.toLowerCase()) !== -1 &&
            doctor.surname.toLowerCase().indexOf(filters.surname.toLowerCase()) !== -1
            && (doctor.numberOfStars / doctor.numberOfReviews) >= this.starRatingFilter);
    }
    //OTHER METHODS
    onRateSearch($event) {
        this.starRatingSearch = $event.newValue;
    }
    onRateFilter($event) {
        this.starRatingFilter = $event.newValue;
        this.filterForm.controls.rating.setValue(this.starRatingFilter);
    }
    onSearch() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        var criteria = {
            clinic_id: this.clinic_id_param,
            name: this.form.controls.name.value ? this.form.controls.name.value : "",
            surname: this.form.controls.surname.value ? this.form.controls.surname.value : "",
            rating: this.starRatingSearch ? this.starRatingSearch : -1,
            typeOfExamination: this.form.controls.typeOfExamination.value ? this.form.controls.typeOfExamination.value : -1,
            date: this.form.controls.date.value.getTime().toString().substr(0, 10)
        };
        this.searchDoctors(criteria).then(() => {
            this.notSearched = false;
        }, () => alert("Error searching doctors"));
    }
    searchDoctors(criteria) {
        let promise = new Promise((resolve, reject) => {
            this.doctorService.searchDoctors(criteria).subscribe((data) => {
                this.doctors = data;
                this.doctorsFiltered = data;
                resolve();
            }, (error) => {
                alert(error);
                reject();
            });
        });
        return promise;
    }
    showDoctorInfo(doctor) {
        let action = "Opened";
        let clinicID = this.clinic_id_param;
        let doctorID = doctor.id;
        let doctorName = doctor.name;
        let doctorSurname = doctor.surname;
        let doctorEmail = doctor.email;
        let doctorPhone = doctor.phoneNumber;
        let doctorShiftStart = doctor.shiftStart;
        let doctorShiftEnd = doctor.shiftEnd;
        let rating = doctor.numberOfStars / doctor.numberOfReviews;
        let availableTimes;
        availableTimes = ["0", "0"];
        let available = false;
        let date_param = this.form.controls.date.value.getTime().toString().substr(0, 10);
        this.getAvailableTimes(doctor.id, date_param).then(() => {
            if (this.availability.available) {
                for (let i = 0; i < this.availability.availableTimes.length; i++) {
                    availableTimes[i] = this.timeConverter(this.availability.availableTimes[i]);
                }
                available = true;
            }
            this.modalData = { clinicID, doctorID, doctorName, doctorSurname, doctorEmail, doctorPhone, doctorShiftStart, doctorShiftEnd, availableTimes, available, rating, action };
            this.modal.open(this.modalContent, { size: 'xl' });
        }, () => alert("Error getting availability"));
    }
    getAvailableTimes(id, date) {
        let promise = new Promise((resolve, reject) => {
            this.doctorService.getAvailability(id, date, "patient").subscribe((data) => {
                this.availability = data;
                resolve();
            }, (error) => {
                console.log(error);
                reject();
            });
        });
        return promise;
    }
    showAppointmentPage(timep, doctorID, clinicID) {
        let datep = this.form.controls.date.value.getTime();
        let toep = this.form.controls.typeOfExamination.value ? this.form.controls.typeOfExamination.value : -1;
        if (this.router.url.indexOf('clinics') === -1) {
            this.router.navigate([`../../schedule`], { queryParams: { clinic: clinicID, doctor: doctorID, date: datep, time: timep, toe: toep }, relativeTo: this.activatedRoute });
        }
        else {
            this.router.navigate([`../schedule`], { queryParams: { clinic: clinicID, doctor: doctorID, date: datep, time: timep, toe: toep }, relativeTo: this.activatedRoute });
        }
    }
    timeConverter(a) {
        a = new Date(a * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
        var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
        var time = hour + ':' + min;
        return time;
    }
    close() {
        this.modal.dismissAll();
    }
    ngOnDestroy() {
        this.modal.dismissAll();
    }
};
PatientDoctorListingComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_4__["ClinicService"] },
    { type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_7__["DoctorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true })
], PatientDoctorListingComponent.prototype, "modalContent", void 0);
PatientDoctorListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patient-doctor-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patient-doctor-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-home/patient-doctor-listing/patient-doctor-listing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patient-doctor-listing.component.css */ "./src/app/components/patient-home/patient-doctor-listing/patient-doctor-listing.component.css")).default]
    })
], PatientDoctorListingComponent);



/***/ }),

/***/ "./src/app/components/patient-home/patient-home.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/patient-home/patient-home.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF0aWVudC1ob21lL3BhdGllbnQtaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/patient-home/patient-home.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/patient-home/patient-home.component.ts ***!
  \*******************************************************************/
/*! exports provided: PatientHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientHomeComponent", function() { return PatientHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PatientHomeComponent = class PatientHomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
PatientHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patient-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patient-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-home/patient-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patient-home.component.css */ "./src/app/components/patient-home/patient-home.component.css")).default]
    })
], PatientHomeComponent);



/***/ }),

/***/ "./src/app/components/patient-home/patient-pending-appointments-listing/patient-pending-appointments-listing.component.css":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/components/patient-home/patient-pending-appointments-listing/patient-pending-appointments-listing.component.css ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF0aWVudC1ob21lL3BhdGllbnQtcGVuZGluZy1hcHBvaW50bWVudHMtbGlzdGluZy9wYXRpZW50LXBlbmRpbmctYXBwb2ludG1lbnRzLWxpc3RpbmcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/patient-home/patient-pending-appointments-listing/patient-pending-appointments-listing.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/components/patient-home/patient-pending-appointments-listing/patient-pending-appointments-listing.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: PatientPendingAppointmentsListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientPendingAppointmentsListingComponent", function() { return PatientPendingAppointmentsListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PatientPendingAppointmentsListingComponent = class PatientPendingAppointmentsListingComponent {
    constructor(patientService, router, activatedRoute) {
        this.patientService = patientService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.appointmentHeaders = ['Clinic', 'Ordination', 'Doctor', 'Type', 'Date & time', 'Duration (min)', 'Price'];
        this.navigationSubscription = this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                this.getPendingAppointments();
            }
        });
    }
    ngOnInit() {
    }
    getPendingAppointments() {
        this.patientService.getPendingAppointments().subscribe((data) => {
            this.appointments = data;
            for (const [i, value] of this.appointments.entries()) {
                this.appointments[i].formatedDateAndTime = this.timeConverter(this.appointments[i].startingDateAndTime);
            }
            this.appointments.sort((a, b) => (a.id > b.id) ? 1 : -1);
        }, (error) => {
            alert(error);
        });
    }
    sortClinicName() {
        this.sortingOption = "clinicName";
        this.sortPendingAppointments();
    }
    sortType() {
        this.sortingOption = "type";
        this.sortPendingAppointments();
    }
    sortDuration() {
        this.sortingOption = "duration";
        this.sortPendingAppointments();
    }
    sortDate() {
        this.sortingOption = "date";
        this.sortPendingAppointments();
    }
    sortPendingAppointments() {
        switch (this.sortingOption) {
            case "clinicName": {
                this.appointments.sort((a, b) => (a.clinic.name > b.clinic.name) ? 1 : -1);
                break;
            }
            case "type": {
                this.appointments.sort((a, b) => (a.typeOfExamination.name > b.typeOfExamination.name) ? 1 : -1);
                break;
            }
            case "duration": {
                this.appointments.sort((a, b) => (a.duration > b.duration) ? 1 : -1);
                break;
            }
            case "date": {
                this.appointments.sort((a, b) => (a.startingDateAndTime > b.startingDateAndTime) ? 1 : -1);
                break;
            }
            default: {
                this.appointments.sort((a, b) => (a.id > b.id) ? 1 : -1);
                break;
            }
        }
    }
    timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
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
    showClinicInfo(info) {
        //to do
    }
    cancelAppointment(appointment) {
        this.patientService.cancelAppointment(appointment).subscribe((data) => {
            alert("Appointment " + appointment.typeOfExamination.name + " canceled");
            this.getPendingAppointments();
        }, (error) => {
            alert(error);
        });
    }
};
PatientPendingAppointmentsListingComponent.ctorParameters = () => [
    { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
PatientPendingAppointmentsListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patient-pending-appointments-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patient-pending-appointments-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-home/patient-pending-appointments-listing/patient-pending-appointments-listing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patient-pending-appointments-listing.component.css */ "./src/app/components/patient-home/patient-pending-appointments-listing/patient-pending-appointments-listing.component.css")).default]
    })
], PatientPendingAppointmentsListingComponent);



/***/ }),

/***/ "./src/app/components/patient-home/patient-schedule-appointment/patient-schedule-appointment.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/patient-home/patient-schedule-appointment/patient-schedule-appointment.component.css ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF0aWVudC1ob21lL3BhdGllbnQtc2NoZWR1bGUtYXBwb2ludG1lbnQvcGF0aWVudC1zY2hlZHVsZS1hcHBvaW50bWVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/patient-home/patient-schedule-appointment/patient-schedule-appointment.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/patient-home/patient-schedule-appointment/patient-schedule-appointment.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: PatientScheduleAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientScheduleAppointmentComponent", function() { return PatientScheduleAppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/clinic.service */ "./src/app/services/clinic.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/doctor.service */ "./src/app/services/doctor.service.ts");
/* harmony import */ var src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/appointment.service */ "./src/app/services/appointment.service.ts");








let PatientScheduleAppointmentComponent = class PatientScheduleAppointmentComponent {
    constructor(formBuilder, userService, router, clinicService, doctorService, activatedRoute, appointmentService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.clinicService = clinicService;
        this.doctorService = doctorService;
        this.activatedRoute = activatedRoute;
        this.appointmentService = appointmentService;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.clinicID = +params['clinic'];
            this.doctorID = +params['doctor'];
            this.date = +params['date'];
            this.time = params['time'];
            this.typeOfExamination = +params['toe'];
        });
        if (!this.clinicID)
            alert("Error loading clinicID");
        if (!this.doctorID)
            alert("Error loading doctorID");
        this.loadData().then(() => {
            this.createFormGroup();
        }, () => alert("Error loading data"));
    }
    timeConverter(a) {
        a = new Date(a);
        var year = a.getFullYear();
        var month = (a.getMonth() + 1) < 10 ? '0' + (a.getMonth() + 1) : (a.getMonth() + 1);
        var date = a.getDate() < 10 ? '0' + a.getDate() : a.getDate();
        var time = year + "-" + month + "-" + date;
        return time;
    }
    createFormGroup() {
        let date = new Date();
        if (this.date) {
            let res = this.time.split(':');
            let timeFormat = this.timeConverter(this.date);
            date = new Date(timeFormat);
            date.setHours(res[0]);
            date.setMinutes(res[1]);
        }
        this.form = this.formBuilder.group({
            dateAndTime: [date, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            duration: [, []],
            typeOfExamination: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
        });
        if (this.typeOfExamination != -1) {
            this.form.controls['typeOfExamination'].setValue(this.typeOfExamination);
            this.setPriceFromTypeOfExamination();
        }
    }
    loadData() {
        let promise = new Promise((resolve, reject) => {
            this.loadClinicInfo().then(() => {
                this.loadDoctorInfo().then(() => {
                    this.loadTypesOfExamination().then(() => {
                        resolve();
                    }, () => reject());
                }, () => reject());
            }, () => reject());
        });
        return promise;
    }
    loadClinicInfo() {
        let promise = new Promise((resolve, reject) => {
            this.clinicService.getClinic(this.clinicID).subscribe((data) => { this.clinic = data; resolve(); }, (error) => { alert(error); reject(); });
        });
        return promise;
    }
    loadDoctorInfo() {
        let promise = new Promise((resolve, reject) => {
            let clinic_id = this.userService.getUser().clinic_id;
            this.doctorService.getDoctorWithId(this.doctorID).subscribe((data) => { this.doctor = data; resolve(); }, (error) => { alert(error); reject(); });
        });
        return promise;
    }
    loadTypesOfExamination() {
        let promise = new Promise((resolve, reject) => {
            this.clinicService.getTypesOfExamination(this.clinicID).subscribe((data) => { this.ExaminationTypes = data; resolve(); }, (error) => { alert(error); reject(); });
        });
        return promise;
    }
    setPriceFromTypeOfExamination() {
        let type = this.ExaminationTypes.find(element => element.id == this.form.controls.typeOfExamination.value);
        this.price = type.price;
    }
    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        let appointment = {
            id: null,
            startingDateAndTime: this.form.controls.dateAndTime.value.getTime().toString().substr(0, 10),
            endingDateAndTime: 0,
            duration: 0,
            typeOfExamination: { id: this.form.controls.typeOfExamination.value },
            ordination: null,
            price: this.price,
            clinic: { id: this.clinicID },
            patient: { id: this.userService.getUser().id },
            doctors: [{ id: this.doctorID }]
        };
        this.appointmentService.scheduleNewAppointment(appointment, 'patient').subscribe((data) => {
            alert("Appointment request sent");
            this.router.navigate([`../pending_appointments`], { relativeTo: this.activatedRoute });
        }, (error) => { alert(error); });
    }
    cancelChanges() {
    }
    ngOnDestroy() {
    }
};
PatientScheduleAppointmentComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_2__["ClinicService"] },
    { type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_6__["DoctorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_7__["AppointmentService"] }
];
PatientScheduleAppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patient-schedule-appointment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patient-schedule-appointment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-home/patient-schedule-appointment/patient-schedule-appointment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patient-schedule-appointment.component.css */ "./src/app/components/patient-home/patient-schedule-appointment/patient-schedule-appointment.component.css")).default]
    })
], PatientScheduleAppointmentComponent);



/***/ }),

/***/ "./src/app/components/patient-profile/medical-record/medical-record.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/patient-profile/medical-record/medical-record.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-display{\r\n    border-top: 0;\r\n    border-bottom: 0;\r\n    border-left:0 ; \r\n    height: 2em;\r\n}\r\n.example-headers-align .mat-expansion-panel-header-title,\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  flex-basis: 0;\r\n}\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXRpZW50LXByb2ZpbGUvbWVkaWNhbC1yZWNvcmQvbWVkaWNhbC1yZWNvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBOztFQUVFLGFBQWE7QUFDZjtBQUVBO0VBQ0UseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYXRpZW50LXByb2ZpbGUvbWVkaWNhbC1yZWNvcmQvbWVkaWNhbC1yZWNvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1kaXNwbGF5e1xyXG4gICAgYm9yZGVyLXRvcDogMDtcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICBib3JkZXItbGVmdDowIDsgXHJcbiAgICBoZWlnaHQ6IDJlbTtcclxufVxyXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gIGZsZXgtYmFzaXM6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/patient-profile/medical-record/medical-record.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/patient-profile/medical-record/medical-record.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MedicalRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalRecordComponent", function() { return MedicalRecordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/doctor.service */ "./src/app/services/doctor.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/clinic.service */ "./src/app/services/clinic.service.ts");









let MedicalRecordComponent = class MedicalRecordComponent {
    constructor(patientService, clinicService, doctorService, router, activatedRoute, userService, formBuilder, cookieService) {
        this.patientService = patientService;
        this.clinicService = clinicService;
        this.doctorService = doctorService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.cookieService = cookieService;
        this.config1 = {
            displayKey: "code",
            search: true,
            height: '8em',
            placeholder: 'Select',
            customComparator: () => { },
            limitTo: 10,
            moreText: 'more',
            noResultsFound: 'No results found!',
            searchPlaceholder: 'Search medications',
            searchOnKey: 'code',
            clearOnSelection: false,
        };
        this.config2 = {
            displayKey: "code",
            search: true,
            height: '8em',
            placeholder: 'Select',
            customComparator: () => { },
            limitTo: 10,
            moreText: 'more',
            noResultsFound: 'No results found!',
            searchPlaceholder: 'Search diagnoses',
            searchOnKey: 'code',
            clearOnSelection: false,
        };
        this.basicInfoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            bloodType: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: "", validator: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, disabled: true }),
            diopter: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: "", disabled: true, validator: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, }),
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: "", validator: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, disabled: true }),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: "", validator: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, disabled: true })
        });
        this.reportForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            bloodType: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: "", validator: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, disabled: true }),
            diopter: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: "", disabled: true, validator: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, }),
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: "", validator: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, disabled: true }),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]({ value: "", validator: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, disabled: true })
        });
    }
    ngOnInit() {
        this.getMedicalRecord();
        this.changeReport = true;
        this.currentUser = JSON.parse(this.cookieService.get('user'));
        this.basicInfoForm.controls.bloodType.disable();
        this.basicInfoForm.controls.diopter.disable();
        this.basicInfoForm.controls.height.disable();
        this.basicInfoForm.controls.weight.disable();
    }
    getMedicalRecord() {
        this.patientService.getMedicalRecord(this.patientID).subscribe((data) => {
            this.medicalRecord = data;
            this.allergies = this.medicalRecord.alergies;
            this.basicInfoForm.setValue({
                bloodType: this.medicalRecord.bloodType,
                diopter: this.medicalRecord.diopter,
                height: this.medicalRecord.height,
                weight: this.medicalRecord.weight
            });
        }, (error) => {
            alert(error);
        });
    }
    timeConverter(a) {
        a = new Date(a * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
        var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
        var time = date + '. ' + month + ' ' + year + '. ' + hour + ':' + min;
        return time;
    }
    enableInfoEdit() {
        this.editable = false;
        this.editBasicInfo = true;
        this.basicInfoForm.controls.bloodType.enable();
        this.basicInfoForm.controls.diopter.enable();
        this.basicInfoForm.controls.height.enable();
        this.basicInfoForm.controls.weight.enable();
    }
    cancelInfoEdit() {
        this.editable = true;
        this.editBasicInfo = false;
        this.ngOnInit();
    }
    submitBasicInfo() {
        this.editable = true;
        this.editBasicInfo = false;
        if (this.basicInfoForm.invalid) {
            return;
        }
        let doctor = JSON.parse(this.cookieService.get('user'));
        var basicInfo = {
            bloodType: this.basicInfoForm.controls.bloodType.value,
            diopter: this.basicInfoForm.controls.diopter.value,
            height: this.basicInfoForm.controls.height.value,
            weight: this.basicInfoForm.controls.weight.value,
            alergies: this.allergies
        };
        let patientID = this.patientID;
        this.doctorService.submitBasicInfo(basicInfo, patientID).subscribe((data) => {
            this.ngOnInit();
        }, (error) => { alert(error); });
    }
    enableReportEdit(reportToChange) {
        this.editable = false;
        this.changeReport = false;
        this.tempDiagnosis = [];
        this.optionsDiagnosis = this.diagnoses;
        reportToChange.diagnosis.forEach(element => {
            this.optionsDiagnosis = this.optionsDiagnosis.filter(obj => obj.id !== element.id);
        });
    }
    cancelReportEdit(dateTime) {
        this.editable = true;
        this.changeReport = true;
        this.ngOnInit();
    }
    submitReportEdit(examination) {
        this.editable = true;
        this.changeReport = true;
        let patientID = this.patientID;
        this.doctorService.submitChangedReport(examination, patientID).subscribe((data) => {
            this.ngOnInit();
        }, (error) => { alert(error); });
    }
    sortByTypeDesc() {
        this.medicalRecord.examinationReport.sort((a, b) => (a.typeOfExamination.name > b.typeOfExamination.name) ? 1 : -1);
    }
    sortByDateDesc() {
        this.medicalRecord.examinationReport.sort((a, b) => (a.dateAndTime > b.dateAndTime) ? 1 : -1);
    }
    sortByTypeAsc() {
        this.medicalRecord.examinationReport.sort((a, b) => (a.typeOfExamination.name > b.typeOfExamination.name) ? -1 : 1);
    }
    sortByDateAsc() {
        this.medicalRecord.examinationReport.sort((a, b) => (a.dateAndTime > b.dateAndTime) ? -1 : 1);
    }
    onHovering(e) {
        if (this.editBasicInfo) {
            e.srcElement.lastElementChild.hidden = false;
        }
    }
    onUnovering(e) {
        if (this.editBasicInfo) {
            e.srcElement.lastElementChild.hidden = true;
        }
    }
    deleteAllergie(allergie) {
        let temp = this.allergies;
        this.allergies = this.allergies.replace(allergie + ",", '');
        if (temp === this.allergies) {
            this.allergies = this.allergies.replace("," + allergie, '');
        }
        if (temp === this.allergies) {
            this.allergies = this.allergies.replace(allergie, '');
        }
    }
    addAllergie(allergie) {
        if ('' === this.allergies) {
            this.allergies = this.allergies.concat(allergie);
        }
        else {
            this.allergies = this.allergies.concat(", " + allergie);
        }
    }
    selectionChangedDiag(event, examination) {
        for (let diagnosis of this.tempDiagnosis) {
            examination.diagnosis = examination.diagnosis.filter(obj => obj.id !== diagnosis.id);
        }
        event.value.forEach(element => {
            examination.diagnosis.push(element);
            this.tempDiagnosis.push(element);
        });
    }
    changedReportDesc(event, examination) {
        examination.reportDescription = event.srcElement.value;
    }
    panelClosed() {
        if (this.editable == false && this.changeReport == false) {
            this.editable = true;
            this.changeReport = true;
            this.ngOnInit();
        }
    }
    deleteDiagnosis(diagnosis, examination) {
        examination.diagnosis = examination.diagnosis.filter(obj => obj.id !== diagnosis.id);
        this.optionsDiagnosis = this.diagnoses;
        examination.diagnosis.forEach(element => {
            this.optionsDiagnosis = this.optionsDiagnosis.filter(obj => obj.id !== element.id);
        });
    }
    onRateClinic($event, clinic_id) {
        let user = this.userService.getUser();
        let user_id = user["id"];
        this.clinicService.rateClinic(clinic_id, user_id, $event.newValue).subscribe((data) => {
            alert("Clinic successfully rated!");
        }, (error) => {
            if (error === "Try again") {
                this.clinicService.rateClinic(clinic_id, user_id, $event.newValue).subscribe((data) => {
                    alert("Clinic successfully rated!");
                }, (error) => {
                    alert(error);
                    this.getMedicalRecord();
                });
            }
            else {
                alert(error);
                this.getMedicalRecord();
            }
        });
    }
    onRateDoctor($event, doctor_id) {
        let user = this.userService.getUser();
        let user_id = user["id"];
        this.doctorService.rateDoctor(doctor_id, user_id, $event.newValue).subscribe((data) => {
            alert("Doctor successfully rated!");
        }, (error) => {
            if (error === "Try again") {
                this.doctorService.rateDoctor(doctor_id, user_id, $event.newValue).subscribe((data) => {
                    alert("Doctor successfully rated!");
                }, (error) => {
                    alert(error);
                    this.getMedicalRecord();
                });
            }
            else {
                alert(error);
                this.getMedicalRecord();
            }
        });
    }
};
MedicalRecordComponent.ctorParameters = () => [
    { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"] },
    { type: src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_8__["ClinicService"] },
    { type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_6__["DoctorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MedicalRecordComponent.prototype, "patientID", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MedicalRecordComponent.prototype, "patientName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MedicalRecordComponent.prototype, "editable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MedicalRecordComponent.prototype, "diagnoses", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MedicalRecordComponent.prototype, "prescriptions", void 0);
MedicalRecordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-medical-record',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./medical-record.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-profile/medical-record/medical-record.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./medical-record.component.css */ "./src/app/components/patient-profile/medical-record/medical-record.component.css")).default]
    })
], MedicalRecordComponent);



/***/ }),

/***/ "./src/app/components/patient-profile/patient-personal-profile/patient-personal-profile.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/patient-profile/patient-personal-profile/patient-personal-profile.component.css ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF0aWVudC1wcm9maWxlL3BhdGllbnQtcGVyc29uYWwtcHJvZmlsZS9wYXRpZW50LXBlcnNvbmFsLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/patient-profile/patient-personal-profile/patient-personal-profile.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/patient-profile/patient-personal-profile/patient-personal-profile.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PatientPersonalProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientPersonalProfileComponent", function() { return PatientPersonalProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let PatientPersonalProfileComponent = class PatientPersonalProfileComponent {
    constructor(patientService, formBuilder, router) {
        this.patientService = patientService;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    ngOnInit() {
        this.getPatientInfo();
    }
    getPatientInfo() {
        this.patientService.getPatient().subscribe((data) => {
            this.patient = data;
            this.form = this.formBuilder.group({
                name: [this.patient.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
                surname: [this.patient.surname, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                email: [this.patient.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                address: [this.patient.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                city: [this.patient.city, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                state: [this.patient.state, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                phoneNumber: [this.patient.phoneNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                upin: [this.patient.upin, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(13)]]
            });
            this.change = true;
        }, (error) => {
            alert(error);
        });
    }
    enableChangeInfo() {
        this.change = !this.change;
    }
    cancelChanges() {
        this.change = !this.change;
        this.getPatientInfo();
    }
    showChangePasswordForm() {
        this.router.navigate(['../change-password']);
    }
    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        var patient = {
            id: this.patient.id,
            email: this.form.controls.email.value,
            name: this.form.controls.name.value,
            surname: this.form.controls.surname.value,
            address: this.form.controls.address.value,
            city: this.form.controls.city.value,
            state: this.form.controls.state.value,
            phoneNumber: this.form.controls.phoneNumber.value,
            upin: this.form.controls.upin.value
        };
        this.patientService.changePatient(patient).subscribe((data) => { this.change = !this.change; return; }, (error) => { alert(error); });
    }
};
PatientPersonalProfileComponent.ctorParameters = () => [
    { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PatientPersonalProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patient-personal-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patient-personal-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-profile/patient-personal-profile/patient-personal-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patient-personal-profile.component.css */ "./src/app/components/patient-profile/patient-personal-profile/patient-personal-profile.component.css")).default]
    })
], PatientPersonalProfileComponent);



/***/ }),

/***/ "./src/app/components/patient-profile/patient-profile.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/patient-profile/patient-profile.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF0aWVudC1wcm9maWxlL3BhdGllbnQtcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/patient-profile/patient-profile.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/patient-profile/patient-profile.component.ts ***!
  \*************************************************************************/
/*! exports provided: PatientProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientProfileComponent", function() { return PatientProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PatientProfileComponent = class PatientProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
PatientProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patient-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patient-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient-profile/patient-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patient-profile.component.css */ "./src/app/components/patient-profile/patient-profile.component.css")).default]
    })
], PatientProfileComponent);



/***/ }),

/***/ "./src/app/components/registration/must-match.validator.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/registration/must-match.validator.ts ***!
  \*****************************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/components/registration/registration.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/registration/registration.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/registration/registration.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/registration/registration.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _must_match_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./must-match.validator */ "./src/app/components/registration/must-match.validator.ts");






let RegistrationComponent = class RegistrationComponent {
    constructor(formBuilder, route, router, userService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.loading = false;
        this.submitted = false;
        this.returnUrl = '';
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
            surname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            upin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(13)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(24)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validator: Object(_must_match_validator__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('password', 'confirmPassword')
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        var registerRequest = {
            email: this.loginForm.controls.email.value,
            password: this.loginForm.controls.password.value,
            name: this.loginForm.controls.name.value,
            surname: this.loginForm.controls.surname.value,
            address: this.loginForm.controls.address.value,
            city: this.loginForm.controls.city.value,
            state: this.loginForm.controls.state.value,
            phoneNumber: this.loginForm.controls.phoneNumber.value,
            upin: this.loginForm.controls.upin.value
        };
        this.loading = true;
        this.userService.register(registerRequest)
            .pipe()
            .subscribe(data => {
            //this.router.navigate([this.returnUrl]);
        }, error => {
            this.loading = false;
            alert(error);
        });
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registration/registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.css */ "./src/app/components/registration/registration.component.css")).default]
    })
], RegistrationComponent);



/***/ }),

/***/ "./src/app/guards/auth-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");




let AuthGuardService = class AuthGuardService {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(route, state) {
        const currentUser = this.userService.checkLoggedIn();
        if (currentUser) {
            // check if route is restricted by role
            if (route.data.roles) {
                currentUser.roles.forEach(role => {
                    if (route.data.roles.indexOf(role) === -1) {
                        // role not authorised so redirect to home page
                        alert('Not authorised!');
                        if (currentUser.roles.indexOf('PATIENT') != -1) {
                            this.router.navigate(['/patient']);
                        }
                        else {
                            this.router.navigate(['/']);
                        }
                        return false;
                    }
                });
            }
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ "./src/app/guards/change-password-deactivate.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/guards/change-password-deactivate.service.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordDeactivateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordDeactivateService", function() { return ChangePasswordDeactivateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChangePasswordDeactivateService = class ChangePasswordDeactivateService {
    constructor() {
    }
    canDeactivate(component, route, state, nextState) {
        return component.canExit();
    }
};
ChangePasswordDeactivateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ChangePasswordDeactivateService);



/***/ }),

/***/ "./src/app/guards/examination-deactivate.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/guards/examination-deactivate.service.ts ***!
  \**********************************************************/
/*! exports provided: ExaminationDeactivateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationDeactivateService", function() { return ExaminationDeactivateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");




let ExaminationDeactivateService = class ExaminationDeactivateService {
    constructor(router, activatedRoute, confirmationDialogService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.confirmationDialogService = confirmationDialogService;
    }
    canDeactivate(component, route, state, nextState) {
        return component.canExit(nextState) ? component.canExit(nextState) : false;
    }
};
ExaminationDeactivateService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] }
];
ExaminationDeactivateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ExaminationDeactivateService);



/***/ }),

/***/ "./src/app/services/appointment.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/appointment.service.ts ***!
  \*************************************************/
/*! exports provided: AppointmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentService", function() { return AppointmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let AppointmentService = class AppointmentService {
    constructor(userService, http) {
        this.userService = userService;
        this.http = http;
    }
    startAppointment(appointment) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.post('/api/appointment/startAppointment', appointment, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(response.error);
        }));
    }
    scheduleNewAppointment(appointment, role) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.post(`/api/appointmentRequest/scheduleNewAppointment/${role}`, appointment, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(response.error);
        }));
    }
    createAvailableAppointment(appointment) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.post('/api/appointment/createAvailableAppointment', appointment, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(response.error);
        }));
    }
    getClinicAvailableAppointments(clinic_id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/appointment/getClinicAvailableAppointments/${clinic_id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(response.error);
        }));
    }
    deleteAvailableAppointment(appointment_id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.delete(`/api/appointment/deleteAvailableAppointment/${appointment_id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(response.error);
        }));
    }
    getClinicAppointmentRequests(clinic_id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/appointmentRequest/getClinicAppointmentRequests/${clinic_id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(response.error);
        }));
    }
    choseAvailableAppointment(appointment_id, patient_id) {
        return this.http.put(`/api/appointment/choseAvailableAppointment/${appointment_id}/${patient_id}`, {}, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(response.error);
        }));
    }
    approveAppointmentRequest(appointment) {
        return this.http.post(`/api/appointmentRequest/approveAppointmentRequest`, appointment, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(response.error);
        }));
    }
    rejectAppointmentRequest(appointment_id, message) {
        return this.http.put(`/api/appointmentRequest/rejectAppointmentRequest/${appointment_id}`, JSON.stringify(message), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(response.error);
        }));
    }
};
AppointmentService.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AppointmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppointmentService);



/***/ }),

/***/ "./src/app/services/clinic-admin.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/clinic-admin.service.ts ***!
  \**************************************************/
/*! exports provided: ClinicAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicAdminService", function() { return ClinicAdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");









let ClinicAdminService = class ClinicAdminService {
    constructor(cookieService, userService, http, router) {
        this.cookieService = cookieService;
        this.userService = userService;
        this.http = http;
        this.router = router;
    }
    getAdminC() {
        let user = JSON.parse(this.cookieService.get('user'));
        let id = user["id"];
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/clinicAdmin/getAdminC/${id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(response.error);
        }));
    }
    changeAdminC(adminC) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.put(`/api/clinicAdmin/change`, JSON.stringify(adminC), { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(response.error);
        }));
    }
    getClinic(clinicID) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/admin/getClinic/${clinicID}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(response.error);
        }));
    }
    getVacationRequests() {
        let user = this.userService.getUser();
        let clinic_id = user["clinic_id"];
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/vacations/requests/${clinic_id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(response.error);
        }));
    }
    approveVacationRequest(request) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.put(`/api/vacations/approve/${request.id}`, JSON.stringify(request), { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(response.error);
        }));
    }
    rejectVacationRequest(request, message) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.put(`/api/vacations/deny/${request.id}`, JSON.stringify(message), { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(response.error);
        }));
    }
};
ClinicAdminService.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ClinicAdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ClinicAdminService);



/***/ }),

/***/ "./src/app/services/clinic-center-admin.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/clinic-center-admin.service.ts ***!
  \*********************************************************/
/*! exports provided: ClinicCenterAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicCenterAdminService", function() { return ClinicCenterAdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");









let ClinicCenterAdminService = class ClinicCenterAdminService {
    constructor(cookieService, userService, http, router) {
        this.cookieService = cookieService;
        this.userService = userService;
        this.http = http;
        this.router = router;
    }
    getAdminKc() {
        let user = JSON.parse(this.cookieService.get('user'));
        let id = user["id"];
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/admin/getAdminKc/${id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getAdminsKc() {
        let user = JSON.parse(this.cookieService.get('user'));
        let id = user["id"];
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/admin/getAdminsKc/${id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    addAdmin(adminCC) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.post('/api/admin/addAdmin', JSON.stringify(adminCC), { headers: headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    changeAdminKc(admin) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.put(`/api/admin/change`, JSON.stringify(admin), { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    deleteClinicAdmin(admin) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.delete(`/api/clinicAdmin/delete/${admin.id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    deleteClinicCenterAdmin(admin) {
        let user = JSON.parse(this.cookieService.get('user'));
        let id = user["id"];
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.delete(`/api/admin/deleteAdmin/${id}/${admin.id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getRegistrationRequests() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/admin/getRegistrationRequests`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    approveRequest(request) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.put(`/api/admin/approveRequest`, JSON.stringify(request), { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    deleteRequest(request, message) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.put(`/api/admin/deleteRequest/${request.id}`, JSON.stringify(message), { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
};
ClinicCenterAdminService.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ClinicCenterAdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ClinicCenterAdminService);



/***/ }),

/***/ "./src/app/services/clinic.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/clinic.service.ts ***!
  \********************************************/
/*! exports provided: ClinicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicService", function() { return ClinicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");









let ClinicService = class ClinicService {
    constructor(cookieService, userService, http, router) {
        this.cookieService = cookieService;
        this.userService = userService;
        this.http = http;
        this.router = router;
    }
    addOrdination(ordination, clinic_id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.post(`/api/ordinations/${clinic_id}`, ordination, { headers: headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    editOrdination(ordination) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.put(`/api/ordinations/change`, ordination, { headers: headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    deleteOrdination(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.delete(`/api/ordinations/delete/${id}`, { headers: headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    approvePrescription(prescription) {
        let user = JSON.parse(this.cookieService.get('user'));
        let id = user["id"];
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.put(`/api/prescriptions/approve/${id}`, JSON.stringify(prescription), { headers: headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getOrdinations(clinicID) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/ordinations/${clinicID}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getPrescriptions(clinicID) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/prescriptions/${clinicID}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    searchOrdinations(ordination) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        var searchParamsString = "";
        searchParamsString += `name=${ordination.name}&number=${ordination.number}&clinic_id=${ordination.clinic_id}`;
        return this.http.get(`/api/ordinations/search_ordinations?${searchParamsString}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    searchOrdinationsWithDate(ordination) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        var searchParamsString = "";
        searchParamsString += `name=${ordination.name}&number=${ordination.number}&date=${ordination.date}&clinic_id=${ordination.clinic_id}`;
        return this.http.get(`/api/ordinations/search_ordinations_with_date?${searchParamsString}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    searchPrescriptions(prescription) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        var searchParamsString = "";
        searchParamsString += `name=${prescription.name}&surname=${prescription.surname}&medication=${prescription.medication}&clinic_id=${prescription.clinic_id}`;
        return this.http.get(`/api/prescriptions/search_prescriptions?${searchParamsString}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    searchClinics(criteria) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        var searchParamsString = "";
        searchParamsString += `name=${criteria.name}&address=${criteria.address}&typeOfExamination=${criteria.typeOfExamination}&rating=${criteria.rating}&date=${criteria.date}`;
        return this.http.get(`/api/clinic/searchClinics?${searchParamsString}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    addClinic(clinic) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.post('/api/admin/addClinic', JSON.stringify(clinic), { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getClinics() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get('/api/admin/getClinics', { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getClinic(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/admin/getClinic/${id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    changeClinicInfo(changedClinic) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.put(`/api/admin/editClinic`, changedClinic, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getClinicAdmins(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/admin/getClinicAdmins/${id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    addDoctor(doctor) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.post('/api/doctor', JSON.stringify(doctor), { headers: headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    addNurse(nurse) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.post('/api/nurse', JSON.stringify(nurse), { headers: headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    deleteNurse(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.delete(`/api/nurse/delete/${id}`, { headers: headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    deleteDoctor(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.delete(`/api/doctor/delete/${id}`, { headers: headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    addAdmin(admin) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.post('/api/clinicAdmin/add', JSON.stringify(admin), { headers: headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    deleteClinic(clinic) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.delete(`/api/admin/deleteClinic/${clinic.id}`, { headers: headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getDoctors(clinic_id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/doctor/getClinicDoctors/${clinic_id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getNurses(clinic_id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/nurse/getClinicNurses/${clinic_id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    searchDoctors(doctor) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        var searchParamsString = "";
        searchParamsString += `name=${doctor.name}&surname=${doctor.surname}&clinic_id=${doctor.clinic_id}`;
        return this.http.get(`/api/doctor/search_doctors?${searchParamsString}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    searchNurses(nurse) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        var searchParamsString = "";
        searchParamsString += `name=${nurse.name}&surname=${nurse.surname}&clinic_id=${nurse.clinic_id}`;
        return this.http.get(`/api/nurse/search_nurses?${searchParamsString}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getTypesOfExamination(clinic_id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/examinationTypes/${clinic_id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getClinicLocation(address, city, state) {
        address = address.replace(/ /g, '+');
        address = encodeURIComponent(address);
        city = city.replace(/ /g, '+');
        city = encodeURIComponent(city);
        state = state.replace(/ /g, '+');
        state = encodeURIComponent(state);
        return this.http.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=396fefe7-95c2-486a-ae3e-c8f062813962&geocode=${address},${city},${state}&lang=en_US`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    searchTypesOfExamination(type) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        var searchParamsString = "";
        searchParamsString += `name=${type.name}&clinic_id=${type.clinic_id}`;
        if (type.minPrice !== "") {
            searchParamsString += `&min_price=${type.minPrice}`;
        }
        if (type.maxPrice !== "") {
            searchParamsString += `&max_price=${type.maxPrice}`;
        }
        return this.http.get(`/api/examinationTypes/search_types?${searchParamsString}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    deleteTypeOfExamination(typeOfExamination_id) {
        let user = JSON.parse(this.cookieService.get('user'));
        let clinic_id = user["clinic_id"];
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.delete(`/api/examinationTypes/delete/${clinic_id}/${typeOfExamination_id}`, { headers: headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    editTypeOfExamination(typeOfExamination) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.put(`/api/examinationTypes/change`, typeOfExamination, { headers: headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    addTypeOfExamination(typeOfExamination, clinic_id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.post(`/api/examinationTypes/${clinic_id}`, typeOfExamination, { headers: headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    rateClinic(clinic_id, patient_id, stars) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        var rateParamsString = "";
        rateParamsString += `clinic_id=${clinic_id}&patient_id=${patient_id}&stars=${stars}`;
        return this.http.put(`/api/admin/rateClinic?${rateParamsString}`, {}, { headers: headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getClinicEarnings(periodStart, periodEnd) {
        let user = JSON.parse(this.cookieService.get('user'));
        let clinic_id = user["clinic_id"];
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.get(`/api/clinic/earnings/${periodStart}/${periodEnd}/${clinic_id}`, { headers: headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getChartData(mode, periodStart, periodEnd) {
        let user = JSON.parse(this.cookieService.get('user'));
        let clinic_id = user["clinic_id"];
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.get(`/api/clinic/chartData/${mode}/${periodStart}/${periodEnd}/${clinic_id}`, { headers: headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
};
ClinicService.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ClinicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ClinicService);



/***/ }),

/***/ "./src/app/services/clinical-center.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/clinical-center.service.ts ***!
  \*****************************************************/
/*! exports provided: ClinicalCenterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalCenterService", function() { return ClinicalCenterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");









let ClinicalCenterService = class ClinicalCenterService {
    constructor(cookieService, userService, http, router) {
        this.cookieService = cookieService;
        this.userService = userService;
        this.http = http;
        this.router = router;
    }
    getMedications() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get('/api/medication', { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    addMedication(medication) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.post('/api/medication', medication, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    editMedication(changedMedication) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.put(`/api/medication/change`, changedMedication, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    deleteMedication(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.delete(`/api/medication/delete/${id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getDiagnosis() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get('/api/diagnosis', { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    addDiagnosis(diagnosis) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.post('/api/diagnosis', diagnosis, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    editDiagnosis(changedDiagnosis) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.put(`/api/diagnosis/change`, changedDiagnosis, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    deleteDiagnosis(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.delete(`/api/diagnosis/delete/${id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    searchClinics(criteria) {
        //TODO
        throw new Error("Method not implemented.");
    }
    getTypesOfExamination() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get('/api/examinationTypes/getAll', { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
};
ClinicalCenterService.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ClinicalCenterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ClinicalCenterService);



/***/ }),

/***/ "./src/app/services/dialog.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/dialog.service.ts ***!
  \********************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_helperComponents_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/helperComponents/dialog/dialog.component */ "./src/app/components/helperComponents/dialog/dialog.component.ts");




let DialogService = class DialogService {
    constructor(modalService) {
        this.modalService = modalService;
    }
    confirm(title, message, userInput, btnOkText = 'OK', btnCancelText = 'Cancel', dialogSize = 'lg') {
        const modalRef = this.modalService.open(_components_helperComponents_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], { size: dialogSize });
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = message;
        modalRef.componentInstance.btnOkText = btnOkText;
        modalRef.componentInstance.btnCancelText = btnCancelText;
        modalRef.componentInstance.userInput = userInput;
        return modalRef.result;
    }
};
DialogService.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DialogService);



/***/ }),

/***/ "./src/app/services/doctor.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/doctor.service.ts ***!
  \********************************************/
/*! exports provided: DoctorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorService", function() { return DoctorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let DoctorService = class DoctorService {
    constructor(cookieService, userService, http) {
        this.cookieService = cookieService;
        this.userService = userService;
        this.http = http;
    }
    getAppointments() {
        let user = JSON.parse(this.cookieService.get('user'));
        let id = user["id"];
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Accept': 'application/json',
            'Authorization': `Bearer ${JSON.parse(this.cookieService.get('token')).accessToken}`
        });
        return this.http.get(`/api/doctor/appointments/${id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getOneAppointment(appID) {
        let user = JSON.parse(this.cookieService.get('user'));
        let id = user["id"];
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Accept': 'application/json',
            'Authorization': `Bearer ${JSON.parse(this.cookieService.get('token')).accessToken}`
        });
        return this.http.get(`/api/doctor/oneAppointment/${id}/${appID}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getVacations() {
        let user = JSON.parse(this.cookieService.get('user'));
        let id = user["id"];
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Accept': 'application/json',
            'Authorization': `Bearer ${JSON.parse(this.cookieService.get('token')).accessToken}`
        });
        return this.http.get(`/api/vacations/${id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getDoctor() {
        let user = JSON.parse(this.cookieService.get('user'));
        let id = user["id"];
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/doctor/getDoctor/${id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getDoctorWithId(doctorID) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/doctor/getDoctor/${doctorID}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    searchDoctors(criteria) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        var searchParamsString = "";
        searchParamsString += `clinic_id=${criteria.clinic_id}&name=${criteria.name}&surname=${criteria.surname}&rating=${criteria.rating}&typeOfExamination=${criteria.typeOfExamination}&date=${criteria.date}`;
        return this.http.get(`/api/doctor/searchDoctors?${searchParamsString}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getAvailability(id, date, role) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        var searchParamsString = "";
        searchParamsString += `doctor_id=${id}&date=${date}&role=${role}`;
        return this.http.get(`/api/doctor/getAvailability?${searchParamsString}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    changeDoctor(doctor) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.put(`/api/doctor/change`, JSON.stringify(doctor), { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    submitReport(report, patientID, appointmentID) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.post(`/api/examination/submitReport/${patientID}/${appointmentID}`, JSON.stringify(report), { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    submitChangedReport(report, patientID) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.post(`/api/examination/submitChangedReport/${patientID}/`, JSON.stringify(report), { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    submitBasicInfo(basicInfo, patientID) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.post(`/api/examination/submitBasicInfo/${patientID}/`, JSON.stringify(basicInfo), { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    rateDoctor(doctor_id, patient_id, stars) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        var rateParamsString = "";
        rateParamsString += `doctor_id=${doctor_id}&patient_id=${patient_id}&stars=${stars}`;
        return this.http.put(`/api/doctor/rateDoctor?${rateParamsString}`, {}, { headers: headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
};
DoctorService.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
DoctorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DoctorService);



/***/ }),

/***/ "./src/app/services/nurse.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/nurse.service.ts ***!
  \*******************************************/
/*! exports provided: NurseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NurseService", function() { return NurseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let NurseService = class NurseService {
    constructor(cookieService, userService, http) {
        this.cookieService = cookieService;
        this.userService = userService;
        this.http = http;
    }
    getNurse() {
        let user = JSON.parse(this.cookieService.get('user'));
        let id = user["id"];
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/nurse/${id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    changeNurse(nurse) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.put(`/api/nurse/change`, JSON.stringify(nurse), { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getVacations() {
        let user = JSON.parse(this.cookieService.get('user'));
        let id = user["id"];
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Accept': 'application/json',
            'Authorization': `Bearer ${JSON.parse(this.cookieService.get('token')).accessToken}`
        });
        return this.http.get(`/api/vacations/${id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
};
NurseService.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
NurseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NurseService);



/***/ }),

/***/ "./src/app/services/patient.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/patient.service.ts ***!
  \*********************************************/
/*! exports provided: PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let PatientService = class PatientService {
    constructor(cookieService, userService, http) {
        this.cookieService = cookieService;
        this.userService = userService;
        this.http = http;
    }
    getPatient() {
        let user = JSON.parse(this.cookieService.get('user'));
        let id = user["id"];
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/patient/${id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getPatientById(patient_id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/patient/${patient_id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    changePatient(patient) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.put(`/api/patient/change`, JSON.stringify(patient), { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getClinics() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/admin/getClinics`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getClinic(clinic_id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/admin/getClinic/${clinic_id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getPendingAppointments() {
        let user = JSON.parse(this.cookieService.get('user'));
        let id = user["id"];
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/patient/getPendingAppointments/${id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    cancelAppointment(appointment) {
        let dateTime = new Date();
        let user = JSON.parse(this.cookieService.get('user'));
        let id = user["id"];
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.delete(`/api/patient/cancelAppointment/${id}/${appointment.id}/${dateTime}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getClinicPatients() {
        let user = JSON.parse(this.cookieService.get('user'));
        let id = user["clinic_id"];
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/patient/getClinicPatients/${id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    getMedicalRecord(id) {
        if (!id) {
            let user = JSON.parse(this.cookieService.get('user'));
            id = user.id;
        }
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/patient/getMedicalRecord/${id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    searchPatients(patient) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        let user = JSON.parse(this.cookieService.get('user'));
        let clinic_id = user["clinic_id"];
        var searchParamsString = "";
        searchParamsString += `name=${patient.name}&surname=${patient.surname}&upin=${patient.upin}&clinicid=${clinic_id}`;
        return this.http.get(`/api/patient/search_patients?${searchParamsString}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    checkAuthorityToViewMedicalRecord(patient_id) {
        let user = JSON.parse(this.cookieService.get('user'));
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.get(`/api/doctor/canViewMedicalRecord/${patient_id}/${user.id}`, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
};
PatientService.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
PatientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PatientService);



/***/ }),

/***/ "./src/app/services/token.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/services/token.interceptor.ts ***!
  \***********************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");



let TokenInterceptor = class TokenInterceptor {
    constructor(userService) {
        this.userService = userService;
    }
    intercept(request, next) {
        const login = /login/gi;
        const yandex = /apikey/gi;
        const register = /signup/gi;
        if (request.url.search(login) === -1 && request.url.search(yandex) === -1 && request.url.search(register) === -1) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.userService.getToken()}`
                }
            });
        }
        return next.handle(request);
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TokenInterceptor);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let UserService = class UserService {
    constructor(cookieService, http, injector) {
        this.cookieService = cookieService;
        this.http = http;
        this.injector = injector;
        this.user = null;
        this.token = null;
        this.passwordChanged = true;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(200000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(() => this.refreshToken())).subscribe(() => { });
    }
    get router() { return this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]); }
    /*
    *  Check if there is a logged in user
    */
    checkLoggedIn() {
        if (this.cookieService.get('user')) {
            this.user = JSON.parse(this.cookieService.get('user'));
            this.token = JSON.parse(this.cookieService.get('token'));
        }
        return this.user;
    }
    /*
    *  Stores user in memory and cookieservice
    */
    setUser(user) {
        this.user = user;
        this.cookieService.set('user', JSON.stringify(user));
    }
    setToken(token) {
        this.token = token;
        this.cookieService.set('token', JSON.stringify(token));
    }
    getToken() {
        return JSON.parse(this.cookieService.get('token')).accessToken;
    }
    getUser() {
        return JSON.parse(this.cookieService.get('user'));
    }
    /*
    *  Removes user from memory and cookieservice
    */
    removeUser() {
        this.user = null;
        this.cookieService.delete('user');
    }
    removeToken() {
        this.token = null;
        this.cookieService.delete('token');
    }
    tokenIsPresent() {
        return this.token != undefined && this.token != null;
    }
    /*
    *  Sends http request to server
    *  Calls setUser to store it in memory and cookieservice
    *  Prints error to console
    */
    login(email, password) {
        var user = {
            email,
            password
        };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
        return this.http.post('/auth/login', user, { headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            const userState = response.body;
            this.setUser(userState['user']);
            this.setToken(userState['token']);
            this.passwordChanged = userState['passwordChanged'];
            if (!this.passwordChanged) {
                this.router.navigate(['/change-password']);
            }
            else {
                if (this.checkLoggedIn().roles.indexOf('PATIENT') != -1) {
                    this.router.navigate(['/patient']);
                }
                else if (this.checkLoggedIn().roles.indexOf('DOCTOR') != -1) {
                    this.router.navigate(['/doctor']);
                }
                else if (this.checkLoggedIn().roles.indexOf('NURSE') != -1) {
                    this.router.navigate(['/nurse']);
                }
                else if (this.checkLoggedIn().roles.indexOf('ADMINCC') != -1) {
                    this.router.navigate(['/adminCC']);
                }
                else if (this.checkLoggedIn().roles.indexOf('ADMINC') != -1) {
                    this.router.navigate(['/clinic_admin_home']);
                }
                else {
                    this.router.navigate(['/']);
                }
            }
            return this.user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    register(registerRequest) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
        return this.http.post('/auth/signup', registerRequest, { headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            const userState = response.body;
            alert("Your request has been sent. Check your email.");
            this.router.navigate(['/login']);
            return this.user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    logout() {
        this.removeUser();
        this.removeToken();
        this.router.navigate(['/login']);
    }
    changePassowrd(passwordChanger) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.getToken()}`
        });
        return this.http.post('/auth/change-password', JSON.stringify(passwordChanger), { headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            this.passwordChanged = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
        }));
    }
    refreshToken() {
        if (!(this.cookieService.get('token') === '')) {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': `Bearer ${this.getToken()}`
            });
            return this.http.post('/auth/refresh', {}, { headers, observe: 'response' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
                const userState = response.body;
                this.setUser(userState['user']);
                this.setToken(userState['token']);
                this.passwordChanged = userState['passwordChanged'];
                if (!this.passwordChanged) {
                    this.router.navigate(['/change-password']);
                }
                return this.user;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((response) => {
                this.removeUser();
                this.removeToken();
                this.router.navigate(['/login']);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(response.error);
            }));
        }
        else {
            this.removeUser();
            this.removeToken();
            return new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"]();
        }
    }
};
UserService.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/services/vacation.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/vacation.service.ts ***!
  \**********************************************/
/*! exports provided: VacationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacationService", function() { return VacationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");







let VacationService = class VacationService {
    constructor(userService, cookieService, http) {
        this.userService = userService;
        this.cookieService = cookieService;
        this.http = http;
    }
    sendRequest(vacation) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Authorization': `Bearer ${this.userService.getToken()}`
        });
        return this.http.post(`/api/vacations/request`, vacation, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => {
            return response.body;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((response) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(response.error);
        }));
    }
};
VacationService.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
VacationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VacationService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Petar\PROJEKAT_ISA_PSW\PSW_ISA\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map