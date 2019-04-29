import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

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
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit() {
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
  
  getUser() {
    console.log("getUser")
    this.userService.current().subscribe(res => {
      console.log(res)
    })
  }

  private updateAuthorized() {
    this.authorized = this.authService.isAuthorized()
  }

}
