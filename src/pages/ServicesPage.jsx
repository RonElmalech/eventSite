import { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Chip, 
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { servicesData } from '../data/cmsData';
import { getServiceImage } from '../utils/placeholder';
import { Link as RouterLink } from 'react-router-dom';

const ServicesPage = () => {
  // Simulate data loading from CMS
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This would be replaced with an actual API call in production
    const fetchData = () => {
      // Simulating API call delay
      setTimeout(() => {
        setData(servicesData);
        setLoading(false);
      }, 300);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Container>
        <Box sx={{ py: 8, textAlign: 'center' }}>
          <Typography>טוען...</Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ color: 'primary.main' }}>
          {data.pageTitle}
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
          {data.pageDescription}
        </Typography>
      </Box>

      {/* Services List */}
      <Grid container spacing={6}>
        {data.services.map((service, index) => (
          <Grid item xs={12} key={service.id}>
            <Card 
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                overflow: 'hidden',
                boxShadow: 3,
                transition: '0.3s',
                '&:hover': { boxShadow: 6 }
              }}
            >
              <CardMedia
                component="img"
                sx={{ 
                  width: { xs: '100%', md: '40%' },
                  height: { xs: '250px', md: 'auto' }
                }}
                image={getServiceImage(service.id)}
                alt={service.title}
              />
              
              <CardContent sx={{ p: 4, width: { xs: '100%', md: '60%' } }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'secondary.main' }}>
                  {service.title}
                </Typography>
                
                <Typography variant="body1" paragraph>
                  {service.fullDescription}
                </Typography>
                
                <Divider sx={{ my: 3 }} />
                
                <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                  מה כולל השירות:
                </Typography>
                
                <List>
                  <Grid container spacing={1}>
                    {service.features.map((feature, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <ListItem disablePadding>
                          <ListItemIcon sx={{ minWidth: '40px' }}>
                            <CheckCircleOutlineIcon sx={{ color: 'secondary.main' }} />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      </Grid>
                    ))}
                  </Grid>
                </List>
                
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    size="large"
                    component={RouterLink}
                    to="/contact"
                  >
                    לפרטים נוספים
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      {/* CTA */}
      <Box 
        sx={{ 
          textAlign: 'center', 
          mt: 8, 
          mb: 4,
          p: 4,
          bgcolor: 'primary.main',
          color: 'white',
          borderRadius: 2
        }}
      >
        <Typography variant="h4" gutterBottom>
          רוצים לדעת איך אנחנו יכולים לעזור לכם?
        </Typography>
        <Typography variant="body1" paragraph>
          אנחנו כאן כדי להפוך את החלום שלכם למציאות. צרו איתנו קשר היום לשיחת ייעוץ ללא התחייבות.
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          size="large"
          component={RouterLink}
          to="/contact"
          sx={{ mt: 2 }}
        >
          צור קשר עכשיו
        </Button>
      </Box>
    </Container>
  );
};

export default ServicesPage; 