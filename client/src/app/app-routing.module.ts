import { DoctorListingComponent } from './components/adminC-dashboard/doctor-listing/doctor-listing.component';
import { ClinicAdminFormComponent } from './components/adminCC-dashboard/clinic-admin-form/clinic-admin-form.component';
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
import { DoctorFormComponent } from './components/adminC-dashboard/doctor-form/doctor-form.component';
import { AdminPersonalProfileComponent} from './components/adminCC-dashboard/admin-personal-profile/admin-personal-profile.component';
import { ClinicProfileInfoComponent } from './components/adminC-dashboard/clinic-profile-info/clinic-profile-info.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ChangePasswordDeactivateService } from './guards/change-password-deactivate.service';
import { AdminCPersonalProfileComponent } from './components/adminC-dashboard/adminC-personal-profile/adminC-personal-profile.component';
import { AdminCDashboardComponent } from './components/adminC-dashboard/adminC-dashboard.component';
import { DiagnosisListingComponent } from './components/adminCC-dashboard/diagnosis-listing/diagnosis-listing.component';
import { DiagnosisFormComponent } from './components/adminCC-dashboard/diagnosis-form/diagnosis-form.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { OrdinationListingComponent } from './components/adminC-dashboard/ordination-listing/ordination-listing.component';
import { AvailableAppointmentListingComponent } from './components/adminC-dashboard/available-appointment-listing/available-appointment-listing.component';
import { RegistrationListingComponent } from './components/adminCC-dashboard/registration-listing/registration-listing.component';
import { TypeOfExaminationListingComponent } from './components/adminC-dashboard/type-of-examination-listing/type-of-examination-listing.component';
import { TypeOfExaminationFormComponent } from './components/adminC-dashboard/type-of-examination-form/type-of-examination-form.component';
import { OrdinationFormComponent } from './components/adminC-dashboard/ordination-form/ordination-form.component';
import { PatientHomeComponent } from './components/patient-home/patient-home.component';
import { PatientPersonalProfileComponent } from './components/patient-profile/patient-personal-profile/patient-personal-profile.component';
import { PatientClinicListingComponent } from './components/patient-home/patient-clinic-listing/patient-clinic-listing.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { PatientPendingAppointmentsListingComponent } from './components/patient-home/patient-pending-appointments-listing/patient-pending-appointments-listing.component';
import { DoctorHomeComponent } from './components/doctor-home/doctor-home/doctor-home.component';
import { DoctorCalendarComponent } from './components/doctor-home/doctor-calendar/doctor-calendar.component';
import { NurseHomeComponent } from './components/nurse-home/nurse-home.component';
import { NurseProfileComponent } from './components/nurse-home/nurse-profile/nurse-profile.component';
import { NursePersonalProfileComponent } from './components/nurse-home/nurse-profile/nurse-personal-profile/nurse-personal-profile.component';
import { NurseListingComponent } from './components/adminC-dashboard/nurse-listing/nurse-listing.component';
import { NurseFormComponent } from './components/adminC-dashboard/nurse-form/nurse-form.component';
import { DoctorMyProfileComponent } from './components/doctor-home/doctor-my-profile/doctor-my-profile.component';
import { DoctorProfileComponent } from './components/doctor-home/doctor-profile/doctor-profile.component';
import { PatientListingComponent } from './components/doctor-home/patient-listing/patient-listing.component';
import { NurseCalendarComponent } from './components/nurse-home/nurse-calendar/nurse-calendar.component';
import { NursePatientListingComponent } from './components/nurse-home/nurse-patient-listing/nurse-patient-listing.component';
import { PrescriptionListingComponent } from './components/nurse-home/prescription-listing/prescription-listing.component';
import { NewAppointmentPageComponent } from './components/doctor-home/new-appointment-page/new-appointment-page.component';

