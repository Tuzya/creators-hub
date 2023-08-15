import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import {
  getOnePersonProfileThunk,
  getPersonInfoThunk,
} from '../../../redux/slices/profiles/profileThunk';
import PersonProfileItem from '../../ui/profilePerson/PersonProfileItem';

export default function ProfilePage(): JSX.Element {
  const dispatch = useAppDispatch();
  // const profile = useAppSelector((state) => state.profile.oneProfile);

  const { profileId } = useParams();
  console.log('useParams,', profileId);

  useEffect(() => {

    void dispatch(getPersonInfoThunk({ profileId: profileId as string }));
  }, []);

  useEffect(() => {
    void dispatch(getOnePersonProfileThunk({ profileId: profileId as string }));
  }, []);
  return (
    <Container>
      <PersonProfileItem />
    </Container>
  );
}
