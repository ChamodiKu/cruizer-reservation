import { ReservationService } from './../../../services/reservation.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  reservations: any;

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.fetchReservations();
  }

  private fetchReservations() {
    this.reservationService.get().subscribe(reservations => {
      console.log(reservations);
      this.reservations = reservations;
    });
  }

  onAccept(id: String, isAccept: Boolean) {
    if (isAccept) {
      this.reservationService.accept(id).subscribe(_ => {
        this.fetchReservations();
      });
    } else {
      this.reservationService.decline(id).subscribe(_ => {
        this.fetchReservations();
      });
    }
  }
}
