import React, { useEffect } from 'react';
import OneCourseItem from '../../ui/course/OneCourseItem';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getOneCourseThunk } from '../../../redux/slices/allcourses/allCoursesThunk';
import QuestionList from '../../ui/question/QuestionList';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function CoursePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const onecourse = useAppSelector((store) => store.allcourses.onecourse)

  useEffect(() => {void dispatch(getOneCourseThunk(onecourse?.id))}, [])
  return (
    <>
    <OneCourseItem />
    <QuestionList />
    {/* ссылка на скачивание материала */}
    <Link to={`/allcourses/${onecourse?.id}/test/`}>
    <Button>
      Пройти тест
    </Button>
    </Link>
    </>
    
  )
}
