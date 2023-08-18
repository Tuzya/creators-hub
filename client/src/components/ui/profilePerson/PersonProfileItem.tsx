import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CircularProgress } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hooks';
import PersonInfoItem from './PersonInfoItem';

export default function PersonProfileItem(): JSX.Element {
  const profile = useAppSelector((store) => store.profile.onePersonProfile);
  const person = useAppSelector((store) => store.profile.personInfo);

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
        <Typography variant="h5" component="div" />
        <Typography sx={{ fontSize: 18, fontFamily: 'Roboto', color: 'white' }} variant="subtitle1">
          Ваш Город: {person?.city}
        </Typography>
        <Typography sx={{ fontSize: 18, fontFamily: 'Roboto', color: 'white' }} variant="subtitle1">
          Ваша Компания: {person?.companies}
        </Typography>
        <Typography sx={{ fontSize: 18, fontFamily: 'Roboto', color: 'white' }} variant="subtitle1">
          Ваш Телефон: {person?.phone}
        </Typography>
        {/* <Typography sx={{ fontSize: 18, fontFamily: 'Roboto', color: 'white' }} variant="subtitle1">
          Дата Рождения: {person?.birthDate}
        </Typography> */}
        <Typography sx={{ fontSize: 18, fontFamily: 'Roboto', color: 'white' }} variant="subtitle1">
          Ваш Пол: {person?.sex}
        </Typography>
        <Typography
          sx={{ fontSize: 18, fontFamily: 'Roboto', color: 'white', marginTop: '20px' }}
          variant="subtitle1"
        >
          Любимая фраза: {person?.about}
        </Typography>
      </CardContent>
    </Card>
  );
}
