import { NgModule } from '@angular/core';
import { MostrarAtpPipe } from './mostrar-atp/mostrar-atp';
import { MostrarListaFuncionesPipe } from './mostrar-lista-funciones/mostrar-lista-funciones';
import { MostrarDescripcionPipe } from './mostrar-descripcion/mostrar-descripcion';
@NgModule({
	declarations: [MostrarAtpPipe,
    MostrarListaFuncionesPipe,
    MostrarDescripcionPipe],
	imports: [],
	exports: [MostrarAtpPipe,
    MostrarListaFuncionesPipe,
    MostrarDescripcionPipe]
})
export class PipesModule {}
