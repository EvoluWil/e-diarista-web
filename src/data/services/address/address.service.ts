import { AddressResponse } from '@models/address.model';
import { City } from '@models/city.model';
import { api } from '@services/api/api.service';

export const AddressService = {
  async getCities(state: string) {
    try {
      const { data } = await api.request<City[]>({
        baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/',
        url: `${state}/municipios`
      });
      return data.map(cidade => ({
        label: cidade.nome,
        value: cidade.id
      }));
    } catch (error) {
      throw error;
    }
  },

  async getAddressByCep(cep: string) {
    try {
      const { data } = await api.request<AddressResponse>({
        url: `api/enderecos?cep=${cep.replace(/\D/g, '')}`
      });
      return {
        address: data.logradouro,
        district: data.bairro,
        city: data.localidade,
        state: data.uf,
        zipCode: data.cep,
        code: Number(data.ibge),
        address2: data.complemento
      };
    } catch (error) {
      throw error;
    }
  }
};
