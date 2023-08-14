import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { EditProfileType, PersonInfoType } from '../../../types/profileType/profileTypes';
import type { UserModelType } from '../../../types/userTypes';

export const getProfileThunk = createAsyncThunk<UserModelType[]>('profile/getProfile', async () => {
  const { data } = await axios.get<UserModelType[]>('/company/lk/alluser');
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
    console.log('Thunka : ,', data);
    return data;
  },
);
export const editProfileThunk = createAsyncThunk<EditProfileType, EditProfileType>(
  'profile/editProfile',
  async (data) => {
    const { data: editProfile } = await axios.patch<EditProfileType>(`/profile/edit`, data);
    return editProfile;
  },
);

export const getPersonLoggedInfoThunk = createAsyncThunk<PersonInfoType>(
  'profile/personLoggedInfoProfile',
  async () => {
    const { data } = await axios.get<PersonInfoType>(`/profile/person`);
    return data;
  },
);

export const getPersonInfoThunk = createAsyncThunk(
  'profile/personInfoProfile',
  async ({ profileId }: { profileId: string }) => {
    const { data } = await axios.get<PersonInfoType>(`/profile/lk/${profileId}`);
    return data;
  },
);
