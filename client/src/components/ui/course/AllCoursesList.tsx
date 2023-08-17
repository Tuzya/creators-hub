import React from 'react';
import { Box, Paper } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { postListPaperStyles } from '../../styles';
import AllCourseItem from './AllCourseItem';
import SearchBar from './SearchBar';
import { setSearchParams } from '../../../redux/slices/allcourses/allCoursesSlice';

import './AllCoursesStyles.css'

export default function AllCoursesList(): JSX.Element {
  const dispatch = useAppDispatch()
  const allcourses = useAppSelector((store) => store.allcourses.courses);
  const searchParams = useAppSelector((store) => store.allcourses.searchParams)

  const filteredCourses = allcourses.filter((cource) => cource.title.toLowerCase().includes(searchParams.query))
  return (
    <>
      <SearchBar

        setSearchParams={(params) => dispatch(setSearchParams(params))} />
      <Paper elevation={0}

      >
        <Box mt={5} py={8} px={2} display="flex" flexDirection="row" flexWrap="wrap">


          {filteredCourses?.map((course) => (
            <div className='all-course-list'>
              <Box
                key={course.id} p={1}>
                <AllCourseItem key={course.id} course={course} />
              </Box>
            </div>
          ))}
        </Box>
      </Paper>
    </>
  );
}
