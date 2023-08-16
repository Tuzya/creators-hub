import { createSlice } from "@reduxjs/toolkit"
import type { PostType } from "../../../types/postType/postType"
import { addPostThunk, getPostThunk } from "./postThunk"

type PostSliceType = {
   posts: PostType[]
}

const initialState: PostSliceType = {
   posts: []
}

export const postsSlice = createSlice({
   name: 'posts',
   initialState,
   reducers: {
   },
   extraReducers: (builder) => {
      builder.addCase(getPostThunk.fulfilled, (state, action) => {
         state.posts = action.payload;
      });
      builder.addCase(addPostThunk.fulfilled, (state, action) => {
         state.posts.push(action.payload)
      })

   }
})

export default postsSlice.reducer