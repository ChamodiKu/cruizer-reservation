import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Car } from 'src/app/services/car.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-car',
  templateUrl: './add-edit-car.component.html',
  styleUrls: ['./add-edit-car.component.scss']
})
export class AddEditCarComponent implements OnInit {

  public carForm = new FormGroup({
    vendor: new FormControl(''),
    model: new FormControl(''),
    number: new FormControl(''),
    milage: new FormControl('')
  });

  error: string
  loading: boolean

  constructor(
    private router: Router,
    private carService: CarService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loading = true
    const car: Car = {
      vendor: this.carForm.controls['vendor'].value,
      model: this.carForm.controls['model'].value,
      number: this.carForm.controls['number'].value,
      milage: this.carForm.controls['milage'].value
    }
    this.carService.create(car).subscribe(res => {
      console.log(res)
      this.router.navigate(['/portal'])
    }, err => {
      this.loading = false
      if (err.error.message)
        this.error = err.error.message
    })
  }

}
