import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClinicFormComponent } from './components/adminCC-dashboard/clinic-form/clinic-form.component'
import { AdminProfileComponent } from './components/adminCC-dashboard/admin-profile.component';
import { HeaderComponent } from './components/header/header.component';
import { ClinicListingComponent } from './components/adminCC-dashboard/clinic-listing/clinic-listing.component';
import { ClinicAdministratorsListingComponent } from './components/adminCC-dashboard/clinic-administrators-listing/clinic-administrators-listing.component';
import { LoginComponent } from './components/login/login.component';
import { MedicationListingComponent } from './components/adminCC-dashboard/medication-listing/medication-listing.component';
import { MedicationFormComponent } from './components/adminCC-dashboard/medication-form/medication-form.component';
import { AdminPersonalProfileComponent } from './components/adminCC-dashboard/admin-personal-profile/admin-personal-profile.component';
import { DoctorFormComponent } from './components/adminC-dashboard/doctor-form/doctor-form.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ClinicAdminFormComponent } from './components/adminCC-dashboard/clinic-admin-form/clinic-admin-form.component';
import { DoctorListingComponent } from './components/adminC-dashboard/doctor-listing/doctor-listing.component';
import { ClinicProfileInfoComponent } from './components/adminC-dashboard/clinic-profile-info/clinic-profile-info.component';
import { AdminCPersonalProfileComponent } from './components/adminC-dashboard/adminC-personal-profile/adminC-personal-profile.component';
import { AdminCDashboardComponent } from './components/adminC-dashboard/adminC-dashboard.component';
import { DiagnosisListingComponent } from './components/adminCC-dashboard/diagnosis-listing/diagnosis-listing.component';
import { DiagnosisFormComponent } from './components/adminCC-dashboard/diagnosis-form/diagnosis-form.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { OrdinationListingComponent } from './components/adminC-dashboard/ordination-listing/ordination-listing.component';
import { AvailableAppointmentListingComponent } from './components/adminC-dashboard/available-appointment-listing/available-appointment-listing.component';
import { RegistrationListingComponent } from './components/adminCC-dashboard/registration-listing/registration-listing.component';
import { DialogComponent } from './components/helperComponents/dialog/dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { APP_INITIALIZER } from '@angular/core';

import { TypeOfExaminationListingComponent } from './components/adminC-dashboard/type-of-examination-listing/type-of-examination-listing.component';
import { TypeOfExaminationFormComponent } from './components/adminC-dashboard/type-of-examination-form/type-of-examination-form.component';
import { OrdinationFormComponent } from './components/adminC-dashboard/ordination-form/ordination-form.component';
import { PatientHomeComponent } from './components/patient-home/patient-home.component';
import { PatientPersonalProfileComponent } from './components/patient-profile/patient-personal-profile/patient-personal-profile.component';
import { PatientClinicListingComponent } from './components/patient-home/patient-clinic-listing/patient-clinic-listing.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { PatientPendingAppointmentsListingComponent } from './components/patient-home/patient-pending-appointments-listing/patient-pending-appointments-listing.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DoctorHomeComponent } from './components/doctor-home/doctor-home/doctor-home.component';
import { DoctorCalendarComponent } from './components/doctor-home/doctor-calendar/doctor-calendar.component';
import { NurseFormComponent } from './components/adminC-dashboard/nurse-form/nurse-form.component';
import { NurseHomeComponent } from './components/nurse-home/nurse-home.component';
import { NurseListingComponent } from './components/adminC-dashboard/nurse-listing/nurse-listing.component';
import { NurseProfileComponent } from './components/nurse-home/nurse-profile/nurse-profile.component';
import { NursePersonalProfileComponent } from './components/nurse-home/nurse-profile/nurse-personal-profile/nurse-personal-profile.component';
import { PatientListingComponent } from './components/doctor-home/patient-listing/patient-listing.component';
import { DoctorProfileComponent } from './components/doctor-home/doctor-profile/doctor-profile.component';
import { DoctorMyProfileComponent } from './components/doctor-home/doctor-my-profile/doctor-my-profile.component';
import { UserService } from './services/user.service';
import { NurseCalendarComponent } from './components/nurse-home/nurse-calendar/nurse-calendar.component';
import { NursePatientListingComponent } from './components/nurse-home/nurse-patient-listing/nurse-patient-listing.component';
import { PrescriptionListingComponent } from './components/nurse-home/prescription-listing/prescription-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppComponent,
    ClinicFormComponent,
    AdminProfileComponent,
    LoginComponent,
    ClinicListingComponent,
    ClinicAdministratorsListingComponent,
    MedicationListingComponent,
    MedicationFormComponent,
    AdminPersonalProfileComponent,
    DoctorFormComponent,
    ClinicAdminFormComponent,
    ClinicProfileInfoComponent,
    ChangePasswordComponent,
    DoctorListingComponent,
    AdminCPersonalProfileComponent,
    AdminCDashboardComponent,
    DiagnosisListingComponent,
    DiagnosisFormComponent,
    RegistrationComponent,
    DiagnosisFormComponent,
    AvailableAppointmentListingComponent,
    RegistrationListingComponent,
    DialogComponent,
    AdminCDashboardComponent,
    TypeOfExaminationListingComponent,
    TypeOfExaminationFormComponent,
    OrdinationListingComponent,
    OrdinationFormComponent,
    PatientHomeComponent,
    PatientPersonalProfileComponent,
    PatientClinicListingComponent,
    PatientProfileComponent,
    PatientPendingAppointmentsListingComponent,
    DoctorHomeComponent,
    DoctorCalendarComponent,
    PatientPendingAppointmentsListingComponent,
    NurseFormComponent,
    NurseHomeComponent,
    NurseListingComponent,
    NurseFormComponent,
    NurseProfileComponent,
    NursePersonalProfileComponent,
    PatientListingComponent,
    DoctorProfileComponent,
    DoctorMyProfileComponent,
    NurseCalendarComponent,
    DoctorMyProfileComponent,
    NursePatientListingComponent,
    PrescriptionListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpModule,
    MatTableModule,
    BrowserAnimationsModule,
    NgHttpLoaderModule.forRoot(),
    NgbModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  ],
  providers: [CookieService, UserService,
    {
      provide: APP_INITIALIZER,
      useFactory: (userService: UserService) => function() {userService.refreshToken()},
      deps: [UserService],
      multi: true
    }], //UserService, AuthGuardService
  bootstrap: [AppComponent],
  entryComponents: [ DialogComponent ],
})
export class AppModule { }
