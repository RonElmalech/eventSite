import React from 'react';
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
import CallIcon from '@mui/icons-material/Call';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { contactData } from '../data/cmsData';
import ServicePackages from './ServicePackages';

// Define image paths correctly for public assets
const weddingImg = '/images/services/wedding.jpg';
const barmitzvahImg = '/images/services/barmitzvah.jpg';
const hennaImg = '/images/services/henna.jpg';
const britImg = '/images/services/brit.jpg';
const birthdayImg = '/images/services/birthday.jpg';
const businessImg = '/images/services/business.jpg';

// Map of service slugs to actual images 
const serviceImages = {
  'חתונות': weddingImg,
  'בר-מצווה': barmitzvahImg,
  'חינה': hennaImg,
  'ימי-הולדת': birthdayImg,
  'ברית': britImg,
  'אירועים-עסקיים': businessImg,
};

const ServicePage = ({ service }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
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

  // Get service image
  const serviceImage = serviceImages[service.slug] || weddingImg;

  return (
    <Box sx={{ py: 8 }}>
      <Box sx={{ 
        background: '#ffffff',
        borderRadius: 2,
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      }}>
        <Container maxWidth="lg">
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              gap: 5,
              py: 4
            }}
          >
            {/* Text content - must appear visually RIGHT in RTL */}
            <Box 
              sx={{ 
                flex: '1 1 50%', 
                order: { xs: 1, md: 1 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-end',
                textAlign: 'right'
              }}
              style={{textAlign: 'right'}}
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{ 
                  fontWeight: 'bold',
                  mb: 3,
                  color: 'primary.main',
                  textAlign: 'right',
                  width: '100%'
                }}
                style={{textAlign: 'right'}}
              >
                {service.title}
              </Typography>
              
              <Typography
                variant="h5"
                sx={{ 
                  mb: 4,
                  color: 'text.secondary',
                  textAlign: 'right',
                  width: '100%'
                }}
                style={{textAlign: 'right'}}
              >
                {service.description}
              </Typography>
              
              <Box 
                sx={{ 
                  display: 'flex', 
                  gap: 2, 
                  mb: 4,
                  justifyContent: 'flex-end',
                  width: '100%'
                }}
                style={{textAlign: 'right'}}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={RouterLink}
                  to="/contact"
                  startIcon={<TouchAppIcon />}
                >
                  צור קשר
                </Button>
                
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  component="a"
                  href={`tel:${contactData.phone}`}
                  startIcon={<CallIcon />}
                >
                  התקשר עכשיו
                </Button>
              </Box>
            </Box>
            
            {/* Image - must appear visually LEFT in RTL */}
            <Box 
              sx={{ 
                flex: '1 1 50%', 
                order: { xs: 2, md: 2 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Box
                sx={{ 
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                  width: '100%',
                  height: { xs: 300, md: 400 },
                }}
              >
                <Box
                  component="img"
                  src={serviceImage}
                  alt={service.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </Box>
            </Box>
          </Box>
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