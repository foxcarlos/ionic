import { NgModule } from '@angular/core';
import { MostrarAtpPipe } from './mostrar-atp/mostrar-atp';
import { MostrarListaFuncionesPipe } from './mostrar-lista-funciones/mostrar-lista-funciones';
@NgModule({
	declarations: [MostrarAtpPipe,
    MostrarListaFuncionesPipe],
	imports: [],
	exports: [MostrarAtpPipe,
    MostrarListaFuncionesPipe]
})
export class PipesModule {}
