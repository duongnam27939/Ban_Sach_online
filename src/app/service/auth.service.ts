import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from '../interFace/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API = 'http://localhost:8080/api'
  constructor(private http:HttpClient) { }

  signup(user: User): Observable<User>{
    return this.http.post<User>(`${this.API}/signup`,user)
  }

  login(user:User):Observable<User>{
  return this.http.post<User>(`${this.API}/login`,user)
  }
}
