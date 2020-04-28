import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarPacienteComponent } from './formularios/criar-paciente/criar-paciente.component';


const routes: Routes = [
 { path: '', component: CriarPacienteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
