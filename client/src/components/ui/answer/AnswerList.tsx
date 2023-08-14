import React from 'react';
import { Box, Button, Checkbox } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { changeStatusAnswerThunk, deleteAnswerThunk } from '../../../redux/slices/test/testThunk';

export default function AnswerList(): JSX.Element {
  const answers = useAppSelector((store) => store.questionsAnswers.answers);
  const dispatch = useAppDispatch();
  const {courseId, questionId} = useParams()
 

  return <Box>
    <h3>Установите правильный ответ в чекбоксе</h3>
    {answers?.map((el) => <li key={el.id}> {el.answer} 
    <Checkbox  onClick={()=> void dispatch(changeStatusAnswerThunk({courseId: Number(courseId), questionId: Number(questionId), answerId: Number(el.id)}))}/>
    {/* <Checkbox  
    defaultChecked color="default" 
    onClick={()=> void dispatch(deleteAnswerThunk
    ({courseId: Number(courseId), questionId: Number(questionId), answerId: Number(el.id)}))}/>  */}
      </li>)}
    <Link to='/company/allcourses/:courseId/addQuestion'>
    <Button>
     Перейти на страницу вопросов
    </Button>
    </Link>
    </Box>;
}
