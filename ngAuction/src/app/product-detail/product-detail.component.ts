import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product } from '../shared/product.service'
 
@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private router: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    const productId: number = parseInt(this.router.snapshot.params['productId']);
    this.product = this.productService.getProduct(productId);
  }
}
