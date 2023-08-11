// apiCompanyService.ts
import type { AxiosResponse } from 'axios';
import { apiService } from './apiServiceConfig';
import type {
  CompanyLoginFormType,
  CompanyModelType,
  CompanySignUpFormType,
} from '../types/companyTypes';

export const checkCompanyService = async (): Promise<CompanyModelType> => {
  const { data } = await apiService<CompanyModelType>('/company/check');
  return data;
};

export const companySignUpService = async (
  inputs: CompanySignUpFormType,
): Promise<CompanyModelType> => {
  const { data } = await apiService.post<CompanyModelType>('/company/signup', inputs);
  return data;
};

export const companyLoginService = async (
  inputs: CompanyLoginFormType,
): Promise<CompanyModelType> => {
  const { data } = await apiService.post<CompanyModelType>('/company/login', inputs);
  return data;
};

export const companyLogoutService = async (): Promise<AxiosResponse<any, any>> =>
  apiService('/company/logout');
