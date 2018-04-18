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
  
  submitOrder(order: IOrder, orderId: number): Observable<IOrder>  {
    
    var info = {
      id: orderId,
      fname: order.fname,
      lname: order.lname,
      phone: order.phone,
      email: order.email,
      productID: order.productID,
      quantity: order.quantity
    }

    console.log("Order service was passed an order id of "+info.id);

    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Origin', 'http://localhost:4200');

    return this._http.post<IOrder>(this.submitOrderUrl, info, {headers: header});
  }

  private orderUrl = 'http://localhost:5000/api/orders/';
  
  getOrder(id: number): Observable<IOrder> {
      
    console.log("Getting order "+id);
    
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    
    this.orderUrl = this.orderUrl + id.toString();

    console.log("Using URL: "+this.orderUrl);

    return this._http.get<IOrder>(this.orderUrl, {headers: header});
  }
  
  private orderInfoUrl = 'http://localhost:5000/api/orders/';
 
  getOrderInfo(id: number, name: string): Observable<String> {
    
    this.orderInfoUrl = this.orderInfoUrl + id.toString() + "/" + name;

    console.log("getting order info with url: "+this.orderInfoUrl);

    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Origin', 'http://localhost:4200');
   
    return this._http.get<String>(this.orderInfoUrl, {headers: header}).map(response => response.toString());
  }

}