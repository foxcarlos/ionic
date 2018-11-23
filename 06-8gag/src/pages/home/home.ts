import { Component } from '@angular/core';
import {  ModalController} from 'ionic-angular';
import { SubirPage } from '../subir/subir';

// import { AngularFireDatabase } from '@angular/fire/database';
// import { Observable } from 'rxjs/Observable';
import { CargaArchivoProvider } from '../../providers/carga-archivo/carga-archivo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // items: Observable<any[]>;
  constructor( private modalCtrl: ModalController,
                public _cap: CargaArchivoProvider) {

    // this.items = afDB.list('post').valueChanges();
    
  }

  mostrar_modal(){
    let modal = this.modalCtrl.create( SubirPage );
    modal.present();
  }

}
