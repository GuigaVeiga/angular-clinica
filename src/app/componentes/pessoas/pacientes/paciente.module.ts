import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { CriarPacienteComponent } from './formularios/criar-paciente/criar-paciente.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [CriarPacienteComponent],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    MaterialModule
  ]
})
export class PacienteModule { }
