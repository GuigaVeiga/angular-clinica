import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms'


@Component({
	selector: 'contributorform',
	template: '<div></div>',

})
export abstract class ContributorformComponent {


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
		Validators.maxLength(11)]],
		rg: ['', Validators.compose([
			Validators.minLength(4),
			Validators.maxLength(8)
		])],
		firstName: ['', Validators.compose([
			Validators.required,
			Validators.minLength(3),
			Validators.maxLength(100)
		])],
		lastName: [''],
		birth: ['', [Validators.required]],
		age: [null],
		gender: [''],
		email: ['', [Validators.required, Validators.email]],
		contact: [null],
		cellPhone: ['', Validators.required],
		profession: ['', Validators.required],
		password: ['', Validators.required],
		login: [null],
		patient: [null],
		address: this.fb.group(this.dataAndress)
	}

	myForm: FormGroup
	debugForm: any
	errorsForm: any
	appearanceField = 'fill'

	constructor(
		public fb: FormBuilder,
	) {

	}

	abstract submit()

	onSubmit() {
		if (!this.myForm.invalid) {
			this.submit();
			
			console.log("Submited")
			console.log(this.myForm)
			this.debugForm = this.myForm.value;
			this.errorsForm = this.myForm.errors;
		}else {
			console.log("Verificar o form");
			this.verifyValidationForm(this.myForm);
		}
	}

	reset() {
		this.myForm.reset();
	}

	verifyValidationForm(formGroup: FormGroup | FormArray){
		Object.keys(formGroup.controls).forEach(field => {
			console.log(field);

			const control = formGroup.get(field);
			
			control.markAsDirty();
			control.markAsTouched();

			if(control instanceof FormGroup || control instanceof FormArray){
				this.verifyValidationForm(control)
				
			}
		});
	}

	verifyValidTouched(field: string) {
		return (
			!this.myForm.get(field).valid &&
			(this.myForm.get(field).touched || this.myForm.get(field).dirty)
		)
	}

	verifyRequired(field: string){
		return (
			this.myForm.get(field).hasError('required') &&
			(this.myForm.get(field).touched || this.myForm.get(field).dirty) 
		);
	}

	verifyMaxAndMinLength(filed: string){


	}



	getErrorMessage(campo: string, erroRequired: string, errorPattner?: string) {

		// console.log("Válido? - "+ campo + this.verifyRequired(campo))
		// console.log("Campo tocado? " + campo + this.verifyValidTouched(campo))

		const isCampo = this.getCampo(campo)
		// isCampo.hasError('required')
		if (this.verifyRequired(campo) ) {
			return erroRequired;
		}

		return isCampo.hasError(campo) ? errorPattner : '';
	}

	errorMessage(field: string){
		const myFiled = this.getCampo(field)

		console.log(myFiled.validator)
		
	}

	getCampo(campo: string) {
		return this.myForm.get(campo)
	}



}
