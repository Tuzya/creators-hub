import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useAppDispatch } from '../../../redux/hooks';

import type { PostInfoType, PostType } from '../../../types/postType/postType';
import { addPostThunk } from '../../../redux/slices/posts/postThunk';

export default function PostItem(): JSX.Element {
   const dispatch = useAppDispatch();
   const [formData, setFormData] = useState<PostInfoType>({
      title: '',
      body: '',
      img: '',
   });

   const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };

   const handleAddPhoto: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const file = e.target.files[0];
      if (file) {
         setFormData((prevData) => ({
            ...prevData,
            img: file,
         }));
      }
   };

   const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault();

      // Создаем объект FormData для отправки данных вместе с изображением
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('body', formData.body);
      formDataToSend.append('img', formData.img);

      void dispatch(addPostThunk(formDataToSend));

      // Сбрасываем форму после отправки
      setFormData({
         title: '',
         body: '',
         img: '',
      });
   };

   return (
      <form onSubmit={handleFormSubmit}>
         <div>
            <TextField
               variant="outlined"
               name="title"
               label="Title"
               value={formData.title}
               onChange={handleInputChange}
            />
            <TextField
               variant="outlined"
               name="body"
               label="Body"
               value={formData.body}
               onChange={handleInputChange}
            />
            <input type="file" accept="image/*" onChange={handleAddPhoto} />
         </div>
         <Button type="submit" variant="contained" color="primary">
            Add Post
         </Button>
      </form>
   );
}
