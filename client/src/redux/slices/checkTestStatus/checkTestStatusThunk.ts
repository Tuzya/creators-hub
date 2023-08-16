
import { createAsyncThunk } from '@reduxjs/toolkit';
import {updateCourseStatusService} from '../../../services/apiCheckTestStatusService';

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
)