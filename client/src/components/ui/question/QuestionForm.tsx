import React, { useState } from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import { buttonStyle, postFormGridStyles, textFieldStyle } from '../../styles';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { addQuestionsThunk } from '../../../redux/slices/test/testThunk';

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
    <Grid container direction="row" sx={postFormGridStyles}>
      <Grid item xs={3} />
      <Grid item xs={6}>
        <Box
          py={5}
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-around"
        >
          <TextField
            size="small"
            variant="outlined"
            name="question"
            label="question"
            value={input.question}
            onKeyDown={handleKeyDown}
            onChange={changeHandler}
            sx={textFieldStyle}
          />

          <Button
            variant="outlined"
            sx={buttonStyle}
            onClick={() => {
              void dispatch(addQuestionsThunk({ courseId: Number(courseId), input }));
              setInput({ question: '' });
            }}
          >
            Записать вопрос
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
