import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Refresher, reorderArray } from "ionic-angular";
import {PersonajePage} from '../index.paginas';

// Provider
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-tab2',
  templateUrl: '../tab1/tab1.html'
})

export class Tab2Page {

  personajePage: any = PersonajePage;
  titulo_head: string = 'Cartelera de cine';

  constructor(public navCtrl: NavController,
              public restProv: RestProvider,
              public loadingCtrl: LoadingController) {


      this.presentLoading();
      this.getCines();
      console.log( 'Lo que tiene cine desde el constructor', restProv.peliculas );

  }

  getCines(){
    this.restProv.getCines()
    .subscribe( (response)=>{
      // refresher.complete();
      console.log('salio bien get cines');
    },
    (err) =>{
      console.log('Error al intentar hacer refresh:', err);
      // refresher.cancel();
    });
  }

  doRefresh(refresher) {
    this.restProv.getCines()
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
