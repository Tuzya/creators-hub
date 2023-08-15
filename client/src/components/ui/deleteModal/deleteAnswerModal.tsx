import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import { deleteAnswerThunk } from '../../../redux/slices/test/testThunk';

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

export default function TransitionsModal({setOpen, open}): JSX.Element {
  const dispatch = useAppDispatch();
  const {courseId, questionId} = useParams()

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
        <Fade in={!! open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Удаление отменить невозможно. Вы уверены в удалении?
            </Typography>
            <Button onClick={()=> {
             void dispatch(deleteAnswerThunk
             ({courseId: Number(courseId), questionId: Number(questionId), answerId: Number(open)}));
              setOpen(0)
            }}
      >Да</Button>
            <Button onClick={() => setOpen(0) }>Нет</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}