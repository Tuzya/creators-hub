import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import type { CourseType } from '../../../types/courseType/courseType';
import { cardStyle } from '../../styles';
import { deleteCourseThunk } from '../../../redux/slices/allcourses/allCoursesThunk';
import DeleteModal from '../deleteModal/deleteCourseModal';

type CourseItemProps = {
  course: CourseType;
};

function AllCourseItem({ course }: CourseItemProps): JSX.Element {
  const dispath = useAppDispatch();
  const [open, setOpen] = useState(0);
  const company = useAppSelector((store) => store.company);

  return (
    <Container>
      <DeleteModal setOpen={setOpen} open={open} />
      <Card sx={cardStyle}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Курс
          </Typography>
          <Typography variant="h5" component="div">
            {course.title}
          </Typography>
          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {course.body}...
        </Typography> */}
        </CardContent>
        <CardActions>
          <Link to={`/company/allcourses/${course.id}`}>
            <Button size="small">Страница курса</Button>
          </Link>
          {company.status === 'logged' && (
            <Button
              size="small"
              onClick={() => {
                setOpen(course.id);
              }}
            >
              Удалить курс
            </Button>
          )}
        </CardActions>
      </Card>
    </Container>
  );
}

export default React.memo(AllCourseItem);
