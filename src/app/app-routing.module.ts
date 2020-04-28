import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProfissionalRoutingModule } from './componentes/pessoas/profissionais/contribuitor-routing.module';
import { ContributorsComponent } from './views/registers/contributors/contributors.component';
// import { ContributorsComponent } from './views/registers/contributors/contributors.component';
// import { SocietyComponent } from './views/registers/society/society.component';
// import { ContributorsCreateComponent } from './components/people/contributors/contributors-create/contributors-create.component';
// import { ContributorsUpdateComponent } from './components/people/contributors/contributors-update/contributors-update.component';



const routes: Routes = [

 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent },

 { path: 'infor-profissional', component: ContributorsComponent },
 {
  path: 'profissional',
  loadChildren: () => import('./componentes/pessoas/profissionais/contributor.module')
   .then(m => m.ContributorModule)
 },

 { path: 'paciente', loadChildren: () => import('./componentes/pessoas/pacientes/paciente.module').then(m => m.PacienteModule) },

 // { path: "cont/:id", component: ContributorsComponent},
 // {path: 'cont/create', component: ContributorsCreateComponent},
 // { path: "cont/update/:id", component: ContributorsUpdateComponent},
 // { path: "society", component: SocietyComponent },

];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
