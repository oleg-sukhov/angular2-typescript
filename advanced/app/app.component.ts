import { Component } from '@angular/core';
import { TitleComponent } from './core/title.component';
import { ContactComponent } from './contact/contact.component';

@Component({
    moduleId: module.id,
    selector: 'advanced-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    subtitle = '(v1)';
}