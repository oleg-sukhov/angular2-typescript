import { Component, OnInit } from '@angular/core'
import { Hero } from './../hero'
import { HeroService } from './../hero.service'

@Component({
    moduleId: module.id,
    selector: 'hero-list',
    templateUrl: 'hero-list.component.html'
})
export class HeroListComponent implements OnInit {
    errorMessage: string
    heroes: Hero[]
    mode: 'Observable'

    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.heroService.getHeroes()
            .subscribe(
                heroes => this.heroes = heroes,
                error => this.errorMessage = <any>error
            );
    }

    addHero(name: string) {
        if(!name) { return }
        return this.heroService.addHero(name)
            .subscribe(
                hero => this.heroes.push(hero),
                error => this.errorMessage = <any>error
            ) 
    }
}