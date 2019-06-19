import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BusinessService } from '../../../business.service';

@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.css']
})
export class GstEditComponent implements OnInit {

  business: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: BusinessService,
    private fb: FormBuilder) {
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


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe((res: any) => {
        console.log(res);
        let date: Date = new Date(res.date_serviced);
        let dateNumber = (date.getDate() < 10) ? "0" + date.getDate() : date.getDate();
        let dateFor = date.getFullYear() + "-" + date.getMonth() + 1 + "-" + dateNumber;
        console.log(dateFor)
        this.angForm.get('date_serviced').setValue(dateFor);
        this.business = res;
      });
    });
  }

  updateBusiness(job_id, technician_id, date_serviced, body_wash) {
    this.route.params.subscribe(params => {
      this.bs.updateBusiness(job_id, technician_id, date_serviced, body_wash, params['id']).subscribe((data: string) => {
        console.log(data);
        this.router.navigate(['business']);
      });
    })
  }

}