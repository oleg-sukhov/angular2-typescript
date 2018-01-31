import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'order-processor',
  template: `
    Buying: {{quantity}} shares of {{stockSymbol}}
  `,
  styles: [`:host {background: cyan;}`]
})
export class OrderProcessorComponent {

  @Input() stockSymbol: string;
  @Input() quantity: number;

}
