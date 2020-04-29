import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/componentes/template/header/header.service';


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

 data: {
  datasets: [{
      barPercentage: 0.5,
      barThickness: 'flex',
      maxBarThickness: 8,
      minBarLength: 2,
      data: [10, 20, 30],
      backgroundColor: ['purple', 'blue', 'orange']
  }],
  label: ['teste1', 'teste2', 'teste3'];
};

options: {} = {
 scales: {
     xAxes: [{
         gridLines: {
             offsetGridLines: true
         }
     }]
 }
};

 ngOnInit(): void {
 }

}
