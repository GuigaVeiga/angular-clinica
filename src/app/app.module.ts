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
import { PatientComponent } from './views/registers/patient/patient.component';
import { FormsModule } from '@angular/forms';

import { ContributorModule } from './componentes/pessoas/profissionais/contributor.module';
import { MaterialModule } from './material/material.module';
import { PacientesComponent } from './componentes/pessoas/pacientes/pacientes.component';

@NgModule({
 declarations: [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  NavComponent,
  HomeComponent,
  ContributorsComponent,
  PatientComponent,
  PacientesComponent,
  // PatientCreateComponent,

 ],
 imports: [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
  ContributorModule,
  MaterialModule,
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
