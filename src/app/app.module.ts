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
import { PatientCreateComponent } from './components/people/patients/patient-create/patient-create.component'

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
import { ContributorModule } from './components/people/contributors/contributor/contributor.module';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		NavComponent,
		HomeComponent,
		ContributorsComponent,
		PatientComponent,
		PatientCreateComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule,
		ContributorModule,
		
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
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
