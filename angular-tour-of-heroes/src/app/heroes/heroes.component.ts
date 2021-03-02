import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectedHero?: Hero;
  
  //w konstruktorze nie wpoinno byc wywołać do getHeroes() i
  //innych rzeczy, kontruktor powinien być minimalny
  //wstrzykniecie serwisu przez konstruktor:
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  /*
  The previous version assigns an array of heroes to the component's heroes property. 
  The assignment occurs synchronously, as if the server could return heroes instantly 
  or the browser could freeze the UI while it waited for the server's response.

  That won't work when the HeroService is actually making requests of a remote server.
  
  The new version waits for the Observable to emit the array of heroes—which 
  could happen now or several minutes from now. The subscribe() method passes 
  the emitted array to the callback, which sets the component's heroes property.
  */

  //zwykla metoda bez Observable:
  //getHeroes(): void {
  //  this.heroes = this.heroService.getHeroes();
  //}

  //https://angular.io/tutorial/toh-pt3
  //a tu wywolanie metody z serwisu ale z Observable
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  //te metode wywoła Angular gdy Heroes component zostanie zbudowany
  ngOnInit(): void {
    this.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
