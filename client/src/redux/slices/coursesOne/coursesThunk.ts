/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import type { CoursesOneType } from '../../../types/coursesOneType';
import type { CompanyModelType } from '../../../types/companyTypes';

export const addCompanyThunk = createAsyncThunk<CoursesOneType, FormData>(
  'companys/addCourses',
  async (formData) => {
    const { data } = await axios.post<CoursesOneType>('/courses/lk', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Set the proper content type for formData
      },
    });
    return data;
  },
);
