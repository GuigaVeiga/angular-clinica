import { Component, OnInit } from '@angular/core';
import { ContributorsService } from '../../services/contributors-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Contributors } from '../../models/contributors.model';
import { CreateInterfaceFormComponent } from 'src/app/componentes/pessoas/profissionais/formularios/interfaceform/create.interface.form';
import { FormBuilder } from '@angular/forms';

@Component({
 selector: 'app-contributors-update',
 templateUrl: './contributors-update.component.html',
 styleUrls: ['./contributors-update.component.css']
})
export class ContributorsUpdateComponent extends CreateInterfaceFormComponent implements OnInit {

 contributors: Contributors;

 constructor(
  public fb: FormBuilder,
  private serviceCont: ContributorsService,
  private router: ActivatedRoute,
  private routeNav: Router
 ) {
  super(fb);
 }

 ngOnInit(): void {
  const id = this.router.snapshot.paramMap.get('id');
  console.log('id - ' + id);

  this.serviceCont.readById(id).subscribe(cont => {
   this.contributors = cont;
  });
 }

 submit() {
  this.updateContributors();
  }

 updateContributors(): void {
  this.serviceCont.update(this.contributors).subscribe(() => {
   this.serviceCont.showSnack('Dados Atualizado!');
   this.onCancel();
  });
 }

 onCancel(): void {
  this.routeNav.navigate(['/infor-profissional']);
 }


 get email() { return this.myForm.get('email'); }
 get nome() { return this.getCampo('nome'); }
 get sobreNome() { return this.getCampo('sobreNome'); }
 get cpf() { return this.getCampo('cpf'); }
 get rg() { return this.getCampo('rg'); }
 get dataNascimento() { return this.getCampo('dataMascimento'); }


}
