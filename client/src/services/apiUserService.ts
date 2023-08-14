import type { AxiosResponse } from 'axios';
import { apiService } from './apiServiceConfig';
import type { UserLoginFormType, UserModelType, UserSignUpFormType } from '../types/userTypes';
import type { CourseType } from '../types/courseType/courseType';

export const checkUserService = async (): Promise<UserModelType> => {
  const { data } = await apiService<UserModelType>('/user/check');
  return data;
};

export const userSignUpService = async (inputs: UserSignUpFormType): Promise<UserModelType> => {
  const { data } = await apiService.post<UserModelType>('/user/signup', inputs);
  return data;
};

export const userLoginService = async (inputs: UserLoginFormType): Promise<UserModelType> => {
  const { data } = await apiService.post<UserModelType>('/user/login', inputs);
  return data;
};

export const userLogoutService = async (): Promise<AxiosResponse<any, any>> =>
  apiService('/user/logout');

export const fetchAllCourseUserService = async (): Promise<CourseType[]> => {
  const { data } = await apiService.get<CourseType[]>('/user/findallCourse');
  return data;
};
