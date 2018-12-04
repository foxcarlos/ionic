import { Component } from '@angular/core';
import { Loading, LoadingController, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';


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
                private domSanitizer: DomSanitizer) {

    this.personaje = this.navParams.get('personaje');
    console.log(this.personaje);
    //this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.personaje.url_trailer);

  }

  ionViewWillEnter(): void {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.personaje.url_trailer);
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
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
