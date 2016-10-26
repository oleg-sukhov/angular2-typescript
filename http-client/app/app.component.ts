import { Component } from '@angular/core'
import './rxjs-operators'

@Component({
    selector: 'http-client',
    template: `
      <hero-list></hero-list>
      <wiki-search></wiki-search>
      <wiki-smart-search></wiki-smart-search>
    `
})
export class AppComponent {

}