import React from "react";
import { Typography } from "@material-tailwind/react";
import "./carousel-styles.css";
import type { PostType } from "../../../types/postType/postType";


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