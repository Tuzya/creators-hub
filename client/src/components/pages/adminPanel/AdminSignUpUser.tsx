import { Box, Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { signUpUserThunk } from '../../../redux/slices/user/userThunks';
import type { UserSignUpFormType } from '../../../types/userTypes';

export default function AdminSignUpUser(): JSX.Element {
  const dispatch = useAppDispatch();
  const [signupStatus, setSignupStatus] = useState('');
  const [formData, setFormData] = useState<UserSignUpFormType>({
    username: '',
    email: '',
  });

  const submitHandler: React.ChangeEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      const user = await dispatch(signUpUserThunk(formData));
      if (user) {
        setSignupStatus('User registered successfully. Check your email for login credentials.');
        setFormData({ username: '', email: '' });
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setSignupStatus('An error occurred during registration.');
    }
  };

  const inputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <Container>
      <Box component="form" onSubmit={submitHandler}>
        <TextField
          variant="outlined"
          name="username"
          label="Username"
          value={formData.username}
          onChange={inputChangeHandler}
        />
        <TextField
          variant="outlined"
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={inputChangeHandler}
        />
        <Button variant="contained" type="submit">
          Register User (for testing purposes, remove in the future)
        </Button>
        {signupStatus && <p>{signupStatus}</p>}
      </Box>
    </Container>
  );
}
