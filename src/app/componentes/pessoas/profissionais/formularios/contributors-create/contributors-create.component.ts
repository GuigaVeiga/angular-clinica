import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup, FormControl } from '@angular/forms';

import { ContributorsService } from '../../services/contributors-service.service';
import { Router } from '@angular/router';
import { Contributors } from '../../models/contributors.model';
import { CreateInterfaceFormComponent } from '../interfaceform/create.interface.form';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
 selector: 'app-contributors-create',
 templateUrl: './contributors-create.component.html',
 styleUrls: ['./contributors-create.component.css']
})
export class ContributorsCreateComponent extends CreateInterfaceFormComponent implements OnInit, OnDestroy {

 hide = true;
 inscricaoServ: Subscription;

 constructor(
  public fb: FormBuilder,
  private serviceCont: ContributorsService,
  private router: Router
 ) {
  super(fb);
 }

 ngOnInit(): void {
  this.myForm = this.fb.group(this.dadosUsuario);
  console.log(this.email);
 }

 submit(): void {

  if (this.myForm.valid) {

   this.inscricaoServ = this.serviceCont.create(this.myForm.value)
    .subscribe((result) => {
     map(res => console.log(res)),
      this.serviceCont.showSnack('Dados Salvos');
     this.router.navigate(['/cont']);
     this.myForm.reset();
     this.myForm.clearValidators();
    });
  } else {

   this.myForm.markAllAsTouched();

   this.serviceCont.showSnack('Verifique os Campos obrigatórios!', true);
   //  Object.keys(this.myForm.controls).forEach(element => {
   // 	 const control = this.myForm.get(element)
   // 	 console.log()
   // 	});
  }
 }

 ngOnDestroy() {
  this.myForm.reset();

  if ( this.inscricaoServ ) {
   this.inscricaoServ.unsubscribe();
  }
 }

 get email() { return this.myForm.get('email'); }
 get nome() { return this.getCampo('nome'); }
 get sobreNome() { return this.getCampo('sobreNome'); }
 get cpf() { return this.getCampo('cpf'); }
 get rg() { return this.getCampo('rg'); }
 get dataNascimento() { return this.getCampo('dataMascimento'); }
 get registroClasse() { return this.getCampo('registroClasse'); }
 get genero() { return this.getCampo('genero'); }
 get contato() { return this.getCampo('contato'); }
 get profissao() { return this.getCampo('profissao'); }
 get login() { return this.getCampo('login'); }
 get repeteSenha() { return this.getCampo('repeteSenha'); }
 get senha() { return this.getCampo('senha'); }
 get celular() { return this.getCampo('celular'); }
 get idade() { return this.getCampo('idade'); }
 get cep() { return this.getCampo('cep'); }

 onCancel() {
  this.router.navigate(['/infor-profissional']);
 }

}
