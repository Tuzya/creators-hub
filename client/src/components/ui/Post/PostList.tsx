import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PostItem from "./PostItem";
import "./carousel-styles.css"; // Импорт стилей
import { useAppSelector } from "../../../redux/hooks";

export default function PostList(): JSX.Element {
   const posts = useAppSelector((state) => state.posts.posts);
   const [activeIndex, setActiveIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setActiveIndex((prevIndex) =>
            (prevIndex + 1) % posts.length
         );
      }, 5000); // миллисекунд = 3 секунд

      return () => clearInterval(interval); // Очистка интервала при размонтировании
   }, [posts.length]);

   return (
      <Box className="carousel-container">
         <Carousel
            showStatus={false}
            showThumbs={false}
            selectedItem={activeIndex} // Установка активного элемента
            stopOnHover={false} // Отключение остановки при наведении
            infiniteLoop={false} // Отключение бесконечного цикла
         // swipeable={false} // Отключение прокрутки путем свайпа
         >
            {posts.map((post) => (
               <PostItem key={post.id} post={post} />
            ))}
         </Carousel>
      </Box>
   );
}
