import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contributors } from '../../models/contributors.model';
import { ContributorsService } from '../../services/contributors-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ContributorsDeleteComponent } from '../contributors-delete/contributors-delete.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscribable, Observable, Subscription } from 'rxjs';


@Component({
 selector: 'app-contributors-read',
 templateUrl: './contributors-read.component.html',
 styleUrls: ['./contributors-read.component.css']
})
export class ContributorsReadComponent implements OnInit, OnDestroy {

 contributors: Contributors[];

 subs: Subscription;
 displayedColumns = ['id', 'nome', 'profissao', 'email', 'contato', 'action'];

 constructor(
  private serviceCont: ContributorsService,
  public dialog: MatDialog,
  private router: Router,
 ) { }

 ngOnInit(): void {
  // Iniciar a tabela com os dados.

  this.subs = this.serviceCont.read().subscribe((cont) => {
   console.log('teste' + JSON.stringify(cont));
   this.contributors = cont;
  });
 }

 // Abrirá um component modal para confirmar o deletar 
 onDelete(id: number) {
  const dialogRef = this.dialog.open(ContributorsDeleteComponent, {
   width: '300px',
   data: { id }
  });
  // após exlusão, dá um tipo refresh na rota, para atualizar a tela.

 }
 ngOnDestroy() {
  this.subs.unsubscribe();
 }
}
