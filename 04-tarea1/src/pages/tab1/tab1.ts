import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { Refresher, reorderArray } from "ionic-angular";
import { HttpClient } from '@angular/common/http';

import { PERSONAJES } from '../../assets/personajes.data';
import {PersonajePage} from '../index.paginas';

// Provider
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html'
})

export class Tab1Page {
  personajes:any = PERSONAJES;
  personajePage: any = PersonajePage;

  constructor(public navCtrl: NavController,
              public restProv: RestProvider) {

      // this.personajes = PERSONAJES.slice(0);
      console.log( 'LO que tiene peliculas', restProv.peliculas );
      
  }

  /*
  verPersonaje( personaje:any ){
    console.log(personaje);
    this.navCtrl.push(PersonajePage, { personaje });
  }*/

  verPersonaje( personaje:any ){
    this.restProv.getPeliculas()
      .subscribe( (response)=>{
        console.log('Personajes', response);
      },
      (err) =>{
        console.log('Ocurrio un Error:', err);
      }
    );
  }
  
}
