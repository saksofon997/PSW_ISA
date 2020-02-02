import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { ExaminationComponent } from '../components/doctor-home/examination/examination.component';
import { Observable } from 'rxjs';
import { DialogService } from '../services/dialog.service';

@Injectable({
	providedIn: 'root'
})
export class ExaminationDeactivateService implements CanDeactivate<ExaminationComponent>{

	component: Object;
	route: ActivatedRouteSnapshot;

	constructor(private router: Router,
		private activatedRoute: ActivatedRoute,
		private confirmationDialogService: DialogService) {
	}

	canDeactivate(component: ExaminationComponent,
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
		nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

		return component.canExit(nextState) ? component.canExit(nextState) : false;
	}
}
