import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/services/car.dto';
import { CarService } from 'src/app/services/car.service';
import { updateLocale } from 'moment';

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
    this.updateCars()
  }

  onDelete(id: string) {
    this.carService.delete(id).subscribe(res => {
      console.log(res)
      this.updateCars()
    })
  }

  private updateCars() {
    this.cars = this.carService.get()
  }

}
