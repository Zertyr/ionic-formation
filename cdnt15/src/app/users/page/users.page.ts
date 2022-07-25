import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Adress } from '../model/adress';
import { Company } from '../model/company';
import { Geo } from '../model/geo';
import { User } from '../model/user';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users: User[] = [];
  constructor(private service: UsersService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
     this.getUsers();
  }

  getUsers = () => {
    this.service.getUsers().subscribe(value => {
      this.users = value;
      console.log(this.users);
      
    });
  }

  addUser(){
    this.router.navigate(['/users/new-user']);
  }
}
