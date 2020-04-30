import { Component, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { AuthServiceService } from './views/login/auth-service.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
 title = 'Clínica Sentidos';

 appMediaQuery: MediaQueryList;
 private appQueryListener: () => void;
 private mediaSub: Subscription;

 isAutenticate = false;

 constructor(
  changeRef: ChangeDetectorRef,
  private mediaObserver: MediaObserver,
  private authServer: AuthServiceService) {
 }
 ngOnInit(): void {
  // this.mediaSub = this.mediaObserver.media$.subscribe(
  //  (change: MediaChange) => {
  //   console.log(change.mediaQuery);
  //  });

  this.authServer.mostrarNavBar.subscribe(
   (valor: boolean) => this.isAutenticate = valor
   );

 }

 ngOnDestroy(): void {
  // this.mediaSub.unsubscribe();
 }

 ngOnAfterViewInit() {

 }
}
