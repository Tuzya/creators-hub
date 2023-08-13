import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import BookIcon from '@mui/icons-material/Book';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link as NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logoutUserThunk } from '../../redux/slices/user/userThunks';

export default function Navbar(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const links = [
    { to: '/', name: 'Home', icon: <HomeIcon /> },
    { to: '/company/lk', name: 'Лк компании', icon: <BusinessIcon /> },
    { to: '/profile/lk', name: 'Лк Юзер', icon: <PersonIcon /> },
    { to: '/company/allcourses/', name: 'База Знаний', icon: <BookIcon /> },
    { to: '/signup', name: 'Sign Up', icon: null },
    { to: '/login', name: 'Sign In', icon: null },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        maxHeight: '100vh', // Ограничиваем максимальную высоту
        overflow: 'hidden', // Прячем лишний контент
      }}
    >
      <Drawer
        anchor="left"
        open={drawerOpen}
        variant="permanent"
        sx={{
          width: drawerOpen ? 180 : 80,
          transition: 'width 0.3s ease-in-out',
          overflowX: 'hidden',
          zIndex: 0,
          background: '#2E3B55',
        }}
      >
        <List>
          {links.map((link) => (
            <ListItem
              button
              component={NavLink}
              to={link.to}
              key={link.name}
              onClick={toggleDrawer}
            >
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.name} sx={{ display: drawerOpen ? 'block' : 'none' }} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
          <ListItem
            button
            onClick={() => {
              // Handle settings action
            }}
            sx={{ display: 'flex', justifyContent: 'flex-end', pr: 1 }}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
          </ListItem>
        </Box>
      </Drawer>
      <AppBar
        position="static"
        sx={{
          background: '#2E3B55',
          zIndex: 1,
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Hello, {user.status === 'logged' ? user.username : 'dear student'} */}
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              void dispatch(logoutUserThunk());
            }}
            sx={{
              width: drawerOpen ? 400 : 200,
              transition: 'width 0.3s ease-in-out',
              overflowX: 'hidden',
              zIndex: 0,
              background: '#2E3B55',
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
