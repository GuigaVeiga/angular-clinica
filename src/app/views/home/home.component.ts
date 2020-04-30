import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/componentes/template/header/header.service';
import { ChartComponent } from 'angular2-chartjs'

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



type2 = 'bar';
data2 = {
    labels: ['Criança', 'Pre-Adolescente', 'Adolescente', 'Jovem', 'Adulto', 'Idoso'],
    datasets: [{
        label: 'Resultados',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};
options2 = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};


 ngOnInit(): void {

 }

}
