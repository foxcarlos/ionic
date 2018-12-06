import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'mostrarListaFunciones',
})
export class MostrarListaFuncionesPipe implements PipeTransform {

  transform(value: any) {
    let valor = value
    valor = value.replace(/hs./g, "").replace(/'/g, '"');
    valor = JSON.parse(valor);
    
    return valor;
  }
}
