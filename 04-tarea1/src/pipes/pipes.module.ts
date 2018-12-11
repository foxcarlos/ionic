import { NgModule } from '@angular/core';
import { MostrarAtpPipe } from './mostrar-atp/mostrar-atp';
import { MostrarListaFuncionesPipe } from './mostrar-lista-funciones/mostrar-lista-funciones';
import { MostrarDescripcionPipe } from './mostrar-descripcion/mostrar-descripcion';
import { MostrarSalaFechaPipe } from './mostrar-sala-fecha/mostrar-sala-fecha';
@NgModule({
	declarations: [MostrarAtpPipe,
    MostrarListaFuncionesPipe,
    MostrarDescripcionPipe,
    MostrarSalaFechaPipe,
    MostrarSalaFechaPipe],
	imports: [],
	exports: [MostrarAtpPipe,
    MostrarListaFuncionesPipe,
    MostrarDescripcionPipe,
    MostrarSalaFechaPipe,
    MostrarSalaFechaPipe]
})
export class PipesModule {}
