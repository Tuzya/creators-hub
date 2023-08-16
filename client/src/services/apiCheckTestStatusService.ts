import { apiService } from './apiServiceConfig';

// eslint-disable-next-line import/prefer-default-export
export const updateCourseStatusService = async (userId, courseId) => {
  try {
    await apiService.post('/api/completecourse', { userId, courseId });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const upeCourseStatusService = async (userId, courseId) => {
  try {
    await apiService.post(`/api/check/status/${courseId}`);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
