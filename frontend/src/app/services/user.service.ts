import { Injectable } from '@angular/core';
import { AppConfig } from '../app-config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.dto';
import { map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // API Endpoints
  private currentUrl = AppConfig.apiUrl + "/users/current"

  constructor(
    private http: HttpClient
  ) { }

  current(): Observable<User> {
    return this.http.get(this.currentUrl).pipe(
      first(),
      map(res => res as User)
    )
  }
}
