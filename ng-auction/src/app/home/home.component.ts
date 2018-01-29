import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../shared/services';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'nga-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly columns$: Observable<number>;
  readonly products$: Observable<Product[]>
  readonly breakpointsToColumnsNumber = new Map([[ 'xs', 1 ], [ 'sm', 2 ], [ 'md', 3 ],[ 'lg', 4 ],[ 'xl', 5 ]]);

  constructor(private productService: ProductService, private media: ObservableMedia) {
    this.products$ = this.productService.getAll();
    this.columns$ = this.media.asObservable().map(mc => this.breakpointsToColumnsNumber.get(mc.mqAlias));
  }

  ngOnInit() {
  }

}
