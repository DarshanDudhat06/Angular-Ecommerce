import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { OrderPageComponent } from './order-page/order-page.component';

const routes: Routes = [
  {
    path:'',
    component:ProductViewComponent
  },
  {
    path:'product-details/:productid',
    component:ProductDetailsComponent
  },
  {path:'cart-page',
component:CartPageComponent},
{path:'order-page',
component:OrderPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
