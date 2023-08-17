import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline, Container, Paper } from '@mui/material';
import MainPage from './components/pages/MainPage';
import ProfilePage from './components/pages/user/ProfilePage';
import AllCoursesPage from './components/pages/courses/AllCoursesPage';
import TestPage from './components/pages/test/TestPage';
import Navbar from './components/ui/NavBar';
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

import Loader from './components/hocs/Loader';
import { getOneProfileThunk, getPersonLoggedInfoThunk } from './redux/slices/profiles/profileThunk';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user);
  const company = useAppSelector((store) => store.company);

  useEffect(() => {
    if (user) {
      void dispatch(checkUserThunk());
    }
    if (company) {
      void dispatch(checkCompanyThunk());
    }
  }, []);

  useEffect(() => {
    if (user.status === 'logged') {
      void dispatch(getOneProfileThunk());
    }
  }, [user.status]);

  useEffect(() => {
    if (user.status === 'logged') {
      void dispatch(getPersonLoggedInfoThunk());
    }
  }, [user.status]);
  return (
    <Loader isLoading={user.status === 'loading' || company.status === 'loading'}>
      <>
        <CssBaseline />
        <Navbar />
        <Container sx={{ marginTop: '30px' }}>
          <Paper>
            <Routes>
              {/* для всех */}
              <Route path="/" element={<MainPage />} />

              {/* Пользователь и компания, с разным функционалом */}
              <Route
                element={
                  <PrivateRouter
                    isAllowed={user.status === 'logged' || company.status === 'logged'}
                  />
                }
              >
                <Route path="/profile/lk/:profileId" element={<ProfilePage />} />
                <Route path="/company/allcourses" element={<AllCoursesPage />} />
                <Route path="/company/allcourses/:courseId/test" element={<TestPage />} />
                <Route path="/company/allcourses/:courseId" element={<CoursePage />} />
              </Route>

              {/* только для компании */}
              <Route element={<PrivateRouter isAllowed={company.status === 'logged'} />}>
                <Route path="/company/lk" element={<CompanyPage />} />
                <Route path="/admin/signup-user" element={<AdminSignUpUser />} />
                <Route
                  path="/company/allcourses/:courseId/addQuestion/:questionId/addAnswers"
                  element={<AnswersAddPage />}
                />
                <Route
                  path="/company/allcourses/:courseId/addQuestion"
                  element={<QuestionPage />}
                />
              </Route>

              {/* только для пользователя */}
              <Route element={<PrivateRouter isAllowed={user.status === 'logged'} />}>
                <Route path="/profile/lk" element={<ProfileLoggedPage />} />
                <Route path="/profile/lk/edit" element={<EditPersonInfo />} />
              </Route>

              {/* Только для гостя */}
              <Route
                element={
                  <PrivateRouter
                    isAllowed={
                      user && user.status === 'guest' && company && company.status === 'guest'
                    }
                  />
                }
              >
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
