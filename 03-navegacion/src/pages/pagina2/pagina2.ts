import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Pagina3Page} from '../pagina3/pagina3';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})

export class Pagina2Page {

    // Esto es solo cuando se llama desde HTML
  pagina3: any = Pagina3Page;
  mutantes: any[] =[
    {
      nombre:'Magneto',
      poder: 'Controlar metales'
    },
    {
      nombre: 'Wolverine',
      poder: 'Regeneracion Acelerada'
    },
    {
      nombre: 'Profesor X',
      poder: 'Poderes psiquicos'
    },
    {
      nombre: 'Gambito',
      poder: 'Cargar objetos inanimados con energia'
    }];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irPagina3 ( mutante: any){
    console.log(mutante);
    this.navCtrl.push(Pagina3Page, {'personaje': mutante});
  };

}
