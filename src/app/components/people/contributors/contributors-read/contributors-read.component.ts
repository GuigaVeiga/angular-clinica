import { Component, OnInit } from '@angular/core';
import { Contributors } from '../models/contributors.model';
import { ContributorsService } from '../services/contributors-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ContributorsDeleteComponent } from '../contributors-delete/contributors-delete.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
	selector: 'app-contributors-read',
	templateUrl: './contributors-read.component.html',
	styleUrls: ['./contributors-read.component.css']
})
export class ContributorsReadComponent implements OnInit {

	contributors: Contributors[];
	displayedColumns = ['id', 'nome', 'profissao', 'email', 'contato', 'action']

	constructor(
		private serviceCont: ContributorsService,
		public dialog: MatDialog,
		private router: Router,
	) { }

	ngOnInit(): void {
		// Iniciar a tabela com os dados
		this.serviceCont.read().subscribe((cont) => {
			this.contributors = cont;
		})
	}

	// Abrirá um component modal para confirmar o deletar 
	onDelete(id) {
		console.log( typeof(id) )
		const dialogRef = this.dialog.open(ContributorsDeleteComponent, {
			width: '300px',
			data: { id }
		});
		// após exlusão, dá um tipo refresh na rota, para atualizar a tela.
		
		
	}

	ngOnDestroy() {
		
	}


	// ngAfterViewInit(){
	// 	console.log( "ngAfterViewInit()" )
	// }

	// ngAfterViewChecked(){
	// 	console.log("ngAfterViewChecked()")
	// }



}
