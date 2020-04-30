import { Endereco } from './endereco';
import { Pessoa } from './pessoa';

export class Paciente extends Pessoa {

 dataNascimento?: Date;
 idade?: number;
 genero?: string;
 profissao: string;
 senha?: string;
 login?: string;
 endereco?: Endereco[];
 
}
