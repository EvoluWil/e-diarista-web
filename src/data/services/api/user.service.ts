import { api } from './api.service';
import { UserInformation } from '@models/user-information.model';
import { FieldValues } from 'react-hook-form';

interface GetUsersByCepResponse {
  housekeepers: UserInformation[];
  count: number;
}

export const UserService = {
  async getUsers() {
    const { data } = await api.get<UserInformation[]>('/users');
    return data;
  },

  async getUsersByCep(cep: string) {
    const { data } = await api.get<GetUsersByCepResponse>(
      `/api/diaristas/localidades`,
      { params: { cep: cep.replace(/\D/g, '') } }
    );
    return data;
  },

  async getUser() {
    const { data } = await api.get<UserInformation>(`/users`);

    return data;
  },

  async createUser(newUser: FieldValues) {
    const { data } = await api.post<UserInformation>('/users', newUser);
    return data;
  },

  async updateUser(userId: string, updatedUser: FieldValues) {
    await api.put(`/users/${userId}`, updatedUser);
  },

  async deleteUser(userId: string) {
    await api.delete(`/users/${userId}`);
  }
};
