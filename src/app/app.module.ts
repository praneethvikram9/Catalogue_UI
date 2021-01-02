import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { ProductCardComponentComponent } from './product-card-component/product-card-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponentComponent,
    DashboardComponentComponent,
    CartComponentComponent,
    UserComponentComponent,
    ProductCardComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
