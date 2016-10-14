import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { Headers, Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}
    
    getHeroes(): Promise<Hero[]> {
      return this.http.get(this.heroesUrl)
        .toPromise()
        .then(response => response.json().data as Hero[])
        .catch(this.handleError);
    }

    getHeroesSlowly(): Promise<Hero[]> {
      return new Promise<Hero[]>(resolve =>
        setTimeout(resolve, 5000))
        .then(() => this.getHeroes());
    }

    getHero(heroId: number): Promise<Hero> {
        return Promise.resolve(
            this.getHeroes().then(heroes => heroes.find(hero => hero.id === heroId)));
    }

    private handleError(error: any): Promise<any> {
        console.error('Some error has happened during load data from web srver' + error);
        return Promise.reject(error.message | error);
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`
        return this.http
                   .put(url, JSON.stringify(hero), {headers: this.headers})
                   .toPromise()
                   .then(() => hero)
                   .catch(this.handleError);

    }

    create(name: string): Promise<Hero> {
        return this.http
                   .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
                   .toPromise()
                   .then(res => res.json().data)
                   .catch(this.handleError);
    }

    delete(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http
                   .delete(url, {headers: this.headers})
                   .toPromise()
                   .then(res => null)
                   .catch(this.handleError);
    }

    
}