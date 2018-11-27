import { Component } from '@angular/core';
import {  ModalController} from 'ionic-angular';
import { SubirPage } from '../subir/subir';

// import { AngularFireDatabase } from '@angular/fire/database';
// import { Observable } from 'rxjs/Observable';
import { CargaArchivoProvider } from '../../providers/carga-archivo/carga-archivo';

// Plugins
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  hayMas:boolean = true;

  constructor( private modalCtrl: ModalController,
               private socialSharing: SocialSharing,
               public _cap: CargaArchivoProvider) {
  }

  mostrar_modal(){
    let modal = this.modalCtrl.create( SubirPage );
    modal.present();
  }

  doInfinite(infiniteScroll) {
	console.log('Comienza la operacion asincrona');

    this._cap.cargar_imagenes().then(
        ( respon_promise: boolean )=> {
            this.hayMas = respon_promise;
            infiniteScroll.complete()
        }
    );
  }

  compartir(img){
    console.log(img);
    let message = img.titulo;
    let image = img.img
    let url = img.img
    console.log(message, image, url);

    /*
    this.socialSharing.shareFacebook(message, image, url).then(() => {
	// Success!
	}).catch((error) => {
	    console.log(error);
    });*/
  }

}
