import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { cardStyle } from '../../styles';
import type {} from '../../../types/profileType/profileTypes';
import { useAppDispatch } from '../../../redux/hooks';
import type { UserModelType } from '../../../types/userTypes';
import ModalAssigningCourseToUser from './ModalAssigningCourseToUser';

type ProfileItemCardProps = {
  profile: UserModelType | null; //  тип данных  профиля
};

export default function ProfileItemCard({ profile }: ProfileItemCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { profileId } = useParams();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

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
      <Button variant="outlined" color="secondary" size="small" sx={{ mr: 2 }} onClick={handleOpen}>
        Назначить курс
      </Button>
      <Button variant="outlined" color="primary" size="small" sx={{ mr: 2 }}>
        Пригласить
      </Button>
      <ModalAssigningCourseToUser profile={profile} setOpen={setOpen} open={open} />
    </Card>
  );
}

// onClick={() => void dispatch()(profile.id)}
