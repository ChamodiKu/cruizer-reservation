import { Component, OnInit } from '@angular/core';

const data = {
  chart: {
    caption: 'Average Fastball Velocity',
    yaxisname: 'Velocity (in mph)',
    subcaption: '[2005-2016]',
    numbersuffix: ' mph',
    rotatelabels: '1',
    setadaptiveymin: '1',
    theme: 'fusion'
  },
  data: [
    {
      label: '2005',
      value: '89.45'
    },
    {
      label: '2006',
      value: '89.87'
    },
    {
      label: '2007',
      value: '89.64'
    },
    {
      label: '2008',
      value: '90.13'
    },
    {
      label: '2009',
      value: '90.67'
    },
    {
      label: '2010',
      value: '90.54'
    },
    {
      label: '2011',
      value: '90.75'
    },
    {
      label: '2012',
      value: '90.8'
    },
    {
      label: '2013',
      value: '91.16'
    },
    {
      label: '2014',
      value: '91.37'
    },
    {
      label: '2015',
      value: '91.66'
    },
    {
      label: '2016',
      value: '91.8'
    }
  ]
};

const data1 = {
  chart: {
    caption: 'Countries With Most Oil Reserves [2017-18]',
    subcaption: 'In MMbbl = One Million barrels',
    xaxisname: 'Country',
    yaxisname: 'Reserves (MMbbl)',
    numbersuffix: 'K',
    theme: 'fusion'
  },
  data: [
    {
      label: 'Venezuela',
      value: '290'
    },
    {
      label: 'Saudi',
      value: '260'
    },
    {
      label: 'Canada',
      value: '180'
    },
    {
      label: 'Iran',
      value: '140'
    },
    {
      label: 'Russia',
      value: '115'
    },
    {
      label: 'UAE',
      value: '100'
    },
    {
      label: 'US',
      value: '30'
    },
    {
      label: 'China',
      value: '30'
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

  constructor() {}

  ngOnInit() {}
}
