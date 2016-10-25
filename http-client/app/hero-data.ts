import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class HeroData implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: '1', name: 'Brian' },
      { id: '2', name: 'John' },
      { id: '3', name: 'Derek' },
      { id: '4', name: 'Mario' }
    ];
    return { heroes };
  }
}
