import React from 'react'
import { Box } from '@mui/material';
import { useAppSelector } from '../../../redux/hooks';

export default function AnswerList(): JSX.Element {
 
    const answers = useAppSelector((store) => store.questionsAnswers.answers);

    return <Box>{answers?.map((el) => <ul> <li key={el.id}> {el.answer} </li></ul>)}</Box>;
  
}
