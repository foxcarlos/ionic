import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  eventos: Article[] = [];

  constructor( private eventosService: EventosService ) {

  }

  ngOnInit() {
    this.eventosService.getEventosHoy()
      .subscribe( resp => {
        console.log('Hoy', resp.articles);
        this.eventos.push( ...resp.articles );
      });
  }

}
