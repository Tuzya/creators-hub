// courseSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { updateCourseStatusThunk } from './checkTestStatusThunk';

const initialState = {
  updatingStatus: false, // Флаг, указывающий на процесс обновления статуса
  updateSuccess: false, // Флаг успешного обновления статуса
};

const courseSlice = createSlice({
  name: 'coursesStatus',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateCourseStatusThunk.pending, (state) => {
        state.updatingStatus = true;
        state.updateSuccess = false;
      })
      .addCase(updateCourseStatusThunk.fulfilled, (state) => {
        state.updatingStatus = false;
        state.updateSuccess = true;
      })
      .addCase(updateCourseStatusThunk.rejected, (state) => {
        state.updatingStatus = false;
        state.updateSuccess = false;
      });
  },
});

export default courseSlice.reducer;