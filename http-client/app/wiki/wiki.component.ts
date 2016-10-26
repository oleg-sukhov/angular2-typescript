import { Component } from '@angular/core'
import { WikiService } from './wiki.service'
import { Observable } from 'rxjs/Observable'

@Component({
    moduleId: module.id,
    selector: 'wiki-search',
    templateUrl: 'wiki.component.html',
    providers: [ WikiService ]
})
export class WikiComponent {
    private title = "Wiki Search"
    private fetches = 'Fetches after each keystroke'
    private items: Observable<string[]> 
   

    constructor(private wikiService: WikiService) { }

    search(term: string) {
        this.items = this.wikiService.search(term);
    }
}