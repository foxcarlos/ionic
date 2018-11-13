import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { Refresher, reorderArray } from "ionic-angular";
import { HttpClient } from '@angular/common/http';

import { PERSONAJES } from '../../assets/personajes.data';
import {PersonajePage} from '../index.paginas';

@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html'
})

export class Tab1Page {
  personajes:any = PERSONAJES;
  personajePage: any = PersonajePage;

  constructor(public navCtrl: NavController,
                ) {
      // this.personajes = PERSONAJES.slice(0);
    
  }

  verPersonaje( personaje:any ){
    console.log(personaje);
    this.navCtrl.push(PersonajePage, { personaje });
  }


}
