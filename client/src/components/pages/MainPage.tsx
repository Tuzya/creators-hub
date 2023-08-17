import React, { useEffect } from 'react';
import { Box } from '@mui/material'; // Импортируем Box вместо Container

import PostList from '../ui/Post/PostList';
import { useAppDispatch } from '../../redux/hooks';
import { getPostThunk } from '../../redux/slices/posts/postThunk';

export default function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getPostThunk());
  }, []);

  return (
    <Box>
      <PostList />
    </Box>
  );
}
