import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  constructor(private service: UsersService, private http: HttpClient) { }

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
    let id = this.users.length + 1;
    let newUser = new User(id,"test","gros","test@gmail.com",new Adress('Rue du maréchal mortier','57','Le Cateau','59360',new Geo()),"0700000000","",new Company('Aston'));
    this.http.post(`${environment.URI}/users`, newUser).toPromise();
    location.reload();
  }
}
