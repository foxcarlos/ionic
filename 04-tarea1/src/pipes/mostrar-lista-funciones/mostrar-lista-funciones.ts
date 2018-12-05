import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MostrarListaFuncionesPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'mostrarListaFunciones',
})
export class MostrarListaFuncionesPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    
    return value.toLowerCase();
  }
}
