import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
//import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';



import { ToastController } from 'ionic-angular';



@Injectable()
export class CargaArchivoProvider {

  constructor(public toastCtrl: ToastController) {
    console.log('Hello CargaArchivoProvider Provider');
    
  }

  cargar_imagen_firebase( archivo: ArchivoSubir){

    let promesa = new Promise( (resolve, reject)=>{

      this.mostrar_toast('XXXCargando...');

      let storeRef = firebase.storage().ref();
      let nombreArchivo:string = new Date().valueOf().toString(); // 1231231231
      
      this.mostrar_toast('Paso por aqui...');
      

      let uploadTask: firebase.storage.UploadTask =
          storeRef.child(`img/${ nombreArchivo }`)
                  .putString( archivo.img, 'base64', { contentType: 'image/jpeg' }  );
         uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,
            ()=>{ }, // saber el % de cuantos Mbs se han subido
            ( error ) =>{
              // manejo de error
              console.log("ERROR EN LA CARGA");
              console.log('ERROR EN LA CARGA:' +JSON.stringify( error ));
              this.mostrar_toast(JSON.stringify( error ));
              reject();
            },
            ()=>{
              // TODO BIEN!!
              console.log('Archivo subido');
              this.mostrar_toast('Imagen cargada correctamente');

              // let url = uploadTask.snapshot.downloadURL;

              // this.crear_post( archivo.titulo, url, nombreArchivo );

              resolve();
            }

          )



    });

    return promesa;

  }

  mostrar_toast(msg: string){
      const toast = this.toastCtrl.create({
        message: msg,
        duration: 3000
      });
      toast.present();
  }

  
}


interface ArchivoSubir{
  titulo: string;
  img: string;
  key?: string;
}
