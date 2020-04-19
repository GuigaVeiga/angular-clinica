import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';

import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './views/home/home.component';
import { ContributorsComponent } from './views/registers/contributors/contributors.component';
import { SocietyComponent } from './views/registers/society/society.component';
import { ContributorsCreateComponent } from './components/people/contributors/contributors-create/contributors-create.component';
import { FormsModule } from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import { ContributorsReadComponent } from './components/people/contributors/contributors-read/contributors-read.component';
import { DataTableComponent } from './views/data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ContributorsUpdateComponent } from './components/people/contributors/contributors-update/contributors-update.component';
import { ContributorsDeleteComponent } from './components/people/contributors/contributors-delete/contributors-delete.component'
import { MatDialogModule } from '@angular/material/dialog'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ContributorsComponent,
    SocietyComponent,
    ContributorsCreateComponent,
    ContributorsReadComponent,
    DataTableComponent,
    ContributorsUpdateComponent,
    ContributorsDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	BrowserAnimationsModule,
	MatToolbarModule,
	MatListModule,
	MatSidenavModule,
	MatCardModule,
	MatSnackBarModule,
	MatButtonModule,
	HttpClientModule,
	FormsModule, 
	MatInputModule,
	MatFormFieldModule,
	MatTableModule,
	MatPaginatorModule,
	MatSortModule,
	MatDialogModule
  ],
  entryComponents: [
	  ContributorsDeleteComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
