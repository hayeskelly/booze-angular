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
  public orderId: number;

  order: IOrder;
  
  submitOrder(order: IOrder): Observable<IOrder>  {
    
    //generate random orderId
    this.orderId = Math.floor(Math.random() * 1000);
    
    var info = {
      id: this.orderId,
      fname: order.fname,
      lname: order.lname,
      phone: order.phone,
      email: order.email,
      productID: order.productID,
      quantity: order.quantity
    }

    console.log("Order service was pased a product id of "+info.productID);

    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    return this._http.post<IOrder>(this.submitOrderUrl, info, {headers: header});
  }

}