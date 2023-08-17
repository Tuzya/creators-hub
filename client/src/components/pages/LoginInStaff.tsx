import { Box, Button, Container, TextField } from '@mui/material';
import React from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { loginUserThunk } from '../../redux/slices/user/userThunks';
import type { UserLoginFormType } from '../../types/userTypes';

export default function LoginInStaff(): JSX.Element {
  const dispatch = useAppDispatch();

  const submitHandler: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget));

    void dispatch(loginUserThunk(formData as UserLoginFormType));
  };

  return (
    <Box component="form" display="flex" alignItems="center" onSubmit={submitHandler}>
      <TextField variant="outlined" name="email" label="Email" type="email" />
      <TextField variant="outlined" name="password" label="Password" type="password" />
      <Button variant="contained" type="submit">
        Login Users
      </Button>
    </Box>
  );
}
