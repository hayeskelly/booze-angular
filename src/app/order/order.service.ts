import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IOrder } from './order';
import { Console } from '@angular/core/src/console';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(private _http: HttpClient) { }

  private submitOrderUrl = 'http://localhost:5000/api/orders';

  order: IOrder;
  
  submitOrder(order: IOrder): Observable<IOrder>  {

    var info = {
      id: 1234,
      fname: order.fname,
      lname: order.lname,
      phone: order.phone,
      email: order.email,
      productId: order.productId,
      quantity: order.quantity
    }
    
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    return this._http.post<IOrder>(this.submitOrderUrl, info, {headers: header});
  }

}