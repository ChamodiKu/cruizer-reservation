import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Injectable()
export class PortalGuard implements CanActivate {

  constructor(public userService: UserService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('PortalGuard');
    const currentUser = this.userService.current();
    console.log(currentUser);
    if (!!currentUser && !currentUser.isAdmin) {
      return true;
    } else {
      this.router.navigate(['/']);
    }
  }
}