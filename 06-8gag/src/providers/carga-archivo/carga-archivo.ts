import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
//import firebase from 'firebase/app';
//import 'firebase/firestore';

import { ToastController } from 'ionic-angular';

@Injectable()
export class CargaArchivoProvider {

    imagenes: ArchivoSubir[] = [];

    constructor(public toastCtrl: ToastController,
                public afDB: AngularFireDatabase) {

    console.log('Hola CargaArchivoProvider');
    
  }

  cargar_imagen_firebase( archivo: ArchivoSubir){

    let promesa = new Promise( (resolve, reject)=>{
      let storeRef = firebase.storage().ref();
      let nombreArchivo:string = new Date().valueOf().toString(); // 1231231231

      let uploadTask: firebase.storage.UploadTask =
          storeRef.child(`img/${ nombreArchivo }`)
                  .putString( archivo.img, 'base64', { contentType: 'image/jpeg' }  );

      uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,
            ()=>{ }, // saber el % de cuantos Mbs se han subido
            ( error ) =>{
              // manejo de error
              console.log('ERROR EN LA CARGA:' +JSON.stringify( error ));
              this.mostrar_toast(JSON.stringify( error ));
              reject();
            },
            ()=>{
              // TODO BIEN!!
              console.log('Imagen cargada correctamente');
              this.mostrar_toast('Imagen cargada correctamente');

              let url = uploadTask.snapshot.downloadURL;

              this.crear_post( archivo.titulo, url, nombreArchivo );

              resolve();
            }

      )
    });

    return promesa;

  }

  private crear_post( titulo: string, url: string, nombreArchivo: string ){

    let post: ArchivoSubir = {
        img: url,
        titulo: titulo,
        key: nombreArchivo
    };

    console.log( JSON.stringify(post) );
    // Esto sube los datos a firebase con un ID creado automaticamente
    // this.afDB.list('/post').push(post);
    this.afDB.object(`/post/${ nombreArchivo }`).update(post)

    this.imagenes.push( post );
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
