import React from 'react';
import { Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import type { CourseType } from '../../../types/courseType/courseType';
import { cardStyle } from '../../styles';
import { deleteCourseThunk } from '../../../redux/slices/allcourses/allCoursesThunk';

type CourseItemProps = {
  course: CourseType;
};

function AllCourseItem({ course }: CourseItemProps): JSX.Element {
  const dispath = useAppDispatch();

  return (
    <Container>
      <Card sx={cardStyle}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Курс
          </Typography>
          <Typography variant="h5" component="div">
            {course.title}...
          </Typography>
          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {course.body}...
        </Typography> */}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => void dispath(deleteCourseThunk(course.id))}>
            Delete
          </Button>

          <Link to={`/company/allcourses/${course.id}`}>
            <Button size="small">CoursePage</Button>
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
}

export default React.memo(AllCourseItem);