import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup, FormControl } from '@angular/forms'

import { ContributorsService } from '../services/contributors-service.service'
import { Router } from '@angular/router';
import { Contributors } from '../models/contributors.model';
import { ContributorformComponent } from '../../../shared/baseforms/contributorform/contributorform.component'

@Component({
	selector: 'app-contributors-create',
	templateUrl: './contributors-create.component.html',
	styleUrls: ['./contributors-create.component.css']
})
export class ContributorsCreateComponent extends ContributorformComponent implements OnInit {

	maskCell = "(99)99999 9999";
	hide = true;
	myControl = new FormControl();

	constructor(
		public fb: FormBuilder,
		private serviceCont: ContributorsService,
		private router: Router
	) {
		super(fb)
	}

	ngOnInit(): void {
		this.myForm = this.fb.group(this.dataUser)
	}

	ngOnDestroy() {
		this.myForm.removeControl
	}

	submit(): void {

		if (this.myForm.valid) {

			this.serviceCont.create(this.myForm.value).subscribe((result) => {
				this.serviceCont.showSnack("Dados Salvos")
				// this.router.navigate(['/cont'])
				console.log(result)
				this.myForm.reset()
				this.myForm.clearValidators()
				// this.contForm.markAsDirty()
				// this.contForm.markAsPristine()

			})
		}else {
			this.myForm.markAllAsTouched()
		//  Object.keys(this.myForm.controls).forEach(element => {
		// 	 const control = this.myForm.get(element)
			 
		// 	 console.log()
		// 	});
		}
	}

	get email() { return this.myForm.get('email'); }
	get firstName() { return this.myForm.get('firstName'); }
	get lastName() { return this.myForm.get('lastName'); }
	get cpf() { return this.myForm.get('cpf'); }
	get rg() { return this.myForm.get('rg'); }
	get birth() { return this.myForm.get('birth'); }

	salvedContri(): void {

	}

	onCancel() {
		this.router.navigate(['/cont'])
	}

}
