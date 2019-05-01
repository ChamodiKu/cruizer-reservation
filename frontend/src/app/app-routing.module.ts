import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PortalComponent } from './pages/portal/portal.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginGuard } from './auth/login.guard';
import { HomeComponent } from './pages/home/home.component';
import { HomeGuard } from './auth/home.guard';
import { SignupComponent } from './pages/signup/signup.component';
import { AddEditCarComponent } from './pages/portal/add-edit-car/add-edit-car.component';
import { PortalViewComponent } from './pages/portal/portal-view/portal-view.component';
import { PortalGuard } from './auth/portal.guard';
import { DashboardGuard } from './auth/dashboard.guard';
import { DashboardViewComponent } from './pages/dashboard/dashboard-view/dashboard-view.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [LoginGuard] },
  {
    path: 'portal', component: PortalComponent, canActivate: [AuthGuard, PortalGuard], children: [
      { path: '', component: PortalViewComponent },
      { path: 'car/create', component: AddEditCarComponent },
      { path: 'car/edit/:id', component: AddEditCarComponent }
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard, DashboardGuard], children: [
      { path: '', component: DashboardViewComponent }
    ]
  },
  { path: '', pathMatch: 'full', component: HomeComponent, canActivate: [HomeGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
