import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductViewComponent } from './product-view/product-view.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderPageComponent } from './order-page/order-page.component';
@NgModule({
  declarations: [					
    AppComponent,
      ProductViewComponent,
      ProductDetailsComponent,
      HeaderComponent,
      CartPageComponent,
      OrderPageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
