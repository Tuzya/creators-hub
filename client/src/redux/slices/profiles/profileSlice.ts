import { createSlice } from "@reduxjs/toolkit";
import type { EditProfileType, YourProfileType } from "../../../types/profileType/profileTypes";
import { editProfileThunk, getOneProfileThunk, getProfileThunk } from "./profileThunk";


type ProfileSliceTypes = {
   profiles: YourProfileType[];
   oneProfile: YourProfileType | null;
   editProfile: EditProfileType | null;

}

const initialState: ProfileSliceTypes = {
   profiles: [],
   oneProfile: null,
   editProfile: null
}

export const profileSlice = createSlice({
   name: "profile",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getProfileThunk.fulfilled, (state, action) => ({
         ...state, profiles: action.payload
      }));
      builder.addCase(getProfileThunk.rejected, (state) => state)

      builder.addCase(getOneProfileThunk.fulfilled, (state, action) => {
         state.oneProfile = action.payload
      })
      builder.addCase(editProfileThunk.fulfilled, (state, action) => {
         state.editProfile = action.payload

      })
   }
});
export default profileSlice.reducer;