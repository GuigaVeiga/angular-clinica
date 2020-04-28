import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';


@Component({
 selector: 'app-contributor-form',
 template: '<div></div>',

})
export abstract class CreateInterfaceFormComponent {

 dadosEndereco = {
  id: [null],
  cep: [null, [
   Validators.required,
   Validators.maxLength(9),
   Validators.minLength(8)
  ]
  ],
  rua: [null],
  numero: [null],
  complemento: [null],
  bairro: [null],
  cidade: [null],
  estado: [null],
 };

 dadosUsuario = {
  id: [''],
  codigoUsuario: [''],
  registroClasse: [''],
  cpf: ['',
   Validators.compose([Validators.required,
   Validators.maxLength(11)]),
  ],
  rg: ['', Validators.compose([
   Validators.required,
   Validators.minLength(4),
   Validators.maxLength(8),
  ])],
  nome: ['', Validators.compose([
   Validators.required,
   Validators.pattern('^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$'),
   Validators.minLength(3),
   Validators.maxLength(100)
  ])],
  sobreNome: [''],
  dataNascimento: ['', [Validators.required]],
  idade: [null, [Validators.minLength(1)]],
  genero: [''],
  email: ['', [Validators.required, Validators.email]],
  contato: [null],
  celular: ['', Validators.required],
  profissao: ['', Validators.required],
  senha: ['', Validators.required],
  repeteSenha: ['', Validators.required],
  login: [null],
  paciente: [null],
  endereco: this.fb.group(this.dadosEndereco)
 };

 myForm: FormGroup;
 debugForm: any;
 errorsForm: any;

 constructor(
  public fb: FormBuilder,
 ) {

 }

 abstract submit();

 onSubmit() {
  if (!this.myForm.invalid) {
   this.submit();
   this.debugForm = this.myForm.value;
   this.errorsForm = this.myForm.errors;
  } else {

   // console.log('Verificar o form');
   // this.verifyValidationForm(this.myForm);
   this.myForm.markAllAsTouched();
  }
 }

 reset() {
  this.myForm.reset();
 }

 verifyValidationForm(formGroup: FormGroup | FormArray) {
  Object.keys(formGroup.controls).forEach(field => {
   console.log(field);

   const control = formGroup.get(field);

   control.markAsDirty();
   control.markAsTouched();

   if (control instanceof FormGroup || control instanceof FormArray) {
    this.verifyValidationForm(control);
   }
  });
 }

 verifyValidTouched(field: string) {
  return (
   !this.myForm.get(field).valid &&
   (this.myForm.get(field).touched || this.myForm.get(field).dirty)
  );
 }

 verifyRequired(field: string) {
  return (
   this.myForm.get(field).hasError('required') &&
   (this.myForm.get(field).touched || this.myForm.get(field).dirty)
  );
 }

 errorMessage(field: string) {
  const myFiled = this.getCampo(field);
  console.log(myFiled.validator);
 }

 getCampo(campo: string) {
  return this.myForm.get(campo);
 }

}
