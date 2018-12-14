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

  private _crear_horarios(){
    let lista_horarios = ['2018-12-14 18:00', '2018-12-15 18:00', '2018-12-16 18:00'];
    let horarios: any = []
    for (const horario of lista_horarios) {
      let item = {
        text: horario,
        cssClass: 'myActionSheetBtnStyle',
        handler: () => {
          console.log('click en:', horario);
        }
      };
      horarios.push(item);
    }
    return horarios
  }

  presentActionSheet() {  
    const actionSheet = this.actionSheetCtrl.create({
      //title: '<p> lista_horarios </p>',
      cssClass: 'myPage',
      buttons: this._crear_horarios()
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
