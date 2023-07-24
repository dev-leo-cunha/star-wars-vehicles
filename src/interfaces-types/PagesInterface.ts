export interface Address {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  cidade: string;
  bairro: string;
  estado: string;
}
export interface Card {
  numeroCartao: string;
  nomeCartao: string;
  validadeCartao: string;
  cvcCartao: string;
}
export interface Person {
  nome: string;
  email: string;
  telefone: string;
  cpf_cnpj: string;
}
export interface FormUserProps {
  onSubmit: () => void;
}
