import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {

  constructor(private headerService: HeaderService) {
	headerService.headerData = {
		title: 'Pacientes',
		icon: 'perm_identity',
		routerUrl: '/society',
	}
   }

  ngOnInit(): void {
  }

}
