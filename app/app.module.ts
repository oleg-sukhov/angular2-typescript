import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HeroDetailComponent} from './hero-detail.component'
import { HeroesComponent } from './heroes.component'
import { RouterModule } from '@angular/router'
import { DashboardComponent} from './dashboard.component'

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dash',
        pathMatch: 'full'
      },
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dash',
        component: DashboardComponent
      }
    ])
  ],
  declarations: [ 
    AppComponent, 
    HeroDetailComponent, 
    HeroesComponent,
    DashboardComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }