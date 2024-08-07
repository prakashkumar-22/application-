// src/pages/ServicesPage.js

import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import './ServicePage.css';

const services = [
  {
    title: 'Luxury Dress Rentals',
    description: 'Rent high-end luxury dresses for special occasions at a fraction of the retail price.',
    imageUrl: 'https://i0.wp.com/shaadiwish.com/blog/wp-content/uploads/2022/08/Chandrima-5.png',
  },
  {
    title: 'Designer Gowns',
    description: 'Discover a curated collection of designer gowns available for rental.',
    imageUrl: 'https://lotuslehengacholi.com/wp-content/uploads/2024/01/Premium-Ready-made-Designer-Gown-for-women.jpg',
  },
  {
    title: 'Casual Wear Rentals',
    description: 'Browse our casual wear collection, perfect for everyday use.',
    imageUrl: 'https://www.thefashionisto.com/wp-content/uploads/2023/07/Casual-Dress-Men-Chinos-Outfit.jpg',
  },
  {
    title: 'Dress Swapping',
    description: 'Swap dresses with other users and refresh your wardrobe sustainably.',
    imageUrl: 'https://assets.vogue.in/photos/5dde0eea6ffadb00085faddd/master/pass/clothes%20swapping.jpg',
  },
  {
    title: 'Wedding Dress Rentals',
    description: 'Find the perfect wedding dress for your big day without the hefty price tag.',
    imageUrl: 'https://www.tasva.com/cdn/shop/products/TT29-Oct24398.jpg?v=1640691542&width=800',
  },
  {
    title: 'Bridesmaid Dresses',
    description: 'Coordinate with your bridal party with our range of bridesmaid dresses.',
    imageUrl: 'https://4.imimg.com/data4/BF/BX/MY-9049172/bridesmaid-s-dresses.jpg',
  },
  {
    title: 'Evening Gowns',
    description: 'Choose from a selection of elegant evening gowns for any formal event.',
    imageUrl: 'https://media.samyakk.com/pub/media/catalog/product/n/h/nh3640-d.jpg',
  },
  {
    title: 'Party Dresses',
    description: 'Get ready to party with our fun and stylish party dresses.',
    imageUrl: 'https://www.lulus.com/images/product/xlarge/8051821_1625936.jpg?w=195&hdpi=1',
  },
  {
    title: 'Vintage Dresses',
    description: 'Explore our collection of timeless vintage dresses.',
    imageUrl: 'https://cdn.prod.website-files.com/5dafa3787f4d5b281920f3b6/655b8aeda534b76802139db9_VQZyWBK0F3eh_PHpyWF6Oojs9u7jlSjXST71c5W1W_YQd__dWlLDfaf6KZ-_E5zNxiMqmtb6aMvsfIkX2SmBJZwi6ZsdO8Wxd-0RRl1kpR97NJTbOL8e5bPcU29I0D8v8yoTBdYT16HKGpTwymuMHeo.jpeg',
  },
  {
    title: 'Prom Dresses',
    description: 'Find the perfect prom dress for a memorable night.',
    imageUrl: 'https://www.formalapproach.com/cdn/shop/products/sherri-hill-55583-red-prom-dresses-images-9004_2048x.jpg?v=1670953577',
  },
  {
    title: 'Cocktail Dresses',
    description: 'Look stunning at your next event with our cocktail dresses.',
    imageUrl: 'https://www.newyorkdress.com/cdn/shop/articles/cocktail-dress-code-wedding-893841.png?v=1665781216',
  },
  {
    title: 'Seasonal Collections',
    description: 'Discover our latest seasonal collections to stay on trend.',
    imageUrl: 'https://i.pinimg.com/474x/c8/f6/9c/c8f69c89afdbe2733d7fe8bdcaa3fdbd.jpg',
  },
];

const ServicesPage = () => {
  return (
    <Container maxWidth="lg" className="services-container">
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="service-card">
              <CardMedia
                component="img"
                alt={service.title}
                height="300"
                image={service.imageUrl}
                title={service.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesPage;
