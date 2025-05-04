import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Button, 
  useTheme,
  useMediaQuery,
  IconButton
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import CallIcon from '@mui/icons-material/Call';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { contactData } from '../data/cmsData';
import ServicePackages from './ServicePackages';

// Define image paths directly
const weddingImg = './images/services/wedding.jpg';
const barmitzvahImg = './images/services/barmitzvah.jpg';
const hennaImg = './images/services/henna.jpg';

// Wrap MUI components with motion
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

// Map of service slugs to actual images 
const serviceImages = {
  'חתונות': weddingImg,
  'בר-מצווה': barmitzvahImg,
  'חינה': hennaImg,
  'ימי-הולדת': hennaImg,
  'ברית': barmitzvahImg,
  'אירועים-עסקיים': weddingImg,
};

const ServicePage = ({ service }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [imageIndex, setImageIndex] = useState(0);
  
  // Debug which service is being rendered
  console.log('ServicePage component received service:', service ? {
    id: service.id,
    title: service.title,
    slug: service.slug
  } : 'No service data');
  
  if (!service) {
    return (
      <Container>
        <Box sx={{ py: 6, textAlign: 'center' }}>
          <Typography variant="h4">שירות לא נמצא</Typography>
          <Button component={RouterLink} to="/" sx={{ mt: 3 }}>חזרה לדף הבית</Button>
        </Box>
      </Container>
    );
  }

  // Get service images
  const isWedding = service.id === 1 || service.title === "חתונות";
  const serviceImage = serviceImages[service.slug] || weddingImg;
  
  // Create an array of images for gallery
  const imageGallery = [
    serviceImage,
    isWedding ? barmitzvahImg : serviceImage,
    isWedding ? hennaImg : serviceImage
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <MotionTypography
                variant="h2"
                component="h1"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                sx={{ 
                  fontWeight: 'bold',
                  mb: 3,
                  color: 'primary.main'
                }}
              >
                {service.title}
              </MotionTypography>
              
              <MotionTypography
                variant="h5"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                sx={{ 
                  mb: 4,
                  color: 'text.secondary'
                }}
              >
                {service.description}
              </MotionTypography>
              
              <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                <MotionButton
                  variant="contained"
                  color="primary"
                  size="large"
                  component={RouterLink}
                  to="/contact"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  startIcon={<TouchAppIcon />}
                >
                  צור קשר
                </MotionButton>
                
                <MotionButton
                  variant="outlined"
                  color="primary"
                  size="large"
                  component="a"
                  href={`tel:${contactData.phone}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  startIcon={<CallIcon />}
                >
                  התקשר עכשיו
                </MotionButton>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                sx={{ 
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                }}
              >
                <Box
                  component="img"
                  src={imageGallery[imageIndex]}
                  alt={service.title}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
                
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 2,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2
                  }}
                >
                  <IconButton
                    onClick={() => setImageIndex((prev) => (prev - 1 + imageGallery.length) % imageGallery.length)}
                    sx={{ color: 'white' }}
                  >
                    <ArrowBackIcon />
                  </IconButton>
                  
                  <IconButton
                    onClick={() => setImageIndex((prev) => (prev + 1) % imageGallery.length)}
                    sx={{ color: 'white' }}
                  >
                    <ArrowForwardIcon />
                  </IconButton>
                </Box>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Service Packages Section */}
      <Box sx={{ mt: 8 }}>
        <ServicePackages serviceName={service.title} />
      </Box>
    </Box>
  );
};

export default ServicePage; 