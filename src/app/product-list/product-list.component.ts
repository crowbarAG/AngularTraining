import { Component, OnInit } from '@angular/core';

import { Product } from '../model/Product';
import { ProductHttpService } from "../service/ProductHttpService";
import { BasketService } from "../service/BasketService";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  title = 'List of items';
  products: Product[] = [];

  constructor(private productHttpService: ProductHttpService,
    private basketService: BasketService){
    this.productHttpService.getProducts()
    .subscribe(data => this.products = data);
  }

  catchAddItemToBasket(product: Product): void {
    console.log("Add item event is catched for item:" + product.id);
    this.basketService.addItem(product);
  }
}
