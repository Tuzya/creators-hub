import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import type { CompanyModelType } from '../../../types/companyTypes';
import type { CourseType } from '../../../types/courseType/courseType';

export const getAllCoursesThunk = createAsyncThunk<CourseType[]>(
  'allcourses/getAllCourses',
  async (): Promise<CourseType[]> => {
    const { data } = await axios<CourseType[]>(`/company/allcourses`);
    return data;
  },
);
// для удаления курсов КОМПАНИЕЙ
export const deleteCourseThunk = createAsyncThunk<CompanyModelType['id'], CourseType['id']>(
  'allcourse/deleteCourse',
  async (coursesId) => {
    await axios.delete<CourseType['id']>(`/company/allcourses/${coursesId}`);
    return coursesId;
  },
);

export const getOneCourseThunk = createAsyncThunk<CourseType, CourseType['id']>(
  'allcourse/getOneCourse',
  async (coursesId) => {
    const { data } = await axios<CourseType>(`/company/allcourses/${coursesId}`);
    return data;
  },
);
