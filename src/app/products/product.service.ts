import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IProduct } from './product';

@Injectable()
export class ProductService {

  private productsUrl = 'http://localhost:5000/api/products';
  
  constructor(private _http: HttpClient) { }

  getProducts(): Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.productsUrl);
  }

}
