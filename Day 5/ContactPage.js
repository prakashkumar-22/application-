// src/pages/ContactPage.js

import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Grid,
  CircularProgress
} from '@mui/material';
import { styled } from '@mui/system';
import './ContactPage.css';

const StyledPaper = styled(Paper)({
  padding: '40px',
  marginTop: '40px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "This field is required.";
    tempErrors.email = /.+@.+\..+/.test(formData.email) ? "" : "Email is not valid.";
    tempErrors.message = formData.message ? "" : "This field is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form Data:', formData);
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(true);
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <StyledPaper elevation={3}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Contact Us
        </Typography>
        {!submitted ? (
          <form onSubmit={handleSubmit} noValidate>
            <Box mb={3}>
              <TextField
                fullWidth
                variant="outlined"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                required
                InputLabelProps={{ shrink: true }}
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                required
                InputLabelProps={{ shrink: true }}
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                variant="outlined"
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={6}
                error={!!errors.message}
                helperText={errors.message}
                required
                InputLabelProps={{ shrink: true }}
              />
            </Box>
            <Grid container justifyContent="center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : 'Submit'}
              </Button>
            </Grid>
          </form>
        ) : (
          <Typography variant="h6" color="text.success" align="center">
            Thank you for your feedback!
          </Typography>
        )}
      </StyledPaper>
    </Container>
  );
};

export default ContactPage;
