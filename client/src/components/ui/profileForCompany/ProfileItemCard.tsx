import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { cardStyle } from '../../styles';
import type {} from '../../../types/profileType/profileTypes';
import { useAppDispatch } from '../../../redux/hooks';
import type { UserModelType } from '../../../types/userTypes';

type ProfileItemCardProps = {
  profile: UserModelType | null; //  тип данных  профиля
};

export default function ProfileItemCard({ profile }: ProfileItemCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { profileId } = useParams();

  return (
    <Card sx={cardStyle}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Profile Details
        </Typography>
        <Link to={`/profile/lk/${profile.id}`}>
          <Button size="small"> {profile?.username} </Button>
        </Link>

        <Typography variant="h5" component="div">
          {profile?.username}
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
