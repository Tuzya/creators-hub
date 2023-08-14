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

const initialState: CompanySliceType = { status: 'loading' };

const companySlice = createSlice({
  name: 'company',
  initialState: initialState as CompanySliceType,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkCompanyThunk.fulfilled, (state, { payload }) => ({
      ...payload,
      status: 'logged',
    }));
    builder.addCase(checkCompanyThunk.pending, (state) => ({ status: 'loading' }));
    builder.addCase(checkCompanyThunk.rejected, (state) => ({ status: 'guest' }));

    builder.addCase(signUpCompanyThunk.fulfilled, (state, { payload }) => ({
      ...payload,
      status: 'logged',
    }));
    builder.addCase(signUpCompanyThunk.rejected, (state) => ({ status: 'guest' }));

    builder.addCase(loginCompanyThunk.fulfilled, (state, { payload }) => ({
      ...payload,
      status: 'logged',
    }));
    builder.addCase(loginCompanyThunk.rejected, (state) => ({ status: 'guest' }));

    builder.addCase(logoutCompanyThunk.fulfilled, (state) => ({ status: 'guest' }));
    builder.addCase(logoutCompanyThunk.rejected, (state) => state);

    builder.addCase(putCourseToUserFromCompanyThunk.fulfilled, (state, { payload }) =>  payload);
  },
});

export default companySlice.reducer;
