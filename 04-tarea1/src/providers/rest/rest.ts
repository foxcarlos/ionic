import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Observable
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RestProvider {

  baseUrl:string = 'http://ec2-18-236-66-28.us-west-2.compute.amazonaws.com:8069'
  // 'http://localhost:8069'
  
  peliculas: ArchivoSubir[] = [];
  
  constructor(private httpClient: HttpClient) {
    console.log('Hello RestProvider Provider');
    
    this.getPeliculas()
      .subscribe( (response)=>{
        console.log('Personajes', response);
      },
      (err) =>{
        console.log('Ocurrio un Error:', err);
      }
    );
  }

  public getPeliculas(): Observable<Product> {
    return this.httpClient
      .get(this.baseUrl + '/centrocultural/cine/')
      .map((response:any) => {
          for (const item of response) {
            this.peliculas.push(item);
          }
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
    [lista_de_funciones: string]: any;
    resumen: string,
    sala_hoy: string,
    titulo_original: string,
    trailer: string,
    titulo: string,
    url_imagen: string,
}
