import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from './../../servicios/heroes.service';

@Component({
  selector: 'app-busqueda-heroe',
  templateUrl: './busqueda-heroe.component.html',
  styleUrls: ['./busqueda-heroe.component.css']
})
export class BusquedaHeroeComponent {

  heroes:Heroe[] = [];

  constructor( private activatedRoute:ActivatedRoute,
               private heroService: HeroesService) {
                
                
                let parametro;
                activatedRoute.params.subscribe( params => {
                  parametro = params['nombre'];
                });

                this.heroes = heroService.buscarHeroes(parametro);
                

   }



}
