import React from 'react';
import { Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import type { CourseType } from '../../../types/courseType/courseType';
import { cardStyle } from '../../styles';

type CourseItemProps = {
  course: CourseType;
};

function AllCourseOneUserItem({ course }: CourseItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const coursesStatus = useAppSelector((store) => store.coursesStatus.status);

  return (
    <Container>
      <Card sx={cardStyle}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Курс
          </Typography>
          <Typography variant="h5" component="div">
            Course {course.title}
          </Typography>
        </CardContent>
        <div
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            color: coursesStatus ? 'green' : 'red',
          }}
        >
          {coursesStatus ? 'Выполнено' : 'К прохождению'}
        </div>
        <CardActions>
          <Link to={`/company/allcourses/${course.id}`}>
            <Button size="small">CoursePage</Button>
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
}

export default React.memo(AllCourseOneUserItem);
