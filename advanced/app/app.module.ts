import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule} from '@angular/forms'

import { AppComponent }  from './app.component'
import { HightlightDirective } from './hightlight.directive'
import { TitleComponent }  from './title/title.component'
import { ContactComponent } from './contact/contact.component'
import { AwesomePipe} from './contact/awesome.pipe'
import { ContactHighlightDirective } from './contact/contact-hightlight.directive'

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ 
      AppComponent,
      HightlightDirective,
      TitleComponent,
      ContactComponent,
      AwesomePipe,
      ContactHighlightDirective
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }