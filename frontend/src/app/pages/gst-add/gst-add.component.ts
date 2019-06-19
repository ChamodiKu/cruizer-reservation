import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../../../business.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: BusinessService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      job_id: ['', Validators.required ],
      technician_id: ['', Validators.required ],
      date_serviced: ['', Validators.required ],
      body_wash: ['', Validators.required ]
    });
  }

  addBusiness(job_id, technician_id, date_serviced, body_wash) 
  {
    let bodyWash = this.angForm.get('body_wash').value;
    //console.log(job_id, technician_id, date_serviced, test)
    this.bs.addBusiness(job_id, technician_id, date_serviced, bodyWash);
      // console.log(data);
    this.router.navigate(['business']);
    // this.router.navigate(['business']);
  }

  ngOnInit() {
  }

}