import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  userLogged = this._autService.getUserLoggedStatus();
  constructor(private _autService: AuthService, private _router: Router) {}
  //Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const user = this.userLogged;
      const isAuth = user ? true : false;
      if(!isAuth){
        Swal.fire({
          title: 'Debe iniciar sesión',
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: 'Sí',
          denyButtonText: `No`,
        }).then((result) => {
          
          if (result.isConfirmed) {
            this._router.navigate(['/']);
          } 
        })
      }

      return isAuth;
      
    
  }
  
}
