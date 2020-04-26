import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header.data.model';

@Injectable({
 providedIn: 'root'
})
export class HeaderService {

 private HEADER_DATA = new BehaviorSubject<HeaderData>({
  title: 'Início',
  icon: 'home',
  routerUrl: ''
 });

 constructor() { }


 get headerData(): HeaderData {
  return this.HEADER_DATA.value;
 }

 set headerData(headerData: HeaderData) {
  this.HEADER_DATA.next(headerData);
 }

}
