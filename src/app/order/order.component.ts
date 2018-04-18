import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { Observable } from 'rxjs/Observable';
import { IOrder } from './order';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { NumberValueAccessor } from '@angular/forms/src/directives/number_value_accessor';
import { StringDecoder } from 'string_decoder';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

  form: FormGroup;
  order: IOrder;
  orderId: number;
  newOrder: IOrder;

  myOrderData: String;
  
  constructor(private fb: FormBuilder, private _orderService: OrderService) {
    this.form = this.fb.group({
      fname: [''],
      lname: [''],
      phone: [''],
      email: [''],
      productID: [''],
      quantity: [''],
    });
  }

  ngOnInit() {
  
  }

  PostData(form: NgForm) {

    //generate random orderId
    this.orderId = Math.floor(Math.random() * 10000);
    console.log("order id generated from order component: "+this.orderId);
    
    this._orderService.submitOrder(form.value, this.orderId).subscribe(order => {this.order = order;}, error => console.log(error));

    //console.log("calling getORder from component with id: "+this.orderId);
    //this._orderService.getOrder(this.orderId);
    //this._orderService.getOrder(this.orderId).subscribe(newOrder => {this.newOrder = newOrder;}, error => console.log(error));

    //console.log("Order total returned: "+this.order.total);
    //console.log("Order pickupNum returned: "+this.order.pickupNum);

    form.resetForm();
  }


}
