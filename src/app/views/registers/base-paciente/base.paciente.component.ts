import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/componentes/template/header/header.service';
import { Router } from '@angular/router';

@Component({
 selector: 'app-society',
 templateUrl: './base.paciente.component.html',
 styleUrls: ['./base.paciente.component.css']
})
export class BasePacienteComponent implements OnInit {

 constructor(
  private headerService: HeaderService,
  private router: Router) {
  headerService.headerData = {
   title: 'Pacientes',
   icon: 'perm_identity',
   routerUrl: '/infor-paciente',
  };
 }

 ngOnInit(): void {
 }

 cadastrarPaciente() {
  this.router.navigate(['/paciente/cadastrar']);
 }

}
