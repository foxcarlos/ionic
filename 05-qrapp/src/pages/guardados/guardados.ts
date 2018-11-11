import { Component } from '@angular/core';

import { ScanData } from '../../models/scan-data.model'
import { HistorialProvider } from '../../providers/historial/historial'


@Component({
  selector: 'page-guardados',
  templateUrl: 'guardados.html',
})
export class GuardadosPage {

  historial: ScanData[] = [];

  constructor(private _historialProvider: HistorialProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuardadosPage');
    this.historial = this._historialProvider.cargar_historial();
    console.log(this.historial);
  }

  abrir_scan( index: number ){
    this._historialProvider.abrir_scan( index );
  }

}