const routes: Routes = [
	{
		path: 'adminCCdashboard',
		component: AdminProfileComponent,
		children:[
			{path: '', component: AdminPersonalProfileComponent},
			{path: 'profile', component: AdminPersonalProfileComponent},
			{path: 'clinics', component: ClinicListingComponent},
			{path: 'clinicAdmins', component: ClinicAdministratorsListingComponent},
			{path: 'addClinic', component: ClinicFormComponent},
			{path: 'medications', component: MedicationListingComponent},
			{path: 'medication_info', component: MedicationFormComponent},
			{path: 'diagnoses', component: DiagnosisListingComponent},
			{path: 'diagnosis_info', component: DiagnosisFormComponent},
			{path: 'addClinicAdmin', component: ClinicAdminFormComponent},
			{path: 'showClinicInfo', component: ClinicProfileInfoComponent},
			{path: 'registrationRequests', component: RegistrationListingComponent}
		],
		canActivate: [AuthGuardService],
		data: { roles: ['ADMINCC']}
	},
	{
		path: 'adminCdashboard',
		component: AdminCDashboardComponent,
		children:[
			{path: '', component: AdminCPersonalProfileComponent},
			{path: 'profile', component: AdminCPersonalProfileComponent},
			{path: 'clinic', component: ClinicProfileInfoComponent},
			{path: 'doctors', component: DoctorListingComponent},
			{path: 'doctor', component: DoctorFormComponent},
			{path: 'available_appointments', component: AvailableAppointmentListingComponent},
			{path: 'types_of_examination', component: TypeOfExaminationListingComponent},
			{path: 'type_of_examination_info', component: TypeOfExaminationFormComponent},
			{path: 'ordinations', component: OrdinationListingComponent},
			{path: 'ordination_form', component: OrdinationFormComponent},
			{path: 'nurse_listing', component: NurseListingComponent},
			{path: 'nurse_form', component: NurseFormComponent},

		],
		canActivate: [AuthGuardService],
		data: { roles: ['ADMINC']}
	},
	{
		path: 'patient',
		component: PatientHomeComponent,
		children:[
			{path: '', component: PatientClinicListingComponent},
			{path: 'clinics', component: PatientClinicListingComponent},
			{path: 'pending_appointments', component: PatientPendingAppointmentsListingComponent},
		],
		canActivate: [AuthGuardService],
		data: { roles: ['PATIENT']}
	},
	{
		path: 'doctor',
		component: DoctorHomeComponent,
		children:[
			{path: '', component: DoctorCalendarComponent},
			{path: 'calendar', component: DoctorCalendarComponent},
			{path: 'patients', component: PatientListingComponent},
			{path: 'new_appointment/:patient_id', component: NewAppointmentPageComponent},
		],
		canActivate: [AuthGuardService],
		data: { roles: ['DOCTOR']}
	},
	{
		path: 'doctor/profile',
		component: DoctorMyProfileComponent,
		children:[
			{path: '', component: DoctorProfileComponent},
			{path: 'personal', component: DoctorProfileComponent}
		],
		canActivate: [AuthGuardService],
		data: { roles: ['DOCTOR']}
	},
	{
		path: 'patient/profile',
		component: PatientProfileComponent,
		children:[
			{path: '', component: PatientPersonalProfileComponent},
			{path: 'profile', component: PatientPersonalProfileComponent},
		],
		canActivate: [AuthGuardService],
		data: { roles: ['PATIENT']}
	},
	{
		path: 'nurse',
		component: NurseHomeComponent,
		children:[
			{path: '', component: NurseCalendarComponent},
			{path: 'calendar', component: NurseCalendarComponent},
			{path: 'patients', component: NursePatientListingComponent},
			{path: 'prescriptions', component: PrescriptionListingComponent},

		],
		canActivate: [AuthGuardService],
		data: { roles: ['NURSE']}
	},
	{
		path: 'nurse/profile',
		component: NurseProfileComponent,
		children:[
			{path: '', component: NursePersonalProfileComponent},
			{path: 'profile', component: NursePersonalProfileComponent},

		],
		canActivate: [AuthGuardService],
		data: { roles: ['NURSE']}
	},
	// {
	// 	path: 'doctorHome',
	// 	component: PatientHomeComponent,
	// 	children:[
	// 		{path: '', component: PatientPersonalProfileComponent},
	// 		{path: 'profile', component: PatientPersonalProfileComponent},

	// 	],
	// 	canActivate: [AuthGuardService],
	// 	data: { roles: ['DOCTOR']}
	// },
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'register',
		component: RegistrationComponent
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
