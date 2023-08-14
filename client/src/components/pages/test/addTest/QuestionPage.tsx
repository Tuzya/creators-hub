import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QuestionList from '../../../ui/question/QuestionList';
import QuestionForm from '../../../ui/question/QuestionForm';
import { useAppDispatch } from '../../../../redux/hooks';
import { getAllQuestionsThunk } from '../../../../redux/slices/test/testThunk';

export default function QuestionPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { courseId } = useParams();
  useEffect(() => {
    void dispatch(getAllQuestionsThunk({ courseId: Number(courseId) }));
  }, []);
  return (
    <div>
      <QuestionForm />
      <QuestionList />
    </div>
  );
}
