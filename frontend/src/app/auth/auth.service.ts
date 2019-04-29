import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { AppConfig } from '../app-config'
import { tap, shareReplay } from 'rxjs/operators'
import * as moment from 'moment'
import { SignInResponse, SignInRequest, SignUpRequest } from './auth.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // API Endpoints
  private signInUrl = AppConfig.apiUrl + "/auth/signin"
  private signUpUrl = AppConfig.apiUrl + "/auth/signup"

  constructor(
    private http: HttpClient
  ) { }

  isAuthorized() {
    return moment().isBefore(this.getExpiration())
  }

  signUp(request: SignUpRequest) {
    return this.http.post(this.signUpUrl, request).pipe(

    )
  }

  signIn(request: SignInRequest) {
    return this.http.post(this.signInUrl, request).pipe(
      tap(res => this.setSession(res as SignInResponse)),
      shareReplay()
    )
  }

  signOut() {
    localStorage.removeItem("id_token")
    localStorage.removeItem("expires_at")
  }

  private setSession(response: SignInResponse) {
    const expiresAt = moment().add(response.expiresIn, 'second')

    localStorage.setItem('jwt_token', response.accessToken)
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()))
  }

  private getExpiration() {
    const expiration = localStorage.getItem("expires_at")
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
