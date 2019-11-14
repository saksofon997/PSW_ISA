import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './guards/auth-guard.service'
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { LoginComponent } from './components/login/login.component';
import { ClinicListingComponent } from './components/clinic-listing/clinic-listing.component';
import { ClinicAdministratorsListingComponent } from './components/clinic-administrators-listing/clinic-administrators-listing.component';
import { ClinicFormComponent } from './components/clinic-form/clinic-form.component';


const routes: Routes = [
	{
		path: 'profile',
		component: AdminProfileComponent,
		children:[
			{path: 'clinics', component: ClinicListingComponent},
			{path: 'clinicAdmins', component: ClinicAdministratorsListingComponent},
			{path: 'addClinic', component: ClinicFormComponent}
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
