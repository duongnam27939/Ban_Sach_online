import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from '../interface/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API = 'http://localhost:8080/api'
  constructor(private http: HttpClient) { }

  signup(data: any): Observable<any> {
    return this.http.post<any>(`${this.API}/signup`, data)
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.API}/login`, data)
    
  }
}
