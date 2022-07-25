import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from '../../model/user';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.page.html',
  styleUrls: ['./view-user.page.scss'],
})
export class ViewUserPage implements OnInit {

  user: User;
  constructor(private service: UsersService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    let id:number = parseInt(this.route.snapshot.paramMap.get("id"))
    this.getUsers(id);
 }

 getUsers = (id:number) => {
   this.service.getUser(id).subscribe(value => this.user = value);
 }
 
 onback(){
  this.router.navigate(['/users']);
 }
}
