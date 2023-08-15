import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box, Button, Checkbox, Grid, TextField } from '@mui/material';
import { useAppDispatch } from '../../../redux/hooks';
import { buttonStyle, postFormGridStyles, textFieldStyle } from '../../styles';
import { addAnswersThunk } from '../../../redux/slices/test/testThunk';

export default function AnswerForm(): JSX.Element {
  const [input, setInput] = useState({ answer: '', isCorrect: false });
  const dispatch = useAppDispatch();
  const {courseId} = useParams<string>();
  const {questionId} = useParams<string>();

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const detectKeyDown = (e) => {
    if(e.key === 'enter') {
console.log('Cooooool');

    }
      }
  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true)
  }, [])


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
            name="answer"
            label="answer"
            value={input.answer}
            onChange={changeHandler}
            sx={textFieldStyle}
          />
          
                  
          <Button
            variant="outlined"
            sx={buttonStyle}
            onClick={() => {
              void dispatch(addAnswersThunk({courseId: Number(courseId), questionId:Number(questionId), input}));
              setInput({ answer: '', isCorrect: false });
            }}
          >
            Добавить ответ
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}
