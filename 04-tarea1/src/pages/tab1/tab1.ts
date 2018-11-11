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
                public httpClient: HttpClient) {
      // this.personajes = PERSONAJES.slice(0);
    this.films = this.httpClient.get('http://ec2-18-236-66-28.us-west-2.compute.amazonaws.com:8069/intranet/9796220');
        this.films
        .subscribe(data => {
            console.log('my data: ', data);
    })
  }

  verPersonaje( personaje:any ){
    console.log(personaje);
    this.navCtrl.push(PersonajePage, { personaje });
  }


}
