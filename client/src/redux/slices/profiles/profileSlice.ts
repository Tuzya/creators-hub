import { createSlice } from "@reduxjs/toolkit";
import type { YourProfileType } from "../../../types/profileTypes";
import { getOneProfileThunk, getProfileThunk } from "./profileThunk";


type ProfileSliceTypes = {
   profiles: YourProfileType[];
   oneProfile: YourProfileType | null;

}

const initialState: ProfileSliceTypes = {
   profiles: [],
   oneProfile: null
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
   }
});
export default profileSlice.reducer;