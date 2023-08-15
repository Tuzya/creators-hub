import React from 'react';
import { Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import type { CourseType } from '../../../types/courseType/courseType';
import { cardStyle } from '../../styles';

type CourseItemProps = {
  course: CourseType;
};

function AllCourseOneUserItem({ course }: CourseItemProps): JSX.Element {
  const dispath = useAppDispatch();

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
          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {course.body}...
        </Typography> */}
        </CardContent>
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
