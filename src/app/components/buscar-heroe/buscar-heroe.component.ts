import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from './../../servicios/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styleUrls: ['./buscar-heroe.component.css']
})
export class BuscarHeroeComponent   {
  
  heroes:Heroe[] = [];
  constructor( private heroesSerivce:HeroesService, 
               private activatedRouter:ActivatedRoute) { 
    
                this.activatedRouter.params.subscribe( params => {
                  let parametroBusqueda = params["termino"];
                  this.heroes = heroesSerivce.buscarHeroes(parametroBusqueda);
                });

               console.log(this.heroes);
  }

  // ngOnInit() {
    
    // this.heroes = this.heroesSerivce.buscarHeroes('hulk');
  
  // }

  verHeroePorNombre( nombre:string ){
    console.log(nombre);
    
    //this.router.navigate(['/heroe', idx]);
     
  }

}
