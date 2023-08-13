import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import CompanyFormAddCourses from '../../ui/CompanyFormAddCourses';
import ProfileList from '../../ui/ProfileList';
import { useAppDispatch } from '../../../redux/hooks';
import { getProfileThunk } from '../../../redux/slices/profiles/profileThunk';

export default function CompanyPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getProfileThunk());
  }, []);

  return (
    <Container>
      <CompanyFormAddCourses /> Добрый день
      <ProfileList />
    </Container>
  );
}
