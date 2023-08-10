import { configureStore } from '@reduxjs/toolkit';
import allCoursesReducer from './slices/allcourses/allCoursesSlice';


export const store = configureStore({
  reducer: {
    allcourses:  allCoursesReducer,
      },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
