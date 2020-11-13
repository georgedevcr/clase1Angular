import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './products/add/add.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'products/add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
