import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContributorsComponent } from 'src/app/views/registers/contributors/contributors.component';
import { ContributorsCreateComponent } from './contributors-create/contributors-create.component';
import { ContributorsUpdateComponent } from './contributors-update/contributors-update.component';
import { ContributorsReadComponent } from './contributors-read/contributors-read.component';





const contributorRoutes: Routes = [

	{path: "", redirectTo: "create", pathMatch: "full"},
	// {path: "reader", component: ContributorsReadComponent},
	// { path: "reader", component: ContributorsComponent },
	{path: 'create', component: ContributorsCreateComponent },
	{ path: "update/:id", component: ContributorsUpdateComponent },
	
];

@NgModule({
	imports: [RouterModule.forChild(contributorRoutes)],
	exports: [RouterModule]
})
export class ContribuitorRoutingModule { }
