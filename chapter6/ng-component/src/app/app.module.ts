import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OrderProcessorComponent } from './order-processor/order-processor.component';
import { PriceQuoterComponentComponent } from './price-quoter-component/price-quoter-component.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderProcessorComponent,
    PriceQuoterComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
