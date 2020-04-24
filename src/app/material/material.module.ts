import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import {MatRadioModule } from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';


const MaterialModels = [
	MatToolbarModule,
	MatSidenavModule,
	MatCardModule,
	MatListModule,
	MatSnackBarModule,
	MatButtonModule,
	MatInputModule,
	MatFormFieldModule,
	MatTableModule,
	MatDialogModule,
	MatGridListModule,
	MatRadioModule,	
	FlexLayoutModule,
	MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
	CommonModule,
	// MaterialModule,
	
  ],
  exports: [
	  MaterialModels
  ]
})
export class MaterialModule { }
