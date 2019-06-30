import { RateService } from './../../../services/rate.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Rate } from 'src/app/services/rate.dto';
import { Observable } from 'rxjs';
import {
  Router,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-ratings-comments',
  templateUrl: './ratings-comments.component.html',
  styleUrls: ['./ratings-comments.component.scss']
})
export class RatingsCommentsComponent implements OnInit {
  public ratecommentForm = new FormGroup({
    rate: new FormControl(''),
    comment: new FormControl('')
  });
  error: string;
  editId: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rateService: RateService
  ) {}

  ngOnInit() {}

  onSubmit() {
    const rating: Rate = {
      rate: this.ratecommentForm.controls['rate'].value,
      comment: this.ratecommentForm.controls['comment'].value
    };

    let action: Observable<any>;
    action = this.rateService.create(rating);

    action.subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/portal']);
      },
      err => {
        if (err.error.message) {
          this.error = err.error.message;
        }
      }
    );
  }
}
