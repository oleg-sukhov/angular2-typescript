import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `
  <h3 class="product">Details for product id {{productId}}</h3>
  `,
  styles: []
})
export class ProductDetailComponent implements OnInit {

  productId: string

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.productId = params.get('id'))
  }
}
