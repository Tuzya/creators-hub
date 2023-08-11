/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import type { CoursesOneType } from "../../../types/coursesOneType";
import type { CompanyModelType } from "../../../types/companyTypes";



export const addCompanyThunk = createAsyncThunk<CoursesOneType, { id: CompanyModelType['id'], formData: Omit<CoursesOneType, 'id'> }>(
   'companys/addCourses',
   async ({ id, formData }) => {
      const { data } = await axios.post<CoursesOneType>(`/company/${id}`, formData)
      return data
   }

)

