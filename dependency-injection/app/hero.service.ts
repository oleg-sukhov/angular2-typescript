import { Hero } from './hero'

export class HeroService {

    getHeroes(): Array<Hero> {
      return Array.from([
        { name: 'Mr. Nice', power: "power1" },
        { name: 'Narco', power: "power2" },
        { name: 'Bombasto', power: "power3" },
        { name: 'Celeritas', power: "power4" },
        { name: 'Magneta', power: "power5" }
      ]);
    }
}