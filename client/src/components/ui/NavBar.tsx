import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  ListItemButton,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import BookIcon from '@mui/icons-material/Book';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logoutUserThunk } from '../../redux/slices/user/userThunks';
import { getPersonLoggedInfoThunk } from '../../redux/slices/profiles/profileThunk';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const CustomAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open?: boolean }>(({ theme, open }) => ({
  backgroundColor: 'black',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const company = useAppSelector((store) => store.company);
  const user = useAppSelector((store) => store.user);
  const person = useAppSelector((store) => store.profile.personLoggedInfo);
  const profile = useAppSelector((store) => store.profile.oneProfile);
  console.log('=======', profile);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleOutsideClick = (event) => {
    if (open && !event.target.closest('#navbar-container')) {
      setOpen(false);
    }
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [open]);

  const links =
    company.status === 'logged'
      ? [
          { to: '/', name: 'Home', icon: <HomeIcon /> },
          { to: '/company/lk', name: 'Лк компании', icon: <BusinessIcon /> },
          { to: '/company/allcourses/', name: 'База Знаний', icon: <BookIcon /> },
          { to: '/admin/signup-user', name: 'Панель Управления', icon: <LogoutIcon /> },
        ]
      : [
          { to: '/', name: 'Home', icon: <HomeIcon /> },
          { to: '/profile/lk', name: 'Лк Юзер', icon: <PersonIcon /> },
          { to: '/company/allcourses/', name: 'База Знаний', icon: <BookIcon /> },
        ];

  const dispatch = useAppDispatch();

  return (
    <Box id="navbar-container" sx={{ display: 'flex' }}>
      <CssBaseline />
      <CustomAppBar position="fixed" open={open}>
        <Toolbar>
          {company.status === 'logged' || user.status === 'logged' ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              <IconButton color="inherit">
                <HomeIcon /> <span style={{ fontSize: '20px' }}> Main </span>
              </IconButton>
            </Link>
          )}
          <Typography variant="h6" noWrap component="div">
            Createros Hub о боже оно двигается!
          </Typography>
          <div style={{ marginLeft: 'auto' }}>
            {(company.status === 'logged' || user.status === 'logged') && (
              <IconButton
                color="inherit"
                onClick={() => {
                  void dispatch(logoutUserThunk());
                }}
              >
                <LogoutIcon /> <span style={{ fontSize: '20px' }}> Logout </span>
              </IconButton>
            )}
            <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>
              <IconButton color="inherit">
                {!(company.status === 'logged' || user.status === 'logged') && (
                  <>
                    <LockOpenIcon />
                    <span style={{ fontSize: '20px' }}> Sign In</span>
                  </>
                )}
              </IconButton>
            </Link>
            <Link
              to="/signup"
              style={{ color: 'inherit', textDecoration: 'none', fontSize: '12px' }}
            >
              <IconButton color="inherit">
                {!(company.status === 'logged' || user.status === 'logged') && (
                  <>
                    <PersonAddIcon />
                    <span style={{ fontSize: '20px' }}> Sign Up</span>
                  </>
                )}
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </CustomAppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'black',
            color: 'white',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton
            onClick={handleDrawerClose}
            sx={{
              color: 'white',
              '&:hover': {
                color: '#ccc',
              },
            }}
          >
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        {person?.photo && (
          <img
            src={`http://localhost:3001/public/img/${person?.photo}`}
            alt="Ваше Фото"
            style={{ width: '150px', height: '150px', borderRadius: '100px' }}
          />
        )}
        <p style={{ fontSize: 14 }} color="text.secondary">
          Привет! {profile?.username}
        </p>
        <List>
          {links.map((link) => (
            <ListItem key={link.to} disablePadding>
              <ListItemButton
                component={Link}
                to={link.to}
                sx={{
                  '&:hover': {
                    backgroundColor: '#420',
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>{link.icon}</ListItemIcon>
                <ListItemText primary={link.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        {(company.status === 'logged' || user.status === 'logged') && (
          <List>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  '&:hover': {
                    backgroundColor: '#420',
                  },
                }}
                onClick={() => {
                  void dispatch(logoutUserThunk());
                }}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        )}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
