import React from 'react';
import { Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import type { CourseType } from '../../../types/courseType/courseType';
import { cardStyle } from '../../styles';

import './course.css'

type CourseItemProps = {
  course: CourseType;
};

function AllCourseOneUserItem({ course }: CourseItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const coursesStatus = useAppSelector((store) => store.coursesStatus.status);

  return (
    <Container className='body0'>
      <Card className="course-card"> {/* Используем класс стилей */}
        <CardContent className='body1'>
          <Typography className="course-title" color="text.secondary" gutterBottom>
            Курс
          </Typography>
          <Typography variant="h5" component="div">
            Course {course.title}
          </Typography>
        </CardContent>
        <div className={`course-status ${coursesStatus ? 'complete' : 'incomplete'}`}> {/* Используем классы стилей */}
          {coursesStatus ? 'Выполнено' : 'К прохождению'}
        </div>
        <CardActions>
          <Link to={`/company/allcourses/${course.id}`}>
            <button className="question-button" type='button' >
              Страница курса
            </button>
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
}

export default React.memo(AllCourseOneUserItem);
