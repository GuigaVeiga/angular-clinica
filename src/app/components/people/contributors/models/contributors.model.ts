import { Patient } from './patient.model';
import { Andress } from '../../model-andress';

export interface Contributors {
	id?: number
	userCode?: number
	classRegistration?: number
	cpf?: string
	rg?: string
	firstName?: string
	lastName?: string
	nome?: string
	birth?: Date
	age?: number
	gender?: string
	email?: string
	contact?: number
	cellPhone?: number
	contato?: string
	profession?: string
	profissao: string
	patient?: Patient[]
	paciente?: Patient
	password?: string
	login?: string

	Andress?: Andress

	endereco?: string
	cep?: string
	rua?: string
	bairro?: string
	cidade?: string
	estado?: string

}
