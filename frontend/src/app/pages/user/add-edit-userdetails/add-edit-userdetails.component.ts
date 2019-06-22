import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/services/user.dto';

@Component({
  selector: 'app-add-edit-userdetails',
  templateUrl: './add-edit-userdetails.component.html',
  styleUrls: ['./add-edit-userdetails.component.scss']
})
export class AddEditUserdetailsComponent implements OnInit {
  public userdetailsForm = new FormGroup({
    username: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    tel: new FormControl(''),
    address: new FormControl('')
  });
  userService: any;

  constructor(private userservice: UserService) {}

  users: User;

  ngOnInit() {}

  onSubmit() {}

  //Reset the form
  resetForm() {
    this.userdetailsForm.reset();
  }
}
