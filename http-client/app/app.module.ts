import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule} from '@angular/forms'
import { HttpModule, JsonpModule } from '@angular/http'
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api'

import { AppComponent } from './app.component'
import { HeroData } from './hero-data'
import { HeroListComponent } from './xhr/hero-list.component'
import { WikiComponent } from './wiki/wiki.component'
import { WikiSmartComponent } from './wiki/wiki-smart.component'
import { HeroService } from './xhr/hero.service'

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    InMemoryWebApiModule.forRoot(HeroData)
  ],
  declarations: [
    AppComponent,
    HeroListComponent,
    WikiComponent,
    WikiSmartComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [ HeroService ]
})
export class AppModule {

}