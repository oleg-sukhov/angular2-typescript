import { Observable } from 'rxjs/Observable';
import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
  selector: 'nga-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit {

  @ViewChild('productTitle') productTitleField: ElementRef;

  ngAfterViewInit() {
    let keyup$ = Observable.fromEvent(this.productTitleField.nativeElement, 'keyup');
    let keyupValue$ = keyup$
    .debounceTime(500)
    .map(event => event['target'].value)
    .subscribe(productTitle => console.log(`Value ${productTitle}`))
  }

}
