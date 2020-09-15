import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FlexLayoutModule} from '@angular/flex-layout';


const MaterialComponents = [
  MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule,FlexLayoutModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents,
  ],
  exports:[
    MaterialComponents,
  ],
})
export class MaterialModule { }
