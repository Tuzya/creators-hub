import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline, Container, Paper } from '@mui/material';
import MainPage from './components/pages/MainPage';
import ProfilePage from './components/pages/user/ProfilePage';
import AllCoursesPage from './components/pages/courses/AllCoursesPage';
import TestPage from './components/pages/test/TestPage';
import Navbar from './components/ui/NavBar';
// import CompanyPage from './components/pages/company/CompanyPage';

import { checkCompanyThunk } from './redux/slices/company/companyThunks';
import PrivateRouter from './components/hocs/PrivateRouter';
import { checkUserThunk } from './redux/slices/user/userThunks';
import { getFindCockieThunk } from './redux/slices/findCockie/findCockieThunk';
import LoginInPage from './components/pages/LoginInPage';
import SignUpPage from './components/pages/SignUpPage';
import CompanyPage from './components/pages/company/CompanyPage';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import CoursePage from './components/pages/courses/CoursePage';
import ProfileLoggedPage from './components/pages/user/ProfileLoggedPage';
import EditPersonInfo from './components/pages/editPersonInfo/EditPersonInfo';
import AdminSignUpUser from './components/pages/adminPanel/AdminSignUpUser';
import AnswersAddPage from './components/pages/test/addTest/AnswersAddPage';
import QuestionPage from './components/pages/test/addTest/QuestionPage';
import { getAllCoursesThunk } from './redux/slices/allcourses/allCoursesThunk';
import Loader from './components/hocs/Loader';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user);

  useEffect(() => {
    void dispatch(checkCompanyThunk());
  }, []);

  useEffect(() => {
    void dispatch(checkUserThunk());
    console.log(user.status);
  }, []);

  useEffect(() => {
    if (user) {
      void dispatch(getFindCockieThunk());
    }
  }, []);

  useEffect(() => {
    void dispatch(getAllCoursesThunk());
  }, []);

  return (
    <Loader isLoading={user.status === 'loading'}>
      <>
        <CssBaseline />
        <Navbar />
        <Container sx={{ marginTop: '30px' }}>
          <Paper>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route
                path="/admin/signup-user"
                element={
                  <PrivateRouter isAllowed={user.status === 'logged' && user.username === 'admin'}>
                    <AdminSignUpUser />
                  </PrivateRouter>
                }
              />
              <Route element={<PrivateRouter isAllowed={user.status === 'logged'} />}>
                <Route path="/profile/lk" element={<ProfileLoggedPage />} />
                <Route path="/profile/lk/edit" element={<EditPersonInfo />} />
                <Route path="/profile/lk/:profileId" element={<ProfilePage />} />
                <Route path="/company/lk" element={<CompanyPage />} />
                <Route path="/company/allcourses" element={<AllCoursesPage />} />
                <Route
                  path="/company/allcourses/:courseId/addQuestion/:questionId/addAnswers"
                  element={<AnswersAddPage />}
                />
                <Route
                  path="/company/allcourses/:courseId/addQuestion"
                  element={<QuestionPage />}
                />
                <Route path="/company/allcourses/:courseId/test" element={<TestPage />} />
                <Route path="/company/allcourses/:courseId" element={<CoursePage />} />
              </Route>
              <Route element={<PrivateRouter isAllowed={user.status === 'guest'} />}>
                <Route path="/login" element={<LoginInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
              </Route>
            </Routes>
          </Paper>
        </Container>
      </>
    </Loader>
  );
}

export default App;
