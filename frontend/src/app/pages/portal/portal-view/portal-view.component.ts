import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/services/car.dto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-portal-view',
  templateUrl: './portal-view.component.html',
  styleUrls: ['./portal-view.component.scss']
})
export class PortalViewComponent implements OnInit {

  cars: Observable<Car[]>

  constructor(
    private carService: CarService
  ) { }

  ngOnInit() {
    this.cars = this.carService.get()
  }

}
