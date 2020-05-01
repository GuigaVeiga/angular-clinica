import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProfissionalRoutingModule } from './componentes/pessoas/profissionais/contribuitor-routing.module';
import { ContributorsComponent } from './views/registers/contributors/contributors.component';
import { BasePacienteComponent } from './views/registers/base-paciente/base.paciente.component';
import { LoginComponent } from './views/login/login.component';
import { AgendamentoComponent } from './views/registers/agendamento/agendamento.component'
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { RecuperarSenhaComponent } from './views/recuperar-senha/recuperar-senha.component';
// import { ContributorsComponent } from './views/registers/contributors/contributors.component';
// import { SocietyComponent } from './views/registers/society/society.component';
// import { ContributorsCreateComponent } from './components/people/contributors/contributors-create/contributors-create.component';
// import { ContributorsUpdateComponent } from './components/people/contributors/contributors-update/contributors-update.component';



const routes: Routes = [

 { path: 'login', component: LoginComponent },
 // {path: 'recuperar', component: RecuperarSenhaComponent},
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 {path: 'home', component: HomeComponent,
  canActivate: [AuthGuardGuard]
 },

 {
  path: 'paciente', component: BasePacienteComponent,
  canActivate: [AuthGuardGuard]
 },
 {
  path: 'paciente/cadastrar',
  loadChildren: () => import('./componentes/pessoas/pacientes/paciente.module')
   .then(m => m.PacienteModule),
  canActivate: [AuthGuardGuard]
 },

 { path: 'profissional', component: ContributorsComponent },
 {
  path: 'profissional/cadastrar',
  loadChildren: () => import('./componentes/pessoas/profissionais/contributor.module')
   .then(m => m.ContributorModule),
  canActivate: [AuthGuardGuard]
 },
 {
     path: 'agendamento', component: AgendamentoComponent,
     canActivate: [AuthGuardGuard]
 },

 // { path: 'create', loadChildren: () => import('./componentes/pessoas/pacientes/paciente.module').then(m => m.PacienteModule) },

];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
