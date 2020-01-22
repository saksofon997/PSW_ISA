import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public userService: UserService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const re = /login/gi;
        if (request.url.search(re) === -1) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.userService.getToken()}`
                }
            });
        }
        return next.handle(request);
    }
}