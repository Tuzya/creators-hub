import { createSlice } from '@reduxjs/toolkit';
import type { CompanyType } from '../../../types/companyTypes';
import {
  checkCompanyThunk,
  loginCompanyThunk,
  logoutCompanyThunk,
  putCourseToUserFromCompanyThunk,
  signUpCompanyThunk,
} from './companyThunks';

type CompanySliceType = CompanyType;

const initialState: CompanySliceType = {
  status: 'loading',
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkCompanyThunk.fulfilled, (state, { payload }) => ({
      ...payload,
      status: 'logged',
      whoAuth: 'Company',
    }));
    builder.addCase(checkCompanyThunk.pending, (state) => ({
      status: 'loading',
      whoAuth: 'Company',
    }));
    builder.addCase(checkCompanyThunk.rejected, (state) => ({ status: 'guest', whoAuth: 'Guest' }));

    builder.addCase(signUpCompanyThunk.fulfilled, (state, { payload }) => ({
      ...payload,
      status: 'logged',

      whoAuth: 'Company',
    }));
    builder.addCase(signUpCompanyThunk.rejected, (state) => ({
      status: 'guest',
      whoAuth: 'Guest',
    }));

    builder.addCase(loginCompanyThunk.fulfilled, (state, { payload }) => ({
      ...payload,
      status: 'logged',
      whoAuth: 'Company',
    }));
    builder.addCase(loginCompanyThunk.rejected, (state) => ({ status: 'guest', whoAuth: 'Guest' }));

    builder.addCase(logoutCompanyThunk.fulfilled, (state) => ({
      status: 'guest',
      whoAuth: 'Guest',
    }));
    builder.addCase(logoutCompanyThunk.rejected, (state) => state);

    // builder.addCase(putCourseToUserFromCompanyThunk.fulfilled, (state, { payload }) => payload);
    builder.addCase(putCourseToUserFromCompanyThunk.fulfilled, (state, { payload }) => ({
      ...state, // Сначала сохраняем текущее состояние
      ...payload, // Затем применяем данные из payload
    }));
  },
});
export default companySlice.reducer;
