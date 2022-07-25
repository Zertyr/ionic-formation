import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { 

  }

  getUsers = ():Observable<User[]> => {
    return this.http.get<User[]>(`${environment.URI}/users`)
  }

  getUser = (id:number):Observable<User> => {
    return this.http.get<User>(`${environment.URI}/users/${id}`)
  }

  addUser = (user:User):Observable<User> => {
    return this.http.post<User>(`${environment.URI}/users`, user)
  } 
}
