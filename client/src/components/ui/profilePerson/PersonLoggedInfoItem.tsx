import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);
export default function PersonLoggedInfoItem(): JSX.Element {
  const dispatch = useAppDispatch();

  const person = useAppSelector((store) => store.profile.personLoggedInfo);
  console.log('Рабочий', person);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {person?.photo && (
          <img
            src={`http://localhost:3001/public/img/${person?.photo}`}
            alt="Ваше Фото"
            style={{ width: '150px', height: '150px' }}
          />
        )}
        <Typography variant="h5" sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Ваш Город: {person?.city}
        </Typography>
        <Typography variant="h5" sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Ваша Компания: {person?.companies}
        </Typography>
        <Typography variant="h5" sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Ваш Телефон: {person?.phone}
        </Typography>
        <Typography variant="h5" sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Дата Рождения: {person?.birthDate}
        </Typography>
        <Typography variant="h5" sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Ваш Пол: {person?.sex}
        </Typography>
        <Typography variant="h5" sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          О Себе: {person?.about}
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />a benevolent smile
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
