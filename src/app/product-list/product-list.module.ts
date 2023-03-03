import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductComponent} from '../product/product.component'

@NgModule({
  imports: [
    CommonModule,
    ProductListRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductComponent
  ]
})
export class ProductListModule { }