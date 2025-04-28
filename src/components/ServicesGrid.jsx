import React from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box, 
  Container,
  Button,
  useTheme
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { createServiceSlug } from '../utils/slugify';
import { servicesData } from '../data/cmsData';
import { placeholderImages } from '../utils/placeholder';

// Import available images for service cards
import weddingImg from '../assets/images/pexels-minan1398-752842.jpg';
import barmitzvahImg from '../assets/images/pexels-pixabay-265722.jpg';
import hennaImg from '../assets/images/pexels-emma-bauso-1183828-2253870.jpg';

// Map of service slugs to actual images
const serviceImages = {
  'חתונות': weddingImg,
  'בר-מצווה': barmitzvahImg,
  'חינה': hennaImg,
  'ימי-הולדת': hennaImg,
  'ברית': barmitzvahImg,
  'אירועים-עסקיים': weddingImg,
};

const ServicesGrid = () => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      py: { xs: 6, md: 8 }, 
      bgcolor: theme.palette.background.default 
    }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ 
            color: 'primary.main',
            fontWeight: 'bold', 
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}>
            השירותים שלנו
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 700, mx: 'auto', color: 'text.secondary', mb: 2 }}>
            בחרו את סוג האירוע שלכם ואנחנו נדאג לכל השאר
          </Typography>
          <Typography variant="body1" paragraph>
            אנו מתמחים במגוון סוגי אירועים, עם פתרונות מותאמים אישית והתחייבות לאיכות וחדשנות
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {servicesData.services.map((service, index) => {
            const slug = createServiceSlug(service.title);
            
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    overflow: 'hidden',
                    transition: 'all 0.3s',
                    boxShadow: 2,
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: 6
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.imageUrl || serviceImages[slug] || placeholderImages[slug] || placeholderImages.eventGeneric}
                    alt={service.title}
                  />
                  <CardContent sx={{ p: 3, flexGrow: 1 }}>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {service.shortDescription}
                    </Typography>
                  </CardContent>
                  <Box sx={{ p: 2, mt: 'auto', textAlign: 'center' }}>
                    <Button 
                      component={RouterLink} 
                      to={`/services/${slug}`}
                      variant="contained" 
                      color="primary"
                      sx={{ 
                        borderRadius: 6,
                        px: 3
                      }}
                    >
                      לפרטים נוספים
                    </Button>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesGrid; 