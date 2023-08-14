import { createAsyncThunk } from '@reduxjs/toolkit';
import type {
  UserLoginFormType,
  UserModelType,
  UserSignUpFormType,
} from '../../../types/userTypes';
import {
  checkUserService,
  fetchAllCourseUserService,
  userLoginService,
  userLogoutService,
  userSignUpService,
} from '../../../services/apiUserService';

export const checkUserThunk = createAsyncThunk<UserModelType>('user/checkUser', async () =>
  checkUserService().then((data) => data),
);

export const signUpUserThunk = createAsyncThunk<UserModelType, UserSignUpFormType>(
  'user/signup',
  async (formData) => userSignUpService(formData).then((data) => data),
);

export const loginUserThunk = createAsyncThunk<UserModelType, UserLoginFormType>(
  'user/login',
  async (formData) => userLoginService(formData).then((data) => data),
);

export const logoutUserThunk = createAsyncThunk('user/logout', async () => userLogoutService());
