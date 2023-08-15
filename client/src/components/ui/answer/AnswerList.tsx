import React, { useState } from 'react';
import { Box, Button, Checkbox, Modal } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { changeStatusAnswerThunk, deleteAnswerThunk } from '../../../redux/slices/test/testThunk';
import DeleteModal from '../deleteModal/deleteAnswerModal';


export default function AnswerList(): JSX.Element {
  const answers = useAppSelector((store) => store.questionsAnswers.answers);
  const dispatch = useAppDispatch();
  const {courseId, questionId} = useParams();
  const [open, setOpen] = useState(0);
  

  return (
    <>
    <DeleteModal setOpen={setOpen} open={open}/>
    <Box>
      
    <h3>Установите правильный ответ в чекбоксе</h3>
    {answers?.map((el) => <li key={el.id}> {el.answer} 
    <Checkbox  
    // onKeyDown={}
    onClick={()=> 
    void dispatch(changeStatusAnswerThunk({courseId: Number(courseId), questionId: Number(questionId), answerId: Number(el.id)}))}
    />
    
    <DeleteForeverIcon 
    onClick={()=> {
      setOpen(el.id)}
    }/>
      </li>)}
      
    <Link to='/company/allcourses/:courseId/addQuestion'>
    <Button>
     Перейти на страницу вопросов
    </Button>
    </Link>
   
    </Box>
    </>
    )
  
}
