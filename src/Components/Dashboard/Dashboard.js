import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import SettingsIcon from '@mui/icons-material/Settings';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemText from '@mui/material/ListItemText';

import { Link, Outlet } from 'react-router-dom';
import { AdminPanelSettingsRounded, DeleteOutlineRounded, HomeSharp, ManageHistory, PostAddOutlined } from '@mui/icons-material';

import useAuth from '../Hooks/useAuth';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
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
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Dashboard() {

  const {user,LogOUt}=useAuth()

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

          <Link style={{ textDecoration: "none", color: 'black' }} to='/'>
            <ListItem disablePadding>

              <ListItemButton >
                <ListItemIcon>
                  <HomeSharp />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>

            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>

          <Link style={{ textDecoration: "none", color: 'black' }} to='makeAdmin'>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AdminPanelSettingsRounded />
                </ListItemIcon>
                <ListItemText primary="Make Admin" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link style={{ textDecoration: "none", color: 'black' }} to='currentevents'>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PostAddOutlined />
                </ListItemIcon>
                <ListItemText primary="Current Events" />
              </ListItemButton>
            </ListItem>
          </Link>
          {/* <Link style={{ textDecoration: "none", color: 'black' }} to='comingevents'>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PostAddOutlined />
                </ListItemIcon>
                <ListItemText primary="Comming Events" />
              </ListItemButton>
            </ListItem>
          </Link> */}
          <Link style={{ textDecoration: "none", color: 'black' }} to='deleteevents'>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DeleteOutlineRounded />
                </ListItemIcon>
                <ListItemText primary="Delete Events" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link style={{ textDecoration: "none", color: 'black' }} to='manageblogs'>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ManageHistory />
                </ListItemIcon>
                <ListItemText primary="Manage Blogs " />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link style={{ textDecoration: "none", color: 'black' }} to='applications'>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Applications" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link style={{ textDecoration: "none", color: 'black' }} to='notice'>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Post a Notice" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link style={{ textDecoration: "none", color: 'black' }} to='notice/delete'>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DeleteForeverIcon/>
                </ListItemIcon>
                <ListItemText primary="Delete Notice" />
              </ListItemButton>
            </ListItem>
          </Link>
    <Link style={{ textDecoration: "none", color: 'black' }} to='login'>
            <ListItem disablePadding>
              <ListItemButton onClick={LogOUt}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary={user.email?"Logout":"Login"} />
              </ListItemButton>
            </ListItem>
          </Link>

        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
     
        <Outlet></Outlet>
      </Main>
    </Box>
  );
}
