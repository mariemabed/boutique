import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './erreur/page-not-found.component';

const routes: Routes = [ 
{path : '', redirectTo:'client/home', pathMatch:'full'},
{path : 'client', component:ClientComponent},
{path : 'admin',component:AdminComponent},
{path : 'page-not-found', component:PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
