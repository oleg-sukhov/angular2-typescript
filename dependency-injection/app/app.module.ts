import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api'

import { HeroListComponent } from './hero-list.component'
import { HeroCardComponent } from './hero-card.component'
import { HeroEditorComponent } from './hero-editor.component'


@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
  ],
  declarations: [ 
    HeroListComponent,
    HeroCardComponent,
    HeroEditorComponent
  ],
  bootstrap: [
    HeroListComponent
  ] 
})
export class AppModule { }