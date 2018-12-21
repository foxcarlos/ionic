import { Component } from '@angular/core';
import { Loading, LoadingController, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import { ActionSheetController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-personaje',
  templateUrl: 'personaje.html',
})
export class PersonajePage {
  personaje: any = {};
  trustedVideoUrl: SafeResourceUrl;
  loading: Loading;
  horarios_global: any = [];
  
  constructor(public navCtrl: NavController,

                public navParams: NavParams,
                public loadingCtrl: LoadingController,
                private domSanitizer: DomSanitizer,
                public actionSheetCtrl: ActionSheetController,
                public restProv: RestProvider) {

    this.personaje = this.navParams.get('personaje');
    this.get_horarios();
  }

  get_horarios(){
    this.restProv.getHorario(this.personaje.name)
      .subscribe( (response)=>{
        console.log('salio bien getHorario', response);
        //this.presentActionSheet(this.armar_horarios(response));
        this.armar_horarios(response);
      },
      (err) =>{
        console.log('Error al intentar obterner e horario:', err);
      });
    
  }

  parse_fecha(fecha: string){
    var d = new Date(fecha);
    var weekday = new Array(7);
    var monthday = new Array(12);

    monthday[1] =  "Enero";
    monthday[2] =  "Febrero";
    monthday[3] =  "Marzo";
    monthday[4] =  "Abril";
    monthday[5] =  "Mayo";
    monthday[6] =  "Junio";
    monthday[7] =  "Julio";
    monthday[8] =  "Agosto";
    monthday[9] =  "Septiembre";
    monthday[10] =  "Octubre";
    monthday[11] =  "Noviembre";
    monthday[12] =  "Diciembre";

    weekday[0] =  "Domingo";
    weekday[1] = "Lunes";
    weekday[2] = "Martes";
    weekday[3] = "Miercoles";
    weekday[4] = "Jueves";
    weekday[5] = "Viernes";
    weekday[6] = "Sabado";

    let dia_semana = weekday[d.getDay()];
    let dia = d.getDate();
    let mes = monthday[d.getMonth()];
    let anio = d.getFullYear();
    let hora = d.getHours();
    let minutos:any = d.getMinutes();
    console.log(minutos);
    
    if(minutos==0){
      minutos = `${minutos}0`
    }    

    /* "2018-12-09 20:00:00"
    "Jue 12 de Dic 20:00" */
    console.log(d.toDateString());
    return `${dia_semana.slice(0,3)} ${dia} de ${mes.slice(0,3)} ${hora}:${minutos}`
  }

  armar_horarios(lista_horarios){
    let fecha_hoy = new Date();

    for (const horario of lista_horarios) {
      let fecha_evento = new Date(horario);
      
      if( fecha_evento >= fecha_hoy){
        this.horarios_global.push(this.parse_fecha(horario));
      }
    }
  }
 
  ionViewWillEnter(): void {
    console.log(this.personaje.url_trailer);
    
    if(this.personaje.url_trailer){
      this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.personaje.url_trailer);
    
      this.loading = this.loadingCtrl.create({
        content: 'Por favor espere...'
      });
  
      this.loading.present();
    }else{
      this.trustedVideoUrl = null
    }
  }

  handleIFrameLoadEvent(): void {
    this.loading.dismiss();
  }

  irAtras(){
    this.navCtrl.pop();
  }


}
