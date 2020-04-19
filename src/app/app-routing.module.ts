import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ContributorsComponent } from './views/registers/contributors/contributors.component';
import { SocietyComponent } from './views/registers/society/society.component';
import { ContributorsCreateComponent } from './components/people/contributors/contributors-create/contributors-create.component';
import { ContributorsUpdateComponent } from './components/people/contributors/contributors-update/contributors-update.component';



const routes: Routes = [

	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: "home", component: HomeComponent },
	{ path: "cont", component: ContributorsComponent},
	// { path: "cont/:id", component: ContributorsComponent},
	{path: 'cont/create', component: ContributorsCreateComponent},
	{ path: "cont/update/:id", component: ContributorsUpdateComponent},
	{ path: "society", component: SocietyComponent },

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
