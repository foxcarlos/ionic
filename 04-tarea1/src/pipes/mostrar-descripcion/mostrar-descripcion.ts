import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'mostrarDescripcion',
})
export class MostrarDescripcionPipe implements PipeTransform {

  transform(value: string) {
    let valor = value;
    valor = value.replace("<p>", '').replace("</p>", '');
    return valor;
  }
}
