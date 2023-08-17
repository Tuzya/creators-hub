// courseSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { updateCourseStatusThunk, updateStatusThunk } from './checkTestStatusThunk';
import type { EditCoursesUserType } from '../../../types/coursesUserType';

// eslint-disable-next-line no-restricted-globals
const initialState: EditCoursesUserType = { status: false };

const courseSlice = createSlice({
  name: 'coursesStatus',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateStatusThunk.fulfilled, (state, action) => {
      state.status = action.payload;
    });
    builder.addCase(updateStatusThunk.rejected, (state) => state);
  },
});

export default courseSlice.reducer;

// builder
//   .addCase(updateCourseStatusThunk.pending, (state) => {
//     state.updatingStatus = true;
//     state.updateSuccess = false;
//   })
//   .addCase(updateCourseStatusThunk.fulfilled, (state) => {
//     state.updatingStatus = false;
//     state.updateSuccess = true;
//   })
//   .addCase(updateCourseStatusThunk.rejected, (state) => {
//     state.updatingStatus = false;
//     state.updateSuccess = false;
//   });
