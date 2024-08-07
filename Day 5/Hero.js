import React from 'react';
import { Button, Typography, Container } from '@mui/material';

const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <Typography variant="h1" gutterBottom>
          Rent the Perfect Dress for Every Occasion
        </Typography>
        <Typography variant="body1" gutterBottom>
          Explore our exclusive collection of luxury dresses, designer gowns, and more.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Shop Now
        </Button>
      </Container>
    </div>
  );
};

export default Hero;
