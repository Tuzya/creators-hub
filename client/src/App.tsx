import { Container } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import SignInPage from './components/pages/SignInPage';
import SignUpPage from './components/pages/SignUpPage';
import ProfilePage from './components/pages/user/ProfilePage';
import AllCourses from './components/pages/courses/AllCourses';
import CoursePage from './components/pages/courses/CoursePage';
import TestPage from './components/pages/courses/TestPage';
import Navbar from './components/ui/NavBar';

function App(): JSX.Element {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />

        <Route path="/allcourses" element={<AllCourses />} />
        <Route path="/allcorses/:id" element={<CoursePage />} />
        <Route path="/allcorses/:id/test/:testId" element={<TestPage />} />

        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </Container>
  );
}

export default App;
