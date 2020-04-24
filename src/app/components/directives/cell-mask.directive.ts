import { Directive, HostListener } from '@angular/core';
import {
	NG_VALUE_ACCESSOR, ControlValueAccessor
} from '@angular/forms'

@Directive({
  selector: '[cellMask]',
  providers: [{
	  provide: NG_VALUE_ACCESSOR,
	  useExisting: CellMaskDirective,
	  multi: true
  }]
})
export class CellMaskDirective implements ControlValueAccessor {
	
	@HostListener('keyuo', ['$event'])
	onKeyUo($event: any){}

	@HostListener('blur', ['$event'])
	onBlur($event: any){}

  constructor() { }

  
	writeValue(obj: any): void {
		throw new Error("Method not implemented.");
	}
	registerOnChange(fn: any): void {
		throw new Error("Method not implemented.");
	}
	registerOnTouched(fn: any): void {
		throw new Error("Method not implemented.");
	}
	setDisabledState?(isDisabled: boolean): void {
		throw new Error("Method not implemented.");
	}

}
