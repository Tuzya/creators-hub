/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Container } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';


export default function TestListItem(): JSX.Element {
  const questions = useAppSelector((store) => store.questionsAnswers.questionsAnswers);
  const course = useAppSelector((store) => store.allcourses.onecourse);
  const dispatch = useAppDispatch();
  const [showFinalRez, setShowFinalRez] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // useEffect(() => {
  //   if(showFinalRez && (score/questions.length)*100 > 74) {
  //     updateCourseStatus()
  //   }
    
  // })

  const elClicked = (isCorrect: boolean): void => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowFinalRez(true);
    }
  };


  return (
    <Container>
      <div className="test">
        <h1>{course?.title}</h1>

        {showFinalRez ? (
          <div className="final-rez">
            <h2>Ваш результат {score}</h2>
            <h2>
              {' '}
              {score} из {questions.length}
              ({Math.floor((score/questions.length)*100)}%) 
              {((score/questions.length)*100) > 74 ? <h4>Вы прошли!</h4> : <h4>Вы не прошли!</h4>}
            </h2>
            {/* редирект в личный кабинет */}
            <Link to="/profile/lk">
              <Button className="test-button"> Закрыть </Button>
            </Link>
          </div>
        ) : (
          <div className="question-card">
            
            <h2>
              Вопрос {currentQuestion + 1} из {questions.length}
            </h2>
            
            {questions.length > 0 && <h2>{questions[currentQuestion].question}</h2>}

            <ul>
              <div className="li-question">
                {questions.length > 0 &&
                  questions[currentQuestion].Answers.map((el) => (
                    <li
                      onClick={() => elClicked(el.isCorrect)}
                      key={el.id}
                      style={{ background: 'grey' }}
                    >
                      {el.answer}
                      <Checkbox  />
                    </li>
                  ))}
              </div>
            </ul>
          </div>
        )}
      </div>
    </Container>
  );
}

