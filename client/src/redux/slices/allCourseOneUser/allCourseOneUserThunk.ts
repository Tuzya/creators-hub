/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllCourseUserService } from '../../../services/apiUserService';

export const fetchAllCourseUserThunk = createAsyncThunk('user/findallCourse', async () =>
  fetchAllCourseUserService(),
);
