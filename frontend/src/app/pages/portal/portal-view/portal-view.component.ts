import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/services/car.dto';
import { CarService } from 'src/app/services/car.service';
import { updateLocale } from 'moment';
import { ServiceService } from 'src/app/services/service.service';
import { Service } from 'src/app/services/service.dto';
import { Reservation } from 'src/app/services/reservation.dto';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-portal-view',
  templateUrl: './portal-view.component.html',
  styleUrls: ['./portal-view.component.scss']
})
export class PortalViewComponent implements OnInit {

  reservations: Reservation[] = [];
  cars: Car[] = [];
  services: Service[] = [];

  constructor(
    private carService: CarService,
    private serviecService: ServiceService,
    private reservationService: ReservationService
  ) { }

  ngOnInit() {
    this.reservationService.get().subscribe(reservations => {
      this.reservations = reservations;
    });
    this.carService.get().subscribe(cars => {
      this.cars = cars;
    });
    this.serviecService.get().subscribe(services => {
      this.services = services;
    });
  }

}
