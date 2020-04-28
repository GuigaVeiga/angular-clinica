import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { ContributorsService } from '../../services/contributors-service.service';

@Component({
 selector: 'app-paciente-form',
 template: '<div></div>',
})
// tslint:disable-next-line: component-class-suffix
export abstract class UpdateInterfaceFormComponent {

 myForm: FormGroup;
 debugForm: any;
 errorsForm: any;

 constructor(
  public fb: FormBuilder,
  private serviceProf: ContributorsService
 ) { }

 abstract submit();

 onSubmit() {
  if (!this.myForm.invalid) {
   this.submit();
  } else {
   console.log('Verificar o form');
   // this.verifyValidationForm(this.myForm);
   this.myForm.markAllAsTouched();
   this.serviceProf.showSnack('Verifique os Campos obrigatórios!', true);


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

 getCampo(campo: string) {
  return this.myForm.get(campo);
 }

 // tslint:disable-next-line: member-ordering
 dadosEndereco = {
  id: [''],
  cep: ['', [
   Validators.required,
   Validators.maxLength(9),
   Validators.minLength(8)
  ]
  ],
  rua: [''],
  numero: [''],
  complemento: [''],
  bairro: [''],
  cidade: [''],
  estado: [''],
 };

 // tslint:disable-next-line: member-ordering
 dadosUsuario = {
  id: [''],
  codigoUsuario: [''],
  registroClasse: [''],
  cpf: ['', Validators.compose([Validators.required,
  Validators.maxLength(11), Validators.minLength(11)]),
  ],
  rg: ['', Validators.compose([
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
  idade: ['', [Validators.minLength(1)]],
  genero: [''],
  email: ['', [Validators.required, Validators.email]],
  contato: [''],
  celular: ['', Validators.required],
  profissao: ['', Validators.required],
  senha: ['', Validators.required],
  login: [''],
  paciente: [null],
  endereco: this.fb.group(this.dadosEndereco)
 };

 get email(): any { return this.myForm.get('email'); }
 get nome(): any { return this.getCampo('nome'); }
 get sobreNome(): any { return this.getCampo('sobreNome'); }
 get cpf(): any { return this.getCampo('cpf'); }
 get rg(): any { return this.getCampo('rg'); }
 get dataNascimento(): any { return this.getCampo('dataMascimento'); }
 get registroClasse(): any { return this.getCampo('registroClasse'); }
 get genero(): any { return this.getCampo('genero'); }
 get contato(): any { return this.getCampo('contato'); }
 get profissao(): any { return this.getCampo('profissao'); }
 get login(): any { return this.getCampo('login'); }
 get repeteSenha(): any { return this.getCampo('repeteSenha'); }
 get senha(): any { return this.getCampo('senha'); }
 get celular(): any { return this.getCampo('celular'); }
 get idade(): any { return this.getCampo('idade'); }
 get cep(): any { return this.getCampo('cep'); }


}
