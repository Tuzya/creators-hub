import React from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import type { CourseType } from '../../types/courseType/courseType'
import { cardStyle } from '../styles'
import { useAppDispatch } from '../../redux/hooks'
import { deleteCourseThunk } from '../../redux/slices/allcourses/allCoursesThunk'
import PrivateRouter from '../hocs/PrivateRouter'

type CourseItemProps = {
  course: CourseType
}

export default function CourseItem({ course }: CourseItemProps): JSX.Element {
  const dispath = useAppDispatch();

  return (

    <Card sx={cardStyle}>
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color='text.secondary'
          gutterBottom
        >
          Курс
        </Typography>
        <Typography
          variant='h5'
          component='div'
        >
          {course.title}...
        </Typography>
        <Typography
          sx={{ mb: 1.5 }}
          color='text.secondary'
        >
          {course.body}...
        </Typography>
      </CardContent>
      <CardActions>
        <PrivateRouter isAllowed={ }>
          <Button size='small' onClick={void dispath(deleteCourseThunk(course.id))}>Delete</Button>
        </PrivateRouter>
        <Link to={`/allcourses/${course.id}`}>
          <Button size='small' >CoursePage</Button>
        </Link>
      </CardActions>
    </Card>
  )
}
