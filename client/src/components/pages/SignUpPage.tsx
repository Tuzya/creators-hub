import { Box, Button, Container, TextField } from '@mui/material';
import React from 'react';
import type { UserSignUpFormType } from '../../types/userTypes';
import { useAppDispatch } from '../../redux/hooks';
import { signUpUserThunk } from '../../redux/slices/user/userThunks';
import type { CompanySignUpFormType } from '../../types/companyTypes';
import { signUpCompanyThunk } from '../../redux/slices/company/companyThunks';

export default function SignUpPage(): JSX.Element {
  const dispatch = useAppDispatch();

  // Company Sign Up
  const submitCompanyHandler: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget));

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    void dispatch(signUpCompanyThunk(formData as CompanySignUpFormType));
  };

  // Company Users

  const submitHandler: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget));

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    void dispatch(signUpUserThunk(formData as UserSignUpFormType));
  };

  return (
    <Container>
      <Box component="form" onSubmit={submitCompanyHandler}>
        <TextField variant="outlined" name="name" label="name" />
        <TextField variant="outlined" name="email" label="email" type="email" />
        <TextField variant="outlined" name="password" label="password" type="password" />
        <Button variant="contained" type="submit">
          Регистрация Компании
        </Button>
      </Box>
      <Box component="form" onSubmit={submitHandler}>
        <TextField variant="outlined" name="username" label="username" />
        <TextField variant="outlined" name="email" label="email" type="email" />
        <TextField variant="outlined" name="password" label="password" type="password" />
        <Button variant="contained" type="submit">
          Регистрация Юзера только для тестов, в будущем удалить
        </Button>
      </Box>
    </Container>
  );
}
