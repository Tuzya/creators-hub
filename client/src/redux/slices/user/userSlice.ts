import { createSlice } from '@reduxjs/toolkit';
import type { UserType } from '../../../types/userTypes';
import { checkUserThunk, loginUserThunk, logoutUserThunk, signUpUserThunk } from './userThunks';

type UserSliceType = UserType;

const initialState: UserSliceType = { status: 'loading', whoAuth: 'Guest' };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkUserThunk.fulfilled, (state, { payload }) => ({
      ...payload,
      status: 'logged',
      whoAuth: 'User',
    }));
    builder.addCase(checkUserThunk.pending, (state) => ({ status: 'loading', whoAuth: 'User' }));
    builder.addCase(checkUserThunk.rejected, (state) => ({ status: 'guest', whoAuth: 'Guest' }));

    builder.addCase(signUpUserThunk.fulfilled, (state, { payload }) => ({
      ...payload,
      status: 'logged',
      whoAuth: 'User',
    }));
    builder.addCase(signUpUserThunk.rejected, (state) => ({ status: 'guest', whoAuth: 'Guest' }));

    builder.addCase(loginUserThunk.fulfilled, (state, { payload }) => ({
      ...payload,
      status: 'logged',
      whoAuth: 'User',
    }));
    builder.addCase(loginUserThunk.rejected, (state) => ({ status: 'guest', whoAuth: 'Guest' }));

    builder.addCase(logoutUserThunk.fulfilled, (state) => ({ status: 'guest', whoAuth: 'Guest' }));
    builder.addCase(logoutUserThunk.rejected, (state) => state);
  },
});

export default userSlice.reducer;
