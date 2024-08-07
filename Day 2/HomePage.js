// src/pages/HomePage.js

import React from 'react';
import Hero from '../components/LoginForm/Hero';
import CategoryCard from '../components/LoginForm/CategoryCard';
import Footer from '../components/LoginForm/Footer';
import { Box, Container, Typography } from '@mui/material';
import './HomePage.css';

const categories = [
  {
    title: 'Luxury Dresses',
    description: 'Explore our collection of luxury dresses available for rent.',
    imageUrl: 'https://i.pinimg.com/474x/74/a8/08/74a8086178bcd9c6b9b808cacc246668.jpg',
    link: '/luxury-dresses'
  },
  {
    title: 'Designer Gowns',
    description: 'Find stunning designer gowns for any special occasion.',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/5/310287602/FH/UL/SD/66774151/designer-gown-for-women.jpeg',
    link: '/designer-gowns'
  },
  {
    title: 'Casual Wear',
    description: 'Discover comfortable and stylish casual wear for everyday use.',
    imageUrl: 'https://i0.wp.com/fabukmagazine.com/wp-content/uploads/2023/03/Casual-Wear-5-Tips-on-How-to-Make-You-Look-Good-and-Comfortable.jpg?fit=1448%2C962&ssl=1',
    link: '/casual-wear'
  },
  {
    title: 'Party Dresses',
    description: 'Get ready for the party with our trendy and fun party dresses.',
    imageUrl: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/0/a/0a9efb8IGHAIL_1.jpg?tr=w-512',
    link: '/party-dresses'
  },
  {
    title: 'Evening Gowns',
    description: 'Choose from elegant evening gowns perfect for formal events.',
    imageUrl: 'https://clothsvilla.com/cdn/shop/products/BlackPromDressesV-NeckPuffySleevesA-LineEveningGownforWedding_1_782x.jpg?v=1697220843',
    link: '/evening-gowns'
  },
  {
    title: 'Vintage Collection',
    description: 'Explore our vintage collection for timeless fashion choices.',
    imageUrl: 'https://i.etsystatic.com/5620966/r/il/9e9949/3126168511/il_570xN.3126168511_euf6.jpg',
    link: '/vintage-collection'
  },
  {
    title: 'Summer Dresses',
    description: 'Stay cool and stylish with our summer dress collection.',
    imageUrl: 'https://i.etsystatic.com/11657093/r/il/dd9024/2370762010/il_570xN.2370762010_kcbq.jpg',
    link: '/summer-dresses'
  },
  {
    title: 'Cocktail Dresses',
    description: 'Look stunning at your next event with our cocktail dresses.',
    imageUrl: 'https://www.hazelandolive.com/cdn/shop/files/hazel-olive-flirtation-tulle-and-lace-mini-cocktail-dress-light-pink-37990610895042_2400x.jpg?v=1690654813',
    link: '/cocktail-dresses'
  },
];

const HomePage = () => {
  return (
    <div>
      <Hero />
      {/* Full-width image section */}
      <Box
        sx={{
          width: '100%',
          height: '400px',
          backgroundImage: 'url(https://via.placeholder.com/1600x400?text=Featured+Collection)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginBottom: '20px',
          position: 'relative',
        }}
      >
        <Box sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          color: '#fff',
          textAlign: 'center',
          padding: '20px',
          position: 'absolute',
          top: 0,
          left: 0,
        }}>
          <Typography variant="h4" component="div">
            Discover Our Collections
          </Typography>
        </Box>
      </Box>
      <Container>
        <div className="category-grid">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
              imageUrl={category.imageUrl}
              link={category.link} // Pass the link to CategoryCard
            />
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
