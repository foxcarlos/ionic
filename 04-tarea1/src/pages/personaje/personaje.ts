import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-personaje',
  templateUrl: 'personaje.html',
})
export class PersonajePage {
  personaje: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personaje = this.navParams.get('personaje');
    console.log(this.personaje);

  }

  irAtras(){
    this.navCtrl.pop();
  }


}
