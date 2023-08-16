import React, { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Carousel } from 'react-responsive-carousel';
import type { PostType } from "../../../types/postType/postType";
import { cardStyle } from "../../styles";
import 'react-responsive-carousel/lib/styles/carousel.min.css';



type PostItemProps = {
   post: PostType;
};
export default function PostItem({ post }: PostItemProps): JSX.Element {
   console.log('post:', post);
   console.log('post.img:', post?.img);
   console.log(post.img)
   return (

      <Card sx={cardStyle}>
         <CardContent>
            <Typography variant="h5" component="div">
               {post?.title}
            </Typography>
            <Typography variant="body2" component="div">
               {post?.body}
            </Typography>
            {post?.img && (
               <img
                  src={`http://localhost:3001/public${post?.img}`}
                  alt="Ваше Фото"
                  style={{ width: '150px', height: '150px' }}
               />
            )}
            {Array.isArray(post?.img) && post.img.length > 0 && (
               <Carousel />
            )}
         </CardContent>
      </Card >
   );
}

"console.log(rabota"

{/* <CardContent>
   {person?.photo && (
      <img
         src={`http://localhost:3001/public/img/${person?.photo}`}
         alt="Ваше Фото"
         style={{ width: '150px', height: '150px' }}
      />
   )} */}



