import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import QuestionItem from './QuestionItem';
import { useAppSelector } from '../../../redux/hooks';
import './QuestionStyles.css'

export default function QuestionList(): JSX.Element {
  const questions = useAppSelector((store) => store.questionsAnswers.questions);
 
    return (
    <Box className='question-list-box'>
      {questions.map((el) => (
        <QuestionItem key={el.id} question={el} />
      ))}
      <Link to='/company/allcourses'>
      <button
          type='button'
          className='question-button'>
     Перейти на страницу курсов
    </button>
    </Link>
    </Box>
  );
}
