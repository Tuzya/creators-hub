import React, { useEffect } from 'react';
import AllCoursesList from '../../ui/course/AllCoursesList';
import { useAppDispatch } from '../../../redux/hooks';
import { getAllCoursesThunk } from '../../../redux/slices/allcourses/allCoursesThunk';

export default function AllCourses(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {void dispatch(getAllCoursesThunk())}, [])
  // SEARCH
  return (
    <AllCoursesList />
  )
}
