import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'mostrarDescripcion',
})
export class MostrarDescripcionPipe implements PipeTransform {

  transform(value: string) {
    if(value){
        let valor = value;
        valor = value.replace("<p>", '').replace("</p>", '');
        return valor;
    }else{
      return 'No existe ninguna descripcion para este evento';
    }
  }
}
