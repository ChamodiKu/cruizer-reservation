import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.scss']
})
export class ReservationDetailsComponent implements OnInit {
  dataSource: Object;
  constructor() {
    this.dataSource = {
      chart: {
        caption: 'Reservation for the week',
        subCaption: 'No of reservations per week',
        xAxisName: 'Day',
        yAxisName: 'No of Reservations',
        theme: 'fusion'
      },
      // Chart Data
      data: [
        {
          label: 'Monday',
          value: '13'
        },
        {
          label: 'Tuesday',
          value: '18'
        },
        {
          label: 'Wednesday',
          value: '16'
        },
        {
          label: 'Thursday',
          value: '14'
        },
        {
          label: 'Friday',
          value: '15'
        },
        {
          label: 'Saturday',
          value: '21'
        },
        {
          label: 'Sunday',
          value: '23'
        }
      ]
    };
  }

  ngOnInit() {}
}
