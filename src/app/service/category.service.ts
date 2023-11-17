import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private API = 'http://localhost:8080/api';
  token = localStorage.getItem('token')
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    }),
  }
  constructor(
    private http: HttpClient
  ) { }

  categoryAdd(category: any): Observable<any> {
    const url = `${this.API}/category`;
    return this.http.post<any>(url, category, this.httpOptions)
  }

  categoryUpdate(category: any): Observable<any> {
    const url = `${this.API}/category/${category._id}`;
    return this.http.patch<any>(url, category, this.httpOptions);
  }
  getCategory(_id: string | null): Observable<any> {
    const url = `${this.API}/category/${_id}`
    return this.http.get<any>(url, this.httpOptions)
  }

  getAllCategory(): Observable<any[]> {
    const url = `${this.API}/category`
    return this.http.get<any[]>(url, this.httpOptions)
  }

  deleteCategory(_id: string | null): Observable<any> {
    const url = `${this.API}/category/${_id}`
    return this.http.delete<any>(url, this.httpOptions)
  }

  getproductByCategory(_id: string): Observable<any> {
    const url = `${this.API}/category/${_id}`;
    return this.http.get<any>(url, this.httpOptions);
  }
}
