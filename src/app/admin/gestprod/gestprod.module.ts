import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestprodRoutingModule } from './gestprod-routing.module';
import { GestprodComponent } from './gestprod.component';
import { ProductaddcomponentComponent } from './productaddcomponent.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GestprodComponent,
    ProductaddcomponentComponent,
    
  ],
  imports: [
    CommonModule,
    GestprodRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    GestprodComponent,
    
    
  ]
})
export class GestprodModule { }
