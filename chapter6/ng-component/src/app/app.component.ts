import { Component } from '@angular/core';
import { IPriceQuote } from './price-quoter-component/iprice.quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stock: string;
  readonly numberOfShares = 100;
  priceQuote: IPriceQuote
  receivedStock: IPriceQuote

  onChangeEvent({target}) {
    this.stock = target.value;
  }

  priceQuoteHandler(event:IPriceQuote) {
    this.priceQuote = event;
  }

  buy(event:IPriceQuote) {
    this.receivedStock = event;
  }
}
