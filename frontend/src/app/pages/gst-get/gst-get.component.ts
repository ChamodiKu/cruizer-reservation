import { Component, OnInit } from '@angular/core';
import Business from '../../../Business';
import { BusinessService } from '../../../business.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {

  businesses: Business[];

  constructor(private bs: BusinessService, private router: Router) { }

  ngOnInit() {
    this.fetchBusiness()
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