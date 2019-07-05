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
      vehicle_no: ['', Validators.required ],
      make: ['', Validators.required ],
      model: ['', Validators.required ],
      owner_name: ['', Validators.required ],
      mileage: ['', Validators.required ],
      lights_indicators: ['', Validators.required ],
      horn: ['', Validators.required ],
      wipers: ['', Validators.required ],
      side_mirror: ['', Validators.required ],
      power_windows: ['', Validators.required ],
      brake_fluid: ['', Validators.required ],
      engine_coolant: ['', Validators.required ],
      drive_belt: ['', Validators.required ],
      ac_filter: ['', Validators.required ],
      air_filter: ['', Validators.required ],
      front_brakes: ['', Validators.required ],
      rear_brakes: ['', Validators.required ],
      engine_oil: ['', Validators.required ],
      oil_filter: ['', Validators.required ],
      shocks: ['', Validators.required ],
      tyre_pressure: ['', Validators.required ],
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

  updateBusiness(job_id, technician_id, date_serviced, vehicle_no,make,model,owner_name,mileage) {
    let bodyWash = this.angForm.get('body_wash').value;
    let lightsIndicators = this.angForm.get('lights_indicators').value;
    let horN = this.angForm.get('horn').value;
    let wiperS = this.angForm.get('wipers').value; 
    let sideMirror = this.angForm.get('side_mirror').value;
    let powerWindows = this.angForm.get('power_windows').value;
    let brakeFluid = this.angForm.get('brake_fluid').value;
    let engineCoolant = this.angForm.get('engine_coolant').value;
    let driveBelt = this.angForm.get('drive_belt').value;
    let acFilter = this.angForm.get('ac_filter').value;
    let airFilter = this.angForm.get('air_filter').value;
    let frontBrakes = this.angForm.get('front_brakes').value;
    let rearBrakes = this.angForm.get('rear_brakes').value;
    let engineOil = this.angForm.get('engine_oil').value;
    let oilFilter = this.angForm.get('oil_filter').value;
    let shockS = this.angForm.get('shocks').value;
    let tyrePressure = this.angForm.get('tyre_pressure').value;
    this.route.params.subscribe(params => {
      this.bs.updateBusiness(job_id, technician_id, date_serviced, vehicle_no,make,model,owner_name,mileage,lightsIndicators,
        horN,wiperS,sideMirror,powerWindows,brakeFluid,engineCoolant,driveBelt,acFilter, airFilter,frontBrakes,rearBrakes,engineOil,oilFilter,shockS,tyrePressure, bodyWash, params['id']).subscribe((data: string) => {
        console.log(data);
        this.router.navigate(['business']);
      });
    })
  }

}