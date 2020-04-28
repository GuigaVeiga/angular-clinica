import { Component, OnInit } from '@angular/core';
import { ContributorsService } from '../../services/contributors-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Contributors } from '../../models/contributors.model';
import { UpdateInterfaceFormComponent } from 'src/app/componentes/pessoas/profissionais/formularios/interfaceform/update.interface.form';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
 selector: 'app-contributors-update',
 templateUrl: './contributors-update.component.html',
 styleUrls: ['./contributors-update.component.css']
})
export class ContributorsUpdateComponent extends UpdateInterfaceFormComponent implements OnInit {

 contributors: Contributors;
 profSub: Subscription;
 id: any;

 constructor(
  public fb: FormBuilder,
  private serviceCont: ContributorsService,
  private router: ActivatedRoute,
  private routeNav: Router
 ) {
  super(fb, serviceCont);

  this.myForm = this.fb.group(this.dadosUsuario);
 }


 ngOnInit(): void {
  this.id = this.router.snapshot.paramMap.get('id');

  console.log(this.id);

  this.profSub = this.serviceCont.readById(this.id).subscribe(profissional => {
   // this.dadosUsuario = profissional;
   // this.myForm = this.fb.group(this.dadosUsuario);
   // this.myForm.setValue(profissional);
   this.myForm.patchValue(profissional);
  });
 }

 submit(): void {

  if (this.myForm.valid) {
   console.log('profissional ' + this.myForm.value);
   this.serviceCont.update(this.myForm.value).subscribe((vl) => {
    console.log(vl);
    this.serviceCont.showSnack('Dados Atualizado!');
    // navegar para pagina do profissional
    this.retornarPaginaPrincipal();
   });
  }
 }

 onCancel(): void {
  this.retornarPaginaPrincipal();
 }

 retornarPaginaPrincipal(): void {
  this.routeNav.navigate(['/infor-profissional']);
 }

}
