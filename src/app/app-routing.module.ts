import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { CustomerListComponent } from './pages/customers/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './pages/customers/customer-details/customer-details.component';
import { DefaultComponent } from './pages/default/default.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { UserDetailsComponent } from './pages/user/user-details/user-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/default', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'customer-list',
    component: CustomerListComponent,
  },
  {
    path: 'customer-details',
    component: CustomerDetailsComponent,
  },
  {
    path: 'default',
    component: DefaultComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'user',
    component: UserDetailsComponent,
  },
  {
    path: '**',
    component: DefaultComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
