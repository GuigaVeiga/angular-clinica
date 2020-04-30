import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RecuperarSenhaComponent } from '../recuperar-senha/recuperar-senha.component';

@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 email: string;
 senha: string;

 constructor(
  private authServer: AuthServiceService,
  private router: Router,
  private dialog: MatDialog) { }

 ngOnInit(): void {

 }
 recuperarSenha() {
  const dialogRef = this.dialog.open(RecuperarSenhaComponent, {
   width: '400px',
  });
 }

 logar() {
  this.authServer.fazerLogin(this.email, this.senha);
 }

}
