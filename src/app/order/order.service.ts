import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IOrder } from './order';
import { Console } from '@angular/core/src/console';
import { HttpHeaders } from '@angular/common/http/src/headers';

@Injectable()
export class OrderService {

  constructor(private _http: HttpClient) { }

  private submitOrderUrl = 'http://localhost:5000/api/order/';
  
  //submitOrder(order): Observable<IOrder[]> {
    
  //  var info = {
  //    id: order.id,
  //    fname: order.fname,
  //    lname: order.lname,
  //    phone: order.phone,
  //    email: order.email,
  //    productId: order.productId,
  //    quantity: order.quantity
  //  }
    
  //  return this._http.post<IOrder[]>(this.submitOrderUrl, info);
  //}

  submitOrder(): Observable<IOrder[]>  {

    var info = {
      id: 3,
      fname: "TEST",
      lname: "Hayes",
      phone: "440-334-8204",
      email: "hayes.kellyeileen@yahoo.com",
      productId: 13,
      quantity: 2
    }

    return this._http.post<IOrder[]>(this.submitOrderUrl, info);    
  }

}
