import { Component, Input} from '@angular/core';
import { Hero } from './hero'

@Component({
    selector: 'hero-detail',
    template:`
    <div *ngIf="hero">
      <h2>Hero details</h2>
      <div><label>id:</label>{{hero.id}}</div>
      <div><label>name:</label>{{hero.name}}</div>

      <div>
        <label>Change name:</label>
        <input [(ngModel)]="hero.name" placeHolder="name"/>
      </div>
    </div>
    `
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;
}