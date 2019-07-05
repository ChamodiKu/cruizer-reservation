import { Component, OnInit } from '@angular/core';
import Business from '../../../Business';
import { BusinessService } from '../../../business.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css']
})
export class GstGetComponent implements OnInit {

  search = '';
  isAdmin = false;

  businesses: Business[];

  constructor(
    private bs: BusinessService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.fetchBusiness();
    this.isAdmin = this.userService.current().isAdmin;
  }
  deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
      this.fetchBusiness();
      // this.router.navigate(['business']);
    });
  }

  fetchBusiness() {
    this.bs
      .getBusinesses().pipe(first())
      .subscribe((data: Business[]) => {
        this.businesses = data;
    });
  }
  
}