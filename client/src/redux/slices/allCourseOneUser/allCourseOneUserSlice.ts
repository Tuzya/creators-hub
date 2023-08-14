import { createSlice } from '@reduxjs/toolkit';
import type { CourseType } from '../../../types/courseType/courseType';
import { fetchAllCourseUserThunk } from './allCourseOneUserThunk';

export type CourseSliceType = CourseType[];
const initialState: CourseSliceType = [];

export const allCoursesSlice = createSlice({
  name: 'allCourseOneUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCourseUserThunk.fulfilled, (state, { payload }) => payload);
    builder.addCase(fetchAllCourseUserThunk.rejected, (state) => state);
  },
});

export default allCoursesSlice.reducer;
