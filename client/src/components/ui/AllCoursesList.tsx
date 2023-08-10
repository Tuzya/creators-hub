import React from 'react';
import { Box, Paper } from '@mui/material';
import { useAppSelector } from '../../redux/hooks';
import { postListPaperStyles } from '../styles';
import CourseItem from './CourseItem';

export default function AllCoursesList(): JSX.Element {
    const allcorses = useAppSelector((store) => store.allcourses);
  return (
    <Paper elevation={0} sx={postListPaperStyles}>
      <Box mt={1} py={2} px={2} display="flex" flexDirection="row" flexWrap="wrap">
        {allcorses?.map((course) => (
          <Box key={course.id} p={1}>
            <CourseItem key={course.id} course={course} />
          </Box>
        ))}
      </Box>
    </Paper>
  )
}
