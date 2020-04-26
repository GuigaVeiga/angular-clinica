import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/componentes/template/header/header.service';

@Component({
 selector: 'app-contributors',
 templateUrl: './contributors.component.html',
 styleUrls: ['./contributors.component.css']
})
export class ContributorsComponent implements OnInit {

 constructor(
  private router: Router,
  private headerService: HeaderService
  ) {}

 ngOnInit(): void {
  this.headerService.headerData = {
   title: 'Profissionais',
   icon: 'list',
   routerUrl: '/cont',
  };
 }

 createNewProfessional(): void {
  this.router.navigate(['/cadastrar']);
 }

}
