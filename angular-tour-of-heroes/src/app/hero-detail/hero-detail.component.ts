import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //this is attribute in HTML Tag:
  @Input() hero: Hero; //input decorator must have, because external HeroesComponent will bind to it

  constructor() { }

  ngOnInit(): void {
  }

}
