import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import TestListItem from '../../ui/test/TestListItem';
import { useAppDispatch } from '../../../redux/hooks';
import { getQuestionsAnswersThunk } from '../../../redux/slices/test/testThunk';
// import ErrorBoundary from './ErrorBoundary';

export default function TestPage(): JSX.Element {
  const courseId = useParams<string>();
  // const questionsanswers = useAppSelector((store) => store.questionsAnswers.questionsAnswers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getQuestionsAnswersThunk(courseId));
  }, []);
  return (
    <Container>
      <TestListItem />
    </Container>
  );
}
