import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { CargaArchivoProvider } from '../../providers/carga-archivo/carga-archivo';


@Component({
  selector: 'page-subir',
  templateUrl: 'subir.html',
})
export class SubirPage {

  titulo: string = '';
  imagenPreview: string = '';
  imagen64: string;

  constructor(private viewCtrl: ViewController,
              private camera: Camera,
              private imagePicker: ImagePicker,
              public _cap: CargaArchivoProvider) {
  }

  cerrar_modal(){
    this.viewCtrl.dismiss();
  }

  
  mostrar_camara(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }  

    /*
    this.camera.getPicture(options).then((imageData) => {
      //this.imagenPreview = 'data:image/jpeg;base64,' + imageData;
      console.log('xValor de imageData:', imageData);
      this.imagenPreview = imageData.split(',')[1];
      this.imagen64 = imageData;
      console.log('imagenPreview', this.imagenPreview);
      console.log('imagen64',this.imagen64);  
    }, (err) => {
      console.log( "ERROR EN CAMARA", JSON.stringify(err) );
    });*/

    this.camera.getPicture( options )
    .then(imageData => {
      console.log('imageData', imageData);
      this.imagenPreview = `data:image/jpeg;base64,${imageData}`;
      this.imagen64 = imageData;
    })
    .catch(error =>{
      console.log( "ERROR EN CAMARA", JSON.stringify(error) );
    });


  }

  seleccionar_foto(){

    let opciones: ImagePickerOptions = {
      quality: 70,
      outputType: 1,
      maximumImagesCount: 1
    }

    this.imagePicker.getPictures(opciones).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Metodo Seleccionar Foto: Image URI: ' + results[i]);
          this.imagenPreview = 'data:image/jpeg;base64,' + results[i];
          this.imagen64 = results[i];
      }
    }, (err) => {
      console.log( "ERROR EN SELECTOR", JSON.stringify(err) );
     });
  }

  crear_post(){

    //  Objeto archivo
    let archivo = {
      img: this.imagen64,
      titulo: this.titulo
    }

    // Cargar imagen en firebase
    this._cap.cargar_imagen_firebase(archivo)
      .then( ()=>this.cerrar_modal() )
  }

}
