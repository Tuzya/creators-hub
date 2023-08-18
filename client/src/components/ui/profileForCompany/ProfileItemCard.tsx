import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, colors } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { cardStyle } from '../../styles';
import type {} from '../../../types/profileType/profileTypes';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import type { UserModelType } from '../../../types/userTypes';
import ModalAssigningCourseToUser from './ModalAssigningCourseToUser';
import './ProfileItemCard.css';

type ProfileItemCardProps = {
  profile: UserModelType | null; //  тип данных  профиля
};

export default function ProfileItemCard({ profile }: ProfileItemCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { profileId } = useParams();
  const person = useAppSelector((store) => store.profile.personInfo);
  console.log('==== ', profile?.People[0]?.photo);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Card sx={{ ...cardStyle, height: '470px', borderRadius: '20px' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Profile Details
        </Typography>
        {profile?.People[0]?.photo ? (
          <a href={`/profile/lk/${profile?.id}`}>
            <img
              src={`http://localhost:3001/public/img/${profile?.People[0]?.photo}`}
              alt="Ваше Фото"
              className="photoStaff"
            />
          </a>
        ) : (
          <a href={`/profile/lk/${profile?.id}`}>
            <img
              src="http://localhost:3001/public/img/1111.png"
              alt="Ваше Фото"
              className="photoStaff"
              style={{ width: '300px', height: '300px ', borderRadius: '10px' }}
            />
          </a>
        )}
        <Typography variant="h5" component="div">
          <span style={{ fontFamily: 'Robot' }}>{profile?.username}</span>
        </Typography>

        {/* Другие поля профиля */}
      </CardContent>
      {/* Кнопки для редактирования, удаления и т.д. */}
      <Button
        type="button"
        size="small"
        sx={{ mr: 2, mt: 2, width: '100%', backgroundColor: 'orange' }}
        onClick={handleOpen}
      >
        <p style={{ color: 'white' }}>Назначить курс</p>
      </Button>
      <ModalAssigningCourseToUser profile={profile} setOpen={setOpen} open={open} />
    </Card>
  );
}

// // onClick={() => void dispatch()(profile.id)}
