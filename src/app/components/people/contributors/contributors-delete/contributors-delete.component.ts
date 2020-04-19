import { Component, OnInit, Inject } from '@angular/core';
import { Contributors } from '../models/contributors.model';
import { ContributorsService } from '../services/contributors-service.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-contributors-delete',
	templateUrl: './contributors-delete.component.html',
	styleUrls: ['./contributors-delete.component.css']
})
export class ContributorsDeleteComponent implements OnInit {
	contributors: Contributors = {
		nome: "",
		email: "",
		contato: "",
		endereco: "",
		cep: "",
		bairro: "",
		cidade: "",
		estado: "",
		cpf: "",
		profissao: "",
		paciente: null,
	};
	id: string;

	constructor(
		private serviceCont: ContributorsService,
		public matDialogRef: MatDialogRef<ContributorsDeleteComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
	) {
		this.id = data.id
	}

	ngOnInit(): void {

		this.serviceCont.readById(this.id).subscribe(result => {
			this.contributors = result
		})

	}


	onClickDelete() {
		console.log(this.matDialogRef)

		this.matDialogRef.afterClosed().subscribe(val => {

			if (val) {
				this.serviceCont.delete(this.data.id).subscribe((del) => {
					console.log("Result: " +  del)
				});
				this.serviceCont.showSnack("Deletado com Sucesso!");
			}
		})
		this.serviceCont.refreshData();
	}
	
	onNoClick(): void {
		this.matDialogRef.close(true);
	}

	ngOnDestroy() {
		this.onNoClick();
	}

}
