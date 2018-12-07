import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Refresher, reorderArray } from "ionic-angular";
import {PersonajePage} from '../index.paginas';

// Provider
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html'
})

export class Tab1Page {

  personajePage: any = PersonajePage;

  constructor(public navCtrl: NavController,
              public restProv: RestProvider,
              public loadingCtrl: LoadingController) {


      this.presentLoading();
      console.log( 'Lo que tiene peliculas desde el constructor', restProv.peliculas );

  }
  // res.json().results
  doRefresh(refresher) {
    this.restProv.getPeliculas()
    .subscribe( (response)=>{
      refresher.complete();
    },
    (err) =>{
      console.log('Error al intentar hacer refresh:', err);
      refresher.cancel();
    });

  }
  
  verPersonaje( personaje:any ){
    console.log('verPersonaje:', personaje);
    this.navCtrl.push(PersonajePage, { personaje });
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: 'Por favor espere...',
      duration: 1000,
      dismissOnPageChange: true
    });
    loader.present();
  }
  
}
