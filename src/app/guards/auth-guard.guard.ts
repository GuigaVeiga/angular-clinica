import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../views/login/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
 constructor(
  private authServer: AuthServiceService,
  private router: Router) {

 }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> |  boolean {

     if (this.authServer.usuarioEstaAutenticado()) {
      return true;
     }

     this.router.navigate(['/login']);
     return false;
  }

}
