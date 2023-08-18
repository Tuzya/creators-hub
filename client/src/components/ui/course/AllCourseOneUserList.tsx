import React from 'react';
import { Box, Paper } from '@mui/material';
import { useAppSelector } from '../../../redux/hooks';
import AllCourseOneUserItem from './AllCourseOneUserItem';
import { postListPaperStyles } from '../../styles';
import './course.css';

export default function AllCourseOneUserList(): JSX.Element {
  const allCourseOneUser = useAppSelector((store) => store.allCourseOneUser);
  return (
    <Box mt={1} py={2} px={2} display="flex" flexDirection="row" flexWrap="wrap">
      {allCourseOneUser?.map((course) => (
        <Box key={course.id} p={1}>
          <AllCourseOneUserItem key={course.id} course={course} />
        </Box>
      ))}
    </Box>
  );
}
