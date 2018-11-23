// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';

import { ToastController } from 'ionic-angular';

@Injectable()
export class CargaArchivoProvider {

    imagenes: ArchivoSubir[] = [];
    lastKey: string = null;

  constructor(public toastCtrl: ToastController,
                public afDB: AngularFireDatabase) {

    console.log('Hola CargaArchivoProvider');
    
    this.cargar_ultimo_key();
  }
  
  cargar_ultimo_key(){
    this.afDB.list('/post', ref=>ref.orderByKey().limitToLast(1) )
          .valueChanges()
          .map( (respon:any)=>{
            this.lastKey = respon[0].key;
            this.imagenes.push( respon[0] );
          })
  }

  cargar_imagen_firebase( archivo: ArchivoSubir){

    let promesa = new Promise( (resolve, reject)=>{
      this.mostrar_toast('Cargando imagen...');
      
      let storeRef = firebase.storage().ref();
      let nombreArchivo:string = new Date().valueOf().toString();

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

              //let url = uploadTask.snapshot.downloadURL;

              uploadTask.snapshot.ref.getDownloadURL().then(
                (downloadURL) => {
                  let url = downloadURL;
                  console.log(url);
                  this.guadar_database( archivo.titulo, url, nombreArchivo );
                },
                (error) =>{
                  console.log('Ocurrio un error al intentar obtener la url', error);
                  
                }
                );

              resolve();
            }

      )
    });

    return promesa;

  }

  private guadar_database( titulo: string, url: string, nombreArchivo: string ){

    let post: ArchivoSubir = {
        img: url,
        titulo: titulo,
        key: nombreArchivo
    };

    console.log( JSON.stringify(post) );
    // Esto sube los datos a firebase con un ID creado automaticamente
    // this.afDB.list('/post').push(post);
    this.afDB.object(`/post/${ nombreArchivo }`).update(post);

    // Actualiza la lista de imagenes en el telefono
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
