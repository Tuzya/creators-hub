import React, { useEffect } from 'react';
import OneCourseItem from '../../ui/OneCourseItem';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getOneCourseThunk } from '../../../redux/slices/allcourses/allCoursesThunk';

export default function CoursePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const onecourse = useAppSelector((store) => store.allcourses.onecourse)

  useEffect(() => {void dispatch(getOneCourseThunk(onecourse?.id))}, [])
  return (
    <OneCourseItem />
  )
}
