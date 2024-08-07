import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box
} from '@mui/material';
import { styled } from '@mui/system';
import './AboutPage.css';

const teamMembers = [
  { name: 'Alice Johnson', role: 'CEO', bio: 'Alice has 15 years of experience in the fashion industry.' },
  { name: 'Bob Smith', role: 'CTO', bio: 'Bob is a tech visionary with a passion for innovative solutions.' },
  { name: 'Carol White', role: 'Lead Designer', bio: 'Carol White brings creativity and style to every collection dersses.' },
];

const StyledCard = styled(Card)({
  maxWidth: 345,
  margin: 'auto',
  marginBottom: '20px',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
});

const AboutPage = () => {
  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph align="center">
        Welcome to our fashion rental and dress swapping platform! Our mission is to make high-quality fashion accessible to everyone while promoting sustainable practices in the fashion industry.
      </Typography>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Our Team
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" component="h3">
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {member.role}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {member.bio}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <Box mt={5} textAlign="center">
        <Typography variant="h4" component="h2" gutterBottom>
          Our Values
        </Typography>
        <Typography variant="body1" paragraph>
          We believe in sustainability, inclusivity, and innovation. Our goal is to offer a platform that empowers individuals to express themselves through fashion without compromising the planet.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutPage;
