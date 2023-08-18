import { Box, Button, Container, TextField, Typography } from '@mui/material';
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
    <Container
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
    >
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1000px',
          padding: '200px',
          marginBottom: '250px',
          border: '1px solid #ccc',
          borderRadius: '20px',
          backgroundColor: '#F5F5F5',
        }}
        onSubmit={submitHandler}
      >
        <Typography variant="h6" gutterBottom>
          Admin SignUp User
        </Typography>
        <TextField
          variant="outlined"
          name="username"
          label="Username"
          value={formData.username}
          onChange={inputChangeHandler}
          sx={{ marginBottom: '10px' }}
          autoComplete="off"
        />
        <TextField
          variant="outlined"
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={inputChangeHandler}
          sx={{ marginBottom: '20px' }}
          autoComplete="off"
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ backgroundColor: '#FFA500', color: 'white' }}
        >
          Register User
        </Button>
        {signupStatus && (
          <Typography variant="body2" sx={{ marginTop: '10px', color: 'green' }}>
            {signupStatus}
          </Typography>
        )}
      </Box>
    </Container>
  );
}
