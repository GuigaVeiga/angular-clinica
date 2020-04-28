import { Component, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
 title = 'system-basic';

 appMediaQuery: MediaQueryList;
 private appQueryListener: () => void;
 private mediaSub: Subscription;

 constructor(
  changeRef: ChangeDetectorRef,
  private mediaObserver: MediaObserver) {
 }
 ngOnInit(): void {
  this.mediaSub = this.mediaObserver.media$.subscribe(
   (change: MediaChange) => {
    console.log(change.mediaQuery);
   });

  // .asObservable().subscribe(
  //  change => {
  //   return console.log(change );
  //  });
 }

 ngOnDestroy(): void {
  this.mediaSub.unsubscribe();
 }

 ngOnAfterViewInit() {

 }
}
