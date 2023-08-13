/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import type { CoursesOneType } from '../../../types/coursesOneType';
import type { CompanyModelType } from '../../../types/companyTypes';

export const addCompanyThunk = createAsyncThunk<CoursesOneType, Omit<CoursesOneType, 'id'>>(
  'companys/addCourses',
  async (formData) => {
    const { data } = await axios.post<CoursesOneType>(`/company/lk`, formData);
    return data;
  },
);
