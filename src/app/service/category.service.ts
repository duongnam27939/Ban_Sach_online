import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs'
import { ICategory } from '../interface/category';
import { IProducts } from '../interface/products';


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

  categoryAdd(category: ICategory): Observable<ICategory> {
    const url = `${this.API}/category`;
    return this.http.post<ICategory>(url, category, this.httpOptions)
  }

  categoryUpdate(category: ICategory): Observable<ICategory> {
    const url = `${this.API}/category/${category._id}`;
    return this.http.patch<ICategory>(url, category, this.httpOptions);
  }
  getCategory(_id: string | null): Observable<ICategory> {
    const url = `${this.API}/category/${_id}`
    return this.http.get<ICategory>(url, this.httpOptions)
  }

  getAllCategory(): Observable<ICategory[]> {
    const url = `${this.API}/category`
    return this.http.get<ICategory[]>(url, this.httpOptions)
  }

  deleteCategory(id: string | null): Observable<ICategory> {
    const url = `${this.API}/category/${id}`
    return this.http.delete<ICategory>(url, this.httpOptions)
  }

  getproductByCategory(_id: string): Observable<IProducts> {
    const url = `${this.API}/category/${_id}`;
    return this.http.get<IProducts>(url, this.httpOptions);
  }
}
