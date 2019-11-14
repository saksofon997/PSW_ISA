import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClinicFormComponent} from './components/clinic-form/clinic-form.component'
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { HeaderComponent } from './components/header/header.component';
import { ClinicListingComponent } from './components/clinic-listing/clinic-listing.component';
import { ClinicAdministratorsListingComponent } from './components/clinic-administrators-listing/clinic-administrators-listing.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppComponent,
    ClinicFormComponent,
    AdminProfileComponent,
    LoginComponent,
    ClinicListingComponent,
    ClinicAdministratorsListingComponent
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
