import { createSlice } from '@reduxjs/toolkit';
import type {
   EditProfileType,
   PersonInfoType,
   SearchParamsProfile,
   YourProfileType,
} from '../../../types/profileType/profileTypes';
import {
   editProfileThunk,
   getOnePersonProfileThunk,
   getOneProfileThunk,
   getPersonInfoThunk,
   getPersonLoggedInfoThunk,
   getProfileThunk,
} from './profileThunk';
import type { UserModelType } from '../../../types/userTypes';

type ProfileSliceTypes = {
   profiles: YourProfileType[];
   oneProfile: Omit<UserModelType, 'company_id'> | null;
   onePersonProfile: Omit<UserModelType, 'company_id'> | null;
   editProfile: PersonInfoType | null;
   personLoggedInfo: PersonInfoType | null;
   personInfo: PersonInfoType | null;
   searchParamsProfile: SearchParamsProfile
};

const initialState: ProfileSliceTypes = {
   profiles: [],
   oneProfile: null,
   onePersonProfile: null,
   editProfile: null,
   personLoggedInfo: null,
   personInfo: null,
   searchParamsProfile: { query: '', filterBy: 'username' }

};

export const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {
      setSearchParamsProfile: (state, action) => {
         state.searchParamsProfile = action.payload
      }

   },
   extraReducers: (builder) => {
      // map всех юзеров одной компании
      builder.addCase(getProfileThunk.fulfilled, (state, action) => ({
         ...state,
         profiles: action.payload,
      }));
      builder.addCase(getProfileThunk.rejected, (state) => state);

      // для личного кабинет user который авторизован
      builder.addCase(getOneProfileThunk.fulfilled, (state, action) => {
         state.oneProfile = action.payload;
      });
      builder.addCase(getOneProfileThunk.rejected, (state) => state);

      // для личного кабинет других пользователей
      builder.addCase(getOnePersonProfileThunk.fulfilled, (state, action) => {
         state.onePersonProfile = action.payload;
      });
      builder.addCase(getOnePersonProfileThunk.rejected, (state) => state);

      // edit личного кабинета user logged
      builder.addCase(editProfileThunk.fulfilled, (state, action) => {
         state.editProfile = action.payload;
      });
      builder.addCase(editProfileThunk.rejected, (state) => state);
      // get personInfo для user Logged
      builder.addCase(getPersonLoggedInfoThunk.fulfilled, (state, action) => {
         state.personLoggedInfo = action.payload;
      });
      builder.addCase(getPersonLoggedInfoThunk.rejected, (state) => state);
      // get personInfo для чужого ЛК
      builder.addCase(getPersonInfoThunk.fulfilled, (state, action) => {
         state.personInfo = action.payload;
      });
      builder.addCase(getPersonInfoThunk.rejected, (state) => state);
   },
});
export const { setSearchParamsProfile } = profileSlice.actions

export default profileSlice.reducer;
