import { Directive, HostListener } from '@angular/core';
import {
 NG_VALUE_ACCESSOR, ControlValueAccessor
} from '@angular/forms';

@Directive({
 selector: '[appCellMask]',
 providers: [{
  provide: NG_VALUE_ACCESSOR,
  useExisting: CellMaskDirective,
  multi: true
 }]
})
export class CellMaskDirective implements ControlValueAccessor {

 @HostListener('keyup', ['$event'])
 onKeyUp($event: any) { }

 @HostListener('blur', ['$event'])
 onBlur($event: any) { }

 constructor() { }


 writeValue(obj: any): void {
  console.log('Novo Valor', this.onKeyUp);
 }
 registerOnChange(fn: any): void {

  console.log('Novo Valor', this.onKeyUp);

 }
 registerOnTouched(fn: any): void {
  console.log('Novo Valor', this.onKeyUp);

 }
 setDisabledState?(isDisabled: boolean): void {
  console.log('Novo Valor', this.onKeyUp);
 }

}
