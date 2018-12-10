import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MostrarAtpPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'mostrarAtp',
})
export class MostrarAtpPipe implements PipeTransform {
  transform(value: string) {
    if(value){
      console.log('lo que tiene pipe atp', value)
      return value.split(' ').slice(-4,).join(' ');
    }else{
      return 'Todo Publico'
    }
  }
}
