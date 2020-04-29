import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-paciente',
  templateUrl: './criar-paciente.component.html',
  styleUrls: ['./criar-paciente.component.css']
})
export class CriarPacienteComponent implements OnInit {

  constructor(
   private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onCancel() {
   this.router.navigate(['paciente']);
  }

}
