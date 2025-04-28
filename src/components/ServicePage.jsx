import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Button, 
  Paper,
  Card,
  CardContent,
  Divider,
  useTheme,
  useMediaQuery,
  IconButton
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { contactData } from '../data/cmsData';
// Import available images directly
import weddingImg from '../assets/images/pexels-minan1398-752842.jpg';
import barmitzvahImg from '../assets/images/pexels-pixabay-265722.jpg';
import hennaImg from '../assets/images/pexels-emma-bauso-1183828-2253870.jpg';

// Wrap MUI components with motion
const MotionBox = motion(Box);
const MotionPaper = motion(Paper);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionContainer = motion(Container);
const MotionCard = motion(Card);

// Map of service slugs to actual images 
const serviceImages = {
  'חתונות': weddingImg,
  'בר-מצווה': barmitzvahImg,
  'חינה': hennaImg,
  'ימי-הולדת': hennaImg,
  'ברית': barmitzvahImg,
  'אירועים-עסקיים': weddingImg,
};

// Sample packages data
const packagesData = {
  'חתונות': [
    {
      name: "חבילה בסיסית",
      price: 4500,
      features: [
        "תכנון וליווי אישי",
        "DJ מקצועי",
        "צלם סטילס",
        "עמדת צילום בסיסית"
      ]
    },
    {
      name: "חבילה פרימיום",
      price: 7800,
      features: [
        "כל מה שבחבילה הבסיסית",
        "צלם וידאו",
        "צלם מגנטים",
        "קיר צילום מעוצב",
        "שולחן ממתקים"
      ]
    },
    {
      name: "חבילה הכל כלול",
      price: 12500,
      features: [
        "כל מה שבחבילה הפרימיום",
        "מתופפים לקבלת פנים",
        "הסעות",
        "נגן בוזוקי לקבלת פנים",
        "אמן חושים"
      ]
    }
  ],
  'בר-מצווה': [
    {
      name: "חבילה בסיסית",
      price: 3800,
      features: [
        "תכנון וליווי אישי",
        "DJ מקצועי",
        "צלם סטילס",
        "עמדת צילום"
      ]
    },
    {
      name: "חבילה פרימיום",
      price: 6500,
      features: [
        "כל מה שבחבילה הבסיסית",
        "צלם וידאו",
        "אטרקציה לבחירה",
        "עמדת מגנטים",
        "שולחן ממתקים"
      ]
    },
    {
      name: "חבילה הכל כלול",
      price: 9500,
      features: [
        "כל מה שבחבילה הפרימיום",
        "הפעלה חווייתית",
        "הגברה ותאורה",
        "עיצוב מקום האירוע",
        "הכנת מצגת מושקעת"
      ]
    }
  ],
  'חינה': [
    {
      name: "חבילה בסיסית",
      price: 4000,
      features: [
        "תכנון וליווי אישי",
        "תלבושות מסורתיות",
        "אמנית חינה",
        "צלם סטילס"
      ]
    },
    {
      name: "חבילה פרימיום",
      price: 6000,
      features: [
        "כל מה שבחבילה הבסיסית",
        "נגנים מסורתיים",
        "צלם וידאו",
        "עיצוב ייחודי למקום",
        "ריקודים מסורתיים"
      ]
    },
    {
      name: "חבילה הכל כלול",
      price: 8500,
      features: [
        "כל מה שבחבילה הפרימיום",
        "מופע מסורתי מיוחד",
        "הגברה ותאורה מקצועית",
        "כיבוד מסורתי",
        "עמדת צילום בסגנון מסורתי"
      ]
    }
  ]
};

