import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import CompanyFormAddCourses from '../../ui/CompanyFormAddCourses';
import ProfileList from '../../ui/profileForCompany/ProfileList';
import { useAppDispatch } from '../../../redux/hooks';
import {
  getOnePersonProfileThunk,
  getPersonInfoThunk,
  getProfileThunk,
} from '../../../redux/slices/profiles/profileThunk';
import { getAllCoursesThunk } from '../../../redux/slices/allcourses/allCoursesThunk';

import PostForm from '../../ui/Post/PostForm';
// import { getPostThunk } from '../../../redux/slices/posts/postThunk';

export default function CompanyPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAllCoursesThunk());
    void dispatch(getProfileThunk());
  }, []);

  return (
    <Container>
      <CompanyFormAddCourses /> Добрый день
      <PostForm />
      <ProfileList />
    </Container>
  );
}
