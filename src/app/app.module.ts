import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './products/product.service';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRouterModule } from './router/router.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './order/order.component';
import { OrderService } from './order/order.service';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    NavBarComponent,
    HomeComponent,
    ContactComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule,
    ReactiveFormsModule
  ],
  providers: [ProductService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
