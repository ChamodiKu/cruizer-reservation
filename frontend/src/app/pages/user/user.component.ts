import { UserService } from 'src/app/services/user.service';
import { Chart } from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { User } from 'src/app/services/user.dto';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user:User; 
//   LineChart = [0];
  constructor(private userservice : UserService) { }

  capitalize(s)
{
    return s && s[0].toUpperCase() + s.slice(1);
}

  ngOnInit() {
      this.user = this.userservice.current();
      
//     var ctx = document.getElementById('LineChart');
// var LineChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
  }

  time = {hour: 13, minute: 30};
  meridian = true;

  toggleMeridian() {
      this.meridian = !this.meridian;
  }
}
