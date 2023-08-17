import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import type { QuestionModelType } from '../../../types/testTypes';
import { changeQuestionThunk, deleteQuestionThunk } from '../../../redux/slices/test/testThunk';
import { textFieldStyle } from '../../styles';
import DeleteModal from '../deleteModal/deleteQuestionModal';
import './QuestionStyles.css'

type QuestionItemProps = {
  question: QuestionModelType;
};
export default function QuestionItem({ question }: QuestionItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { courseId } = useParams();
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState({ question: question.question || '' });
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [open, setOpen] = useState(0);

  return (
    <>
    <DeleteModal setOpen={setOpen} open={open}/>
    <Card  sx={{ minWidth: 275 }}>
      <div className='question-one'>
      <CardContent >
        <Typography variant="h5" component="div">
        
          {question.question}
        </Typography>
        <Typography variant="h5" component="div" />
      </CardContent>
      <CardActions>
        <button
        className='question-item-button'
        type='button'
        size="small"
        onClick={() => 
          setEdit(true)
         
      }
        >Изменить вопрос</button>
        <br />
        {edit && (
          <>
          <TextField
            className='edit-question-form'
            size="small"
            variant="outlined"
            name="question"
            label="новый вопрос"
            value={input.question}
            onChange={changeHandler}
            
          />
          <button
          className='question-item-button'
          type='button'
          size="small"
          onClick={() => {
            void dispatch(changeQuestionThunk({courseId: Number(courseId), questionId: Number(question.id), input}));
            setInput({ question: '' });
            setEdit(false)
          }
          }
            
            >Подтвердить изменения</button>
          </>
        )

        }
        <button
        className='question-item-button'
        type='button'
        size="small"
        onClick={() => 
          setOpen(question.id)
        // void dispatch(deleteQuestionThunk({courseId: Number(courseId), questionId: Number(question.id)}))
      }>Удалить вопрос</button>
        <Link to={`/company/allcourses/${Number(courseId)}/addQuestion/${question.id}/addAnswers`}>
          <button 
          className='question-item-button' id='question-item-button-answers'
          type='button'
          size="small">Ответы: добавление/удаление</button>
        </Link>
      </CardActions>
      
        </div>
    </Card>
    </>
  );
}
