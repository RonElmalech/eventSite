import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  IconButton, 
  Divider, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  useTheme
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link as RouterLink } from 'react-router-dom';
import { getAllServices } from '../data/services';
import { contactData } from '../data/cmsData';

const Footer = () => {
  const theme = useTheme();
  const services = getAllServices();
  const currentYear = new Date().getFullYear();
  const logoImage = './assets/logo-with-slogan-transparent.png';

  // Fixed service path mapping to ensure correct routing
  const getServicePath = (service) => {
    const serviceRoutes = {
      'חתונות': '/services/wedding',
      'בר מצווה': '/services/barmitzvah',
      'בת מצווה': '/services/batmitzvah',
      'ברית': '/services/brit',
      'חינה': '/services/henna',
      'ימי הולדת': '/services/birthday',
      'אירועים עסקיים': '/services/business'
    };
    
    return serviceRoutes[service.title] || `/services/${service.slug}`;
  };

  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'primary.dark', 
        color: 'white',
        pt: 6,
        pb: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
              הקסם באירוע
            </Typography>
            <Box>
              <Box component='img'
                sx={{
                  width: { xs: '90%', sm: '60%', md: '80%', lg: '70%' },
                  maxWidth: '300px',
                  height: 'auto'
                }}
                alt="לוגו המייג'יק של האירוע"
                src={logoImage}
              />
            </Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              אנחנו מתמחים בהפקת אירועים מושלמים המותאמים אישית לצרכים והחלומות שלכם.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                href="https://facebook.com" 
                target="_blank"
                aria-label="פייסבוק"
                size="small"
                sx={{ 
                  color: 'white',
                  '&:hover': { 
                    color: '#4267B2',
                    bgcolor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                <FacebookIcon sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton 
                href="https://instagram.com" 
                target="_blank"
                aria-label="אינסטגרם"
                size="small"
                sx={{ 
                  color: 'white',
                  '&:hover': { 
                    color: '#E1306C',
                    bgcolor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                <InstagramIcon sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton 
                href={contactData.socialMedia.whatsapp || "https://wa.me/972501234567"} 
                target="_blank"
                aria-label="וואטסאפ"
                size="small"
                sx={{ 
                  color: 'white',
                  '&:hover': { 
                    color: '#25D366',
                    bgcolor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                <WhatsAppIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>
          </Grid>
          
          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
              השירותים שלנו
            </Typography>
            <List disablePadding>
              {services.map(service => (
                <ListItem 
                  key={service.id} 
                  component={RouterLink} 
                  to={getServicePath(service)}
                  disablePadding
                  sx={{ 
                    color: 'white',
                    textDecoration: 'none',
                    py: 0.5,
                    '&:hover': {
                      color: theme.palette.secondary.light,
                    }
                  }}
                >
                  <Typography variant="body2">
                    {service.title}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
          
          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
              קישורים מהירים
            </Typography>
            <List disablePadding>
              <ListItem 
                component={RouterLink} 
                to="/"
                disablePadding
                sx={{ 
                  color: 'white',
                  textDecoration: 'none',
                  py: 0.5,
                  '&:hover': {
                    color: theme.palette.secondary.light,
                  }
                }}
              >
                <Typography variant="body2">דף הבית</Typography>
              </ListItem>
              <ListItem 
                component={RouterLink} 
                to="/contact"
                disablePadding
                sx={{ 
                  color: 'white',
                  textDecoration: 'none',
                  py: 0.5,
                  '&:hover': {
                    color: theme.palette.secondary.light,
                  }
                }}
              >
                <Typography variant="body2">צור קשר</Typography>
              </ListItem>
              <ListItem 
                component={RouterLink} 
                to="/how-it-works"
                disablePadding
                sx={{ 
                  color: 'white',
                  textDecoration: 'none',
                  py: 0.5,
                  '&:hover': {
                    color: theme.palette.secondary.light,
                  }
                }}
              >
                <Typography variant="body2">איך זה עובד</Typography>
              </ListItem>
            </List>
          </Grid>
          
          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
              צור קשר
            </Typography>
            <List disablePadding>
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 30, color: 'white' }}>
                  <PhoneIcon sx={{ fontSize: 18 }} />
                </ListItemIcon>
                <ListItemText 
                  primary={
                    <Link 
                      href={`tel:${contactData.phone}`} 
                      sx={{ 
                        color: 'white', 
                        textDecoration: 'none',
                        '&:hover': {
                          color: theme.palette.secondary.light,
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      <Typography variant="body2">{contactData.phone}</Typography>
                    </Link>
                  }
                />
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 30, color: 'white' }}>
                  <EmailIcon sx={{ fontSize: 18 }} />
                </ListItemIcon>
                <ListItemText 
                  primary={
                    <Link 
                      href={`mailto:${contactData.email}`} 
                      sx={{ 
                        color: 'white', 
                        textDecoration: 'none',
                        '&:hover': {
                          color: theme.palette.secondary.light,
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      <Typography variant="body2">{contactData.email}</Typography>
                    </Link>
                  }
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: 30, color: 'white' }}>
                  <LocationOnIcon sx={{ fontSize: 18 }} />
                </ListItemIcon>
                <ListItemText 
                  primary={
                    <Typography variant="body2">{contactData.address}</Typography>
                  }
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {currentYear} הקסם באירוע - כל הזכויות שמורות
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 