import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'


import { ContribuitorRoutingModule } from './contribuitor-routing.module';
import { ContributorsCreateComponent } from '../contributors-create/contributors-create.component';
import { ContributorsDeleteComponent } from '../contributors-delete/contributors-delete.component';
import { ContributorsReadComponent } from '../contributors-read/contributors-read.component';
import { ContributorsUpdateComponent } from '../contributors-update/contributors-update.component';
import { ContributorsService } from '../services/contributors-service.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
	declarations: [
		ContributorsCreateComponent,
		ContributorsDeleteComponent,
		ContributorsReadComponent,
		ContributorsUpdateComponent,		
	],
	imports: [
		CommonModule,
		ContribuitorRoutingModule,

		FormsModule,
		HttpClientModule,
		MatToolbarModule,
		MatSidenavModule,
		MatCardModule,
		MatListModule,
		MatSnackBarModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
		MatTableModule,
		MatDialogModule
	],
	entryComponents: [
		ContributorsDeleteComponent
	],
	exports: [ContributorsReadComponent],
	providers: [ContributorsService]
})
export class ContributorModule { }
