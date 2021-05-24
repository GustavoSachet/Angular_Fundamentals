import { Component, OnInit } from '@angular/core';

import { Product } from '../../Models/product';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  public products: Product[];

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(
        produtos => {
          this.products = produtos;
        },
        error => console.log(error)
      );
  }
}