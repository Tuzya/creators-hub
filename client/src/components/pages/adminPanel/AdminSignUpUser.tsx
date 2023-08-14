import { Box, Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { signUpUserThunk } from '../../../redux/slices/user/userThunks';
import type { UserSignUpFormType } from '../../../types/userTypes';

export default function AdminSignUpUser(): JSX.Element {
  const dispatch = useAppDispatch();
  const [signupStatus, setSignupStatus] = useState('');

  const submitHandler: React.ChangeEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const user = await dispatch(signUpUserThunk(formData as UserSignUpFormType));
      if (user) {
        setSignupStatus('User registered successfully. Check your email for login credentials.');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setSignupStatus('An error occurred during registration.');
    }
  };

  return (
    <Container>
      <Box component="form" onSubmit={submitHandler}>
        <TextField variant="outlined" name="username" label="Username" />
        <TextField variant="outlined" name="email" label="Email" type="email" />
        <Button variant="contained" type="submit">
          Register User (for testing purposes, remove in the future)
        </Button>
        {signupStatus && <p>{signupStatus}</p>}
      </Box>
    </Container>
  );
}
