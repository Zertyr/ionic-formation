import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../../model/user';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {

  @Input() user:User;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {}

  goToUser(id: number) {
    this.router.navigate([`/users/view-user/${id}`])
  }

  deleteUser(id:number){
    this.http.delete(`${environment.URI}/users/${id}`).subscribe(() => console.log(`${environment.URI}/users/${id}`));
    location.reload();
  }
}
