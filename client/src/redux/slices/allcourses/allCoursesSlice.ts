import { createSlice } from '@reduxjs/toolkit';
import {
  changeCourseThunk,
  deleteCourseThunk,
  getAllCoursesThunk,
  getOneCourseThunk,
} from './allCoursesThunk';
import type { CourseType, SearchParams } from '../../../types/courseType/courseType';

export type CourseSliceType = {
  courses: CourseType[];
  onecourse: CourseType | null;
  searchParams: SearchParams;
};

const initialState: CourseSliceType = {
  courses: [],
  onecourse: null,
  searchParams: { query: '', filterBy: 'title' },
};

export const allCoursesSlice = createSlice({
  name: 'allcourses',
  initialState,
  reducers: {
    setSearchParams: (state, action) => {
      state.searchParams = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCoursesThunk.fulfilled, (state, { payload }) => {
      state.courses = payload;
    });
    builder.addCase(getAllCoursesThunk.rejected, (state) => state);

    builder.addCase(deleteCourseThunk.fulfilled, (state, { payload }) => {
      state.courses = state.courses.filter((el) => el.id !== payload);
    });
    builder.addCase(deleteCourseThunk.rejected, (state) => state);

    builder.addCase(getOneCourseThunk.fulfilled, (state, { payload }) => {
      state.onecourse = payload;
    });
    builder.addCase(getOneCourseThunk.rejected, (state) => state);

    builder.addCase(changeCourseThunk.fulfilled, (state, { payload }) => {
      const changeIndex = state.courses.findIndex((course) => course.id === payload.id);
      if ((changeIndex) => 0) state.courses[changeIndex] = payload;
    });
  },
});

export const { setSearchParams } = allCoursesSlice.actions;

export default allCoursesSlice.reducer;
