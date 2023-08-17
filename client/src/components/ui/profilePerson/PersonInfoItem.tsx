import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import CakeIcon from '@mui/icons-material/Cake';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import InfoIcon from '@mui/icons-material/Info';
import { useAppSelector } from '../../../redux/hooks';

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

const styles = {
  icon: {
    verticalAlign: 'middle',
    marginRight: '5px',
  },
};

export default function PersonInfoItem(): JSX.Element {
  const person = useAppSelector((store) => store.profile.personInfo);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {person?.photo && (
          <img src={`http://localhost:3001/public/img/${person?.photo}`} alt="Ваше Фото " style={{ width: '150px', height: '150px' }} />
        )}
        <Typography variant="h5" sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          <LocationOnIcon sx={styles.icon} /> Ваш Город: {person?.city}
        </Typography>
        <Typography variant="h5" sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          <BusinessIcon sx={styles.icon} /> Ваша Компания: {person?.companies}
        </Typography>
        <Typography variant="h5" sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          <PhoneIcon sx={styles.icon} /> Ваш Телефон: {person?.phone}
        </Typography>
        <Typography variant="h5" sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          <CakeIcon sx={styles.icon} /> Дата Рождения: {person?.birthDate}
        </Typography>
        <Typography variant="h5" sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          {person?.sex === 'male' ? <MaleIcon sx={styles.icon} /> : <FemaleIcon sx={styles.icon} />} Ваш Пол: {person?.sex === 'male' ? 'Мужской' : 'Женский'}
        </Typography>
        <Typography variant="h5" sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          <InfoIcon sx={styles.icon} /> О Себе: {person?.about}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Узнать больше</Button>
      </CardActions>
    </Card>
  );
}
