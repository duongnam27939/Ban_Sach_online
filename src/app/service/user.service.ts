import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/auth';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  private API = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  geAlltUser(): Observable<User[]> {
    const url = `${this.API}/user`
    return this.http.get<User[]>(url)
  }

  getByIduser(_id: string | null): Observable<User> {
    const url = `${this.API}/user/${_id}`
    return this.http.get<User>(url)
  }

  removeUser(_id: string | null): Observable<User> {
    const url = `${this.API}/user/${_id}`
    return this.http.delete<User>(url)
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.API}/user/${user._id}`
    return this.http.put<User>(url, user)
  }
}
