import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  useTheme,
  useMediaQuery,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { homeData, servicesData, contactData } from '../data/cmsData';
import { placeholderImages } from '../utils/placeholder';
import { createServiceSlug } from '../utils/slugify';
import WhyChooseUs from '../components/WhyChooseUs';
import CallToAction from '../components/CallToAction';

// Import icons for services
import CelebrationIcon from '@mui/icons-material/Celebration';
import CakeIcon from '@mui/icons-material/Cake';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MosqueIcon from '@mui/icons-material/Mosque';

// Define image paths directly
const transparentLogo = `${import.meta.env.BASE_URL}assets/logo-with-slogan-transparent.png`;
const weddingImg = `${import.meta.env.BASE_URL}images/services/wedding.jpg`;

// Define services with their icons and paths
const services = [
  {
    id: 'wedding',
    name: 'חתונות',
    description: 'הפכו את היום המיוחד שלכם לחוויה בלתי נשכחת עם כל השירותים במקום אחד',
    icon: <FavoriteIcon />,
    image: `${import.meta.env.BASE_URL}images/services/wedding.jpg`,
    path: '/services/wedding'
  },
  {
    id: 'barmitzvah',
    name: 'בר מצווה',
    description: 'חגיגה מושלמת לציון אבן דרך משמעותית בחייו של הילד',
    icon: <GroupsIcon />,
    image: `${import.meta.env.BASE_URL}images/services/barmitzvah.jpg`,
    path: '/services/barmitzvah'
  },
  {
    id: 'batmitzvah',
    name: 'בת מצווה',
    description: 'אירוע מיוחד עם טאץ׳ אישי לציון הפיכתה של הילדה לנערה',
    icon: <CelebrationIcon />,
    image: `${import.meta.env.BASE_URL}images/services/barmitzvah.jpg`, // Using bar mitzvah image as placeholder
    path: '/services/batmitzvah'
  },
  {
    id: 'brit',
    name: 'ברית',
    description: 'אירוע משפחתי חם ומשמח לציון ברית המילה',
    icon: <ChildCareIcon />,
    image: `${import.meta.env.BASE_URL}images/services/brit.jpg`,
    path: '/services/brit'
  },
  {
    id: 'henna',
    name: 'חינה',
    description: 'שמרו על מסורת עם אירוע חינה צבעוני ועשיר בתרבות',
    icon: <MosqueIcon />,
    image: `${import.meta.env.BASE_URL}images/services/henna.jpg`,
    path: '/services/henna'
  },
  {
    id: 'birthday',
    name: 'ימי הולדת',
    description: 'חגיגת יום הולדת מלאת שמחה והפתעות לכל גיל',
    icon: <CakeIcon />,
    image: `${import.meta.env.BASE_URL}images/services/birthday.jpg`,
    path: '/services/birthday'
  },
  {
    id: 'business',
    name: 'אירועים עסקיים',
    description: 'כנסים, ימי גיבוש ואירועי חברה ברמה מקצועית גבוהה',
    icon: <WorkIcon />,
    image: `${import.meta.env.BASE_URL}images/services/business.jpg`,
    path: '/services/business'
  }
];

// Preload all images used on the page
const preloadHomeImages = () => {
  const images = [
    transparentLogo,
    weddingImg,
    // Add all service images to preload
    ...services.map(service => service.image)
  ];
  
  images.forEach(src => {
    const img = new Image();
    img.src = src;
    // Set priority to high for faster loading
    img.fetchPriority = 'high';
    img.loading = 'eager';
  });
};

// Immediately preload images
preloadHomeImages();

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box style={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      <Box>
        <Box
          sx={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${weddingImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: { xs: '70vh', md: '80vh' },
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center'
          }}
        >
          <Container maxWidth="lg">
            <Box py={4}>
              <Typography 
                variant="h1" 
                component="h1" 
                gutterBottom 
                sx={{ 
                  fontWeight: 'bold', 
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  mb: 2,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}
              >
                כל בעלי המקצוע לאירוע מושלם במקום אחד!
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4, 
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}
              >
                {homeData.hero.subtitle}
              </Typography>
              <Button 
                variant="contained" 
                color="secondary" 
                size="large"
                component={RouterLink}
                to="/contact"
                sx={{ 
                  px: 4, 
                  py: 1.5, 
                  borderRadius: 2,
                  fontWeight: 'bold',
                  boxShadow: 3
                }}
              >
                צור קשר עכשיו
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Services Section */}
      <Box 
        sx={{ 
          py: { xs: 8, md: 10 }, 
          backgroundColor: 'white',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            backgroundImage: 'linear-gradient(to right, #3b41c5 0%, #a981bb 49%, #ffc8a9 100%)',
          }
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                fontWeight: 'bold',
                color: 'primary.main',
                mb: 2,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              השירותים שלנו
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                maxWidth: 700, 
                mx: 'auto', 
                color: 'text.secondary',
                mb: 1
              }}
            >
              מגוון פתרונות מקצועיים לכל סוגי האירועים
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {services.map(service => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 20px rgba(0,0,0,0.15)',
                    }
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="180"
                      image={service.image}
                      alt={service.name}
                      sx={{ 
                        objectFit: 'cover',
                      }}
                    />
                    {/* Gradient overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '40%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                      }}
                    />
                    {/* Service title over image */}
                    <Box 
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: 2,
                        textAlign: 'left',
                        width: '100%'
                      }}
                    >
                      <Typography
                        variant="h5"
                        component="h3"
                        align="left"
                        sx={{
                          color: 'white',
                          fontWeight: 600,
                          textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
                          display: 'inline-block'
                        }}
                      >
                        {service.name}
                      </Typography>
                    </Box>
                    {/* Icon badge */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        borderRadius: '50%',
                        padding: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                        width: 40,
                        height: 40,
                        zIndex: 1
                      }}
                    >
                      {React.cloneElement(service.icon, { 
                        sx: { color: 'secondary.main', fontSize: 24 } 
                      })}
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, pt: 2.5 }}>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ lineHeight: 1.6 }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0, justifyContent: 'center' }}>
                    <Button 
                      fullWidth
                      component={RouterLink} 
                      to={service.path}
                      variant="contained"
                      color="primary"
                      sx={{
                        py: 1,
                        borderRadius: 2,
                        fontWeight: 500,
                        boxShadow: 'none',
                        '&:hover': {
                          boxShadow: '0 4px 8px rgba(57, 84, 204, 0.3)',
                        }
                      }}
                    >
                      פרטים נוספים
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Contact CTA Section */}
      <Box>
        <Box 
          sx={{ 
            py: { xs: 8, md: 10 }, 
            backgroundColor: 'primary.main',
            color: 'white',
            textAlign: 'center'
          }}
        >
          <Container maxWidth="md">
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom 
              sx={{ fontWeight: 'bold' }}
            >
              מוכנים להפוך את החלום שלכם למציאות?
            </Typography>
            
            <Typography 
              variant="h5" 
              sx={{ mb: 5, maxWidth: 800, mx: 'auto', fontWeight: 'normal' }}
            >
              הקסם באירוע - כל מה שאתם צריכים לאירוע מושלם במקום אחד
            </Typography>
            
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              component={RouterLink}
              to="/contact"
              sx={{ 
                px: 4, 
                py: 1.5, 
                borderRadius: 2,
                fontWeight: 'bold',
                boxShadow: 3
              }}
            >
              צור קשר עכשיו
            </Button>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage; 