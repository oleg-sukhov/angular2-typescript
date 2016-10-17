import { Component } from '@angular/core';
import { TitleComponent } from './title/title.component';
import { ContactComponent } from './contact/contact.component';

@Component({
    selector: 'advanced-app',
    template:` 
      <app-title [subtitle]="subtitle"></app-title>
        <nav>
          <a routerLink="contact" routerLinkActive="active">Contact</a>
          <a routerLink="crisis"  routerLinkActive="active">Crisis Center</a>
          <a routerLink="heroes"  routerLinkActive="active">Heroes</a>
        </nav>
      <router-outlet></router-outlet>
    `
})
export class AppComponent {
    subtitle = '(v1)';
}