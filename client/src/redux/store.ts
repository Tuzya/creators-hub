import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './slices/profiles/profileSlice';
import allCoursesReducer from './slices/allcourses/allCoursesSlice';
import userReducer from './slices/user/userSlice';
import companyReducer from './slices/company/companySlice';
import coursesReducer from './slices/coursesOne/coursesSlice';
import findCockieReducer from './slices/findCockie/findCockieSlice';
import questionsAnswersReducer from './slices/test/testSlice';
import allCourseUserReducer from './slices/allCourseOneUser/allCourseOneUserSlice';
import postsReducer from './slices/posts/postSlice';
import coursesStatusReducer from './slices/checkTestStatus/checkTestStatusSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    allcourses: allCoursesReducer,
    user: userReducer,
    company: companyReducer,
    courses: coursesReducer,
    findCockie: findCockieReducer,
    questionsAnswers: questionsAnswersReducer,
    allCourseOneUser: allCourseUserReducer,
    posts: postsReducer,
    coursesStatus: coursesStatusReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
