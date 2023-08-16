import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { PostType } from "../../../types/postType/postType";


export const getPostThunk = createAsyncThunk<PostType[]>('post/getPosts', async () => {
   const data = await axios.get<PostType[]>('/posts/posts')
   return data
})


export const addPostThunk = createAsyncThunk<PostType, PostType>(
   'post/addPost',
   async (postData) => {
      const { data } = await axios.post<PostType>(`/posts/add`, postData);
      return data;
   }
);