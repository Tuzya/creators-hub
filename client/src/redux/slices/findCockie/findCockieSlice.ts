import { createSlice } from '@reduxjs/toolkit';
import type { FindCockie } from '../../../types/findCockieTypes';
import { getFindCockieThunk } from './findCockieThunk';

export type FindCockieSliceType = FindCockie;

const initialState: FindCockieSliceType = {
  id: 2,
  username: '',
  email: '',
  updatedAt: '',
  createdAt: '',
};

export const coursesSlice = createSlice({
  name: 'findCockie',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getFindCockieThunk.fulfilled, (state, action) => action.payload);
    builder.addCase(getFindCockieThunk.rejected, (state) => state);
  },
});
export default coursesSlice.reducer;
