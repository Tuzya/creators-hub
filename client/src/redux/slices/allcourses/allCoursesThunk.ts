import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { CourseType } from '../../../types/courseType';
import type { CompanyModelType, CompanyType } from '../../../types/companyTypes';

export const getAllCoursesThunk = createAsyncThunk<CourseType[], CompanyModelType['id']>(
  'allcourses/getAllCourses',
  async (companyId) => {
    const { data } = await axios<CourseType[]>(`/company/${companyId}/allcourses`);
    return data;
  },
);
// для удаления курсов КОМПАНИЕЙ
// export const deleteCourseThunk = createAsyncThunk<CompanyModelType['id'], CourseType['id']>(
//   'course/deleteCourse',
//   async (companyId, courseId) => {
//     await axios.delete<CourseType['id']>(`/company/${companyId}/allcourses/${courseId}`);
//     return courseId;
//   },
// );

type CouresCompanyType = {
  id: CompanyModelType['id'];
  coursesId: CourseType['id'];
};
export const getOneCourseThunk = createAsyncThunk<CourseType, CouresCompanyType>(
  'course/getOneCourse',
  async ({ id, coursesId }) => {
    const { data } = await axios<CourseType>(`/company/${id}/allcourses/${coursesId}`);
    return data;
  },
);
