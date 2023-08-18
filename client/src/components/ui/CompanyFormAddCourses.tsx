import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  FormControl,
  InputLabel,
  Input,
} from '@mui/material';

import { addCompanyThunk } from '../../redux/slices/coursesOne/coursesThunk';
import type { CoursesOneFormType } from '../../types/coursesOneType';
import { useAppDispatch } from '../../redux/hooks';

export default function CompanyFormAddCourses(): JSX.Element {
  const dispatch = useAppDispatch();

  const [courseData, setCourseData] = useState<CoursesOneFormType>({
    title: '',
    body: '',
  });

  const [file, setFile] = useState<File | null>(null);

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCourseData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.currentTarget.files && e.currentTarget.files.length > 0) {
      setFile(e.currentTarget.files[0]);
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', courseData.title);
    formData.append('body', courseData.body);

    if (file !== null) {
      formData.append('downloadLink', file);
    }

    try {
      await dispatch(addCompanyThunk(formData));
      setCourseData({
        title: '',
        body: '',
      });
      setFile(null);
    } catch (error) {
      console.error('An error occurred while adding the course:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h6" gutterBottom sx={{ color: 'black' }}>
        Add Course
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          name="title"
          label="Title"
          value={courseData.title}
          onChange={changeHandler}
          fullWidth
          margin="normal"
        />
        <TextField
          variant="outlined"
          name="body"
          label="Body"
          value={courseData.body}
          onChange={changeHandler}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <Input type="file" accept=".pdf" onChange={handleFileChange} />
        </FormControl>
        <Button type="submit" variant="contained">
          Add Course
        </Button>
      </form>
    </Container>
  );
}
