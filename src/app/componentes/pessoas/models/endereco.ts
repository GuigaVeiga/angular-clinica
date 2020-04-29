
export interface Endereco {
 id?: number;
 cep: number;
 rua: string;
 numero: number;
 complemento?: string;
 bairro: string;
 cidade: string;
 estado: string;
}