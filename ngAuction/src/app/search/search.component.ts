import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'nga-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  title: FormControl = new FormControl('')

  constructor() {
    this.title.valueChanges
      .debounceTime(1000)
      .subscribe(productTitle => console.log(productTitle));
  }
}
