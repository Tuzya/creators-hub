import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { CourseType } from '../../../types/courseType';
import type { CompanyType } from '../../../types/companyType';

export const getAllCoursesThunk = createAsyncThunk<CourseType[], CompanyType['id']>(
  'allcourses/getAllCourses',
  async (id) => {
    const { data } = await axios<CourseType[]>(`/company/${1}/allcourses`);
    return data;
  },
);
// для удаления курсов КОМПАНИЕЙ
export const deleteCourseThunk = createAsyncThunk<CourseType['id'], CourseType['id']>(
  'course/deleteCourse',
  async (id) => {
    await axios.delete<CourseType['id']>('/allcourses');
    return id;
  },
);
export const getOneCourseThunk = createAsyncThunk<CourseType, CourseType['id']>(
  'course/getOneCourse',
  async (id) => {
    const { data } = await axios<CourseType>(`/allcourses/${id}`);
    return data;
  },
);
