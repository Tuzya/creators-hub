import { createSlice } from "@reduxjs/toolkit";
import type { CourseType } from "../../../types/courseType";
import { deleteCourseThunk, getAllCoursesThunk, getOneCourseThunk } from "./allCoursesThunk";

export type CourseSliceType = {
    courses: CourseType[];
    onecourse: CourseType | null;
}
const initialState:  CourseSliceType = {
    courses: [],
    onecourse: null,
};

export const allCoursesSlice = createSlice ({
    name: 'allcourses',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCoursesThunk.fulfilled, (state, {payload}) => {state.courses = payload});
        builder.addCase(getAllCoursesThunk.rejected, (state) => state);

        builder.addCase(deleteCourseThunk.fulfilled, (state, {payload}) => {state.courses.filter((el) => el.id !== payload)});
        builder.addCase(deleteCourseThunk.rejected, (state) => state)

        builder.addCase(getOneCourseThunk.fulfilled, (state, {payload})=> {state.onecourse = payload});
        builder.addCase(getOneCourseThunk.rejected, (state) => state)


    },
})

export default allCoursesSlice.reducer;