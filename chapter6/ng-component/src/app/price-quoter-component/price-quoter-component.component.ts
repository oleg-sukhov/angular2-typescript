import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IPriceQuote } from './iprice.quote'
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/interval";
import "rxjs/add/operator/take";

@Component({
  selector: 'price-quoter',
  template: ` <strong>
                Inside PriceQuoterComponent: {{priceQuote?.stockSymbol}} {{priceQuote?.lastPrice | currency:'USD':'symbol'}}
              </strong>
              <strong>
                <button (click)="buyStocks()">Buy</button>
              </strong>`,
  styles:[`:host {background: pink;}`]
})
export class PriceQuoterComponentComponent implements OnInit {

  @Output() lastPrice = new EventEmitter<IPriceQuote>();
  @Output() bidPrice = new EventEmitter<IPriceQuote>();
  priceQuote: IPriceQuote

  constructor() { }

  ngOnInit() {
    Observable.interval(500).subscribe(date => {
      this.priceQuote = {
        stockSymbol: 'IBM',
        lastPrice: 100 * Math.random() 
      };
      this.lastPrice.emit(this.priceQuote);
    });
  }

  buyStocks(): void{
    let stockToBuy: IPriceQuote = {
      stockSymbol: this.priceQuote.stockSymbol,
      lastPrice: this.priceQuote.lastPrice
    };
    this.bidPrice.emit(stockToBuy);
  }

}
