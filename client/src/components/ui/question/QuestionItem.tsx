import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import type { QuestionModelType } from '../../../types/testTypes';
import { changeQuestionThunk } from '../../../redux/slices/test/testThunk';
import { textFieldStyle } from '../../styles';

type QuestionItemProps = {
  question: QuestionModelType;
};
export default function QuestionItem({ question }: QuestionItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { courseId } = useParams();
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState({ question: '' });
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
        
          {question.question}
        </Typography>
        <Typography variant="h5" component="div" />
      </CardContent>
      <CardActions>
        <Button 
        size="small"
        onClick={() => 
          setEdit(true)
        // 
      }
        >Изменить вопрос</Button>
        <br />
        {edit && (
          <>
          <TextField
            size="small"
            variant="outlined"
            name="question"
            label="question"
            value={input.question}
            onChange={changeHandler}
            sx={textFieldStyle}
          />
          <Button
          size="small"
          onClick={() => {
            void dispatch(changeQuestionThunk({courseId: Number(courseId), questionId: Number(question.id), input}));
            setInput({ question: '' });
            setEdit(false)
          }
          }
            
            >Edit</Button>
          </>
        )

        }

        <Link to={`/company/allcourses/${Number(courseId)}/addQuestion/${question.id}/addAnswers`}>
          <Button size="small">Добавить/Изменить Ответы</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
