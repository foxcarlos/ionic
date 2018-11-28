import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Observable
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  baseUrl:string = 'http://ec2-18-236-66-28.us-west-2.compute.amazonaws.com:8069'
  // centrocultural/cine/
  // 'http://localhost:8069/afip';

  imagenes: ArchivoSubir[] = [];

  constructor(private httpClient: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  public getProduct(): Observable<Product> {
    return this.httpClient
      .get(this.baseUrl + '/centrocultural/cine/')
      .map(response => {
          console.log(response);
          return new Product(response);
      })
  }

}

export class Product {
  id: number;
  name: string;
  cost: number;
  quantity: number;

  constructor(values: Object = {}) {
       Object.assign(this, values);
  }
}

interface ArchivoSubir{
    categoria: string,
    clase: string,
    fecha_hoy: string,
    horario_hoy: string,
    idioma: string,
    lista_de_funciones: [],
    resumen: string,
    sala_hoy: string,
    titulo_original: string,
    trailer: string,
    url_imagen: string,
}
