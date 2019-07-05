import { Component, OnInit } from '@angular/core';
import Business from '../../../Business';
import { BusinessService } from '../../../business.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
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
  
  // myFunction() {
  //   // Declare variables 
  //   var input, filter, table, tr, td, i, txtValue;
  //   input = document.getElementById("myInput");
  //   filter = input.value.toUpperCase();
  //   table = document.getElementById("myTable");
  //   tr = table.getElementsByTagName("tr");
  
  //   // Loop through all table rows, and hide those who don't match the search query
  //   for (i = 0; i < tr.length; i++) {
  //     td = tr[i].getElementsByTagName("td")[0];
  //     if (td) {
  //       txtValue = td.textContent || td.innerText;
  //       if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //         tr[i].style.display = "";
  //       } else {
  //         tr[i].style.display = "none";
  //       }
  //     } 
  //   }
  // }
}