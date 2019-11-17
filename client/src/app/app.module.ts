import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClinicFormComponent} from './components/admin-profile/clinic-form/clinic-form.component'
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { HeaderComponent } from './components/header/header.component';
import { ClinicListingComponent } from './components/admin-profile/clinic-listing/clinic-listing.component';
import { ClinicAdministratorsListingComponent } from './components/admin-profile/clinic-administrators-listing/clinic-administrators-listing.component';
import { LoginComponent } from './components/login/login.component';
import { MedicationListingComponent } from './components/admin-profile/medication-listing/medication-listing.component';
import { MedicationFormComponent } from './components/admin-profile/medication-form/medication-form.component';
import { DoctorFormComponent } from './components/admin-profile/doctor-form/doctor-form.component';

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
    DoctorFormComponent
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
