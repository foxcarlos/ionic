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
  transform(value: string, params:any) {
    
    console.log(value, params);
    
    if (!value) {
      value = params;
    }
    
    return value;
  }
}
