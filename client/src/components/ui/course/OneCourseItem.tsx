import React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
// import PrivateRouter from '../hocs/PrivateRouter';
import { cardStyle } from '../styles';
import { deleteCourseThunk } from '../../redux/slices/allcourses/allCoursesThunk';

export default function OneCourseItem(): JSX.Element {
  const onecourse = useAppSelector((store) => store.allcourses.onecourse);
  const dispath = useAppDispatch();
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
        <Button size="small" onClick={void dispath(deleteCourseThunk(onecourse?.id))}>
          Delete
        </Button>

        <Button size="small">Test</Button>
      </CardActions>
    </Card>
  );
}
