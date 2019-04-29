import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public signInForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  public authorized: boolean

  constructor(
    private authService: AuthService
  ) {
    this.updateAuthorized()
  }

  onSignIn() {
    const request = {
      username: this.signInForm.controls['username'].value,
      password: this.signInForm.controls['password'].value
    }
    this.authService.signIn(request).subscribe(() => {
      this.updateAuthorized()
    })
  }

  onSignOut() {
    this.authService.signOut()
    this.updateAuthorized()
  }

  private updateAuthorized() {
    this.authorized = this.authService.isAuthorized()
  }

}
