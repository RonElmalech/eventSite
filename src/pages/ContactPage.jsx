import { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  TextField, 
  Button, 
  Paper,
  Card,
  CardContent,
  Snackbar,
  Alert,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  alpha,
  Stack,
  useTheme
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { contactData, servicesData } from '../data/cmsData';
import logoImage from '../assets/images/לוגו עם סלוגן.png';
import heroBackground from '../assets/images/pexels-minan1398-752842.jpg';

const ContactPage = () => {
  // Simulate data loading from CMS
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: 'success',
    message: ''
  });

  useEffect(() => {
    // This would be replaced with an actual API call in production
    const fetchData = () => {
      // Simulating API call delay
      setTimeout(() => {
        setData({
          contact: contactData,
          services: servicesData.services
        });
        setLoading(false);
      }, 300);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.firstName.trim()) {
      errors.firstName = 'שדה חובה';
    }
    
    if (!formData.lastName.trim()) {
      errors.lastName = 'שדה חובה';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'שדה חובה';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'כתובת אימייל לא תקינה';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'שדה חובה';
    } else if (!/^0\d{8,9}$/.test(formData.phone.replace(/[-\s]/g, ''))) {
      errors.phone = 'מספר טלפון לא תקין';
    }
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setSnackbar({
        open: true,
        severity: 'success',
        message: 'הטופס נשלח בהצלחה! נחזור אליך בהקדם.'
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 500);
    
    // In a real app, you would submit the form data to your backend:
    // 
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   const data = await response.json();
    //   if (data.success) {
    //     setSnackbar({
    //       open: true,
    //       severity: 'success',
    //       message: 'הטופס נשלח בהצלחה! נחזור אליך בהקדם.'
    //     });
    //     // Reset form
    //     setFormData({...});
    //   } else {
    //     throw new Error(data.message);
    //   }
    // } catch (error) {
    //   setSnackbar({
    //     open: true,
    //     severity: 'error',
    //     message: 'שגיאה בשליחת הטופס, אנא נסה שוב.'
    //   });
    //   console.error('Error submitting form:', error);
    // }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

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
              
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="שם פרטי"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      margin="normal"
                      error={!!formErrors.firstName}
                      helperText={formErrors.firstName}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                        '& label.Mui-focused': {
                          color: 'primary.main',
                        },
                      }}
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="שם משפחה"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      margin="normal"
                      error={!!formErrors.lastName}
                      helperText={formErrors.lastName}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                        '& label.Mui-focused': {
                          color: 'primary.main',
                        },
                      }}
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="אימייל"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      margin="normal"
                      error={!!formErrors.email}
                      helperText={formErrors.email}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                        '& label.Mui-focused': {
                          color: 'primary.main',
                        },
                      }}
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="טלפון"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      margin="normal"
                      error={!!formErrors.phone}
                      helperText={formErrors.phone}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                        '& label.Mui-focused': {
                          color: 'primary.main',
                        },
                      }}
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <FormControl fullWidth margin="normal">
                      <InputLabel>שירות מבוקש</InputLabel>
                      <Select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        label="שירות מבוקש"
                        sx={{
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'primary.main',
                          },
                        }}
                      >
                        <MenuItem value="">
                          <em>בחר שירות</em>
                        </MenuItem>
                        {data.services.map((service) => (
                          <MenuItem key={service.id} value={service.id}>
                            {service.title}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="הודעה"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      margin="normal"
                      multiline
                      rows={4}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                        '& label.Mui-focused': {
                          color: 'primary.main',
                        },
                      }}
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Button 
                      type="submit" 
                      variant="contained" 
                      color="secondary" 
                      size="large" 
                      fullWidth
                      sx={{ mt: 2, py: 1.5 }}
                    >
                      שלח
                    </Button>
                  </Grid>
                </Grid>
              </form>
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
        
        {/* Snackbar for form submission feedback */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={handleCloseSnackbar} 
            severity={snackbar.severity}
            sx={{
              backgroundColor: snackbar.severity === 'success' ? 'secondary.main' : 'error.main',
              color: 'white'
            }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default ContactPage; 