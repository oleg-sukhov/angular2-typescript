import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { IPriceQuote } from '../price-quoter-component/iprice.quote';

@Component({
  selector: 'order-processor',
  template: `
    Buying: {{message}}

  `,
  styles: [`:host {background: cyan;}`]
})
export class OrderProcessorComponent {

  @Input() stockSymbol: string;
  @Input() quantity: number;
  
  message = "Waiting for orders...";
  @Input() set stock(value: IPriceQuote ) {
    if (value && value.lastPrice != undefined) {
      this.message = `Placed order to buy 100 shares
                       of ${value.stockSymbol} at
                       \$${value.lastPrice.toFixed(2)}`;

    }
  }
}
