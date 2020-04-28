import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContributorsCreateComponent } from './formularios/contributors-create/contributors-create.component';
import { ContributorsUpdateComponent } from './formularios/contributors-update/contributors-update.component';

const contributorRoutes: Routes = [
 { path: '', redirectTo: 'cadastrar', pathMatch: 'full' },
 { path: 'cadastrar', component: ContributorsCreateComponent },
 { path: 'atualizar/:id', component: ContributorsUpdateComponent },
];

@NgModule({
 imports: [RouterModule.forChild(contributorRoutes)],
 exports: [RouterModule]
})
export class ProfissionalRoutingModule { }
