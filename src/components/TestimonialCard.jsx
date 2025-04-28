import React from 'react';
import { Box, Paper, Typography, Divider } from '@mui/material';
import { placeholderImages } from '../utils/placeholder';

/**
 * A card component for displaying testimonials
 */
const TestimonialCard = ({ testimonial }) => {
  // Extract properties from the testimonial object
  const { name, role, quote, date, image, imageUrl } = testimonial;
  
  return (
    <Paper sx={{ 
      p: 3, 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      borderRadius: 2,
      boxShadow: 2,
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: 4
      } 
    }}>
      <Typography variant="body1" sx={{ mb: 3, flexGrow: 1, fontStyle: 'italic', color: 'text.secondary' }}>
        "{quote}"
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          component="img"
          src={image || imageUrl || placeholderImages.avatar || placeholderImages.default}
          alt={name}
          sx={{
            width: 50,
            height: 50,
            borderRadius: '50%',
            mr: 2,
            objectFit: 'cover'
          }}
        />
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {role}{date ? `, ${date}` : ''}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default TestimonialCard; 