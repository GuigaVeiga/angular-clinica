import { Endereco } from './endereco';
import { Pessoa } from './pessoa';

export interface Paciente implements Pessoa {

 dataNascimento?: Date;
 idade?: number;
 genero?: string;
 celular?: number;
 profissao: string;
 senha?: string;
 login?: string;
 endereco?: Endereco[];
 
}
