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
  
  baseUrl:string = 'http://localhost:8069/afip';

  constructor(private httpClient: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  public getProduct(): Observable<Product> {
    return this.httpClient
      .get(this.baseUrl + '/carlos/')
      .map(response => {         
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
