import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Profissional } from 'src/app/componentes/pessoas/models/profissional';
import { ContributorsService } from 'src/app/componentes/pessoas/profissionais/services/contributors-service.service';

@Injectable({
 providedIn: 'root'
})
export class AuthServiceService {

 private usuarioAutenticado = false;

 mostrarNavBar = new EventEmitter<boolean>();

 constructor(
  private router: Router) { }

 fazerLogin(email: string, senha: string) {

  if (
   email === 'admin' &&
   senha === '123'
  ) {
   this.usuarioAutenticado = true;
   this.mostrarNavBar.emit(true);
   this.router.navigate(['/']);
  }
 }

 usuarioEstaAutenticado() {
  return this.usuarioAutenticado;
 }

}
