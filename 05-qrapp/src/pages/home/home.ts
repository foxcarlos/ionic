import { Component } from '@angular/core';
// Componentes
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

// Plugins
import { ToastController, Platform } from 'ionic-angular';

// Servicios
import { HistorialProvider } from '../../providers/historial/historial'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  valor: string;
  valor2: string;

  constructor(private barcodeScanner: BarcodeScanner,
            private toastCtrl: ToastController,
            private platform: Platform,
            private historialProvider: HistorialProvider,
            ) { }

  scan() {
    console.log('Realizando Scan');

    // Este codigo es solo para cuando se prureba desde el navegador  
    if( !this.platform.is('cordova')){
      console.log('no conectado');
      this.valor = 'una peticion email';
      this.historialProvider.agregar_historial(`MATMSG:TO:foxcarlos@gmail.com;SUB:hola desde QR;BODY:Cuerpo del MSG;;`)
      // this.historialProvider.agregar_historial('http://google.com');
      // this.historialProvider.agregar_historial('geo:10.570228654538486,-71.63562545344234');
        /*this.historialProvider.agregar_historial( `BEGIN:VCARD
VERSION:2.1
N:Kent;Clark
FN:Clark Kent
ORG:
TEL;HOME;VOICE:12345
TEL;TYPE=cell:67890
ADR;TYPE=work:;;;
EMAIL:clark@superman.com
END:VCARD` );*/
      return;
    }

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Result:', barcodeData.text);
      console.log('Format:', barcodeData.format);
      console.log('Cancelled:', barcodeData.cancelled);

      //if(barcodeData.cancelled == 0 && barcodeData.text != null ){
      this.historialProvider.agregar_historial(barcodeData.text);
      this.valor = barcodeData.text;
      this.valor2 = barcodeData.format;
      //}

    }).catch(err => {
      console.log('Error', err);
      this.mostrar_error( err );
    });
  }

  mostrar_error(msg: string){
    const toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
          });
        toast.present();
  }

}
