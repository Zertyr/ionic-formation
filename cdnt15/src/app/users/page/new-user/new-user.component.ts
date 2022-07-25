import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../../service/users.service';
import { Adress } from '../../model/adress';
import { Geo } from '../../model/geo';
import { Company } from '../../model/company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: UsersService, private router: Router) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: [''],
      email: ['', Validators.email],
    });
   }
  logForm() {
    console.log(this.userForm.value);
    let id = 10;
    let newUser = new User(id,this.userForm.get('name').value,this.userForm.get('username').value,this.userForm.get('email').value,
    new Adress('Rue du maréchal mortier','57','Le Cateau','59360',new Geo()),"0700000000","",new Company('Aston'));
    this.service.addUser(newUser).toPromise().then(() => {
      this.router.navigate(["/users"]);
    });
  }
  
  ngOnInit() {}

}
