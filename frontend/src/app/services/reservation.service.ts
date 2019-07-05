import { Reservation } from './reservation.dto';
import { Injectable } from '@angular/core';
import { AppConfig } from '../app-config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { ApiResponse } from '../api/api.dto';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private http: HttpClient) { }

  private reservationUrl = AppConfig.apiUrl + '/reservations';

  get(): Observable<Reservation[]> {
    return this.http.get(this.reservationUrl + '/all').pipe(
      first(),
      map((res: any[]) => res.map(it => it as Reservation))
    );
  }

  getPersonal(): Observable<Reservation[]> {
    return this.http.get(this.reservationUrl + '/').pipe(
      first(),
      map((res: any[]) => res.map(it => it as Reservation))
    );
  }

  getPersonalByVehicle(id: String): Observable<Reservation[]> {
    return this.http.get(this.reservationUrl + '/byVehicle/' + id).pipe(
      first(),
      map((res: any[]) => res.map(it => it as Reservation))
    );
  }

  create(reservation: Reservation): Observable<ApiResponse> {
    return this.http.post(this.reservationUrl, reservation).pipe(
      first(),
      map(res => res as ApiResponse)
    );
  }

  delete(id: String): Observable<ApiResponse> {
    return this.http.delete(this.reservationUrl + '/' + id).pipe(
      first(),
      map(res => res as ApiResponse)
    );
  }

  accept(id: String): Observable<ApiResponse> {
    return this.http.post(this.reservationUrl + '/accept/' + id, null).pipe(
      first(),
      map(res => res as ApiResponse)
    );
  }

  decline(id: String): Observable<ApiResponse> {
    return this.http.post(this.reservationUrl + '/decline/' + id, null).pipe(
      first(),
      map(res => res as ApiResponse)
    );
  }
}
