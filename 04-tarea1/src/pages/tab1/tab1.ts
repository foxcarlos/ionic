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
  titulo_head: string = 'Eventos para hoy';
  hayMas:boolean = true;

  constructor(public navCtrl: NavController,
              public restProv: RestProvider,
              public loadingCtrl: LoadingController) {


      this.presentLoading();
      this.getEventosHoy()
      console.log( 'Lo que tiene peliculas desde el constructor', restProv.peliculas );

  }

  /* ionViewWillEnter(){
    this.getEventosHoy();
  } */

  getEventosHoy(){
    this.restProv.getHoy()
    .subscribe( (response)=>{
      console.log('salio bien get eventos hoy');
    },
    (err) =>{
      console.log('Error al intentar hacer refresh:', err);
    });
  }
  
  verEvento( personaje:any ){
    console.log('verPersonaje:', personaje);
    this.navCtrl.push(PersonajePage, { personaje });
  }

  doRefresh(refresher) {
    this.restProv.getHoy()
    .subscribe( (response)=>{
      refresher.complete();
    },
    (err) =>{
      console.log('Error al intentar hacer refresh:', err);
      refresher.cancel();
    });
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: 'Cargando video...',
      duration: 1000,
      dismissOnPageChange: true
    });
    loader.present();
  }

  doInfinite(infiniteScroll) {
	  console.log('Comienza la operacion asincrona');
    this.restProv.getHoy()
    .subscribe( (respon_promise)=>{
      this.hayMas = respon_promise;
      infiniteScroll.complete()
    },
    (err) =>{
      console.log('Error al intentar hacer refresh:', err);
      infiniteScroll.complete()
    });
  }
  
}
