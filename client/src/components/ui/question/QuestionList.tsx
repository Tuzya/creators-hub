import React from 'react'
import { Box, Button } from '@mui/material';
import { useAppSelector } from '../../../redux/hooks';
import QuestionItem from './QuestionItem';



export default function QuestionList(): JSX.Element  {
  
  const questions = useAppSelector((store) => store.questionsAnswers.questions);


  return <Box>
    {questions?.map((el) => <QuestionItem key={el.id} question={el}/>)}
    
      
    </Box>;
  
}
