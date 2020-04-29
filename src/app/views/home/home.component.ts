import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/componentes/template/header/header.service';
import { PatternValidator } from '@angular/forms';


@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 constructor(private headerService: HeaderService) {
  headerService.headerData = {
   title: 'Infor Gerais',
   icon: 'home',
   routerUrl: '/home',
  };
 }

 // data: {
 //  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
 //  datasets: [{
 //   label: 'Fluxo de Atendimento.',
 //   data: [65, 59, 80, 81, 56, 55, 40],
 //   backgroundColor: ['blue', 'orange', 'yellow', 'gray', 'red', 'purple', 'red'],
 //  }
 //  ],
 // };
 // type: 'line';
 // options: {
 //  responsive: true,
 //  maintainAspectRatio: true
 // };

 type = 'line';
data = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
  datasets: [
    {
      label: 'Atendimentos',
      data: [27, 20, 78, 50, 48, 57, 89],
      borderColor: '#ff6384',
    }
  ]
};
options = {
  responsive: true,
  maintainAspectRatio: false
};

 ngOnInit(): void {
 }

}
