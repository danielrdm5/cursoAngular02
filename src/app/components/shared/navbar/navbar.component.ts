import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private heroesService: HeroesService,
              private router: Router) { }

  heroesEncontrados: Heroe[] = [];

  ngOnInit() {
  }

  buscarHeroe( termino: string ) {
    
    this.router.navigate( ['/busqueda-heroe', termino]);
  }

}
