import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import {PlantaListaComponent} from './planta-lista/planta-lista.component'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PlantaListaComponent
  ],
  exports: [PlantaListaComponent],
  providers:[provideHttpClient()]
})
export class PlantaModule { }
