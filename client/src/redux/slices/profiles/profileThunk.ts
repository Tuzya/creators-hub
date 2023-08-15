// @ts-ignore
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { EditProfileType, PersonInfoType } from '../../../types/profileType/profileTypes';
import type { UserModelType } from '../../../types/userTypes';

export const getProfileThunk = createAsyncThunk<UserModelType[]>('profile/getProfile', async () => {
  const { data } = await axios.get<UserModelType[]>('/courses/lk/alluser');
  return data;
});

export const getOneProfileThunk = createAsyncThunk<UserModelType>(
  'profile/getOneProfile',
  async () => {
    const { data } = await axios.get<UserModelType>(`/profile/lk/`);
    return data;
  },
);

export const getOnePersonProfileThunk = createAsyncThunk(
  'profile/getOnePersonProfile',
  async ({ profileId }: { profileId: string }) => {
    const { data } = await axios.get<Omit<UserModelType, 'company_id'>>(`/profile/lk/${profileId}`);
    return data;
  },
);
export const editProfileThunk = createAsyncThunk<PersonInfoType, PersonInfoType>(
  'profile/editProfile',
  async (input) => {
    const { data } = await axios.post<PersonInfoType>(`/person/edit`, input);
    return data;
  },
);

export const getPersonLoggedInfoThunk = createAsyncThunk<PersonInfoType>(
  'profile/personLoggedInfoProfile',
  async () => {
    const { data } = await axios.get<PersonInfoType>(`/person/personFindOne`);
    return data;
  },
);

export const getPersonInfoThunk = createAsyncThunk(
  'profile/personInfoProfile',
  async ({ profileId }: { profileId: string }) => {
    const { data } = await axios.get<PersonInfoType>(`/person/personInfo/${profileId}`);
    console.log('thunk', data);
    return data;
  },
);
