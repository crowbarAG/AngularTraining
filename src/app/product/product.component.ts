import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product} from '../model/Product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product: Product | undefined;

  @Output()
  addItemToBasket = new EventEmitter<Product>();

  addItem(product: Product): void{
    console.log("Add item button is pressed for item: " + product.id)
    this.addItemToBasket.emit(product);
  }
}
