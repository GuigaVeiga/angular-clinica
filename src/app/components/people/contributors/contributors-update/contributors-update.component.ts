import { Component, OnInit } from '@angular/core';
import { ContributorsService } from '../services/contributors-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Contributors } from '../models/contributors.model';

@Component({
	selector: 'app-contributors-update',
	templateUrl: './contributors-update.component.html',
	styleUrls: ['./contributors-update.component.css']
})
export class ContributorsUpdateComponent implements OnInit {

	contributors:  Contributors = {
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
		private router: ActivatedRoute,
		private routeNav: Router


	) { }

	ngOnInit(): void {
		const id = this.router.snapshot.paramMap.get('id');
		console.log("id - " + id )

		this.serviceCont.readById(id).subscribe(cont => {
			this.contributors = cont;
		})

	}

	updateContributors(): void {
		this.serviceCont.update(this.contributors).subscribe(() => {
			this.serviceCont.showSnack('Dados Atualizado!');
			this.onCancel();
		})
	}

	onCancel(): void {
		this.routeNav.navigate(['/cont']);
	}

}
