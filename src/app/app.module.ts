import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MemberComponent } from './front-end/member/member.component';
import { SignInComponent } from './front-end/member/sign-in/sign-in.component';
import { SignUpComponent } from './front-end/member/sign-up/sign-up.component';
import { ProductComponent } from './front-end/product/product.component';
import { ProductSearchComponent } from './front-end/product-search/product-search.component';
import { ProductDetailComponent } from './front-end/product-detail/product-detail.component';
import { MyCartComponent } from './front-end/my-cart/my-cart.component';
import { CheckoutComponent } from './front-end/checkout/checkout.component';
import { MyOrderComponent } from './front-end/my-order/my-order.component';
import { CustomerSearchComponent } from './back-end/customer-search/customer-search.component';
import { CustomerComponent } from './back-end/customer/customer.component';
import { CustomerDetailComponent } from './back-end/customer/customer-detail/customer-detail.component';
import { OrderComponent } from './back-end/order/order.component';
import { OrderSearchComponent } from './back-end/order/order-search/order-search.component';
import { OrderDetailComponent } from './back-end/order/order-detail/order-detail.component';
import { ReportComponent } from './back-end/report/report.component';
import { SalesComponent } from './back-end/report/sales/sales.component';
import { AutocompleteDirective } from './directive/autocomplete/autocomplete.directive';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    SignInComponent,
    SignUpComponent,
    ProductComponent,
    ProductSearchComponent,
    ProductDetailComponent,
    MyCartComponent,
    CheckoutComponent,
    MyOrderComponent,
    CustomerSearchComponent,
    CustomerComponent,
    CustomerDetailComponent,
    OrderComponent,
    OrderSearchComponent,
    OrderDetailComponent,
    ReportComponent,
    SalesComponent,
    AutocompleteDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
