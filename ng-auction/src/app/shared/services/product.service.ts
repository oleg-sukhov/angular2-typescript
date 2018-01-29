import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
}

@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('/data/products.json');
  }

  getProductById(productId: number): Observable<Product> {
    return this.httpClient.get<Product[]>('/data/products.json')
      .map(products => <Product>products.find(product => product.id == productId));
  }
}
