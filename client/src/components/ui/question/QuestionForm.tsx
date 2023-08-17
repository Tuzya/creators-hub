import React, { useState } from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { addQuestionsThunk } from '../../../redux/slices/test/testThunk';
import './QuestionStyles.css'

export default function QuestionForm(): JSX.Element {
  const [input, setInput] = useState({ question: '' });
  const dispatch = useAppDispatch();
  const company = useAppSelector((store) => store.company);
  const { courseId } = useParams<string>();

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e): void => {
    if (e.key === 'Enter') {
      void dispatch(addQuestionsThunk({ courseId: Number(courseId), input }));
      setInput({ question: '' });
    }
  };
  return (
    <Grid container direction="row"
    className='question-form-container' >
      <Grid item xs={3} />
      <Grid item xs={10}>
        <Box className='question-box'
           >
          <TextField
            className='question-text'
            name="question"
            label="введите вопрос"
            value={input.question}
            onKeyDown={handleKeyDown}
            onChange={changeHandler}
            />

          <button
          type='button'
          className='question-button'
            onClick={() => {
              void dispatch(addQuestionsThunk({ courseId: Number(courseId), input }));
              setInput({ question: '' });
            }}
          >
            Записать вопрос
          </button>
        </Box>
      </Grid>
    </Grid>
  );
}
