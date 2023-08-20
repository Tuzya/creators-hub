import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { useAppSelector } from '../../../redux/hooks';
import PersonLoggedInfoItem from './PersonLoggedInfoItem';

export default function PersonProfileLoggedItem(): JSX.Element {
  const profile = useAppSelector((store) => store.profile.oneProfile);
  const questions = useAppSelector((store) => store.questionsAnswers.questionsAnswers);
  const person = useAppSelector((store) => store.profile.personLoggedInfo);
  console.log(profile);
  // Calculate completion percentage
  const completedCount = questions.reduce((count, question) => {
    if (question.Answers.every((answer) => answer.isCorrect)) {
      count += 1;
    }
    return count;
  }, 0);

  const completionPercentage = questions.length > 0 ? (completedCount / questions.length) * 100 : 0;

  return (
    <Card
      sx={{
        display: 'flex',
        width: '1000px',
        backgroundColor: '#383636',
        margin: '0 auto',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div style={{ padding: '20px' }}>
        {person?.photo && (
          <img
            src={`http://localhost:3001/public/img/${person?.photo}`}
            alt="Ваше Фото"
            style={{ width: '150px', height: '150px', borderRadius: '50%' }}
          />
        )}
      </div>
      <CardContent style={{ flexGrow: 1 }}>
        <Typography sx={{ fontSize: 24, fontFamily: 'Roboto', color: 'white' }} gutterBottom>
          {profile?.username}
        </Typography>
        <Link to="/profile/lk/edit" style={{ color: 'white' }}>
          <EditIcon />
        </Link>
        <Typography variant="h6" sx={{ fontSize: 18, fontFamily: 'Roboto', color: 'white' }}>
          Ваш Город: {person?.city}
        </Typography>
        <Typography variant="h6" sx={{ fontSize: 18, fontFamily: 'Roboto', color: 'white' }}>
          Ваша Компания: {person?.companies}
        </Typography>
        <Typography variant="h6" sx={{ fontSize: 18, fontFamily: 'Roboto', color: 'white' }}>
          Ваш Телефон: {person?.phone}
        </Typography>
        {/* <Typography variant="h6" sx={{ fontSize: 18, fontFamily: 'Roboto', color: 'white' }}>
          Дата Рождения: {person?.birthDate}
        </Typography> */}
        <Typography variant="h6" sx={{ fontSize: 18, fontFamily: 'Roboto', color: 'white' }}>
          Ваш Пол: {person?.sex}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontSize: 18, fontFamily: 'Roboto', color: 'white', marginTop: '20px' }}
        >
          Любимая фраза: {person?.about}
        </Typography>
      </CardContent>
    </Card>
  );
}
