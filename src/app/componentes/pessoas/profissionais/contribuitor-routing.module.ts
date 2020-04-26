import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContributorsComponent } from 'src/app/views/registers/contributors/contributors.component';
import { ContributorsCreateComponent } from './formularios/contributors-create/contributors-create.component';
import { ContributorsUpdateComponent } from './formularios/contributors-update/contributors-update.component';
import { ContributorsReadComponent } from './formularios/contributors-read/contributors-read.component';


const contributorRoutes: Routes = [

 { path: '', redirectTo: 'cadastrar', pathMatch: 'full' },
 // {path: "reader", component: ContributorsReadComponent},
 // { path: "reader", component: ContributorsComponent },
 { path: 'cadastrar', component: ContributorsCreateComponent },
 { path: 'atualizar/:id', component: ContributorsUpdateComponent },
];

@NgModule({
 imports: [RouterModule.forChild(contributorRoutes)],
 exports: [RouterModule]
})
export class ProfissionalRoutingModule { }
