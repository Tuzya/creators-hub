import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { CourseType } from "../../../types/courseType";

export const getAllCoursesThunk = createAsyncThunk<CourseType[]>(
    'allcourses/getAllCourses',
    async () => {
      const  { data } = await axios<CourseType[]>('/allcourses');
    return data
    }
);
// для удаления курсов КОМПАНИЕЙ
export const deleteCourseThunk = createAsyncThunk<CourseType['id'], CourseType['id']> (
    'course/deleteCourse',
    async (id) => {
        await axios.delete<CourseType['id']> ('/allcourses');
        return id;
    }
)
export const getOneCourseThunk = createAsyncThunk<CourseType, CourseType['id']>(
    'course/getOneCourse',
    async (id) => {
    const {data} = await axios<CourseType>(`/allcourses/${id}`)
    return data
}
)