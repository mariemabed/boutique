import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeadmComponent } from './homeadm.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeadmRoutingModule { }
