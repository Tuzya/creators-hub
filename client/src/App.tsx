import { Box, Container } from '@mui/material';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import ProfilePage from './components/pages/user/ProfilePage';
import AllCoursesPage from './components/pages/courses/AllCoursesPage';
import CoursePage from './components/pages/courses/CoursePage';
import TestPage from './components/pages/test/TestPage';
import Navbar from './components/ui/NavBar';
// import CompanyPage from './components/pages/company/CompanyPage';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { checkCompanyThunk } from './redux/slices/company/companyThunks';
import PrivateRouter from './components/hocs/PrivateRouter';
import { checkUserThunk } from './redux/slices/user/userThunks';
import { getFindCockieThunk } from './redux/slices/findCockie/findCockieThunk';
import LoginInPage from './components/pages/LoginInPage';
import SignUpPage from './components/pages/SignUpPage';
import Loader from './components/hocs/Loader';
import CompanyPage from './components/pages/company/CompanyPage';

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

  const company = useAppSelector((store) => store.company);
  console.log('popa vlad');

  return (
    <Box>
      <Loader isLoading={user.status === 'loading'}>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            
            <Route element={<PrivateRouter isAllowed={user.status === 'logged'} />}>
              <Route path="/profile/lk" element={<ProfilePage />} />
              <Route path="/company/lk" element={<CompanyPage />} />
              <Route path="/company/allcourses" element={<AllCoursesPage />} />
              <Route path="/company/allcourses/:courseId" element={<CoursePage />} />
              <Route path="/allcourses/:courseId/" element={<TestPage />} />
            </Route>
            <Route element={<PrivateRouter isAllowed={user.status === 'guest'} />} />
            <Route path="/login" element={<LoginInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </>
      </Loader>
    </Box>
  );
}

export default App;
