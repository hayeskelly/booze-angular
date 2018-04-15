import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { Observable } from 'rxjs/Observable';
import { IOrder } from './order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() {}

  private _orderService: OrderService;

  ngOnInit() {
  }

  //PostData(order: IOrder){
  //  this._orderService.submitOrder(order);
  //}

  PostData() {
    this._orderService.submitOrder();
  }

}
