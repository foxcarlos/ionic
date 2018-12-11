import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MostrarSalaFechaPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'mostrarSalaFecha',
})
export class MostrarSalaFechaPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value1: string, value2: string) {
    //`Sala:$( value1) `
    console.log(value2);
    
    //return value1.toLowerCase();
  }
}
