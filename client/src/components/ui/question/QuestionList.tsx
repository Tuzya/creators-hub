import React from 'react';
import { Box, Button } from '@mui/material';
import QuestionItem from './QuestionItem';
import { useAppSelector } from '../../../redux/hooks';
import { Link } from 'react-router-dom';

export default function QuestionList(): JSX.Element {
  const questions = useAppSelector((store) => store.questionsAnswers.questions);
  console.log(questions);

  return (
    <Box>
      {questions.map((el) => (
        <QuestionItem key={el.id} question={el} />
      ))}
      <Link to='/company/allcourses/:courseId'>
    <Button>
     Перейти на страницу курса
    </Button>
    </Link>
    </Box>
  );
}
