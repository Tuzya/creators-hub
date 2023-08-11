import React, { useEffect } from 'react';
import AllCoursesList from '../../ui/AllCoursesList';
import { useAppDispatch } from '../../../redux/hooks';
import { getAllCoursesThunk } from '../../../redux/slices/allcourses/allCoursesThunk';

export default function AllCourses(): JSX.Element {
  const dispatch = useAppDispatch();
  // const company_id = JSON.parse(localStorage?.getItem('id'));
  const sessionData = document.cookie;
  console.log(sessionData);
  useEffect(() => {
    void dispatch(getAllCoursesThunk(1));
  }, []);
  // SEARCH
  return <AllCoursesList />;
}
