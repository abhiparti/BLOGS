
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button,Switch } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/actions/themeActions';

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

   return (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Blog App
      </Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/category/technology">Technology</Button>
      <Button color="inherit" component={Link} to="/category/travel">Travel</Button>
      <Button color="inherit" component={Link} to="/category/food">Food</Button>
      <Button color="inherit" component={Link} to="/new">New blog</Button>
      <Switch checked={theme === 'dark'} onChange={handleThemeChange} />
    </Toolbar>
  </AppBar>
   );
};

export default Navbar;
