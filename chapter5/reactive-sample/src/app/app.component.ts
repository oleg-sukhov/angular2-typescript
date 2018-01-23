import { Component, ViewChild, ElementRef } from '@angular/core';
import { AfterViewInit, OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import {EmptyObservable} from 'rxjs/observable/EmptyObservable';
import { FormControl } from '@angular/forms'
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ProductService, Product } from './product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  private baseWeatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private urlSuffix = "&units=imperial&appid=fac9c8a9180b7453de6d52d124415b3f";

  @ViewChild('eventObservable') eventInput: ElementRef;
  formControlObservable: FormControl = new FormControl('');
  weatherLocation: FormControl = new FormControl('');
  weather: string;
  numbers: Observable<number> = Observable.interval(1000).take(10)
  products: Observable<Product[]>;
  selectedProduct: Product = null

  constructor(private http: HttpClient, private productService: ProductService, private _router: Router) {
    this.formControlObservable.valueChanges
      .debounceTime(700)
      .subscribe(text => console.log(`From control text -> ${text}`));
  }
  public onKey({target}) : void {
    console.log(`Typed -> ${target.value}`);
  }

  ngAfterViewInit() {
    let keyup = Observable.fromEvent(this.eventInput.nativeElement, 'keyup');
    let keyupValue = keyup
      .debounceTime(800)
      .map(event => event['target'].value)
      .subscribe(text => console.log(`Text entered in observable input -> ${text}`));
  }

  ngOnInit() {
    this.weatherLocation.valueChanges
      .debounceTime(1000)
      .switchMap(location => this.findWeather(location))
      .subscribe(
        res => {
          if(res['main']) {
            this.weather = `Current temperature is  ${res['main'].temp}F, humidity: ${res['main'].humidity}%`;
          } else {
            this.weather = ''
          }
        },
        err => console.log(`Can't get weather. Error code: %s, URL: %s`, err.message, err.url));
    this.products = this.productService.getProducts();
  }

  private findWeather(location: string) : Observable<any> {
    return this.http.get(this.baseWeatherURL + location + this.urlSuffix)
      .catch( err => {
        if (err.status == 404 || err.status == 400) {
          console.log(`City ${location} not found`);
          return Observable.of([]);
        }
      });
  }

  onSelectProduct(selectedProduct: Product) {
    this.selectedProduct = selectedProduct;
    this._router.navigate(["/products", selectedProduct.id])
  }
}
