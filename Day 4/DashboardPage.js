import React from 'react';
import { Container, Grid, Paper, Typography, Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/material/styles'; // Update import
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  menuButton: {
    marginLeft: 'auto',
  },
  content: {
    padding: theme.spacing(2),
  },
  widget: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

const UserDashboard = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <Paper className={classes.header}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar className={classes.avatar}>U</Avatar>
          <Typography variant="h6">Welcome, User!</Typography>
        </div>
        <div>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <SettingsIcon />
          </IconButton>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <LogoutIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </div>
      </Paper>
      <Grid container spacing={3} className={classes.content}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.widget}>
            <Typography variant="h6">Overview</Typography>
            {/* Add overview content here */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.widget}>
            <Typography variant="h6">Recent Activity</Typography>
            {/* Add recent activity content here */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDashboard;
