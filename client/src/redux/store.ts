import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './slices/profiles/profileSlice';
import allCoursesReducer from './slices/allcourses/allCoursesSlice';
import userReducer from './slices/user/userSlice';
import companyReducer from './slices/company/companySlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,

    allcourses: allCoursesReducer,

    user: userReducer,
    company: companyReducer, 
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
