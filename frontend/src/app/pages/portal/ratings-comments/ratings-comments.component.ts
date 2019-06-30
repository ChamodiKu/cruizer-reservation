import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit() {}

  onSubmit() {}
}
