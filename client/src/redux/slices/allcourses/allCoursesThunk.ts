import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { CourseType } from "../../../types/courseType/courseType";

export const getAllCoursesThunk = createAsyncThunk<CourseType[]>(
    'allCourses/getAllCourses',
    async () => {
        const { data } = await axios<CourseType[]>('/allcourses');
        return data
    }
);
// для удаления курсов КОМПАНИЕЙ
export const deleteCourseThunk = createAsyncThunk<CourseType['id'], CourseType['id']>(
    'course/deleteCourse',
    async (id) => {
        await axios.delete<CourseType['id']>('/allcourses');
        return id;
    }
)