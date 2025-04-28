'use client';

import { useState, useEffect } from 'react';
import { 
  TextField, 
  Button, 
  Grid, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  FormHelperText,
  Alert,
  CircularProgress,
  Box,
  Typography,
  Paper,
  Chip
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import { getAllServices } from '../data/services';

export default function ContactForm() {
  const services = getAllServices();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const location = useLocation();
  const [packageInfo, setPackageInfo] = useState(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    eventDate: '',
    package: '',
    packagePrice: '',
    message: ''
  });
  
  // Validation state
  const [errors, setErrors] = useState({});
  
  // Parse URL parameters when component loads
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const packageName = queryParams.get('package');
    const packagePrice = queryParams.get('price');
    const selectedServices = queryParams.get('services');
    
    if (packageName) {
      // Auto-select service based on the page they came from
      let autoSelectedService = '';
      if (location.pathname.includes('/services/')) {
        const servicePath = location.pathname.split('/services/')[1];
        
        // Map path to service ID
        const serviceMap = {
          'wedding': 1,
          'barmitzvah': 2,
          'batmitzvah': 7,
          'brit': 5,
          'henna': 3,
          'birthday': 4,
          'business': 6
        };
        
        autoSelectedService = serviceMap[servicePath] || '';
      }
      
      setFormData(prev => ({
        ...prev,
        service: autoSelectedService,
        package: packageName,
        packagePrice: packagePrice || ''
      }));
      
      if (packageName === 'custom' && selectedServices) {
        setPackageInfo({
          name: 'חבילה מותאמת אישית',
          price: packagePrice,
          services: selectedServices.split(',')
        });
      } else {
        setPackageInfo({
          name: packageName,
          price: packagePrice,
          services: []
        });
      }
    }
  }, [location]);
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };
  
  // Validate form data
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'שם הוא שדה חובה';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'אימייל הוא שדה חובה';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'כתובת אימייל לא תקינה';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'טלפון הוא שדה חובה';
    } else if (!/^0\d{8,9}$/.test(formData.phone.replace(/[-\s]/g, ''))) {
      newErrors.phone = 'מספר טלפון לא תקין';
    }
    
    if (!formData.service) {
      newErrors.service = 'נא לבחור סוג אירוע';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes - actual implementation would post to an API endpoint
      console.log('Form submitted with:', formData, packageInfo);
      
      // Success
      setSubmitStatus({
        type: 'success',
        message: 'הטופס נשלח בהצלחה! ניצור איתך קשר בהקדם.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        eventDate: '',
        package: '',
        packagePrice: '',
        message: ''
      });
      
      setPackageInfo(null);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'אירעה שגיאה בעת שליחת הטופס. אנא נסו שנית או צרו קשר ישירות.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} noValidate>
      <Grid container spacing={3}>
        {submitStatus && (
          <Grid item xs={12}>
            <Alert 
              severity={submitStatus.type} 
              sx={{ mb: 2 }}
              onClose={() => setSubmitStatus(null)}
            >
              {submitStatus.message}
            </Alert>
          </Grid>
        )}
        
        {packageInfo && (
          <Grid item xs={12}>
            <Paper 
              elevation={1} 
              sx={{ 
                p: 2, 
                mb: 3, 
                border: '1px solid',
                borderColor: 'primary.main',
                bgcolor: 'rgba(0, 123, 255, 0.05)'
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                {packageInfo.name} {packageInfo.price && `- ₪${packageInfo.price}`}
              </Typography>
              
              {packageInfo.services && packageInfo.services.length > 0 && (
                <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {packageInfo.services.map((service, index) => (
                    <Chip 
                      key={index} 
                      label={service} 
                      size="small" 
                      color="primary" 
                      variant="outlined" 
                    />
                  ))}
                </Box>
              )}
            </Paper>
          </Grid>
        )}
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="שם מלא"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            disabled={isSubmitting}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="טלפון"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
            disabled={isSubmitting}
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="אימייל"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            disabled={isSubmitting}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth error={!!errors.service} disabled={isSubmitting}>
            <InputLabel id="service-label">סוג אירוע</InputLabel>
            <Select
              labelId="service-label"
              name="service"
              value={formData.service}
              onChange={handleChange}
              label="סוג אירוע"
            >
              <MenuItem value="" disabled>
                <em>בחר סוג אירוע</em>
              </MenuItem>
              {services.map((service) => (
                <MenuItem key={service.id} value={service.id}>
                  {service.title}
                </MenuItem>
              ))}
            </Select>
            {errors.service && <FormHelperText>{errors.service}</FormHelperText>}
          </FormControl>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="תאריך האירוע (אם ידוע)"
            name="eventDate"
            type="date"
            value={formData.eventDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            disabled={isSubmitting}
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="הודעה"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder={packageInfo ? "שאלות או בקשות נוספות לגבי החבילה המבוקשת" : "הודעה"}
            disabled={isSubmitting}
          />
        </Grid>
        
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            disabled={isSubmitting}
            sx={{ 
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              mt: 1
            }}
          >
            {isSubmitting ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CircularProgress size={24} color="inherit" sx={{ mr: 1 }} />
                שולח...
              </Box>
            ) : 'שליחת טופס'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
} 