import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ContributorsComponent } from './views/registers/contributors/contributors.component';
import { PatientComponent } from './views/registers/patient/patient.component';
import { FormsModule } from '@angular/forms'


import { ContributorModule } from './components/people/contributors/contributor.module';
import { CellMaskDirective } from './components/directives/cell-mask.directive';
import { MaterialModule } from './material/material.module';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		NavComponent,
		HomeComponent,
		ContributorsComponent,
		PatientComponent,
		// PatientCreateComponent,
		CellMaskDirective,
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
