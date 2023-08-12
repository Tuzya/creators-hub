import { createSlice } from "@reduxjs/toolkit";

import type { CoursesOneType } from "../../../types/coursesOneType";
import { addCompanyThunk } from "./coursesThunk";

export type CoursesType = CoursesOneType[];

const initialState: CoursesType = [];



export const coursesSlice = createSlice({

   name: 'courses',
   initialState,
   reducers: {},

   extraReducers: (builder) => {

      builder.addCase(addCompanyThunk.fulfilled, (state, action) => [...state, action.payload])
      builder.addCase(addCompanyThunk.rejected, (state) => state)

   }

})
export default coursesSlice.reducer