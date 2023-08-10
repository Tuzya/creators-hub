import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import CourseItem from '../../ui/CourseItem';

export default function CoursePage(): JSX.Element {
  return (
    <Link to={`/test`}> 
        <Button size='small' >Test</Button>
        </Link>
  )
}
