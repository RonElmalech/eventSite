import { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Paper,
  Card,
  CardContent,
  Snackbar,
  Alert
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { contactData, servicesData } from '../data/cmsData';
import ContactForm from '../components/ContactForm.jsx';

const ContactPage = () => {
  // Simulate data loading from CMS
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const logoImage = './assets/logo-with-slogan.png';
  const heroBackground = './images/services/wedding.jpg';

  useEffect(() => {
    // Instead of simulating API call delay, load data immediately
    setData({
      contact: contactData,
      services: servicesData.services
    });
    setLoading(false);
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
    <Box>
      {/* Hero Banner */}
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${heroBackground})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: { xs: '40vh', md: '50vh' },
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          mb: 6
        }}
      >
        <Container>
          <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              צרו איתנו קשר
            </Typography>
            <Typography variant="h5" sx={{ mb: 4 }}>
              נשמח לענות על כל שאלה ולעזור לכם להפוך את האירוע שלכם למושלם
            </Typography>
          </Box>
        </Container>
      </Box>
      
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 4, 
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '5px',
                  background: (theme) => `linear-gradient(to left, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                }
              }}
            >
              <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'secondary.main' }}>
                טופס יצירת קשר
              </Typography>
              <ContactForm />
            </Paper>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              boxShadow: 3,
              borderRadius: 2,
              overflow: 'hidden',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '5px',
                height: '100%',
                backgroundColor: 'secondary.main'
              }
            }}>
              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
                  <Box
                    component="img"
                    src={logoImage}
                    alt="הקסם באירוע - החגיגה שלכם, הקסם שלנו!"
                    sx={{ height: 80, width: 'auto' }}
                  />
                </Box>
                
                <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main', textAlign: 'center' }}>
                  פרטי התקשרות
                </Typography>
                
                <Box sx={{ mt: 4 }}>
                  <Box sx={{ display: 'flex', mb: 3, alignItems: 'center' }}>
                    <LocationOnIcon sx={{ color: 'secondary.main', fontSize: 24, mr: 2 }} />
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        כתובת
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {data.contact.address}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', mb: 3, alignItems: 'center' }}>
                    <PhoneIcon sx={{ color: 'secondary.main', fontSize: 24, mr: 2 }} />
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        טלפון
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {data.contact.phone}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', mb: 3, alignItems: 'center' }}>
                    <EmailIcon sx={{ color: 'secondary.main', fontSize: 24, mr: 2 }} />
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        אימייל
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {data.contact.email}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                    שעות פעילות
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    ימים א'-ה': 09:00 - 19:00
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    יום ו': 09:00 - 13:00
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage; 