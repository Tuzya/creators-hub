import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { cardStyle } from '../../styles';
import type { YourProfileType } from '../../../types/profileType/profileTypes';
import { useAppDispatch } from '../../../redux/hooks';

type ProfileItemCardProps = {
  profile: YourProfileType | null; //  тип данных  профиля
};

export default function ProfileItemCard({ profile }: ProfileItemCardProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <Card sx={cardStyle}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Profile Details
        </Typography>
        <Typography variant="h5" component="div">
          {profile?.name}
        </Typography>

        {/* Другие поля профиля */}
      </CardContent>
      {/* Кнопки для редактирования, удаления и т.д. */}
      <Button variant="outlined" color="primary" size="small" sx={{ mr: 2 }}>
        Пригласить
      </Button>
    </Card>
  );
}

// onClick={() => void dispatch()(profile.id)}
