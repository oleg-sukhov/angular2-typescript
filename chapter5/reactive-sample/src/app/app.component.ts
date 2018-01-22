import { Component, ViewChild, ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { FormControl } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('eventObservable') eventInput: ElementRef;
  formControlObservable: FormControl = new FormControl('')

  constructor() {
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
}
