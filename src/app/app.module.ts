import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componentes/template/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './componentes/template/footer/footer.component';
import { NavComponent } from './componentes/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ContributorsComponent } from './views/registers/contributors/contributors.component';
import { BasePacienteComponent } from './views/registers/base-paciente/base.paciente.component';
import { FormsModule } from '@angular/forms';

import { ContributorModule } from './componentes/pessoas/profissionais/contributor.module';
import { MaterialModule } from './material/material.module';
import { PacienteModule } from './componentes/pessoas/pacientes/paciente.module';


@NgModule({
 declarations: [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  NavComponent,
  HomeComponent,
  ContributorsComponent,
  BasePacienteComponent,
  BasePacienteComponent,

 ],
 imports: [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
  ContributorModule,
  MaterialModule,
  PacienteModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
