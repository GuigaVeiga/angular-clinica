import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css']
})
export class ContributorsComponent implements OnInit {

  constructor(private router: Router,
	private headerService: HeaderService) {
		headerService.headerData = {
			title: 'Profissionais',
			icon: 'list',
			routerUrl: '/cont',
		}
	 }

  ngOnInit(): void {
  }

  createNewProfessional(): void{

	  this.router.navigate(['/cont/create'])

  }

}
