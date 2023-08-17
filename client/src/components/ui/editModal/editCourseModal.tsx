import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import type { CoursesOneFormType } from '../../../types/coursesOneType';
import { changeCourseThunk } from '../../../redux/slices/allcourses/allCoursesThunk';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ setOpen, open }): JSX.Element {
  const dispatch = useAppDispatch();
  const onecourse = useAppSelector((store) => store.allcourses.onecourse);
  const { courseId } = useParams<string>();
  const [courseData, setCourseData] = useState<CoursesOneFormType>({
    title: onecourse?.title || '',
    body: onecourse?.body || '',
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

  const handleSubmit = async (): Promise<void> => {
    const formData = new FormData();
    formData.append('title', courseData.title);
    formData.append('body', courseData.body);

    if (file !== null) {
      formData.append('downloadLink', file);
    }

    try {
      await dispatch(changeCourseThunk({ coursesId: Number(courseId), formData }));
      setCourseData({
        title: '',
        body: '',
      });
      setFile(null);
      setOpen(0);
    } catch (error) {
      console.error('An error occurred while adding the course:', error);
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={!!open}
        onClose={() => setOpen(0)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={!!open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <form>
                <TextField
                  variant="outlined"
                  name="title"
                  label="Title"
                  value={courseData.title}
                  onChange={changeHandler}
                />
                <TextField
                  variant="outlined"
                  name="body"
                  label="Body"
                  value={courseData.body}
                  onChange={changeHandler}
                />
                <input type="file" accept=".pdf" onChange={handleFileChange} />
              </form>
            </Typography>
            <Button
              type="submit"
              onClick={() => {
                handleSubmit();
              }}
            >
              Подтвердить изменение
            </Button>
            <Button onClick={() => setOpen(0)}>X</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
