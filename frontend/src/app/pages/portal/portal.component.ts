import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/services/car.dto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  cars: Observable<Car[]>

  constructor(
    private carService: CarService
  ) { }

  ngOnInit() {
    this.cars = this.carService.get()
  }

}
