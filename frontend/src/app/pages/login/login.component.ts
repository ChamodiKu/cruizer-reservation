import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public signInForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private authService: AuthService
  ) { }

  onSignIn() {
    const request = {
      username: this.signInForm.controls['username'].value,
      password: this.signInForm.controls['password'].value
    }
    this.authService.signIn(request).subscribe(() => {
      // TODO - Navigate to redirect
    })
  }

}
