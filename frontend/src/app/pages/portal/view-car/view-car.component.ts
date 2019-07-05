import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/services/car.dto';
import { Observable } from 'rxjs';
import { map, tap, flatMap } from 'rxjs/operators';
import { Reservation } from 'src/app/services/reservation.dto';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-view-car',
  templateUrl: './view-car.component.html',
  styleUrls: ['./view-car.component.scss']
})
export class ViewCarComponent implements OnInit {

  private carId: String;
  public car: Car;
  public reservations: Reservation[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private carService: CarService,
    private reservationService: ReservationService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(param => param.get('id')),
      tap(id => this.carId = id),
      flatMap(id => this.carService.getById(id.toString()))
    ).subscribe(car => {
      this.car = car;
      this.fetchReservations();
    })
  }

  onDelete() {
    this.carService.delete(this.carId.toString()).subscribe(res => {
      console.log(res);
      this.router.navigate(['/portal']);
    });
  }

  onDeleteReservation(id: String) {
    this.reservationService.delete(id).subscribe(res => {
      console.log(res);
      this.fetchReservations();
    });
  }

  fetchReservations() {
    this.reservationService.getPersonalByVehicle(this.carId).subscribe(reservations => {
      this.reservations = reservations;
    });
  }

}
