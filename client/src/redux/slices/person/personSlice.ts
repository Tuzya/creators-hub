// import { createSlice } from '@reduxjs/toolkit';
// import type { EditProfileType, YourProfileType } from '../../../types/profileType/profileTypes';
// import {
//   editProfileThunk,
//   getOnePersonProfileThunk,
//   getOneProfileThunk,
//   getProfileThunk,
// } from './profileThunk';
// import type { UserModelType } from '../../../types/userTypes';

// type ProfileSliceTypes = {
//   profiles: YourProfileType[];
//   oneProfile: Omit<UserModelType, 'company_id'> | null;
//   onePersonProfile: Omit<UserModelType, 'company_id'> | null;
//   editProfile: EditProfileType | null;
// };

// const initialState: ProfileSliceTypes = {
//   profiles: [],
//   oneProfile: null,
//   onePersonProfile: null,
//   editProfile: null,
// };

// export const profileSlice = createSlice({
//   name: 'profile',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(editProfileThunk.fulfilled, (state, action) => {
//       state.editProfile = action.payload;
//     });
//     builder.addCase(editProfileThunk.rejected, (state) => state);
//   },
// });
// export default profileSlice.reducer;
