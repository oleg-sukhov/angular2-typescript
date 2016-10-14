import { Component } from '@angular/core';
import { TitleComponent } from './title/title.component';
import { ContactComponent } from './contact/contact.component';

@Component({
    selector: 'advanced-app',
    template:` 
      <app-title [subtitle]="subtitle"></app-title>
      <app-contact></app-contact>  
    `
})
export class AppComponent {
    subtitle = '(v1)';
}