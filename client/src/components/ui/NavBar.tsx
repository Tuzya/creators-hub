import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as NavLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { linkStyle } from '../styles';
import { logoutUserThunk } from '../../redux/slices/user/userThunks';

export default function Navbar(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user);

  const links = [
    { to: '/', name: 'Home' },
    { to: '/company/lk', name: 'Лк компании' },
    { to: '/profile/lk', name: 'Лк Юзер' },
    { to: '/company/allcourses/', name: 'База Знаний' },
    { to: '/signup', name: 'Sign Up' },
    { to: '/login', name: 'Sign In' },
  ];

  return (
    <Box sx={{ flexGrow: 1, typography: 'body1' }}>
      <AppBar
        position="static"
        sx={{
          background: '#2E3B55',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Hello, {user.status === 'logged' ? user.username : 'dear student'} */}
          </Typography>
          {links.map((link) => (
            <Link component={NavLink} key={link.name} to={link.to} sx={linkStyle}>
              {link.name}
            </Link>
          ))}

          <Button
            color="inherit"
            onClick={() => {
              void dispatch(logoutUserThunk());
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
