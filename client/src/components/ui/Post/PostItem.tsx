import { Typography } from "@material-tailwind/react";
import "./carousel-styles.css";
import type { PostType } from "../../../types/postType/postType";

import React, { useState } from 'react';
import { Card, CardContent } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import { cardStyle } from '../../styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type PostItemProps = {
   post: PostType;
};

export default function PostItem({ post }: PostItemProps): JSX.Element {
   return (
      <div className="carousel-slide">
         <img
            src={`http://localhost:3001/public${post.img}`}
            alt={`Image ${post.id}`}
         />
         <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
               <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
               >
                  {post.title}
               </Typography>
               <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
               >
                  {post.body}
               </Typography>
            </div>
         </div>
      </div>
   );
}
//   return (
//     <Card sx={cardStyle}>
//       <CardContent>
//         <Typography variant="h5" component="div">
//           {post?.title}
//         </Typography>
//         <Typography variant="body2" component="div">
//           {post?.body}
//         </Typography>
//         {post?.img && (
//           <img
//             src={`http://localhost:3001/public${post?.img}`}
//             alt="Ваше Фото"
//             style={{ width: '150px', height: '150px' }}
//           />
//         )}
//         {Array.isArray(post?.img) && post.img.length > 0 && <Carousel />}
//       </CardContent>
//     </Card>
//   );
// }

('console.log(rabota');

{
   /* <CardContent>
    {person?.photo && (
       <img
          src={`http://localhost:3001/public/img/${person?.photo}`}
          alt="Ваше Фото"
          style={{ width: '150px', height: '150px' }}
       />
    )} */
}
