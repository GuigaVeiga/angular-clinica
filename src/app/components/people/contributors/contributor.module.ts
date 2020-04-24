import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { ContribuitorRoutingModule } from './contribuitor-routing.module';
import { ContributorsCreateComponent } from './contributors-create/contributors-create.component';
import { ContributorsDeleteComponent } from './contributors-delete/contributors-delete.component';
import { ContributorsReadComponent } from './contributors-read/contributors-read.component';
import { ContributorsUpdateComponent } from './contributors-update/contributors-update.component';
import { ContributorsService } from './services/contributors-service.service';

import { NgxMaskModule, IConfig } from 'ngx-mask'
import { MaterialModule } from 'src/app/material/material.module';

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
		ReactiveFormsModule,
		
		NgxMaskModule,
		MaterialModule

	],
	entryComponents: [
		ContributorsDeleteComponent
	],
	exports: [ContributorsReadComponent],
	providers: [ContributorsService]
})

export class ContributorModule { }
