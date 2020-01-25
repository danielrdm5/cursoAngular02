import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  constructor( private heroesService: HeroesService,
               private router: Router ) {
  }

  heroes: Heroe[] = [];

  ngOnInit() {

    this.heroes = this.heroesService.getHeroes();


  }

  verHeroe(indice: number) {

    this.router.navigate( ['/heroe', indice] );

  }

}

