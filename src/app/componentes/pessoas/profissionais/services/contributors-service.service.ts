import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Contributors } from '../models/contributors.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
 providedIn: 'root'
})
export class ContributorsService {
 baseUrl = 'http://localhost:3002/colaboradores';

 constructor(
  private snackBar: MatSnackBar,
  private http: HttpClient
 ) { }

 showSnack(msg: string, isError: boolean = false) {
  console.log(msg);
  this.snackBar.open(msg, 'x', {
   horizontalPosition: 'right',
   duration: 3000,
   verticalPosition: 'top',
   panelClass: isError ? ['msg-error'] : ['msg-success']
  });
 }

 create(contributors: Contributors): Observable<Contributors> {

  return this.http.post<Contributors>(this.baseUrl, contributors)
   .pipe(
    map(obj => obj),
    catchError(e => this.errorHandle(e))
   );
 }


 read(): Observable<Contributors[]> {
  return this.http.get<Contributors[]>(this.baseUrl);
 }


 readById(id: string): Observable<Contributors> {

  const url = `${this.baseUrl}/${id}`;

  return this.http.get<Contributors>(url);
 }


 update(cont: Contributors): Observable<Contributors> {

  const url = `${this.baseUrl}/${cont.id}`;

  return this.http.patch<Contributors>(url, cont);
 }


 delete(id: string): Observable<Contributors> {
  const url = `${this.baseUrl}/${id}`;

  return this.http.delete<Contributors>(url);
 }


 errorHandle(e: any): Observable<any> {
  this.showSnack('Ocorreu um Erro', true);
  return EMPTY;
 }


 refreshData(): void {
  this.read();
 }


}
