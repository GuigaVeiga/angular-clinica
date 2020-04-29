import { Pessoa } from './pessoa';
import { Paciente } from './Paciente';
import { Endereco } from './endereco';

export class Profissional extends Pessoa {

 id?: number;
 codigoUsuario?: number;
 registroClasse?: number;
 dataNascimento?: Date;
 idade?: number;
 genero?: string;
 profissao: string;
 paciente?: Paciente[];
 senha: string;
 login: string;
 endereco?: Endereco[];

}
