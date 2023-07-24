export type typeUrlVehicles = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: [];
  films: [];
  created: string;
  edited: string;
  url: string;
};
export type typePersonUser = {
  nome: string;
  email: string;
  telefone: string;
  cpf_cnpj: string;
};
export type typeAddress = {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  cidade: string;
  bairro: string;
  estado: string;
};

export type typeCard = {
  numeroCartao: string;
  nomeCartao: string;
  validadeCartao: string;
  cvcCartao: string;
};
