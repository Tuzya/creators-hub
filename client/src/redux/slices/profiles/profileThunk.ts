import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { EditProfileType, YourProfileType } from "../../../types/profileType/profileTypes";

export const getProfileThunk = createAsyncThunk<YourProfileType[]>(
   "profile/getProfile", async () => {
      const { data } = await axios.get<YourProfileType[]>("/profile");
      return data;
   }
)

export const getOneProfileThunk = createAsyncThunk<YourProfileType>(
   "profile/getOneProfile", async () => {
      const { data } = await axios.get<YourProfileType>(`/profile/lk`)
      return data

   }
)
export const editProfileThunk = createAsyncThunk<EditProfileType, EditProfileType>(
   "profile/editProfile", async (data) => {
      const { data: editProfile } = await axios.patch<EditProfileType>(`/profile/edit`, data)
      return editProfile
   }
);