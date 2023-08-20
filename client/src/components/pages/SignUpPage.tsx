import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { signUpCompanyThunk } from '../../redux/slices/company/companyThunks';
import type { CompanySignUpFormType } from '../../types/companyTypes';

export default function SignUpPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [signupStatus, setSignupStatus] = useState('');

  const submitCompanyHandler: React.ChangeEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await dispatch(signUpCompanyThunk(formData as CompanySignUpFormType));
      setSignupStatus('Company registered successfully.');
    } catch (error) {
      console.error('Error signing up company:', error);
      setSignupStatus('An error occurred during registration.');
    }
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
        onSubmit={submitCompanyHandler}
      >
        <Typography variant="h6" gutterBottom>
          Регистрация Компании
        </Typography>
        <TextField
          variant="outlined"
          name="name"
          label="Введите название компании"
          sx={{ marginBottom: '10px' }}
          autoComplete="off"
        />
        <TextField
          variant="outlined"
          name="email"
          label="Введите почту"
          type="email"
          sx={{ marginBottom: '10px' }}
          autoComplete="off"
        />
        <TextField
          variant="outlined"
          name="password"
          label="Введите пароль"
          type="password"
          sx={{ marginBottom: '20px' }}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ backgroundColor: '#FFA500', color: 'white' }}
        >
          Зарегистрировать
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
