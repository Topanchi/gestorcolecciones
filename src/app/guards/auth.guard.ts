import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router: Router,
              private _afauth: AngularFireAuth) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve, reject) => {
        this._afauth.onAuthStateChanged((user) => {
          console.log("user: ", user);
          if (user) {
            resolve(true);
          } else {
            console.error('User is not logged in');
            resolve(false);
            Swal.fire({
              title: 'Debe iniciar sesión',
              showDenyButton: false,
              showCancelButton: false,
              confirmButtonText: 'Ok',
              denyButtonText: `No`,
            }).then((result) => {
              
              if (result.isConfirmed) {
                this._router.navigate(['/login']);
              } 
            })
          }
        });
      });
  }
  
}
