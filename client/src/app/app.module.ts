import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClinicFormComponent} from './components/clinic-form/clinic-form.component'
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { HeaderComponent } from './components/header/header.component';
import { ShowListingComponent } from './components/show-listing/show-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppComponent,
    ClinicFormComponent,
    AdminProfileComponent,
    ShowListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    MatTabsModule
  ],
  providers: [CookieService], //UserService, AuthGuardService
  bootstrap: [AppComponent]
})
export class AppModule { }
