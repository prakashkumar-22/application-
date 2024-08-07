// src/components/LoginForm/CategoryCard.js

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './CategoryCard.css'; // Ensure this imports your CSS

const CategoryCard = ({ title, description, imageUrl, link }) => {
  return (
    <Box className="category-card">
      <Box className="image-wrapper">
        <img src={imageUrl} alt={title} />
      </Box>
      <Box className="card-content">
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Button
          component={Link}
          to={link} // Navigation link for the button
          variant="contained"
          color="primary"
          sx={{ marginTop: '16px' }}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};

export default CategoryCard;
