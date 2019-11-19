import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
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
import { DoctorFormComponent } from './components/adminCC-dashboard/doctor-form/doctor-form.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ClinicAdminFormComponent } from './components/adminCC-dashboard/clinic-admin-form/clinic-admin-form.component';
import { DoctorListingComponent } from './components/adminC-dashboard/doctor-listing/doctor-listing.component';
import { ClinicProfileInfoComponent } from './components/adminC-dashboard/clinic-profile-info/clinic-profile-info.component';
import { AdminCPersonalProfileComponent } from './components/adminC-dashboard/adminC-personal-profile/adminC-personal-profile.component';
import { AdminCDashboardComponent } from './components/adminC-dashboard/adminC-dashboard.component';

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
    AdminCDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [CookieService], //UserService, AuthGuardService
  bootstrap: [AppComponent]
})
export class AppModule { }
