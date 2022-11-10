import { api } from './api.service';
import { FieldValues } from 'react-hook-form';
import { User } from '@models/user.model';

interface GetUsersByCepResponse {
  housekeepers: User[];
  count: number;
}

class UserServiceClass {
  async getUsers() {
    const { data } = await api.get<User[]>('/users');
    return data;
  }

  async getUsersByCep(cep: string) {
    const { data } = await api.get<GetUsersByCepResponse>(
      `/api/diaristas/localidades`,
      { params: { cep: cep.replace(/\D/g, '') } }
    );
    return data;
  }

  async getUser() {
    const { data } = await api.get<User>(`/users`);

    return data;
  }

  async createUser(newUser: FieldValues) {
    const { data } = await api.post<User>('/users', newUser);
    return data;
  }

  async updateUser(userId: string, updatedUser: FieldValues) {
    await api.put(`/users/${userId}`, updatedUser);
  }

  async deleteUser(userId: string) {
    await api.delete(`/users/${userId}`);
  }
}

export const UserService = new UserServiceClass();
