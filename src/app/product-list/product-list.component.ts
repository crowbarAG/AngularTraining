import { Component } from '@angular/core';

import { Product } from '../model/Product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  title = 'List of items';
  products: Product[] = [
    new Product(1, "Item 1", 10),
    new Product(2, "Item 2", 20),
    new Product(3, "Item 3", 12),
    new Product(4, "Item 4", 25),
    new Product(5, "Item 5", 40),
    new Product(6, "Item 6", 4)
  ];
}
