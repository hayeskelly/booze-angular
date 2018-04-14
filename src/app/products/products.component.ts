import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products/product';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  products: IProduct[] = [];
  selectedProduct: IProduct;
  
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProducts()
      .subscribe(products => {
          this.products = products;
      },
        error => console.log(error)
    );
  }

  onSelect(product: IProduct): void {
    this.selectedProduct = product;
  }

}
