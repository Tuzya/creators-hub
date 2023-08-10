import { createSlice } from "@reduxjs/toolkit";
import type { CourseType } from "../../../types/courseType";
import { deleteCourseThunk, getAllCoursesThunk } from "./allCoursesThunk";

const initialState:  CourseType[] = [];

export const allCoursesSlice = createSlice ({
    name: 'allcourses',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCoursesThunk.fulfilled, (state, {payload}) => payload);
        builder.addCase(getAllCoursesThunk.rejected, (state) => state);

        builder.addCase(deleteCourseThunk.fulfilled, (state, {payload}) => state.filter((el) => el.id !== payload));
        builder.addCase(deleteCourseThunk.rejected, (state) => state)

    },
})

export default allCoursesSlice.reducer;