// src/components/Footer/Footer.js

import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="footer-heading">
              About Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              We provide high-quality rental dresses and a sustainable dress swapping platform.
              Our mission is to make fashion accessible and eco-friendly.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" className="footer-heading">
              Navigation
            </Typography>
            <ul className="footer-list">
              <li>
                <Link href="#" color="inherit">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit">
                  Contact
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="footer-heading">
              Follow Us
            </Typography>
            <div className="footer-socials">
              <Link href="#" color="inherit" aria-label="Facebook">
                <Facebook />
              </Link>
              <Link href="#" color="inherit" aria-label="Twitter">
                <Twitter />
              </Link>
              <Link href="#" color="inherit" aria-label="Instagram">
                <Instagram />
              </Link>
              <Link href="#" color="inherit" aria-label="LinkedIn">
                <LinkedIn />
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="footer-heading">
              Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              123 Fashion Street, New York, NY 10001
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Email: info@fashionrentals.com
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Phone: (123) 456-7890
            </Typography>
          </Grid>
        </Grid>
        <div className="footer-bottom">
          <Typography variant="body2" color="textSecondary" align="center">
            &copy; {new Date().getFullYear()} Fashion Rentals. All rights reserved.
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
