import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Checkbox, Grid, TextField } from '@mui/material';
import { useAppDispatch } from '../../../redux/hooks';
import { buttonStyle, postFormGridStyles, textFieldStyle } from '../../styles';
import { addAnswersThunk } from '../../../redux/slices/test/testThunk';

export default function AnswerForm(): JSX.Element {
  const [input, setInput] = useState({ answer: '', isCorrect: false });
  const dispatch = useAppDispatch();
  const { courseId } = useParams<string>();
  const { questionId } = useParams<string>();

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e): void => {
    if (e.key === 'Enter') {
      void dispatch(
        addAnswersThunk({ courseId: Number(courseId), questionId: Number(questionId), input }),
      );
      setInput({ answer: '', isCorrect: false });
    }
  };

  return (
    <Grid container direction="row">
      <Grid item xs={3} />
      <Grid item xs={6}>
        <Box
        className='answer-box'
          >
          <TextField
            size="small"
            className='question-text'
            name="answer"
            label="введите ответ"
            value={input.answer}
            onKeyDown={handleKeyDown}
            onChange={changeHandler}
            sx={textFieldStyle}
          />

          <button
            type='button'
            className='question-button'
            onClick={() => {
              void dispatch(
                addAnswersThunk({
                  courseId: Number(courseId),
                  questionId: Number(questionId),
                  input,
                }),
              );
              setInput({ answer: '', isCorrect: false });
            }}
          >
            Добавить ответ
          </button>
        </Box>
      </Grid>
    </Grid>
  );
}
