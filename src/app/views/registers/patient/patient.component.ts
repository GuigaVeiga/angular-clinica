import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-society',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

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
