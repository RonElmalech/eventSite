import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, CircularProgress } from '@mui/material';
import ServicePage from '../../components/ServicePage';
import CallToAction from '../../components/CallToAction';
import { getServiceForRoute } from '../../utils/debugServices';

const WeddingPage = () => {
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get wedding service using our route mapping utility
    const weddingService = getServiceForRoute('wedding');
    
    if (weddingService) {
      setService(weddingService);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
          <CircularProgress color="secondary" />
        </Box>
      </Container>
    );
  }

  if (!service) {
    return (
      <Container>
        <Box sx={{ py: 8, textAlign: 'center' }}>
          <Typography variant="h4" color="error">
            שירות לא נמצא
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            מצטערים, לא הצלחנו למצוא את שירות החתונות.
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Box>
      <ServicePage service={service} />
      
      {/* Add a custom CallToAction */}
      <CallToAction 
        title="בואו נארגן לכם חתונה בלתי נשכחת"
        subtitle="צרו איתנו קשר היום ונהפוך את החלום שלכם למציאות"
        buttonText="לייעוץ חינם עכשיו"
        showWhatsApp={true}
        showPhone={true}
      />
    </Box>
  );
};

export default WeddingPage; 