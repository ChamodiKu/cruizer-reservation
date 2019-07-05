import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { GstAddComponent } from './pages/add-report/add-report.component';
import { GstEditComponent } from './pages/edit-report/edit-report.component';
import { GstGetComponent } from './pages/view-reports/view-reports.component';


const routes: Routes =[
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },{
    path: '',
    component: HomeComponent,
  },/*{
    path: 'admin',
    component: AdminLayoutComponent,
},{
  path: 'manager',
  component: ManagerComponent,
  children: [
      {
    path: '',
    loadChildren: './layouts/manager/manager.module#ManagerModule'
}]
},*/{ path: 'user',      component: UserComponent },
    { path: 'admin',      component: AdminComponent },
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
    {
      path: 'business/create',
      component: GstAddComponent
    },
    {
      path: 'business/edit/:id',
      component: GstEditComponent
    },
    {
      path: 'business',
      component: GstGetComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
