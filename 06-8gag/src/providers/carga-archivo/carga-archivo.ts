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

  cargar_imagen_firebase( archivo: ArchivoSubir ){
    let promesa = new Promise( (resolve, reject) =>{
      console.log('ver archivo');
      console.log(archivo.img);
      
      this.mostrar_toast('Cargando...');

      // Firebase
      let storageRef = firebase.storage().ref();
      let nombreArchivo: string = new Date().valueOf().toString();

      let uploadTask: firebase.storage.UploadTask =
        storageRef.child(`img/${ nombreArchivo }`)
                  .putString( archivo.img, 'base64', { contentType: 'image/jpeg' }  );

         uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,
            ()=>{ }, // saber el % de cuantos Mbs se han subido
            ( error ) =>{
              // manejo de error
              console.log("ERROR EN LA CARGA");
              console.log(JSON.stringify( error ));
              this.mostrar_toast(JSON.stringify( error ));
              reject();
            },
            ()=>{
              // TODO BIEN!!
              console.log('Archivo subido');
              this.mostrar_toast('Imagen cargada correctamente');
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

  /*
  getPeliculas(){
    let URL = "http://ec2-18-236-66-28.us-west-2.compute.amazonaws.com:8069/centrocultural/cine"
    
    let promesa = new Promise( (resolve, reject) =>{
      
    });
    return promesa;
  }*/



}


interface ArchivoSubir{
  titulo: string;
  img: string;
  key?: string;
}