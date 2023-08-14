import React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import type { QuestionModelType } from '../../../types/testTypes';

type QuestionItemProps = {
  question: QuestionModelType;
};
export default function QuestionItem({ question }: QuestionItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { courseId } = useParams();

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
        
          {question.question}
        </Typography>
        <Typography variant="h5" component="div" />
      </CardContent>
      <CardActions>
        <Button size="small">Изменить вопрос</Button>

        <Link to={`/company/allcourses/${Number(courseId)}/addQuestion/${question.id}/addAnswers`}>
          <Button size="small">Добавить/Изменить Ответы</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
