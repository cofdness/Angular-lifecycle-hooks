import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PeekABooComponent} from "./components/peek-a-boo/peek-a-boo.component"
import {SpyComponent} from "./components/spy/spy.component"
import {OnChangeParentComponent} from "./components/on-change-parent/on-change-parent.component"

const routes: Routes = [
  {
    path: 'customers', loadChildren: './modules/customers/customers.module#CustomersModule'
  },
  {
    path: 'orders', loadChildren: './modules/orders/orders.module#OrdersModule'
  },
  {
    path: '', redirectTo: '', pathMatch: 'full'
  },
  {
    path: 'peek-a-boo', component: PeekABooComponent
  },
  {
    path: 'spy', component: SpyComponent
  },
  {
    path: 'on-change', component: OnChangeParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
