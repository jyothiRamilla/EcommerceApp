import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { DashboardComponent } from '../functionalities/dashboard/dashboard.component';
import { AddproductComponent } from '../functionalities/addproduct/addproduct.component';
import { CartComponent } from '../functionalities/cart/cart.component';
import { ProductdetailComponent } from '../functionalities/productdetail/productdetail.component';
import { ProductsComponent } from '../functionalities/products/products.component';



const routes: Routes = [
  { path:'', pathMatch:'full',redirectTo:'/dashboard'},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'addproduct',component:AddproductComponent},
  {path:'products',component:ProductsComponent},
  { path: 'cart',component:CartComponent},
  {path:'detail/:id',component:ProductdetailComponent},

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
