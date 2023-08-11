import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import SignInPage from './components/pages/auth/SignInPage';
import SignUpPage from './components/pages/SignUpPage';
import ProfilePage from './components/pages/user/ProfilePage';
import AllCoursesPage from './components/pages/courses/AllCoursesPage';
import CoursePage from './components/pages/courses/CoursePage';
import TestPage from './components/pages/test/TestPage';
import Navbar from './components/ui/NavBar';
import CompanyPage from './components/pages/company/CompanyPage';
import PrivateRouter from './components/hocs/PrivateRouter';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { checkUserThunk } from './redux/slices/user/userThunks';
import { checkCompanyThunk } from './redux/slices/company/companyThunks';




function App(): JSX.Element {
  const dispatch = useAppDispatch()
  const user = useAppSelector((store) => store.user);


  useEffect(() => {
    void dispatch(checkCompanyThunk())
  }, [])
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/company/:id" element={<CompanyPage />} />

        <Route path="/company/:id/allcourses/:courseId" element={<AllCoursesPage />} />
        <Route path="/allcourses/:id" element={<CoursePage />} />
        <Route path="/allcourses/:id/test/:testId" element={<TestPage />} />

        <Route
          path="/signup"
          element={
            <PrivateRouter isAllowed={user.status === 'logged'}>
              <SignUpPage />
            </PrivateRouter>
          }
        />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </Container>
  );
}

export default App;
