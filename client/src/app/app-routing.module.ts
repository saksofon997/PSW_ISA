import { ShowListingComponent } from './components/show-listing/show-listing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './guards/auth-guard.service'
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';


const routes: Routes = [
	{
		path: 'profile',
		component: AdminProfileComponent,
		children:[
			{path: 'clinics', component: ShowListingComponent,
				children:[{path: 'clinicAdmins', component: ShowListingComponent}]
			},
			
		]
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
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
