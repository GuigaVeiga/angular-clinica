import { Injectable } from '@angular/core';
// import dataJson from '../../../../../../backend/db.json';

@Injectable({
 providedIn: 'root'
})
export class DatagraphicService {
 users: {}[] = [];
 colab: {}[] = [];

 constructor() { }

 getPieData() {
  // this.users = dataJson.usuarios;
  // this.colab = dataJson.colaboradores;

  return {
   datasets: [{
    // data: [this.colab.length, this.users.length, 10]
    data: [12, 120, 10]
   }],

   // These labels appear in the legend and in the tooltips when hovering different arcs
   labels: [
    'Profissional',
    'Pacientes',
    'Visitantes'
   ]
  };

 }

 getDataLine() {
  return {
   data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
    datasets: [{
     label: 'Fluxo de Atendimento.',
     data: [65, 59, 80, 81, 56, 55, 40],
     backgroundColor: ['blue', 'orange', 'yellow', 'gray', 'red', 'purple', 'red'],
    }
    ],
   },
   type: 'line',
   options: {
    responsive: true,
    maintainAspectRatio: false
   }
  };
 }

}
