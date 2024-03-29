import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  /*public signInForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });*/

  signInForm: FormGroup;

  error: String;
  loading: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      //[value,validator]
      username : [null,Validators.required],
      password : [null,Validators.required]
      /*address : this.formBuilder.group({}) */
    });
    
  }

  get username(){
    const x = <FormGroup>this.signInForm;
    return x.controls.username; 
  }

  onSignIn() {
    console.log(this.signInForm);
    this.loading = true;

    const request = {
      username: this.signInForm.controls['username'].value,
      password: this.signInForm.controls['password'].value
    };
    this.authService.signIn(request).subscribe(() => {
      this.router.navigateByUrl('/portal');
    }, err => {
      this.loading = false;
      console.log(err);
      if (err.error.message) {
        this.error = err.error.message;
      }
    });
  }

}


