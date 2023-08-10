import { Container } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import SignInPage from './components/pages/SignInPage';
import SignUpPage from './components/pages/SignUpPage';
import ProfilePage from './components/pages/user/ProfilePage';
import AllCoursesPage from './components/pages/courses/AllCoursesPage';
import CoursePage from './components/pages/courses/CoursePage';
import TestPage from './components/pages/courses/TestPage';
import Navbar from './components/ui/NavBar';
import CompanyPage from './components/pages/company/CompanyPage';

function App(): JSX.Element {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/company/:id" element={<CompanyPage />} />

        <Route path="/allcourses" element={<AllCoursesPage />} />
        <Route path="/allcourses/:id" element={<CoursePage />} />
        <Route path="/allcourses/:id/test/:testId" element={<TestPage />} />

        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </Container>
  );
}

export default App;
