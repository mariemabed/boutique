import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErreurRoutingModule } from './erreur-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    
  ],
  imports: [
    CommonModule,
    ErreurRoutingModule
  ],
  exports: [
    PageNotFoundComponent,
   
  ]
})
export class ErreurModule { }
