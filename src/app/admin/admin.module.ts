import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeadmModule } from './homeadm/homeadm.module';
import { GestprodModule } from './gestprod/gestprod.module';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HomeadmModule,
    GestprodModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
