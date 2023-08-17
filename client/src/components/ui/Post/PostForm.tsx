import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useAppDispatch } from '../../../redux/hooks';

import type { PostInfoType, PostType } from '../../../types/postType/postType';
import { addPostThunk } from '../../../redux/slices/posts/postThunk';

export default function PostForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<PostInfoType>({
    title: '',
    body: '',
    img: [],
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
        img: [...prevData.img, file], // Добавляем URL изображения в массив img
      }));
    }
  };
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Создаем объект FormData для отправки данных вместе с изображением
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('body', formData.body);
    if (formData.img) {
      formDataToSend.append('img', formData.img[0]);
    }
    try {
      await dispatch(addPostThunk(formDataToSend));
      setFormData({
        title: '',
        body: '',
        img: [],
      });

      // navigate('/profile/lk');
    } catch (error) {
      console.error('Error editing profile:', error);
    }
  };
  console.log(formData);

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
        <input type="file" name="img" accept="image/*" onChange={handleAddPhoto} />
      </div>
      <Button type="submit" variant="contained" color="primary">
        Add Post
      </Button>
    </form>
  );
}
