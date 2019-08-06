import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaEventosHoy } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

    //baseUrl = 'http://ec2-18-236-66-28.us-west-2.compute.amazonaws.com:8069';
    // baseUrl = 'http://localhost:8070';

  constructor( private http: HttpClient ) { }

  getEventosHoy() {
    return this.http.get<RespuestaEventosHoy>('/centrocultural/eventoshoy');
  }
}
