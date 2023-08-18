/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Typography } from '@material-tailwind/react';
import './carousel-styles.css';
import { Container } from '@mui/material';
import type { PostType } from '../../../types/postType/postType';
import { useAppSelector } from '../../../redux/hooks';

type PostItemProps = {
  post: PostType;
};

export default function PostItem({ post }: PostItemProps): JSX.Element {
  return (
    <div style={{ backgroundColor: '#e5e5e5' }}>
      <img
        src={`http://localhost:3001/public${post.img}`}
        alt={`Image ${post.id}`}
        className="carousel-image"
      />
      <div className="carousel-overlay">
        <div className="w-3/4 text-center md:w-2/4">
          <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
            {post.title}
          </Typography>
          <Typography variant="lead" color="white" className="mb-12 opacity-80">
            <h2>{post.body}</h2>
          </Typography>
        </div>
      </div>
    </div>
  );
}
