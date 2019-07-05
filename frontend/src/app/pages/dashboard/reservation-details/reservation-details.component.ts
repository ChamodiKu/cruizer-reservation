import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RateService } from 'src/app/services/rate.service';
import { Rate } from 'src/app/services/rate.dto';
import { Observable } from 'rxjs';
import { map, tap, flatMap } from 'rxjs/operators';

const data = {
  chart: {
    caption: 'Reservations',
    yaxisname: 'Number of Reservations',
    subcaption: '[2010-2018]',
    numbersuffix: ' ',
    rotatelabels: '1',
    setadaptiveymin: '1',
    theme: 'fusion'
  },
  data: [
    {
      label: '2010',
      value: '256'
    },
    {
      label: '2011',
      value: '289'
    },
    {
      label: '2012',
      value: '320'
    },
    {
      label: '2013',
      value: '412'
    },
    {
      label: '2014',
      value: '480'
    },
    {
      label: '2015',
      value: '512'
    },
    {
      label: '2016',
      value: '552'
    }
  ]
};

const data1 = {
  chart: {
    caption: 'Ratings for the Week',
    subcaption: '',
    xaxisname: 'Week',
    yaxisname: 'Reserves (MMbbl)',
    numbersuffix: 'K',
    theme: 'fusion'
  },
  data: [
    {
      label: 'Mon',
      value: '3.4'
    },
    {
      label: 'Tue',
      value: '3.5'
    },
    {
      label: 'Wed',
      value: '3.5'
    },
    {
      label: 'Thu',
      value: '3.6'
    },
    {
      label: 'Fri',
      value: '4'
    }
  ]
};

const data2 = {
  chart: {
    caption: "Nordstorm's Customer Satisfaction Score for 2017",
    lowerlimit: '0',
    upperlimit: '100',
    showvalue: '1',
    numbersuffix: '%',
    theme: 'fusion',
    showtooltip: '0'
  },
  colorrange: {
    color: [
      {
        minvalue: '0',
        maxvalue: '50',
        code: '#F2726F'
      },
      {
        minvalue: '50',
        maxvalue: '75',
        code: '#FFC533'
      },
      {
        minvalue: '75',
        maxvalue: '100',
        code: '#62B58F'
      }
    ]
  },
  dials: {
    dial: [
      {
        value: '81'
      }
    ]
  }
};

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.scss']
})
export class ReservationDetailsComponent implements OnInit {
  width = 500;
  height = 400;
  type = 'line';
  dataFormat = 'json';
  source = data;

  width1 = 500;
  height1 = 400;
  type1 = 'column2d';
  dataFormat1 = 'json';
  source1 = data1;

  width2 = 500;
  height2 = 400;
  type2 = 'angulargauge';
  dataFormat2 = 'json';
  source2 = data2;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rateService: RateService
  ) {}

  rateId: any;

  ngOnInit() {}
}
