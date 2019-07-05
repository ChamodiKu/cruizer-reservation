import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../../../business.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
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

  addBusiness(job_id, technician_id, date_serviced, vehicle_no,make,model,owner_name,mileage) 
  {
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
    //console.log(job_id, technician_id, date_serviced, test)
    this.bs.addBusiness(job_id, technician_id, date_serviced, vehicle_no,make,model,owner_name,mileage,lightsIndicators,
      horN,wiperS,sideMirror,powerWindows,brakeFluid,engineCoolant,driveBelt,acFilter, airFilter,frontBrakes,rearBrakes,engineOil,oilFilter,shockS,tyrePressure, bodyWash);
      // console.log(data);
    this.router.navigate(['business']);
    // this.router.navigate(['business']);
  }

  ngOnInit() {
  }

}