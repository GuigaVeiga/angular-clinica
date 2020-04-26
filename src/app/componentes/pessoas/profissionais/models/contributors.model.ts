import { Patient } from './patient.model';
import { Andress } from '../../../shared/model-andress';

export interface Contributors {
 id?: number;
 codigoUsuario?: number;
 registroClasse?: number;
 cpf?: string;
 rg?: string;
 nome?: string;
 sobreNome?: string;
 dataNascimento?: Date;
 idade?: number;
 genero?: string;
 email?: string;
 contato?: number;
 celular?: number;
 profissao: string;
 paciente?: Patient[];
 senha?: string;
 login?: string;

 endereco?: Andress;
}
