/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Container } from '@mui/material';
import { useAppSelector } from '../../../redux/hooks';


export default function TestListItem(): JSX.Element {
  const questions = useAppSelector((store) => store.questionsAnswers.questionsAnswers);
  const course = useAppSelector((store) => store.allcourses.onecourse);

  //   if (questions.length > 0) {
  //     console.log('консоль');
  //   } else {
  //     console.log('нету');
  //   }

  const [showFinalRez, setShowFinalRez] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

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

// const questions = [
//   {
//     question: 'Wwwwwwwwwwwwwwwwwwww',
//     answers: [
//       { id: 0, answer: 'Aaaaaaaaaaaaa', isCorrect: true },
//       { id: 1, answer: 'Bbbbbbbbbbbbb', isCorrect: false },
//       { id: 2, answer: 'Ccccccccccccc', isCorrect: false },
//     ],
//   },
//   {
//     question: '111111111111',
//     answers: [
//       { id: 0, answer: '222222222222', isCorrect: false },
//       { id: 1, answer: '333333333333', isCorrect: true },
//       { id: 2, answer: '4444444444444', isCorrect: false },
//     ],
//   },
//   {
//     question: 'Eeeeeeeeeeeeeeeeeeeeeee',
//     answers: [
//       { id: 0, answer: 'Vvvvvvvvvvvvv', isCorrect: true },
//       { id: 1, answer: 'Nnnnnnnnnnnnn', isCorrect: false },
//       { id: 2, answer: 'Ooooooooooooo', isCorrect: false },
//     ],
//   },
// ];
