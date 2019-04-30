import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  public signUpForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  })

  error: string

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSignUp() {
    this.authService.signUp({
      firstname: this.signUpForm.controls['firstname'].value,
      lastname: this.signUpForm.controls['lastname'].value,
      username: this.signUpForm.controls['username'].value,
      password: this.signUpForm.controls['password'].value,
      email: this.signUpForm.controls['email'].value,
    }).subscribe(() => {
      this.router.navigate(['/login'])
    }, err => {
      this.error = err.toString()
    })
  }

}
