import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { useAppDispatch } from '../../../redux/hooks';
import {
  getOneProfileThunk,
  getPersonLoggedInfoThunk,
} from '../../../redux/slices/profiles/profileThunk';
import PersonProfileLoggedItem from '../../ui/profilePerson/PersonProfileLoggedItem';
import { fetchAllCourseUserThunk } from '../../../redux/slices/allCourseOneUser/allCourseOneUserThunk';
import AllCourseOneUserList from '../../ui/course/AllCourseOneUserList';

export default function ProfileLoggedPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getPersonLoggedInfoThunk());
  }, []);

  useEffect(() => {
    void dispatch(getOneProfileThunk());
  }, []);

  useEffect(() => {
    void dispatch(fetchAllCourseUserThunk());
  }, []);

  return (
    <Container>
      <PersonProfileLoggedItem />
      <AllCourseOneUserList />
    </Container>
  );
}
