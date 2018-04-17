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
  //myOrderData: String;
  
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
    
    console.log("Order component sending productID Ordered: "+form.value.productID);

    this._orderService.submitOrder(form.value).subscribe(order => {this.order = order;}, error => console.log(error));
  }

}
