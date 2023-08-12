import React from 'react';
import { Box, Paper } from '@mui/material';
import { useAppSelector } from '../../../redux/hooks';
import { postListPaperStyles } from '../../styles';
import AllCourseItem from './AllCourseItem';

export default function AllCoursesList(): JSX.Element {
    const allcourses = useAppSelector((store) => store.allcourses.courses);
  return (
    <Paper elevation={0} sx={postListPaperStyles}>
      <Box mt={1} py={2} px={2} display="flex" flexDirection="row" flexWrap="wrap">
        {allcourses?.map((course) => (
          <Box key={course.id} p={1}>
            <AllCourseItem key={course.id} course={course} />
          </Box>
        ))}
      </Box>
    </Paper>
  )
}
