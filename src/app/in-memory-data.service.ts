import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
createDb() {
    const trips = [
        { id: 11, name: 'Nice' },
        { id: 12, name: 'Maroco' },
        { id: 13, name: 'Bombaj' },
        { id: 14, name: 'Cannes' },
        { id: 15, name: 'Majorka' },
        { id: 16, name: 'River Niagara' },
        { id: 17, name: 'Gavia' },
        { id: 18, name: 'Mangart' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
      ];
      return {trips};


}
}
