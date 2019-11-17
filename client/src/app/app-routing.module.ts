import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './guards/auth-guard.service'
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { LoginComponent } from './components/login/login.component';
import { ClinicListingComponent } from './components/admin-profile/clinic-listing/clinic-listing.component';
import { ClinicAdministratorsListingComponent } from './components/admin-profile/clinic-administrators-listing/clinic-administrators-listing.component';
import { ClinicFormComponent } from './components/admin-profile/clinic-form/clinic-form.component';
import { MedicationListingComponent } from './components/admin-profile/medication-listing/medication-listing.component';
import { MedicationFormComponent } from './components/admin-profile/medication-form/medication-form.component';


const routes: Routes = [
	{
		path: 'profile',
		component: AdminProfileComponent,
		children:[
			{path: '', component: ClinicListingComponent},
			{path: 'clinics', component: ClinicListingComponent},
			{path: 'clinicAdmins', component: ClinicAdministratorsListingComponent},
			{path: 'addClinic', component: ClinicFormComponent},
			{path: 'medications', component: MedicationListingComponent},
			{path: 'medication_info', component: MedicationFormComponent}
		],
		canActivate: [AuthGuardService],
		data: { roles: ["ADMINCC"]}
	},
	{
		path: 'login',
		component: LoginComponent
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