// Get default packages for any service type
const getDefaultPackages = () => [
  {
    name: "חבילה בסיסית",
    price: 4000,
    features: [
      "תכנון וליווי אישי",
      "שירות מקצועי",
      "צילום מקצועי",
      "עיצוב בסיסי"
    ]
  },
  {
    name: "חבילה פרימיום",
    price: 6000,
    features: [
      "כל מה שבחבילה הבסיסית",
      "שירותים מורחבים",
      "מגוון אטרקציות",
      "עיצוב מורחב",
      "שירותים נוספים"
    ]
  },
  {
    name: "חבילה הכל כלול",
    price: 9000,
    features: [
      "כל מה שבחבילה הפרימיום",
      "חבילה מלאה",
      "שירות VIP",
      "כל האטרקציות",
      "הפתעות מיוחדות"
    ]
  }
];

const ServicePage = ({ service }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activePackage, setActivePackage] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  
  // Debug which service is being rendered
  console.log('ServicePage component received service:', service ? {
    id: service.id,
    title: service.title,
    slug: service.slug
  } : 'No service data');
  
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

  // Get the service packages or default if not found
  const servicePackages = packagesData[service.slug] || getDefaultPackages();
  
  // Get service images
  const isWedding = service.id === 1 || service.title === "חתונות";
  const serviceImage = serviceImages[service.slug] || weddingImg;
  
  // Create an array of images for gallery
  const imageGallery = [
    serviceImage,
    isWedding ? barmitzvahImg : serviceImage,
    isWedding ? hennaImg : serviceImage
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10
      } 
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8
      }
    }
  };

  const changeImage = (direction) => {
    if (direction === 'next') {
      setImageIndex((prev) => (prev === imageGallery.length - 1 ? 0 : prev + 1));
    } else {
      setImageIndex((prev) => (prev === 0 ? imageGallery.length - 1 : prev - 1));
    }
  };

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Banner with Image Gallery */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        sx={{
          position: 'relative',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${imageGallery[imageIndex]})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          height: { xs: '70vh', md: '80vh' },
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          overflow: 'hidden'
        }}
      >
        {/* Image navigation controls */}
        <IconButton 
          sx={{ 
            position: 'absolute', 
            left: 20, 
            top: '50%', 
            transform: 'translateY(-50%)',
            color: 'white',
            bgcolor: 'rgba(0,0,0,0.3)',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' }
          }}
          onClick={() => changeImage('prev')}
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowBackIcon fontSize="large" />
        </IconButton>
        
        <IconButton 
          sx={{ 
            position: 'absolute', 
            right: 20, 
            top: '50%', 
            transform: 'translateY(-50%)',
            color: 'white',
            bgcolor: 'rgba(0,0,0,0.3)',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' }
          }}
          onClick={() => changeImage('next')}
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowForwardIcon fontSize="large" />
        </IconButton>

        <MotionContainer
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Box sx={{ maxWidth: 700 }}>
            <MotionTypography 
              variant="h2" 
              component="h1" 
              variants={itemVariants}
              sx={{ 
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                mb: 2
              }}
            >
              {service.title}
            </MotionTypography>
            
            <MotionTypography 
              variant="h5" 
              variants={itemVariants}
              sx={{ 
                mb: 5,
                textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
              }}
            >
              {service.subtitle || service.shortDescription || "שירות מקצועי ואיכותי המותאם במיוחד לצרכים שלכם"}
            </MotionTypography>
            
            <Box 
              component={motion.div}
              variants={itemVariants}
              sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 2 
              }}
            >
              <MotionButton 
                component={RouterLink} 
                to="/contact" 
                variant="contained" 
                color="secondary" 
                size="large"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px 8px 15px rgba(156, 39, 176, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                sx={{ 
                  px: 3, 
                  py: 1.2,
                  fontWeight: 'bold'
                }}
              >
                קבלת הצעת מחיר
              </MotionButton>
              
              <MotionButton 
                component="a" 
                href={`tel:${contactData.phone}`}
                variant="outlined" 
                size="large" 
                startIcon={<CallIcon sx={{ fontSize: 20, color: '#0078FF' }} />}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255,255,255,0.15)'
                }}
                whileTap={{ scale: 0.95 }}
                sx={{ 
                  color: 'white', 
                  borderColor: 'white',
                  '&:hover': { 
                    borderColor: 'white'
                  }
                }}
              >
                {contactData.phone}
              </MotionButton>
            </Box>
          </Box>
        </MotionContainer>
      </MotionBox>

      {/* Packages Section with Animation */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: theme.palette.background.default }}>
        <Container maxWidth="lg">
          <MotionTypography 
            variant="h3" 
            component="h2" 
            align="center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{ 
              fontWeight: 'bold',
              mb: 1,
              color: 'primary.main'
            }}
          >
            החבילות שלנו
          </MotionTypography>
          
          <MotionTypography 
            variant="h6" 
            align="center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            sx={{ 
              mb: 8,
              color: 'text.secondary'
            }}
          >
            בחר את החבילה המושלמת עבורך
          </MotionTypography>
          
          {/* Package Tabs */}
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              mb: 6,
              gap: 2,
              flexWrap: 'wrap'
            }}
          >
            {servicePackages.map((pkg, index) => (
              <MotionButton
                key={index}
                variant={activePackage === index ? "contained" : "outlined"}
                color="primary"
                onClick={() => setActivePackage(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + (index * 0.1), duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{ 
                  px: 3,
                  py: 1.2,
                  borderRadius: 2,
                  fontWeight: activePackage === index ? 'bold' : 'medium'
                }}
              >
                {pkg.name}
              </MotionButton>
            ))}
          </Box>
          
          {/* Active Package Details */}
          <MotionCard
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            elevation={5}
            sx={{ 
              p: { xs: 3, md: 5 }, 
              borderRadius: 4,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background pattern */}
            <Box sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              height: '100%',
              width: '40%',
              background: `linear-gradient(135deg, ${theme.palette.background.default} 25%, transparent 25%) -50px 0,
                linear-gradient(225deg, ${theme.palette.background.default} 25%, transparent 25%) -50px 0,
                linear-gradient(315deg, ${theme.palette.background.default} 25%, transparent 25%),
                linear-gradient(45deg, ${theme.palette.background.default} 25%, transparent 25%)`,
              backgroundSize: '100px 100px',
              backgroundColor: theme.palette.background.paper,
              opacity: 0.05,
              zIndex: 0
            }} />
            
            <Grid container spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
              <Grid item xs={12} md={6}>
                <MotionTypography 
                  variant="h4" 
                  component="h3" 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={activePackage} 
                  sx={{ 
                    fontWeight: 'bold',
                    color: 'primary.main',
                    mb: 1
                  }}
                >
                  {servicePackages[activePackage].name}
                </MotionTypography>
                
                <MotionTypography 
                  variant="h3" 
                  component="div" 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  key={`price-${activePackage}`}
                  sx={{ 
                    mb: 4,
                    color: 'secondary.main',
                    fontWeight: 'bold'
                  }}
                >
                  ₪{servicePackages[activePackage].price.toLocaleString()}
                </MotionTypography>
                
                <Box
                  component={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  key={`features-${activePackage}`}
                >
                  {servicePackages[activePackage].features.map((feature, index) => (
                    <Box 
                      key={index}
                      component={motion.div}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (index * 0.1) }}
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        mb: 2
                      }}
                    >
                      <ThumbUpIcon 
                        color="secondary" 
                        sx={{ mr: 2, fontSize: 20 }} 
                      />
                      <Typography variant="body1">
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                
                <MotionButton 
                  component={RouterLink} 
                  to={`/contact?package=${encodeURIComponent(servicePackages[activePackage].name)}&price=${servicePackages[activePackage].price}`}
                  variant="contained" 
                  color="secondary"
                  size="large"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  key={`button-${activePackage}`}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0px 8px 15px rgba(156, 39, 176, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  startIcon={<TouchAppIcon />}
                  sx={{ 
                    mt: 4,
                    px: 4,
                    py: 1.5,
                    fontWeight: 'bold',
                    borderRadius: 2
                  }}
                >
                  בחר חבילה זו
                </MotionButton>
              </Grid>
              
              <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MotionBox
                  initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  key={`image-${activePackage}`}
                  sx={{ 
                    width: '100%',
                    maxWidth: 400,
                    position: 'relative'
                  }}
                >
                  <Box
                    component="img"
                    src={imageGallery[activePackage % imageGallery.length]}
                    alt={servicePackages[activePackage].name}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 4,
                      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                      transform: 'rotate(2deg)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'rotate(0deg) scale(1.02)'
                      }
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -15,
                      right: -15,
                      bgcolor: 'secondary.main',
                      color: 'white',
                      borderRadius: '50%',
                      width: 80,
                      height: 80,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      boxShadow: 2,
                      transform: 'rotate(-5deg)'
                    }}
                    component={motion.div}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 10,
                      delay: 0.4
                    }}
                  >
                    <Typography variant="caption" sx={{ fontSize: '0.7rem' }}>החל מ-</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', lineHeight: 1 }}>
                      ₪{servicePackages[activePackage].price.toLocaleString()}
                    </Typography>
                  </Box>
                </MotionBox>
              </Grid>
            </Grid>
          </MotionCard>
        </Container>
      </Box>

      {/* Contact CTA Section */}
      <Box 
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        sx={{ 
          py: { xs: 8, md: 10 }, 
          backgroundColor: 'primary.main',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background decoration */}
        {[...Array(8)].map((_, i) => (
          <Box
            key={`decoration-${i}`}
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.07 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + (i * 0.1) }}
            sx={{
              position: 'absolute',
              width: 100 + (i * 50),
              height: 100 + (i * 50),
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.1)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
        
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <MotionTypography 
                variant="h3" 
                component="h2" 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                sx={{ 
                  fontWeight: 'bold',
                  mb: 2
                }}
              >
                מוכנים להתחיל?
              </MotionTypography>
              
              <MotionTypography 
                variant="h6" 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                sx={{ mb: 4 }}
              >
                צרו איתנו קשר היום ונהפוך את החלום שלכם למציאות!
              </MotionTypography>
              
              <Box 
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                sx={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: 2 
                }}
              >
                <MotionButton 
                  component={RouterLink} 
                  to="/contact" 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0px 8px 15px rgba(0,0,0,0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  sx={{ 
                    px: 3, 
                    py: 1.5,
                    fontWeight: 'bold'
                  }}
                >
                  צור קשר עכשיו
                </MotionButton>
                
                <MotionButton 
                  component="a" 
                  href={contactData.socialMedia.whatsapp} 
                  variant="outlined" 
                  color="inherit" 
                  size="large"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(255,255,255,0.15)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  startIcon={<WhatsAppIcon sx={{ fontSize: 20, color: '#25D366' }} />}
                  sx={{ 
                    borderColor: 'white',
                    '&:hover': { 
                      borderColor: 'white'
                    }
                  }}
                >
                  WhatsApp
                </MotionButton>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={5}>
              <MotionCard 
                initial={{ opacity: 0, y: 30, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
                sx={{ borderRadius: 3 }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                    יצירת קשר מהירה
                  </Typography>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                      טלפון:
                    </Typography>
                    
                    <MotionButton 
                      component="a" 
                      href={`tel:${contactData.phone}`}
                      variant="text" 
                      color="primary" 
                      startIcon={<CallIcon sx={{ fontSize: 18, color: '#0078FF' }} />}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      sx={{ ml: -1 }}
                    >
                      {contactData.phone}
                    </MotionButton>
                  </Box>
                  
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                      WhatsApp:
                    </Typography>
                    
                    <MotionButton 
                      component="a" 
                      href={contactData.socialMedia.whatsapp} 
                      variant="text" 
                      color="primary" 
                      startIcon={<WhatsAppIcon sx={{ fontSize: 18, color: '#25D366' }} />}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      sx={{ ml: -1 }}
                    >
                      שלח הודעה
                    </MotionButton>
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicePage; 