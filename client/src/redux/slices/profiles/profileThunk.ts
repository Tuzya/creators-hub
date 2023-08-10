import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { YourProfileType } from "../../../types/profileTypes";

export const getProfileThunk = createAsyncThunk<YourProfileType[]>(
   "profile/getProfile", async () => {
      const { data } = await axios.get<YourProfileType[]>("/profile");
      return data;
   }
)

export const getOneProfileThunk = createAsyncThunk<YourProfileType, YourProfileType['id']>(
   "profile/getOneProfile", async (id) => {
      const { data } = await axios.get<YourProfileType>(`/profile/${id}`)
      return data
   }
)