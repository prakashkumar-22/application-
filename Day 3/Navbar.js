// src/components/Navbar.js

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const Navbar = () => {
  // State to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle login status (you can replace this with actual login logic)
  const handleLoginToggle = () => {
    setIsLoggedIn(prev => !prev);
  };

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          {/* Logo Section */}
          <Link to='/home'>
            <StyledLogo src="https://cdn.dribbble.com/userupload/11241488/file/original-9202d55bef74d9158b024fbc05804f5e.png?resize=400x300&vertical=center" alt="Fashion Rental Logo" />
          </Link>
          <Typography variant="h6" sx={{ color: '#fff', marginLeft: '16px' }}>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <StyledButton component={Link} to='/home'>
            Home
          </StyledButton>
          <StyledButton component={Link} to='/about'>
            About
          </StyledButton>
          <StyledButton component={Link} to='/service'>
            Service
          </StyledButton>
          <StyledButton component={Link} to='/contact'>
            Contact
          </StyledButton>
          {isLoggedIn ? (
            <StyledButton variant="contained" onClick={handleLoginToggle}>
              Sign Out
            </StyledButton>
          ) : (
            <StyledButton variant="contained" component={Link} to='/login' onClick={handleLoginToggle}>
              Sign In
            </StyledButton>
          )}
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#333',
  padding: '0 20px',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  '&.MuiButton-contained': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const StyledLogo = styled('img')(({ theme }) => ({
  height: '50px', // Adjust as needed
  width: 'auto',
  display: 'block',
}));

export default Navbar;
