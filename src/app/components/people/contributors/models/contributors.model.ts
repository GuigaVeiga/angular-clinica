import { Patient } from './patient.model';

export interface Contributors {
	id?: number
	nome: string
	email: string
	contato: string
	endereco: string
	cep: string
	bairro: string
	cidade: string
	estado: string
	cpf: string
	profissao: string
	paciente?: Patient
}