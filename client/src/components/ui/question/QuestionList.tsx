import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import QuestionItem from './QuestionItem';
import { useAppSelector } from '../../../redux/hooks';

export default function QuestionList(): JSX.Element {
  const questions = useAppSelector((store) => store.questionsAnswers.questions);
 
    return (
    <Box>
      {questions.map((el) => (
        <QuestionItem key={el.id} question={el} />
      ))}
      <Link to='/company/allcourses'>
    <Button>
     Перейти на страницу курсов
    </Button>
    </Link>
    </Box>
  );
}
