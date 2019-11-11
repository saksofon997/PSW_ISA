import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './guards/auth-guard.service'


const routes: Routes = [
	// {
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
