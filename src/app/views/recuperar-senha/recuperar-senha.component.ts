import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
 selector: 'app-recuperar-senha',
 templateUrl: './recuperar-senha.component.html',
 styleUrls: ['./recuperar-senha.component.css']
})
export class RecuperarSenhaComponent implements OnInit, OnDestroy {

 email: string;

 constructor(
  public matDialogRef: MatDialogRef<RecuperarSenhaComponent>,
 ) { }

 ngOnInit(): void {
 }

 recuperarSenha() {
  this.matDialogRef.afterClosed().subscribe(val => {
   console.log(`Email ${this.email} Enviado para sua conta para recuperar senha`);
  });
 }

 ngOnDestroy() {
  this.matDialogRef.close(true);
 }

}
