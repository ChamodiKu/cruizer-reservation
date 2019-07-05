import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Car } from 'src/app/services/car.dto';
import { Service } from 'src/app/services/service.dto';
import { CarService } from 'src/app/services/car.service';
import { ServiceService } from 'src/app/services/service.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/services/reservation.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss']
})
export class AddReservationComponent implements OnInit {

  error: String = null;

  carId: string;
  serviceId: string;
  car: Car;
  services: Service[] = [];

  requested = new FormControl('');

  constructor(
    private route: ActivatedRoute,
    private serviceService: ServiceService,
    private carService: CarService,
    private reservationService: ReservationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(param => param.get('id')),
      tap(id => this.carId = id),
      flatMap(id => this.carService.getById(id.toString()))
    ).subscribe(car => {
      this.car = car;
    })
    this.serviceService.get().subscribe(services => {
      this.services = services;
      if (this.services.length > 0)
        this.serviceId = this.services[0]._id;
    });
  }

  selectService(service: Service) {
    this.serviceId = service._id;
  }

  onSubmit() {
    if (!this.carId || !this.serviceId) {
      this.error = "Select reservation date and service";
      return;
    }
    this.error = null;
    const data: Reservation = {
      vehicle: this.carId,
      services: [this.serviceId],
      requested: this.requested.value
    };
    console.log(data);
    this.reservationService.create(data).subscribe(_ => {
      this.router.navigateByUrl('/portal/car/view/' + this.carId);
    }, error => {
      console.log(error)
      this.error = error.error.message
    });
  }

}
