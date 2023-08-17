import { Box, Button, Container, TextField } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { loginUserThunk, signUpUserThunk } from '../../redux/slices/user/userThunks';
import type { UserLoginFormType } from '../../types/userTypes';
import { loginCompanyThunk } from '../../redux/slices/company/companyThunks';
import type { CompanyLoginFormType } from '../../types/companyTypes';

export default function LoginInPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const submitHandler: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget));
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions

    void dispatch(loginUserThunk(formData as UserLoginFormType));
  };

  const submitCompanyHandler: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget));
    console.log(formData);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions

    void dispatch(loginCompanyThunk(formData as CompanyLoginFormType));
  };

  return (
    <Container>
      <h1>asdasdasda</h1>
      <Box component="form" onSubmit={submitCompanyHandler}>
        <TextField variant="outlined" name="email" label="email" type="email" />
        <TextField variant="outlined" name="password" label="password" type="password" />
        <Button variant="contained" type="submit">
          Login Company
        </Button>
      </Box>
      <Box component="form" display="flex" alignItems="center" onSubmit={submitHandler}>
        <TextField variant="outlined" name="email" label="email" type="email" />
        <TextField variant="outlined" name="password" label="password" type="password" />
        <Button variant="contained" type="submit">
          Login Users
        </Button>
      </Box>
    </Container>
  );
}
