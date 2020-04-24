import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms'

import { ContributorsService } from '../services/contributors-service.service'
import { Router } from '@angular/router';
import { Contributors } from '../models/contributors.model';

@Component({
	selector: 'app-contributors-create',
	templateUrl: './contributors-create.component.html',
	styleUrls: ['./contributors-create.component.css']
})
export class ContributorsCreateComponent implements OnInit {

	maskCell="(99)99999 9999";
	hide = true;

	dataAndress = {
		id: [null],
		zipcode: [null, [
			Validators.maxLength(9), 
			Validators.minLength(8)
			]
		],
		street: [null],
		numberHome: [null],
		complement: [null],
		cityBlock: [null],
		city: [null],
		state: [null],
	}

	dataUser = {
		userCode: [''],
		classRegistration: [''],
		cpf: ['', [Validators.required, 
			Validators.pattern('^[0-9]{10}$') ]],
		rg: [''],
		firstName: ['', [Validators.required]],
		lastName: [''],
		birth: ['', [Validators.required]],
		age: [null],
		gender: [''],
		email: ['', [Validators.required, Validators.email] ],
		contact: [''],
		cellPhone: ['', Validators.required],
		profession: ['', Validators.required],
		password: ['', Validators.required],
		login: ['',Validators.required],
		patient: [''],
		address: this.fb.group(this.dataAndress)
	}

	contForm: FormGroup
	debugForm: any
	errorsForm: any

	constructor(
		private fb: FormBuilder,
		private serviceCont: ContributorsService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.contForm = this.fb.group(this.dataUser)
	}

	ngOnDestroy() {
		this.contForm.removeControl
	}

	salvedContri(): void {
		this.serviceCont.create(this.contForm.value).subscribe((result) => {
			this.serviceCont.showSnack("Dados Salvos")
			// this.router.navigate(['/cont'])
			console.log(result)
			this.contForm.reset()
			this.contForm.clearValidators()
			// this.contForm.markAsDirty()
			// this.contForm.markAsPristine()
		

		}
		// (error: any) => alert('Error')
		
		)
	}

	onCancel() {
		this.router.navigate(['/cont'])
	}

	onSubmit(){
		console.log(this.contForm)
		this.debugForm = this.contForm.value;
		this.errorsForm = this.contForm.errors;
	
	}


	getErrorMessage(campo: string ,erroRequired: string, errorPattner?: string){

		const email = this.contForm.get(campo);

		if (email.hasError('required')) {
			return erroRequired;
		  }
	  
		  return email.hasError('email') ? errorPattner : '';
		
	}

}
