import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IProduct } from './product';

@Injectable()
export class ProductService {

  constructor(private _http: HttpClient) { }

  private productsUrl = 'http://localhost:5000/api/products/all';
  
  getProducts(): Observable<IProduct[]>{
    
    return this._http.get<IProduct[]>(this.productsUrl);
  }

  private beerUrl = 'http://localhost:5000/api/products/beer';

  getBeer(): Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.beerUrl);
  }

}
