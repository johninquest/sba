import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModules } from './material.modules';
/**/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './pages/products/products.component';
import { CustomerListComponent } from './pages/customers/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './pages/customers/customer-details/customer-details.component';
import { UserDetailsComponent } from './pages/user/user-details/user-details.component';
import { UserFormComponent } from './pages/user/user-form/user-form.component';
import { DefaultComponent } from './pages/default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    FooterComponent,
    NavbarComponent,
    ProductsComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    UserDetailsComponent,
    UserFormComponent,
    DefaultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
