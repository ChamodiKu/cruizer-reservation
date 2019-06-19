import { UserService } from 'src/app/services/user.service';
import { ReservationService } from './../../services/reservation.service';
import {
  Router,
  ActivatedRoute,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { first, map, tap, flatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/services/user.dto';

@Component({
  selector: 'app-edit-userdetails',
  templateUrl: './edit-userdetails.component.html',
  styleUrls: ['./edit-userdetails.component.scss']
})
export class EditUserdetailsComponent implements OnInit {
  public userdetailsForm = new FormGroup({
    username: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    telephone: new FormControl(''),
    address: new FormControl('')
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ReservationService: ReservationService,
    private userservice: UserService
  ) {}

  ngOnInit() {}

  editId: string;

  error: string;
  loading: boolean;

  onSubmit() {
    const user: User = {
      username: this.userdetailsForm.controls['username'].value,
      firstname: this.userdetailsForm.controls['firstname'].value,
      lastname: this.userdetailsForm.controls['lastname'].value,
      tel: this.userdetailsForm.controls['telephone'].value,
      address: this.userdetailsForm.controls['address'].value
    };
    let action: Observable<any>;
    if (this.editId) {
      action = this.userservice.update(this.editId, user);
    } else {
      action = this.userservice.create(user);
    }
    action.subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/dashboard']);
      },
      err => {
        this.loading = false;
        if (err.error.message) {
          this.error = err.error.message;
        }
      }
    );
  }
}
