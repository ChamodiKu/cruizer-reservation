import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/services/car.dto';
import { Observable } from 'rxjs';
import { map, tap, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-car',
  templateUrl: './view-car.component.html',
  styleUrls: ['./view-car.component.scss']
})
export class ViewCarComponent implements OnInit {

  private carId: String;
  public car: Car;

  constructor(
    private route: ActivatedRoute,
    private carSerivice: CarService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(param => param.get('id')),
      tap(id => this.carId = id),
      flatMap(id => this.carSerivice.getById(id.toString()))
    ).subscribe(car => {
      this.car = car;
    })
  }

}
