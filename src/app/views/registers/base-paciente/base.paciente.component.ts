import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/componentes/template/header/header.service';
import { Router } from '@angular/router';
import { DatagraphicService } from 'src/app/componentes/pessoas/pacientes/services/datagraphic.service';

@Component({
 selector: 'app-society',
 templateUrl: './base.paciente.component.html',
 styleUrls: ['./base.paciente.component.css']
})
export class BasePacienteComponent implements OnInit {

 constructor(
  private headerService: HeaderService,
  private router: Router,
  private servData: DatagraphicService) {
  headerService.headerData = {
   title: 'Pacientes',
   icon: 'perm_identity',
   routerUrl: '/paciente',
  };
 }


 options: {} = {};
 data: {} = {};
 type: string;

 dataSet2 = {
  datasets: [{
      data: [30, 20, 10],
      backgroundColor: ['purple', 'blue', 'orange']
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
      'Pacientes',
      'Profissionais',
      'Visitantes'
  ],
 
};

options2: {
 animateRotate: true,
}



 ngOnInit(): void {
  const data = this.servData.getDataLine();
  const data2 = this.servData.getPieData();
  this.type = data.type;
  this.data = data.data;
  this.options = data.options;

 }

 cadastrarPaciente() {
  this.router.navigate(['/paciente/cadastrar']);
 }




}
