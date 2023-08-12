// companyThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import type {
  CompanyLoginFormType,
  CompanyModelType,
  CompanySignUpFormType,
} from '../../../types/companyTypes';
import {
  checkCompanyService,
  companyLoginService,
  companyLogoutService,
  companySignUpService,
} from '../../../services/apiCompanyService';

export const checkCompanyThunk = createAsyncThunk<CompanyModelType>(
  'company/checkCompany',
  async () => checkCompanyService().then((data) => data),
);

export const signUpCompanyThunk = createAsyncThunk<CompanyModelType, CompanySignUpFormType>(
  'company/signup',
  async (formData) => companySignUpService(formData).then((data) => data),
);

export const loginCompanyThunk = createAsyncThunk<CompanyModelType, CompanyLoginFormType>(
  'company/login',
  async (formData) => companyLoginService(formData).then((data) => data),
);

export const logoutCompanyThunk = createAsyncThunk('company/logout', async () =>
  companyLogoutService(),
);
