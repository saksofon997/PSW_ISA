import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './guards/auth-guard.service'
import { AdminProfileComponent } from './components/adminCC-dashboard/admin-profile.component';
import { LoginComponent } from './components/login/login.component';
import { ClinicListingComponent } from './components/adminCC-dashboard/clinic-listing/clinic-listing.component';
import { ClinicAdministratorsListingComponent } from './components/adminCC-dashboard/clinic-administrators-listing/clinic-administrators-listing.component';
import { ClinicFormComponent } from './components/adminCC-dashboard/clinic-form/clinic-form.component';
import { MedicationListingComponent } from './components/adminCC-dashboard/medication-listing/medication-listing.component';
import { MedicationFormComponent } from './components/adminCC-dashboard/medication-form/medication-form.component';
import { DoctorFormComponent } from './components/adminCC-dashboard/doctor-form/doctor-form.component';
import { AdminPersonalProfileComponent} from './components/adminCC-dashboard/admin-personal-profile/admin-personal-profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ChangePasswordDeactivateService } from './guards/change-password-deactivate.service';

const routes: Routes = [
	{
		path: 'profile',
		component: AdminProfileComponent,
		children:[
			{path: '', component: AdminPersonalProfileComponent},
			{path: 'profile', component: AdminPersonalProfileComponent},
			{path: 'clinics', component: ClinicListingComponent},
			{path: 'clinicAdmins', component: ClinicAdministratorsListingComponent},
			{path: 'addClinic', component: ClinicFormComponent},
			{path: 'medications', component: MedicationListingComponent},
			{path: 'medication_info', component: MedicationFormComponent},
			{path: 'addDoctor', component: DoctorFormComponent},
		],
		canActivate: [AuthGuardService],
		data: { roles: ['ADMINCC']}
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'change-password',
		component: ChangePasswordComponent,
		canDeactivate: [ChangePasswordDeactivateService]
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

@NgModule({
	imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
