import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  urlAPI = 'http://localhost:4201/products';

  constructor(private http: HttpClient) {}

  fetchProducts(){
    return this.http.get<Product[]>(this.urlAPI).pipe(catchError(err => {
      return throwError(this.errorMessage(err.status));
    }))
  }

  fetchProductById(id: number){
    return this.http.get<Product>(`${this.urlAPI}/${id}`).pipe(catchError(err => {
      return throwError(this.errorMessage(err.status));
    }))
  }

  errorMessage(status: number){
    let msg = '';
    switch(status){
      case 404:
        msg = 'Not found';
        break;
      case 500:
        msg = 'Internal server error';
        break;
      default:
        msg = 'Undefined error';
        break;
    }
    return msg;
  }

}
