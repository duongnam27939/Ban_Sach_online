import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class ProductsService {

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

  getAllProducts(): Observable<any[]> {
    const url = `${this.API}/products`;
    return this.http.get<any[]>(url, this.httpOptions)
  }

  getProduct(_id: string | null): Observable<any> {
    const url = `${this.API}/products/${_id}`;
    return this.http.get<any>(url, this.httpOptions)
  }

  addProduct(products: any): Observable<any> {
    const url = `${this.API}/products`;
    return this.http.post<any>(url, products, this.httpOptions)
  }

  getCategory(): Observable<any> {
    const url = `${this.API}/category`;
    return this.http.get<any>(url, this.httpOptions)
  }

  updateProduct(products: any): Observable<any> {
    const url = `${this.API}/products/${products._id}`;
    return this.http.patch<any>(url, products, this.httpOptions);
  }

  deleteProduct(id: string | null): Observable<any> {
    const url = `${this.API}/products/${id}`;
    return this.http.delete<any>(url, this.httpOptions)
  }


  getProductsByCategory(categoryId: string): Observable<any[]> {
    const url = `${this.API}/products?category=${categoryId}`;
    return this.http.get<any[]>(url, this.httpOptions);
  }

  searchProducts(searchValue: string): Observable<any> {
    return this.http.get<any>(`${this.API}/products/search?pr=${searchValue}`);
  }

  uploadImage(vals: any): Observable<any> {
    {
      let data = vals;
      return this.http.post(`https://api.cloudinary.com/v1_1/doa7mkkpq/image/upload`, data)
    }
  }

}
