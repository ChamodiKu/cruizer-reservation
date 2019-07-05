import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:3000/business';

  constructor(private http: HttpClient) { }

  addBusiness(job_id, technician_id, date_serviced,vehicle_no,make,model,owner_name,mileage,lights_indicators,
    horn,wipers,side_mirror,power_windows,brake_fluid,engine_coolant,drive_belt,ac_filter, air_filter,front_brakes,rear_brakes,engine_oil,oil_filter,shocks,tyre_pressure, body_wash) {
    const obj = {

      job_id: job_id,
      technician_id: technician_id,
      date_serviced: date_serviced,
      vehicle_no: vehicle_no,
      make: make,
      model: model,
      owner_name: owner_name,
      mileage: mileage,
      lights_indicators: lights_indicators,
      horn: horn,
      wipers: wipers,
      side_mirror: side_mirror,
      power_windows: power_windows,
      brake_fluid: brake_fluid,
      engine_coolant: engine_coolant,
      drive_belt: drive_belt,
      ac_filter: ac_filter,
      air_filter: air_filter,
      front_brakes: front_brakes,
      rear_brakes: rear_brakes,
      engine_oil: engine_oil,
      oil_filter: oil_filter,
      shocks: shocks,
      tyre_pressure: tyre_pressure,
      body_wash: body_wash

    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getBusinesses() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editBusiness(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }
    //job_id, technician_id, date_serviced, vehicle_no, make, model, owner_name, mileage, lights_indicators, horn, wipers, side_mirror, power_windows, break_fluid, engine_coolant, drive_belt, ac_filter, air_filter, front_brakes, rear_breaks, engine_oil, oil_filter, shocks, tyre_pressure, body_wash,id
    updateBusiness(job_id, technician_id, date_serviced,vehicle_no,make,model,owner_name,mileage,lights_indicators,
      horn,wipers,side_mirror,power_windows,brake_fluid,engine_coolant,drive_belt,ac_filter, air_filter,front_brakes,rear_brakes,engine_oil,oil_filter,shocks,tyre_pressure, body_wash,id){
      const obj = {
        job_id: job_id,
        technician_id: technician_id,
        date_serviced: date_serviced,
        vehicle_no: vehicle_no,
        make: make,
        model: model,
        owner_name: owner_name,
        mileage: mileage,
        lights_indicators: lights_indicators,
        horn: horn,
        wipers: wipers,
        side_mirror: side_mirror,
        power_windows: power_windows,
        brake_fluid: brake_fluid,
        engine_coolant: engine_coolant,
        drive_belt: drive_belt,
        ac_filter: ac_filter,
        air_filter: air_filter,
        front_brakes: front_brakes,
        rear_brakes: rear_brakes,
        engine_oil: engine_oil,
        oil_filter: oil_filter,
        shocks: shocks,
        tyre_pressure: tyre_pressure,
        body_wash: body_wash
      };
      return this.http.post(`${this.uri}/update/${id}`, obj);
      }
      
    deleteBusiness(id) {
      return this
                .http
                .get(`${this.uri}/delete/${id}`);
    }
}