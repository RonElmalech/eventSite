import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, CircularProgress } from '@mui/material';
import ServicePage from '../../components/ServicePage';
import CallToAction from '../../components/CallToAction';
import { getServiceForRoute } from '../../utils/debugServices';

const BarmitzvahPage = () => {
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get bar mitzvah service using our route mapping utility
    const barmitzvahService = getServiceForRoute('barmitzvah');
    
    if (barmitzvahService) {
      setService(barmitzvahService);
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
            מצטערים, לא הצלחנו למצוא את שירות בר המצווה.
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
        title="בואו נארגן לכם בר מצווה בלתי נשכח"
        subtitle="צרו איתנו קשר היום ונהפוך את האירוע שלכם למיוחד"
        buttonText="לייעוץ חינם עכשיו"
        showWhatsApp={true}
        showPhone={true}
      />
    </Box>
  );
};

export default BarmitzvahPage; 