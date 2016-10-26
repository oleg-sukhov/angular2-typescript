import { Component } from '@angular/core'
import { WikiService } from './wiki.service'

import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'

@Component({
    moduleId: module.id,
    selector: 'wiki-smart-search',
    templateUrl: 'wiki.component.html',
    providers: [ WikiService ]
})
export class WikiSmartComponent {
    private title = "Smart Wiki Search"
    private fetches = 'Fetches after each keystroke'
    private items: Observable<string[]> 
    private searchTermStream = new Subject<string>()
   

    constructor(private wikiService: WikiService) {
        this.items = this.searchTermStream
                         .debounceTime(1300)
                         .distinctUntilChanged()
                         .switchMap((term: string) => this.wikiService.search(term))
     }

    search(term: string) {
        this.searchTermStream.next(term)
    }
}