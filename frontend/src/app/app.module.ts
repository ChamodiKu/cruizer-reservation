import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { httpInterceptorProviders } from './auth/auth.interceptor';
import { PortalComponent } from './pages/portal/portal.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AddEditCarComponent } from './pages/portal/add-edit-car/add-edit-car.component';
import { PortalViewComponent } from './pages/portal/portal-view/portal-view.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardViewComponent } from './pages/dashboard/dashboard-view/dashboard-view.component';
import { AddEditServiceComponent } from './pages/dashboard/add-edit-service/add-edit-service.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UserComponent } from './pages/user/user.component';
import { ViewCarComponent } from './pages/portal/view-car/view-car.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    PortalComponent,
    HomeComponent,
    SignupComponent,
    AddEditCarComponent,
    PortalViewComponent,
    DashboardComponent,
    DashboardViewComponent,
    AddEditServiceComponent,
    FooterComponent,
    UserComponent,
    ViewCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    AuthModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
