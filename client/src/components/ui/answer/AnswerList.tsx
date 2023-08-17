import React, { useState } from 'react';
import { Box, Button, Checkbox, Modal } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { changeStatusAnswerThunk, deleteAnswerThunk } from '../../../redux/slices/test/testThunk';
import DeleteModal from '../deleteModal/deleteAnswerModal';
import './AnswerStyle.css'


export default function AnswerList(): JSX.Element {
  const answers = useAppSelector((store) => store.questionsAnswers.answers);
  const dispatch = useAppDispatch();
  const {courseId, questionId} = useParams();
  const [open, setOpen] = useState(0);
  

  return (
    <>
    <DeleteModal setOpen={setOpen} open={open}/>
    <Box className='answer-box'>
      
    <h3>Установите правильный ответ в чекбоксе</h3>
    {answers?.map((el) => <li className='li-answer' key={el.id}> {el.answer} 
    <Checkbox  
    className='answer-checkbox'
    onClick={()=> 
    void dispatch(changeStatusAnswerThunk({courseId: Number(courseId), questionId: Number(questionId), answerId: Number(el.id)}))}
    />
    
    <DeleteForeverIcon 
    onClick={()=> {
      setOpen(el.id)}
    }/>
      </li>)}
      
    <Link to={`/company/allcourses/${Number(courseId)}/addQuestion`}>
    <button
          type='button'
          className='question-button'>
     Перейти на страницу вопросов
    </button>
    </Link>
   
    </Box>
    </>
    )
  
}
