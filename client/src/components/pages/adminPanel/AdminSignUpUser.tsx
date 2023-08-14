import { Box, Button, Container, TextField } from '@mui/material';
import React from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { signUpUserThunk } from '../../../redux/slices/user/userThunks';
import type { UserSignUpFormType } from '../../../types/userTypes';

export default function AdminSignUpUser(): JSX.Element {
  const dispatch = useAppDispatch;

  const submitHandler: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget));

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    void dispatch(signUpUserThunk(formData as UserSignUpFormType));
  };
  return (
    <Container>
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
