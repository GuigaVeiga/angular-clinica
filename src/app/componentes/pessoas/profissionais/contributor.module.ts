import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ProfissionalRoutingModule } from './contribuitor-routing.module';
import { ContributorsCreateComponent } from './formularios/contributors-create/contributors-create.component';
import { ContributorsDeleteComponent } from './formularios/contributors-delete/contributors-delete.component';
import { ContributorsReadComponent } from './formularios/contributors-read/contributors-read.component';
import { ContributorsUpdateComponent } from './formularios/contributors-update/contributors-update.component';
import { ContributorsService } from './services/contributors-service.service';

import { NgxMaskModule, IConfig } from 'ngx-mask'
import { MaterialModule } from 'src/app/material/material.module';
import { ErrosValidacaoComponent } from './formularios/erros-validacao/erros-validacao.component';


@NgModule({
 declarations: [
  ContributorsCreateComponent,
  ContributorsDeleteComponent,
  ContributorsReadComponent,
  ContributorsUpdateComponent,
  ErrosValidacaoComponent,
 ],
 imports: [
  CommonModule,
  ProfissionalRoutingModule,
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
