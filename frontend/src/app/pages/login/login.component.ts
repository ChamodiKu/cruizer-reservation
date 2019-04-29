import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public signInForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  public authorized: boolean

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.updateAuthorized()
  }

  onSignIn() {
    console.log("onSignIn")
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
