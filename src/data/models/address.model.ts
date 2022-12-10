export interface Address {
  number: string;
  address: string;
  district: string;
  city: string;
  state: string;
  zipCode: string;
  code: string;
  address2: string;
}

export interface AddressResponse {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  cep: string;
  ibge: string;
  complemento: string;
}
