import { Component } from '@angular/core';
import { Loading, LoadingController, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-personaje',
  templateUrl: 'personaje.html',
})
export class PersonajePage {
  personaje: any = {};
  trustedVideoUrl: SafeResourceUrl;
  loading: Loading;

  constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public loadingCtrl: LoadingController,
                private domSanitizer: DomSanitizer,
                public actionSheetCtrl: ActionSheetController) {

    this.personaje = this.navParams.get('personaje');
  }

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Horarios',
      buttons: [
        {
          text: '2018-12-13 18:00',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: '2018-12-14 18:00',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: '2018-12-15 18:00',
          handler: () => {
            console.log('Cancel clicked');
          }
        },{
          text: 'Cerrar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  ionViewWillEnter(): void {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.personaje.url_trailer);
    this.loading = this.loadingCtrl.create({
      content: 'Por favor espere...'
    });

    this.loading.present();
  }

  handleIFrameLoadEvent(): void {
    this.loading.dismiss();
  }

  irAtras(){
    this.navCtrl.pop();
  }


}
