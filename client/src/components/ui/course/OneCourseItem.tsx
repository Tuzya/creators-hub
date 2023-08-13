import React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { cardStyle } from '../../styles';
import { deleteCourseThunk } from '../../../redux/slices/allcourses/allCoursesThunk';

// import PrivateRouter from '../hocs/PrivateRouter';

export default function OneCourseItem(): JSX.Element {
  const onecourse = useAppSelector((store) => store.allcourses.onecourse);
  const dispath = useAppDispatch();
  const { courseId } = useParams();
  return (
    <Card sx={cardStyle}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Курс
        </Typography>
        <Typography variant="h5" component="div">
          {onecourse?.title}...
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {onecourse?.body}...
        </Typography>
      </CardContent>
      <CardActions>
        {courseId && (
          <Link to={`/company/allcourses/${courseId}/addQuestion`}>
            <Button size="small">Доавить тест</Button>
          </Link>
        )}
        {courseId && (
          <Link to={`/company/allcourses/${courseId}/test`}>
            <Button size="small">Пройти тест</Button>
          </Link>
        )}
      </CardActions>
    </Card>
  );
}
