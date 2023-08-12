import React from 'react'
import { Box, Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';



export default function QuestionList(): JSX.Element  {
  
  const questions = useAppSelector((store) => store.questionsAnswers.questions);
  const dispatch = useAppDispatch();

  return <Box>
    {questions?.map((el) => <ul> <li key={el.id}> {el.question} </li></ul>)}
    {/* открыть формочку ответов */}
    <Button >
     Добавить ответы
   </Button>
    <Button>
      Изменить вопросы
    </Button>
   
    </Box>;
  
}
