import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getQuestionsAnswersThunk } from '../../../redux/slices/test/testThunk';


export default function TestPage(): JSX.Element {
  const courseId = useParams();
  // const questionsanswers = useAppSelector((store) => store.questionsAnswers.questionsAnswers);

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getQuestionsAnswersThunk({courseId: Number(courseId)}))
  })

  const questions = [
{
  question: 'Wwwwwwwwwwwwwwwwwwww',
  answers: [
    {id:0, answer: 'Aaaaaaaaaaaaa', isCorrect: true},
    {id:1, answer: 'Bbbbbbbbbbbbb', isCorrect: false},
    {id:2, answer: 'Ccccccccccccc', isCorrect: false},
  ],
},
{
  question: '111111111111',
  answers: [
    {id:0, answer: '222222222222', isCorrect: false},
    {id:1, answer: '333333333333', isCorrect: true},
    {id:2, answer: '4444444444444', isCorrect: false},
  ],
},
{
  question: 'Eeeeeeeeeeeeeeeeeeeeeee',
  answers: [
    {id:0, answer: 'Vvvvvvvvvvvvv', isCorrect: true},
    {id:1, answer: 'Nnnnnnnnnnnnn', isCorrect: false},
    {id:2, answer: 'Ooooooooooooo', isCorrect: false},
  ],
},
  ]
  const [showFinalRez, setShowFinalRez] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const elClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score+1);
    }
    if(currentQuestion+1<questions.length) {

      setCurrentQuestion(currentQuestion+1);
    } else {
      setShowFinalRez(true)
    }
  }

  return (
<div className='test'>
  <h1>Курс(тема)</h1>
  
{showFinalRez ? (
  <div className='final-rez'>
<h2>Ваш результат {score}</h2>
<h2> {score} из {questions.length}</h2>
{/* редирект в личный кабинет */}
<Link to='/profile/lk'>
<button className='test-button'>Закрыть</button>
</Link>
</div>
) : (
  <div className='question-card'>
    <h2>Текущие баллы: {score}</h2>
<h2>Вопрос {currentQuestion + 1} из {questions.length}</h2>
  <h2>{questions[currentQuestion].question}</h2>

<ul>
  
  <li className='li-question'>{questions[currentQuestion].answers.map((el) => (
     <li onClick={() => elClicked(el.isCorrect)} key={el.id}>{el.answer}</li>
    ))}</li> 
  </ul>
</div> 
)}
</div>

  )
}
