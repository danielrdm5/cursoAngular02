import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  constructor( private heroesService: HeroesService ) {


  }

  heroes: Heroe[] = [];

  ngOnInit() {

    this.heroes = this.heroesService.getHeroes();


  }

}

