import { Injectable } from '@angular/core';
import { AppConfig } from '../app-config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.dto';
import { map, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // API Endpoints
  private currentUrl = AppConfig.apiUrl + '/users/current';

  constructor(
    private http: HttpClient
  ) { }

  current(): User {
    return JSON.parse(localStorage.getItem('current_user')) as User;
  }

  collectCurrent(): Observable<User> {
    return this.http.get(this.currentUrl).pipe(
      first(),
      map(res => res as User),
      tap(user => this.setUser(user))
    );
  }

  removeCurrent() {
    this.removeUser();
  }

  private setUser(response: User) {
    localStorage.setItem('current_user', JSON.stringify(response));
  }

  private removeUser() {
    localStorage.removeItem('current_user');
  }

}
