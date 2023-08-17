import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { updateCourseStatusService } from '../../../services/apiCheckTestStatusService';

// eslint-disable-next-line import/prefer-default-export
export const updateCourseStatusThunk = createAsyncThunk(
  'courses/updateCourseStatus',
  async ({ userId, courseId }) => {
    try {
      await updateCourseStatusService(userId, courseId);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
);

export const updateStatusThunk = createAsyncThunk(
  'coursesStatus/updateStatus',
  async (courseId) => {
    try {
      const { data } = await axios.patch(`/completecourse/status/${courseId}`);
    } catch (error) {
      console.error(error);
    }
  },
);
