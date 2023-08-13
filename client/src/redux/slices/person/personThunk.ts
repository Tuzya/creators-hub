// /* eslint-disable import/prefer-default-export */
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import type { EditProfileType } from '../../../types/profileType/profileTypes';

// export const editProfileThunk = createAsyncThunk<EditProfileType, EditProfileType>(
//   'profile/editProfile',
//   async (data) => {
//     const { data: editProfile } = await axios.patch<EditProfileType>(`/profile/lk/person`, data);
//     return editProfile;
//   },
// );
