import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import type { CompanyModelType } from '../../../types/companyTypes';
import type { CourseType } from '../../../types/courseType/courseType';
import { CoursesOneFormType } from '../../../types/coursesOneType';

export const getAllCoursesThunk = createAsyncThunk<CourseType[]>(
  'allcourses/getAllCourses',
  async (): Promise<CourseType[]> => {
    const { data } = await axios<CourseType[]>(`/courses/allcourses`);
    return data;
  },
);
// для удаления курсов КОМПАНИЕЙ
export const deleteCourseThunk = createAsyncThunk<CompanyModelType['id'], CourseType['id']>(
  'allcourse/deleteCourse',
  async (coursesId) => {
    await axios.delete<CourseType['id']>(`/courses/allcourses/${coursesId}`);
    return coursesId;
  },
);

export const getOneCourseThunk = createAsyncThunk<CourseType, CourseType['id']>(
  'allcourse/getOneCourse',
  async (coursesId) => {
    const { data } = await axios<CourseType>(`/courses/allcourses/${coursesId}`);
    return data;
  },
);

export const changeCourseThunk = createAsyncThunk(
  'allcourse/ changeCourse',

  async ({ coursesId, formData }: { coursesId: number; formData: CoursesOneFormType }) => {
    const { data } = await axios.put<CourseType>(`/courses/allcourses/${coursesId}`, formData);
    return data;
  },
);
