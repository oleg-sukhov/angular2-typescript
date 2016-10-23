import { Component } from '@angular/core'
import { EditItem } from './edit-item'
import { Hero } from './hero'
import { HeroService } from './hero.service'
import { HeroCardComponent } from './hero-card.component'
import { HeroEditorComponent} from './hero-editor.component'

@Component({
  selector: 'hero-list',
  template: `
    <div>
      <ul>
        <li *ngFor="let editItem of heroes">
          <hero-card
            [hidden]="editItem.editing"
            [hero]="editItem.item">
          </hero-card>
          <button
            [hidden]="editItem.editing"
            (click)="editItem.editing = true">
            edit
          </button>
          <hero-editor
            (saved)="onSaved(editItem, $event)"
            (canceled)="onCanceled(editItem)"
            [hidden]="!editItem.editing"
            [hero]="editItem.item">
          </hero-editor>
        </li>
      </ul>
    </div>`,
    providers: [HeroService]
})
export class HeroListComponent {
    heroes: Array<EditItem<Hero>>;

    constructor(heroService: HeroService) {
        this.heroes = heroService.getHeroes().map(hero => new EditItem(hero))
    }

    onSaved(editItem: EditItem<Hero>, updatedHero: Hero) {
        editItem.editing = false
        editItem.item = updatedHero
    }

    onCanceled(editItem: EditItem<Hero>) {
        editItem.editing = false
    }
}