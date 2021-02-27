import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  //ta metoda musi byc asynchroniczna,
  //bo w rezultacie powinna zwracać dane z serwera, np. WebAPI,
  //więc definitywnie powinna być aysnchroniczna => Observable?
  //tu jest metoda zwykla, bez Obsrervable:
  //getHeroes(): Hero[] {
  //  return HEROES;
  //}

  //tu jest metoda asynchroniczna z Observable?
  //of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
  //https://angular.io/tutorial/toh-pt3
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id))
  }
}
