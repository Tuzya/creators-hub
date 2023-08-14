import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import AllCoursesList from '../../ui/course/AllCoursesList';
import { useAppDispatch } from '../../../redux/hooks';
import { getAllCoursesThunk } from '../../../redux/slices/allcourses/allCoursesThunk';

export default function AllCourses(): JSX.Element {
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   void dispatch(getAllCoursesThunk());
  // }, []);
  // SEARCH
  return (
    <Container>
      <AllCoursesList />
    </Container>
  );
}
