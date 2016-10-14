import { Component, Input } from '@angular/core';
import { HightlightDirective } from './../hightlight.directive';
import { UserService } from './../user.service';

@Component({
    moduleId: module.id,
    selector: 'app-title',
    templateUrl: 'title.component.html',
    providers: [UserService]
})
export class TitleComponent {
    @Input() subtitle = '';
    title = 'Advanced Application';
    user = '';

    constructor(userService: UserService) {
        this.user = userService.userName;
    }
}