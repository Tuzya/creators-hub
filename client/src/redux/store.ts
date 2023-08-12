import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './slices/profiles/profileSlice';
import allCoursesReducer from './slices/allcourses/allCoursesSlice';
import userReducer from './slices/user/userSlice';
import companyReducer from './slices/company/companySlice';
import coursesReducer from './slices/coursesOne/coursesSlice';
import questionsAnswersReducer from './slices/test/testSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    courses: coursesReducer,
    allcourses: allCoursesReducer,
    user: userReducer,
    company: companyReducer,
    questionsAnswers: questionsAnswersReducer,
  },

});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
