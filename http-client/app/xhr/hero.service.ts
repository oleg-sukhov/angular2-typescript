import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions} from '@angular/http'
import { Observable } from 'rxjs/Observable';

import { Hero } from './../hero'

@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes'

    constructor(private http: Http) {}

    getHeroes(): Observable<Hero[]> {
        return this.http.get(this.heroesUrl)
                   .map(this.extractData)
                   .catch(this.handleError)
    }

    addHero(name: string): Observable<Hero> {
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.heroesUrl, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json()
        return body.data || { }
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
    
}