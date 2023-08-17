import React from 'react';
import { Box } from '@mui/material';
import { useAppSelector } from '../../../redux/hooks';
import PostItem from './PostItem';

export default function PostList(): JSX.Element {
  const posts = useAppSelector((state) => state.posts.posts);

  return (
    <Box mt={1} py={2} px={2} display="flex" flexDirection="row" flexWrap="wrap">
      {posts.map((post) => (
        <Box key={post.id} p={1}>
          <PostItem post={post} />
        </Box>
      ))}
    </Box>
  );
}
