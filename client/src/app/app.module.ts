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

import { TypeOfExaminationListingComponent } from './components/adminC-dashboard/type-of-examination-listing/type-of-examination-listing.component';
import { TypeOfExaminationFormComponent } from './components/adminC-dashboard/type-of-examination-form/type-of-examination-form.component';

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
    OrdinationListingComponent,
    AvailableAppointmentListingComponent,
    RegistrationListingComponent,
    DialogComponent,
    AdminCDashboardComponent,
    TypeOfExaminationListingComponent,
    TypeOfExaminationFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpModule,
    NgHttpLoaderModule.forRoot(),
    NgbModule,
  ],
  providers: [CookieService], //UserService, AuthGuardService
  bootstrap: [AppComponent],
  entryComponents: [ DialogComponent ],
})
export class AppModule { }
