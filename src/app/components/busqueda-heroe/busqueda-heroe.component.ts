import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda-heroe',
  templateUrl: './busqueda-heroe.component.html',
  styles: []
})


export class BusquedaHeroeComponent {

  heroesEncontrados: Heroe[] = [];
  termino: string;

  constructor( private heroesService: HeroesService,
               private activatedRoute: ActivatedRoute,
               private router: Router) {

  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params.termino;
      this.heroesEncontrados = this.heroesService.buscarHeroes( this.termino );

    } );
  }
  verHeroe(indice: number) {

    this.router.navigate( ['/heroe', indice] );

  }

}
