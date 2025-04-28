import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import ServicePageComponent from '../components/ServicePage';
import CallToAction from '../components/CallToAction';
import { getServiceBySlug } from '../data/services';

const ServicePage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  // Debug which service is being rendered
  console.log('ServicePage wrapper received slug:', slug);
  console.log('ServicePage wrapper found service:', service ? {
    id: service.id,
    title: service.title,
    slug: service.slug
  } : 'No service data');

  return (
    <Box>
      <ServicePageComponent service={service} />
      
      {/* Add a custom CallToAction */}
      <CallToAction 
        title={service ? `בואו נארגן לכם ${service.title} בלתי נשכח` : "בואו נארגן לכם אירוע בלתי נשכח"}
        subtitle="צרו איתנו קשר היום ונהפוך את החלום שלכם למציאות"
        buttonText="לייעוץ חינם עכשיו"
        showWhatsApp={true}
        showPhone={true}
      />
    </Box>
  );
};

export default ServicePage; 