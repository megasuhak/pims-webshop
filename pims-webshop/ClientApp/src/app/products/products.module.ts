import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';

@NgModule({
  imports: [
    CommonModule,
    
  ],
  exports: [
    ProductListComponent,
    ProductComponent,
    ProductsComponent
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductsComponent,
    ProductFilterComponent]
})
export class ProductsModule { }
