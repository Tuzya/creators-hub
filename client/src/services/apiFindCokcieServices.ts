/* eslint-disable import/prefer-default-export */
import type { FindCockie } from '../types/findCockieTypes';
import { apiService } from './apiServiceConfig';

export const findCockieService = async (): Promise<FindCockie> => {
  const { data } = await apiService<FindCockie>('/');
  console.log('data', data);
  return data;
};
