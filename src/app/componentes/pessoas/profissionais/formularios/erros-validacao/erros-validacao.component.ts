import { Component, OnInit, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
 selector: 'app-erros-validacao',
 templateUrl: './erros-validacao.component.html',
 styleUrls: ['./erros-validacao.component.css']
})
export class ErrosValidacaoComponent implements OnInit {

 @Input() erros: ValidationErrors;

 constructor() { }

 ngOnInit(): void {}

}
