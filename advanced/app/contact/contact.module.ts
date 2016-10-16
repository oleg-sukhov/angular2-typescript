import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { ContactComponent } from './contact.component'
import { AwesomePipe} from './awesome.pipe'
import { ContactHighlightDirective } from './contact-hightlight.directive'
import { ContactService } from './contact.service'

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        ContactComponent,
        AwesomePipe,
        ContactHighlightDirective
    ],
    exports: [ContactComponent],
    providers: [ContactService]
})
export class ContactModule {

}