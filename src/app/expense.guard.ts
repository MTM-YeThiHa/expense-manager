import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
      let url: string = state.url;
        return this.checkLogin(url);
    // return true;
  }

    checkLogin(url: string): boolean {
      console.log("Url: " + url)
      let val: string | null = localStorage.getItem('isUserLoggedIn');

      if(val && val === "true"){
        if (url == "/login") {
          this.router.parseUrl('/expenses');
        }
        return true;
      } else {
        this.router.parseUrl('/login');
        return false;
      }
    }
  
  
}
