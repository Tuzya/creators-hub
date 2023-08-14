import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { useAppDispatch } from '../../../redux/hooks';
import {
  getOneProfileThunk,
  getPersonLoggedInfoThunk,
} from '../../../redux/slices/profiles/profileThunk';
import PersonProfileLoggedItem from '../../ui/profilePerson/PersonProfileLoggedItem';

export default function ProfileLoggedPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getPersonLoggedInfoThunk());
  }, []);

  useEffect(() => {
    void dispatch(getOneProfileThunk());
  }, []);

  return (
    <Container>
      <PersonProfileLoggedItem />
    </Container>
  );
}
