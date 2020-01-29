import { HeroesService, Heroe } from './../../servicios/heroes.service';
//import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
//export class HeroeComponent implements OnInit {
export class HeroeComponent  {

  //heroe:any = {};
    heroe:Heroe;
    
  constructor( private activatedRoute : ActivatedRoute, 
               private _heroesService : HeroesService ) { 

    this.activatedRoute.params.subscribe( params => {
      console.log(params["id"]);
      this.heroe = this._heroesService.getHeroe(params["id"]);
      console.log(this.heroe);
    })

  }

  //ngOnInit() {
  //}

}
