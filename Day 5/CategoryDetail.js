import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

// Mock data for demonstration purposes
const mockData = {
  'luxury-dresses': {
    title: 'Luxury Dresses',
    description: 'Explore our collection of luxury dresses available for rent.',
    sizes: ['S', 'M', 'L', 'XL'],
    price: '$100 - $500',
    imageUrl: 'https://via.placeholder.com/300x200?text=Luxury+Dresses',
  },
  // Add similar objects for other categories...
};

const CategoryDetail = () => {
  const { categoryId } = useParams();
  const category = mockData[categoryId];

  if (!category) {
    return <Typography variant="h4">Category not found</Typography>;
  }

  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <Typography variant="h3" sx={{ marginBottom: '20px' }}>
          {category.title}
        </Typography>
        <img src={category.imageUrl} alt={category.title} style={{ width: '100%', maxWidth: '500px' }} />
        <Typography variant="body1" sx={{ marginTop: '20px' }}>
          {category.description}
        </Typography>
        <Typography variant="h6" sx={{ marginTop: '20px' }}>
          Sizes: {category.sizes.join(', ')}
        </Typography>
        <Typography variant="h6" sx={{ marginTop: '10px' }}>
          Price: {category.price}
        </Typography>
      </Box>
    </Container>
  );
};

export default CategoryDetail;
