import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { LoginGuard } from './login.guard';
import { HomeGuard } from './home.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    LoginGuard,
    HomeGuard
  ]
})
export class AuthModule { }
