import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { CourseType } from '../../../types/courseType';
import type { CompanyModelType, CompanyType } from '../../../types/companyTypes';

export const getAllCoursesThunk = createAsyncThunk<CourseType[]>(
  'allcourses/getAllCourses',
  async (): Promise<CourseType[]> => {
    const { data } = await axios<CourseType[]>(`/company/allcourses`);
    return data;
  },
);
// для удаления курсов КОМПАНИЕЙ
export const deleteCourseThunk = createAsyncThunk<CompanyModelType['id'], CourseType['id']>(
  'course/deleteCourse',
  async (coursesId) => {
    await axios.delete<CourseType['id']>(`/company/allcourses/${coursesId}`);
    return coursesId;
  },
);

export const getOneCourseThunk = createAsyncThunk<CourseType, CourseType['id']>(
  'course/getOneCourse',
  async (coursesId) => {
    const { data } = await axios<CourseType>(`/company/allcourses/${coursesId}`);
    return data;
  },
);
