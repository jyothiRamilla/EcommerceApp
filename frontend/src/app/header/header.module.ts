import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MaterialModule} from '../material/material.module';
import {AppRoutingModule} from '../app-routing/app-routing.module';
//import {DashboardComponent} from '../functionalities/dashboard/dashboard.component';
//import {AddproductComponent} from '../functionalities/addproduct/addproduct.component';
import {FunctionalitiesModule} from '../functionalities/functionalities.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FunctionalitiesModule
  //  DashboardComponent,
   // AddproductComponent,

  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
