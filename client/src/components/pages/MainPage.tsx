import React, { useEffect } from 'react';
import { Container } from '@mui/material';

import PostList from '../ui/Post/PostList';
import { useAppDispatch } from '../../redux/hooks';
import { getPostThunk } from '../../redux/slices/posts/postThunk';


export default function MainPage(): JSX.Element {
  const dispatch = useAppDispatch()
  // useEffect(() => {
  //   void dispatch(getPostThunk());
  // }, []);

  return (
    <Container>


      <div>1 eeeeeeeeeeeeq</div>
      {/* <PostList /> */}
    </Container>
  );
}
