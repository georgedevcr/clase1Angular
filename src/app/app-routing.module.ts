import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AddComponent } from './products/add/add.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'products/add', component: AddComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
