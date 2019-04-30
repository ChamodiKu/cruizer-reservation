import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { load } from '@angular/core/src/render3';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public signInForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  error: String
  loading: boolean

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSignIn() {
    this.loading = true
    const request = {
      username: this.signInForm.controls['username'].value,
      password: this.signInForm.controls['password'].value
    };
    this.authService.signIn(request).subscribe(() => {
      this.router.navigateByUrl('/portal');
    }, err => {
      this.loading = false
      console.log(err)
      if (err.error.message)
        this.error = err.error.message
    });
  }

}
