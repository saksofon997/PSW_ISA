import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ChangePasswordComponent } from '../components/change-password/change-password.component';

@Injectable({
	providedIn: 'root'
})
export class ChangePasswordDeactivateService implements CanDeactivate<ChangePasswordComponent>
{
    component: Object;
    route: ActivatedRouteSnapshot;
 
   constructor(){
   }
 
   canDeactivate(component: ChangePasswordComponent,
                route: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot,
                nextState: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
        
        return component.canExit();
 
  }
  
}