import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CartComponent } from './cart/cart.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { MaterialModule} from '../material/material.module';
@NgModule({
  declarations: [DashboardComponent, AddproductComponent, CartComponent, ProductdetailComponent, ProductsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    DashboardComponent, AddproductComponent, CartComponent, ProductdetailComponent,ProductsComponent
  ],
})
export class FunctionalitiesModule { }
