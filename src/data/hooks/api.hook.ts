import { api } from '@services/api/api.service';
import { AxiosError, AxiosRequestConfig } from 'axios';
import useSwr from 'swr';

export const useApi = <DataType>(
  endPoint: string | null,
  config?: AxiosRequestConfig
): DataType => {
  const { data, error } = useSwr(endPoint, async url => {
    const { data } = await api(url, config);
    return data;
  });
  return data;
};
