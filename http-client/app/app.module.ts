import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule} from '@angular/forms'
import { HttpModule, JsonpModule } from '@angular/http'
import { HeroListComponent } from './xhr/hero-list.component'

import { AppComponent } from './app.component'
import { HeroService } from './hero.service'

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    HeroListComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [ HeroService ]
})
export class AppModule {

}