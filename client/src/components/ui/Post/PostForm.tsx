import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import { useAppDispatch } from '../../../redux/hooks';

import type { PostInfoType, PostType } from '../../../types/postType/postType';
import { addPostThunk } from '../../../redux/slices/posts/postThunk';
import { textFieldStyle } from '../../styles/styles';
import '../../styles/index.css';

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
        img: [...prevData.img, file],
      }));
    }
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

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
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <Container>
      <form onSubmit={handleFormSubmit}>
        <TextField
          variant="outlined"
          name="title"
          label="Название"
          value={formData.title}
          onChange={handleInputChange}
          sx={textFieldStyle}
          fullWidth
          margin="normal"
        />
        <TextField
          variant="outlined"
          name="body"
          label="Описание"
          value={formData.body}
          onChange={handleInputChange}
          sx={textFieldStyle}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <Box display="flex" alignItems="center">
          <input type="file" name="img" accept="image/*" onChange={handleAddPhoto} />
          <Button type="submit" variant="contained" id="butId2" color="primary">
            Добавить
          </Button>
        </Box>
      </form>
    </Container>
  );
}
