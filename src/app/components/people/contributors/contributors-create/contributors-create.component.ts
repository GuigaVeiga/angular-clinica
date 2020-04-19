import { Component, OnInit } from '@angular/core';
import { ContributorsService } from '../services/contributors-service.service'
import { Router } from '@angular/router';
import { Contributors } from '../models/contributors.model';

@Component({
	selector: 'app-contributors-create',
	templateUrl: './contributors-create.component.html',
	styleUrls: ['./contributors-create.component.css']
})
export class ContributorsCreateComponent implements OnInit {

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

	constructor(
		private serviceCont: ContributorsService,
		private router: Router
	) { }

	ngOnInit(): void {
	}

	salvedContri(): void {
		this.serviceCont.create(this.contributors).subscribe(() => {

			this.serviceCont.showSnack("Dados Salvos")
			this.router.navigate(['/cont'])

		})



	}

	onCancel() {
		this.router.navigate(['/cont'])
	}

}
