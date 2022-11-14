import { ApiRoute } from '@models/api-route.model';
import { api } from './api.service';

export const ApiRoutesService = {
  async getRoutes() {
    const { data } = await api.get<{ links: ApiRoute[] }>('/api');
    return data.links;
  }
};
