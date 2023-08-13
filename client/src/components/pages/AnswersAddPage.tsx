import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AnswerForm from '../ui/answer/AnswerForm';
import AnswerList from '../ui/answer/AnswerList';
import { useAppDispatch } from '../../redux/hooks';
import { getAllAnswerThunk } from '../../redux/slices/test/testThunk';

export default function AnswersAddPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { courseId, questionId } = useParams();
  useEffect(() => {
    void dispatch(
      getAllAnswerThunk({ courseId: Number(courseId), questionId: Number(questionId) }),
    );
  }, []);
  return (
    <div>
      <AnswerForm />
      <AnswerList />
    </div>
  );
}
