import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { YourProfileType } from "../../../types/profileTypes";

export const getProfileThunk = createAsyncThunk<YourProfileType>(
   "profile/getProfile", async () => {
      const { data } = await axios.get<YourProfileType>("/profile");
      return data;
   }

)

export const 