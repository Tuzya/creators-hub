import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import OneCourseItem from '../../ui/course/OneCourseItem';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getOneCourseThunk } from '../../../redux/slices/allcourses/allCoursesThunk';
import QuestionList from '../../ui/question/QuestionList';

export default function CoursePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const onecourse = useAppSelector((store) => store.allcourses.onecourse);
  const { courseId } = useParams();

  useEffect(() => {
    void dispatch(getOneCourseThunk(Number(courseId)));
  }, []);
  return (
    <>
      <OneCourseItem />
      {/* <QuestionList /> */}
      {/* ссылка на скачивание материала */}
      {courseId && (
        <Link to={`/allcourses/${courseId}/test/`}>
          <Button>Пройти тест</Button>
        </Link>
      )}
    </>
  );
}
