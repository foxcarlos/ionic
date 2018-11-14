import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-subir',
  templateUrl: 'subir.html',
})
export class SubirPage {

  titulo: string;
  imagenPreview: string;
  
  constructor(private viewCtrl: ViewController, 
              private camera: Camera) {
  }

  cerrar_modal(){
    this.viewCtrl.dismiss();
  }

  mostrar_camara(){
    console.log('Hola');
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {

     this.imagenPreview = 'data:image/jpeg;base64,' + imageData;
     
    }, (err) => {
      console.error('Error en camara:', JSON.stringify(err));
    });
  }


}
