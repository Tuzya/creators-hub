import React from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useAppDispatch } from '../../../redux/hooks';
import type { QuestionModelType } from '../../../types/testTypes';

type QuestionItemProps = {
    question: QuestionModelType;
  };
export default function QuestionItem({question}: QuestionItemProps): JSX.Element {
    const dispatch = useAppDispatch();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      
        <Typography variant="h5" component="div">
          {question.question}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button
          size="small"
          >
          Изменить вопрос
        </Button>
        <Button
          size="small"
        //   открыть форму ответов
          >
          Добавить ответы
        </Button>
      </CardActions>
    </Card>
  )
}
