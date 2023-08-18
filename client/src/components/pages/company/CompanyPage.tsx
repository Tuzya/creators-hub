import { Button, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
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
  const [activeForm, setActiveForm] = useState<'company' | 'post'>('company');
  useEffect(() => {
    void dispatch(getAllCoursesThunk());
    void dispatch(getProfileThunk());
  }, []);

  return (
    <Container>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Button
          variant={activeForm === 'company' ? 'contained' : 'outlined'}
          size="large"
          onClick={() => setActiveForm('company')}
          style={{ marginRight: '10px', backgroundColor: '#FFA500', color: 'white' }}
        >
          Add Course
        </Button>
        <Button
          variant={activeForm === 'post' ? 'contained' : 'outlined'}
          size="large"
          onClick={() => setActiveForm('post')}
          style={{ backgroundColor: '#FFA500', color: 'white' }}
        >
          Add Post
        </Button>
      </div>

      {activeForm === 'company' && (
        <div>
          <CompanyFormAddCourses />
        </div>
      )}

      {activeForm === 'post' && (
        <div>
          <PostForm />
        </div>
      )}
      <ProfileList />
    </Container>
  );
}
