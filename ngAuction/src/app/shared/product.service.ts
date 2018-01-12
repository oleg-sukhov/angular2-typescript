import { Injectable } from '@angular/core';

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public description: string,
    public categories: string[]
  ) {}
}

@Injectable()
export class ProductService {

  constructor() { }

  getProducts() : Product[] {
    return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories))
  }

  getProduct(id: number) : Product {
    return products.find(p => p.id == id)
  }

}

const products = [
  {
    'id': 0,
    'title': 'Product №1',
    'price': 24.99,
    'rating': 4.3,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['electronics', 'hardware']
  }, 
  {
    'id': 1,
    'title': 'Product №2',
    'price': 64.99,
    'rating': 3.5,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['books']
  },
  {
    'id': 2,
    'title': 'Product №3',
    'price': 12.99,
    'rating': 2.5,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['books']
  },
  {
    'id': 3,
    'title': 'Product №4',
    'price': 90.19,
    'rating': 4.1,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['books']
  },
  {
    'id': 4,
    'title': 'Product №5',
    'price': 6.99,
    'rating': 2.5,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['books']
  },
  {
    'id': 5,
    'title': 'Product №6',
    'price': 16.32,
    'rating': 5.0,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['books']
  },
  {
    'id': 6,
    'title': 'Product №7',
    'price': 6.99,
    'rating': 2.5,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['books']
  },
  {
    'id': 7,
    'title': 'Product №8',
    'price': 56.99,
    'rating': 2.8,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['books']
  },
  {
    'id': 8,
    'title': 'Product №9',
    'price': 21.99,
    'rating': 1.5,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['books']
  },

];
